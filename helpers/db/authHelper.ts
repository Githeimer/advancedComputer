import { prisma } from "@/lib/prisma";
import { User} from "@prisma/client";

import bcrypt from "bcryptjs";


export const getUserByEmail = async (email: string):Promise<User|null>  => {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    return user;
    }

export const createUser = async (userData:{
    email: string;
    username: string;
    password: string | null;
    role: "admin" | "user";
}):Promise<User|null> => {
    const { email, username, password, role } = userData;

    let hashedPassword = password;
    if(password){
         hashedPassword = await bcrypt.hash(password, 10);
        
    }
    
    const user = await prisma.user.create({
        data: {
            email,
            username,
            password: hashedPassword,
            role
        }
    });
    return user;
}

export const validateUserCredentials = async (email: string, password: string): Promise<User|null> => {
    const user = await prisma.user.findUnique({
        where: { email }
    });

    

    if (!user) return null;

    if(user.role == "admin") {
        const isValidPasswordforAdmin = password === user.password ? true : false;
        if (!isValidPasswordforAdmin) return null;
    }
    else{
        const isValidPasswordforUser = await bcrypt.compare(password, user.password || "");

    if (!isValidPasswordforUser) return null;
    }

    

    return user;
}
