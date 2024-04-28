// make this a update user api

import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { detailsSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return new Response(null, { status: 401 });
    }
    const body = await req.json();

    const { firstName, lastName, username } = detailsSchema.parse(body);
    // check if the user exist
    const user = await db.user.findUnique({
      where: { id: session.user },
    });

    if (!user) {
      return new Response(null, { status: 404 });
    }

    // update the user details
    const response = await db.user.update({
      where: { id: session.user },
      data: {
        firstName: firstName,
        lastName: lastName,
        username: username,
      },
    });

    return NextResponse.json(
      { response: response, message: "User details Successfully Updated" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}