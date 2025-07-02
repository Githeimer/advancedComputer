import prisma from "@/lib/prisma";

export const getAllCategories = async () => {
    try {
        const categories = await prisma.category.findMany();
        console.log("Fetched categories:", categories);
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw new Error("Failed to fetch categories");
    }
}

export const postCategory = async(categoryData:{name:string, description:string}) =>
{
    try{
        const {name, description}= categoryData;

        //this slug will be used to create a unique URL for the category if needed
        const slug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric except spaces and hyphens
            .replace(/\s+/g, '-')         // replace spaces with hyphens
            .replace(/-+/g, '-')          // collapse multiple hyphens
            .replace(/^-+|-+$/g, '');     // trim hyphens from start/end
        
        const category= await prisma.category.create({
            data: {
                name,
                description,
                slug
            }
        })

        return category;
    }
    catch (error) {
        console.error("Error posting category:", error);
        throw new Error("Failed to post category");
    }
}

export const deleteCategory = async (id: number) => {
    try {
        const deletedCategory = await prisma.category.delete({
            where: { id }
        });
        return deletedCategory;
    } catch (error) {
        console.error("Error deleting category:", error);
        throw new Error("Failed to delete category");
    }
}

export const updateCategory = async (categoryData:{id:number,name:string,description:string}) => {
    try {
        const {id,name,description}=categoryData;
        const updatedCategory= await prisma.category.update({
            where :{id},
            data:{name:name,description:description}
        })
        return updatedCategory;

    } catch (error) {
        console.error("Error updating Category",error)
        throw new Error("Failed to update Category");
    }
}