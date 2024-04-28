
import { db } from "@/lib/db";
import { createCallsSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  
  const { time, duration, satisfaction, scriptlink, userId } = await createCallsSchema.parse(body);

  const lastCall = await db.call.findFirst({
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  let nextIdNumber = 1; // Default if there are no calls yet
  if (lastCall && lastCall.id.startsWith('Call-')) {
    // Extract the number part of the ID and increment it
    const lastIdNumber = parseInt(lastCall.id.split('-')[1]);
    if (!isNaN(lastIdNumber)) {
      nextIdNumber = lastIdNumber + 1;
    }
  }

  // Combine "Call-" with the new incremented number
  const newCallId = `Call-${nextIdNumber}`;

  try {
    const response = await db.call.create({
      data: {
        id: newCallId,
        userId,
        time,
        duration,
        satisfaction,
        scriptlink
      }
    });

    return NextResponse.json(
      { Data: response, message: "Recorded  Successfully" },
      { status: 200 }
    );
  } catch(error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
