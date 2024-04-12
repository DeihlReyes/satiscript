import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    console.log(req.url)
    const data = await db.espware.findUnique(
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
