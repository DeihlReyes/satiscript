import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare, hash } from "bcrypt";
import { signinSchema } from "@/lib/validation";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function PATCH(req: Request) {
  const { emotion } = await req.json();
  
  try {
    const esp = await db.espware.update(
      {
        where: { id: "thisisid" },
        data: {
          emotion,
        },
      }
    )

    return NextResponse.json(
      { Esp_Data: esp, message: "Extraction Successfull" },
      { status: 200 }
    );
  } catch(error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
