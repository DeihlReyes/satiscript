// make this a update user api

import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { passwordSchema } from "@/lib/validation";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return new Response(null, { status: 401 });
    }

    const body = await req.json();

    const { newPassword } = passwordSchema.parse(body);

    const user = await db.user.findUnique({
      where: { id: session.user },
    });

    if (!user) {
      return new Response(null, { status: 404 });
    }

    const hashedPassword = await hash(newPassword, 10);

    const response = await db.user.update({
      where: { id: session.user },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { response: response, message: "User Password Successfully Updated" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}