import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';
import { authorize } from '@/lib/rbac';
import { Action } from '@prisma/client';

/**
 * GET /api/admin/users
 * Returns list of users (admin only)
 */
export async function GET(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

  const allowed = await authorize(userId, 'User', Action.READ);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true, isActive: true, roles: { select: { name: true } } },
  });
  return NextResponse.json({ users });
}

/**
 * POST /api/admin/users
 * Creates a new user (admin only)
 * Expected payload: { email, password, name, roleIds? }
 */
export async function POST(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

  const allowed = await authorize(userId, 'User', Action.CREATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const { email, password, name, roleIds } = await request.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  }
  const hashed = await hashPassword(password);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashed,
      name,
      roles: roleIds ? { connect: roleIds.map((id: string) => ({ id })) } : undefined,
    },
    select: { id: true, email: true, name: true },
  });
  return NextResponse.json({ user: newUser }, { status: 201 });
}
