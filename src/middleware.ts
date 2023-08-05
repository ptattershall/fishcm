import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/signup";

    const token = req.cookies.get("token")?.value || "";
    if (isPublicPath && token) {
        return NextResponse.redirect("/dashboard");
    }
}

export const config = {
    matcher: [
        "/",
        '/profile',
        '/login',
        '/signup',
        '/dashboard'
    ],
}