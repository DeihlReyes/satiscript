import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { espKeySchema } from "@/lib/validation";

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    console.log(body)

    const { userId, espKey } = espKeySchema.parse(body);

    console.log(userId)
    console.log(espKey)

    const user = await db.user.update({
      where: { id: userId },
      data: {
        espKey: espKey
      }
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { Response: user, message: "Extraction Successfull" },
      { status: 200 }
    );
  } catch(error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
