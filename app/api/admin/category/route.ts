import { NextResponse,NextRequest } from "next/server";
import { getAllCategories, postCategory, updateCategory, deleteCategory } from "@/helpers/db/categoryDb";
import { apiHandler } from "@/lib/apiWrapper";


export const GET= apiHandler(async (req: NextRequest) => {
    const categories = await getAllCategories();

    return NextResponse.json({ success: true, data: categories },{status:200});
});

export const POST = apiHandler( async (req:NextRequest)=>{
    const body = await req.json();
    console.log("Received category data:", body);

    const categoryData= body.categoryData;

    if(!categoryData.name )
        {
            throw new Error("Category name is required");
        } 

    const category = await postCategory(categoryData);

    
    return NextResponse.json({ success: true, data: category }, { status: 201 });
})

export const PATCH= apiHandler(async(req:NextRequest)=>{
    const body= await req.json();
    const updatedCategoryData= body.categoryData;

    if(!updatedCategoryData.name|| !updatedCategoryData.description || !updatedCategoryData.id)
    {
        throw new Error("Required Fields Missing");
    }

    const updatedData= await updateCategory(updatedCategoryData)

     return NextResponse.json({ success: true, data: updatedData },{status:200});
})

export const DELETE = apiHandler(async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const id =Number( searchParams.get("id"));

    if (!id) {
        throw new Error("Category id is required");
    }

    await deleteCategory(id);

    return NextResponse.json({ success: true, message: `Category with id ${id} deleted.` }, { status: 200 });
});
