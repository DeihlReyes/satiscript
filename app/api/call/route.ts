
import { db } from "@/lib/db";
import { createCallsSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { time, duration, satisfaction, scriptlink, userId } = createCallsSchema.parse(body);

  const user = await db.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  const newCallCount = user.callCount + 1;
  const newCallId = `Call-${newCallCount}`;

  try {
    const response = await db.$transaction([
      db.user.update({
        where: { id: userId },
        data: { callCount: newCallCount }
      }),
      db.call.create({
        data: {
          callId: newCallId,
          userId: user.id,
          time: time,
          duration: duration,
          satisfaction: satisfaction,
          scriptlink: scriptlink
        }
      })
    ]);

    return NextResponse.json(
      { Data: response[1], message: "Recorded Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating call:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error },
      { status: 500 }
    );
  }
}
