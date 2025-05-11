// lib/auth/options.ts
import { AuthOptions, User } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: "user" | "admin";
    username?: string;
  }

  interface Session {
    user: {
      id?: string;
      role?: "user" | "admin";
      username?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface JWT {
    id?: string;
    role?: "user" | "admin";
    username?: string;
  }

}
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, createUser, validateUserCredentials } from "@/helpers/db/authHelper";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials.password) return null;

        const user = await validateUserCredentials(credentials.email, credentials.password);
        if (!user) return null;

        return {
          id: user.id,
          email: user.email,
          username: user.username || undefined, 
          role: user.role as "user" | "admin",
        };
      }
    })
  ],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        let userInDb  = await getUserByEmail(profile.email);
        
        // sign in with google lai no signup required, so create if not exists
        if (!userInDb) {
          userInDb = await createUser({
            email: profile.email,
            username: profile.name || profile.email.split("@")[0], //if there is no name then use the email as username excluding domain part
            password: null, // google users have no password
            role: "user"    // default role
          });
        }

        token.id = userInDb?.id;
        token.role = userInDb?.role;
        token.username = userInDb?.username;
      }

      
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }

      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "admin" | "user";
        session.user.username = token.username as string;
      }
      return session;
    }
  },

  pages: {
    signIn: "/auth/login"
  },

  session: {
    strategy: "jwt"
  },

  secret: process.env.NEXTAUTH_SECRET
};
