import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { regSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, username, email, password } = regSchema.parse(body);

    const existingEmail = await db.user.findUnique({
      where: { email: email },
    });

    const existingUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingEmail || existingUsername) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        espKey: "Empty",
        password: hashedPassword,
      },
    });

    console.log(newUser)

    // Create Espware instance for the new user
    return NextResponse.json(
      { user: newUser, message: "User Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
