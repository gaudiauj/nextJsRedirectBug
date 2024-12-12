import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    '/((?!api|env|_next|_vercel|.well-known|consent|images|keep-alive|logo.*\\..*).*)',
  ],
};

export default async function middleware(request: NextRequest) {
  console.log('middleware');
  if (request.nextUrl.pathname.startsWith('/login')) {
    console.log('checking cookies');
    if (request.cookies.has('customer')) {
      console.log('redirect to secured');
      return NextResponse.redirect(new URL('/secured/home', request.url));
    }
  }

  return NextResponse.next();
}
