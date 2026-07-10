import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authorize } from '@/lib/rbac';
import { Action } from '@prisma/client';

/** GET /api/admin/services */
export async function GET(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Service', Action.READ);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const services = await prisma.service.findMany();
  return NextResponse.json({ services });
}

/** POST /api/admin/services */
export async function POST(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Service', Action.CREATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const { title, slug, description, imagePath } = await request.json();
  const service = await prisma.service.create({
    data: { title, slug, description, imagePath },
  });
  return NextResponse.json({ service }, { status: 201 });
}

/** PUT /api/admin/services/:id */
export async function PUT(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Service', Action.UPDATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  const data = await request.json();
  const service = await prisma.service.update({ where: { id }, data });
  return NextResponse.json({ service });
}

/** DELETE /api/admin/services/:id */
export async function DELETE(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Service', Action.DELETE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
