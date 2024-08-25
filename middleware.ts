import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPrivatePath =
    path === "/cart" ||
    path === "/verifyemail" ||
    path === "/order" ||
    path.startsWith("/checkout");

  const token = request.cookies.get("token")?.value || "";

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/profile",
    "/verifyemail",
    "/cart",
    "/checkout",
    "/order",
    "/search/:path*",
  ],
};
