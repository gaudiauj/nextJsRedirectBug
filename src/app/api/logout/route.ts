import { NextRequest, NextResponse } from 'next/server';

const redirectToLogin = (request: NextRequest) => {
  const originalUrl = request.nextUrl.protocol + request.headers.get('host');
  const url = new URL('/login', originalUrl);
  console.log(url);
  const response = NextResponse.redirect(url);
  response.cookies.delete('customer');
  return response;
};

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  console.log('logout');
  try {
    await logout();

    return redirectToLogin(request);
  } catch (e) {
    return redirectToLogin(request);
  }
};

export const logout = async () => {
  return Promise.resolve('do some stuff in the backend');
};
