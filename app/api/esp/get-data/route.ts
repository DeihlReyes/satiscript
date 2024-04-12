import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare, hash } from "bcrypt";
import { signinSchema } from "@/lib/validation";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  try {
    const esp = await db.espware.findFirst()

    return NextResponse.json(
      { Esp_Data: esp, message: "Extraction Successfull" },
      { status: 201 }
    );
  } catch(error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
    
}
