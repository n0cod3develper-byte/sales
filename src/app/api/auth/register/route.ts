import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hashPassword, signJwt } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashed, name },
    });
    const token = await signJwt({ id: user.id, email: user.email });
    return NextResponse.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
