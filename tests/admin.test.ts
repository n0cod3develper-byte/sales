// tests/admin.test.ts
import request from "supertest";
import { createServer } from "http";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";

// Import route handlers directly
import { GET as GET_SERVICES, POST as POST_SERVICES } from "../src/app/api/admin/services/route";
import { GET as GET_PRODUCTS, POST as POST_PRODUCTS } from "../src/app/api/admin/products/route";
import { GET as GET_BLOG, POST as POST_BLOG } from "../src/app/api/admin/blog/route";
import { GET as GET_SETTINGS, PATCH as PATCH_SETTINGS } from "../src/app/api/admin/settings/route";

// Helper to invoke a route handler and return a supertest‑compatible response
function invoke(handler: any, method: string, path: string, token: string, userId: string, body?: any) {
  const req = new Request(`http://localhost${path}`, {
    method,
    headers: {
      "Authorization": `Bearer ${token}`,
      "x-user-id": userId,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return handler(req);
}

const prisma = new PrismaClient();
function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET || "test-secret";
  return new TextEncoder().encode(secret);
}
const adminEmail = "ventas@facirepuestos.com.co";

async function getAdminToken() {
  const admin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!admin) throw new Error("Admin user missing");
  return await new SignJWT({ id: admin.id, email: admin.email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("15m")
    .sign(getJwtSecret());
}

describe("Admin API Endpoints", () => {
  let token: string;
  let adminId: string;

  beforeAll(async () => {
    token = await getAdminToken();
    const admin = await prisma.user.findUnique({ where: { email: adminEmail } });
    adminId = admin!.id;

    // Clean up any leftover test records from previous runs
    await prisma.service.deleteMany({ where: { slug: 'test-service' } });
    await prisma.product.deleteMany({ where: { slug: 'test-product' } });
    await prisma.blog.deleteMany({ where: { slug: 'test-post' } });
  });

  afterAll(async () => {
    // Clean up test data after the suite runs
    await prisma.service.deleteMany({ where: { slug: 'test-service' } });
    await prisma.product.deleteMany({ where: { slug: 'test-product' } });
    await prisma.blog.deleteMany({ where: { slug: 'test-post' } });
    await prisma.$disconnect();
  });

  test("GET services list", async () => {
    const res = await invoke(GET_SERVICES, "GET", "/api/admin/services", token, adminId) as NextResponse;
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(Array.isArray(json.services)).toBeTruthy();
  });

  test("POST create service", async () => {
    const payload = { title: "Test Service", slug: "test-service", description: "Demo" };
    const res = await invoke(POST_SERVICES, "POST", "/api/admin/services", token, adminId, payload) as NextResponse;
    const json = await res.json();
    expect(res.status).toBe(201);
    const created = await prisma.service.findUnique({ where: { slug: payload.slug } });
    expect(created?.title).toBe(payload.title);
  });

  test("GET products list", async () => {
    const res = await invoke(GET_PRODUCTS, "GET", "/api/admin/products", token, adminId) as NextResponse;
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(Array.isArray(json.products)).toBeTruthy();
  });

  test("POST create product", async () => {
    const payload = { title: "Test Product", slug: "test-product", imagePath: "" };
    const res = await invoke(POST_PRODUCTS, "POST", "/api/admin/products", token, adminId, payload) as NextResponse;
    const json = await res.json();
    expect(res.status).toBe(201);
    const created = await prisma.product.findUnique({ where: { slug: payload.slug } });
    expect(created?.title).toBe(payload.title);
  });

  test("GET blog list", async () => {
    const res = await invoke(GET_BLOG, "GET", "/api/admin/blog", token, adminId) as NextResponse;
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(Array.isArray(json.posts)).toBeTruthy();
  });

  test("POST create blog post", async () => {
    const payload = { title: "Test Post", slug: "test-post", excerpt: "Demo excerpt", content: "Full content", imagePath: "" };
    const res = await invoke(POST_BLOG, "POST", "/api/admin/blog", token, adminId, payload) as NextResponse;
    const json = await res.json();
    expect(res.status).toBe(201);
    const created = await prisma.blog.findUnique({ where: { slug: payload.slug } });
    expect(created?.title).toBe(payload.title);
  });

  test("GET & PATCH settings", async () => {
    const getRes = await invoke(GET_SETTINGS, "GET", "/api/admin/settings", token, adminId) as NextResponse;
    const getJson = await getRes.json();
    expect(getRes.status).toBe(200);
    const newData = { hello: "world" };
    const patchRes = await invoke(PATCH_SETTINGS, "PATCH", "/api/admin/settings", token, adminId, { data: newData }) as NextResponse;
    const patchJson = await patchRes.json();
    expect(patchRes.status).toBe(200);
    const updated = await prisma.settings.findFirst();
    expect(updated?.data).toMatchObject(newData);
  });
});
