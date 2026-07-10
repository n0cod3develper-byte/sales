import { NextRequest, NextResponse } from 'next/server';
import { verifyJwt } from '@/lib/jwt';

export async function proxy(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // Allow public routes (e.g., /api/auth/*) to pass through
    const url = request.nextUrl.clone();
    if (url.pathname.startsWith('/api/auth')) return NextResponse.next();
    return NextResponse.redirect(new URL('/login', request.url));
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = (await verifyJwt(token)) as { id: string };
    // Attach user id to request headers for downstream handlers
    request.headers.set('x-user-id', payload.id);
    return NextResponse.next();
  } catch (e) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api\/auth).*)'], // protect all routes except auth API
};
