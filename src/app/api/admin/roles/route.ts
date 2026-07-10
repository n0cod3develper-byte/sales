import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authorize } from '@/lib/rbac';
import { Action } from '@prisma/client';

/**
 * GET /api/admin/roles
 * List all roles (admin only)
 */
export async function GET(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

  const allowed = await authorize(userId, 'Role', Action.READ);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const roles = await prisma.role.findMany({
    include: { permissions: true },
  });
  return NextResponse.json({ roles });
}

/**
 * POST /api/admin/roles
 * Create a new role with optional permissions (admin only)
 * Payload: { name, description?, permissionIds? }
 */
export async function POST(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });

  const allowed = await authorize(userId, 'Role', Action.CREATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const { name, description, permissionIds } = await request.json();
  if (!name) return NextResponse.json({ error: 'Name required' }, { status: 400 });

  const newRole = await prisma.role.create({
    data: {
      name,
      description,
      permissions: permissionIds
        ? { connect: permissionIds.map((id: string) => ({ id })) }
        : undefined,
    },
    include: { permissions: true },
  });
  return NextResponse.json({ role: newRole }, { status: 201 });
}
