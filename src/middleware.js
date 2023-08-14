import { NextResponse } from "next/server";
const middleware = (request) => {
   return NextResponse.redirect(new URL("/login",request.url))
};

export default middleware;

export const config={
    matcher: ["/about/aboutStudent/:path*", "/contact/:path*"]
}