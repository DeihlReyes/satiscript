import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { espKey } = await req.json();
    console.log(req.url)

    const data = await db.espware.findMany({
      where: { id: espKey },
    });

    if (!data) {
      return NextResponse.json(
        { message: "No data found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { Esp_Data: data, message: "Extraction Successfull" },
      { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch(error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
    
}
