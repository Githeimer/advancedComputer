// utils/apiHandler.ts

import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

/**
 * Wraps your Next.js API handler to catch errors and return
 * consistent JSON responses with proper HTTP status codes.
 */
export function apiHandler(
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (error: any) {
      console.error("API Error:", error);

      let message = "Internal Server Error";
      let status = 500;

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          message = "Data already exists.";
          status = 409;
        } else if (error.code === "P2003") {
          message = "Foreign key constraint failed.";
          status = 400;
        } else {
          message = `Database error: ${error.message}`;
        }
      } else if (error instanceof Prisma.PrismaClientValidationError) {
        message = "Invalid data provided.";
        status = 400;
      } else if (error instanceof Prisma.PrismaClientInitializationError) {
        message = "Database connection failed.";
        status = 503;
      } else if (typeof error.message === "string") {
        message = error.message;
      }

      return NextResponse.json(
        { success: false, error:message },
        { status }
      );
    }
  };
}
