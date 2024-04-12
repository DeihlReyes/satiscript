import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const data = await db.espware.findFirst(
      {
        where: { id: "thisisid" },
      }
    )

    console.log(data)
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
