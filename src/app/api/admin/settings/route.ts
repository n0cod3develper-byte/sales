import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authorize } from '@/lib/rbac';
import { Action } from '@prisma/client';

/** GET /api/admin/settings */
export async function GET(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Settings', Action.READ);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const settings = await prisma.settings.findFirst();
  return NextResponse.json({ settings });
}

/** PATCH /api/admin/settings */
export async function PATCH(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Settings', Action.UPDATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await request.json();
  // Accept either { data: {...} } (from UI) or a raw object
  const data = body.data !== undefined ? body.data : body;
  const updated = await prisma.settings.upsert({
    where: { id: 'settings' }, // singleton row – ensure one row exists
    update: { data },
    create: { id: 'settings', data },
  });
  return NextResponse.json({ settings: updated });
}

