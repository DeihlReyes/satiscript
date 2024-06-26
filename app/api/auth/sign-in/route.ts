import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare, hash } from "bcrypt";
import { signinSchema } from "@/lib/validation";
import { encrypt } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = signinSchema.parse(body);
     
    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    console.log('Error in prisma');

    if (!existingUser) {
      return NextResponse.json(
        { user: null, message: "User not found" },
        { status: 404 }
      );
    }

    const user = existingUser.id;

    const passwordMatch = await compare(password, existingUser.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { user: null, message: "Wrong Password" },
        { status: 401 }
      );
    }

    const expires = new Date(Date.now() + 12 * 60 * 60 * 1000);
    const session = await encrypt({ user, expires });
    
    cookies().set("session", session, { expires, httpOnly: true });

    const response = await db.user.update({
      where: { id: user },
      data: { token: session },
    });

    
    const userDetails = {
      id: existingUser.id,
      name: existingUser.firstName + " " + existingUser.lastName,
      espKey: existingUser.espKey,
    }

    return NextResponse.json(
      { user: userDetails, response: response, message: "Login Successfull" },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
