import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { authorize } from '@/lib/rbac';
import { Action } from '@prisma/client';

/** GET /api/admin/blog */
export async function GET(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Blog', Action.READ);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const posts = await prisma.blog.findMany();
  return NextResponse.json({ posts });
}

/** POST /api/admin/blog */
export async function POST(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Blog', Action.CREATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const { title, slug, excerpt, content, imagePath } = await request.json();
  const post = await prisma.blog.create({
    data: { title, slug, excerpt, content, imagePath },
  });
  return NextResponse.json({ post }, { status: 201 });
}

/** PUT /api/admin/blog?id=... */
export async function PUT(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Blog', Action.UPDATE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  const data = await request.json();
  const post = await prisma.blog.update({ where: { id }, data });
  return NextResponse.json({ post });
}

/** DELETE /api/admin/blog?id=... */
export async function DELETE(request: Request) {
  const userId = request.headers.get('x-user-id');
  if (!userId) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  const allowed = await authorize(userId, 'Blog', Action.DELETE);
  if (!allowed) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  await prisma.blog.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
