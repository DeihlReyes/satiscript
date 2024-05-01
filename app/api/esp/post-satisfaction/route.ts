import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare, hash } from "bcrypt";
import { signinSchema } from "@/lib/validation";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function PATCH(req: Request) {
  try {
    const { satisfaction, isCall, espKey } = await req.json();

    const user = await db.user.findUnique({
      where: { espKey: espKey },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const esp = await db.espware.update({
      where: { id: espKey },
      data: {
        satisfaction: satisfaction,
        isCall: isCall
      }
    });

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
