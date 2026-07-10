import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authorize } from '@/lib/rbac';
import { Action } from '@prisma/client';

/** GET /api/admin/products */
export async function GET(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Product', Action.READ);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const products = await prisma.product.findMany();
  return NextResponse.json({ products });
}

/** POST /api/admin/products */
export async function POST(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Product', Action.CREATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const { title, slug, imagePath } = await request.json();
  const product = await prisma.product.create({ data: { title, slug, imagePath } });
  return NextResponse.json({ product }, { status: 201 });
}

/** PUT /api/admin/products?id=... */
export async function PUT(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Product', Action.UPDATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  const data = await request.json();
  const product = await prisma.product.update({ where: { id }, data });
  return NextResponse.json({ product });
}

/** DELETE /api/admin/products?id=... */
export async function DELETE(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Product', Action.DELETE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  await prisma.product.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
