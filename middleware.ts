import { NextRequest, NextResponse } from "next/server";
import { updateSession, getSession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  
  if (request.nextUrl.pathname === '/sign-in' && session != null) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return await updateSession(request);
}