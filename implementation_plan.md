# Phase 3 – Authorization & Admin Backend

**Goal**: Implement a robust role‑based access control (RBAC) system, create database models for roles and permissions, and build an admin panel (Next.js UI + protected API) that allows managing users, roles, products, services, and blog posts.

## User Review Required
> [!IMPORTANT]
> Review the proposed data model changes, API design, and UI/UX approach for the admin panel. Approve or suggest modifications before execution.

## Open Questions
> [!WARNING]
> - **Admin UI framework**: Should we continue using Tailwind CSS only, or integrate a component library (e.g., Shadcn UI) for faster admin UI development?
> - **Permission granularity**: Do we need fine‑grained permissions per action (`create`, `read`, `update`, `delete`) for each resource, or is a simpler `admin`/`editor`/`viewer` role model sufficient?
> - **Authentication flow**: Do we keep the current JWT‑only approach for the admin panel, or add session‑based cookies for server‑rendered pages?

## Proposed Changes
---
### 1️⃣ Prisma Schema Extensions
- **[MODIFY]** `prisma/schema.prisma`
  - Add `Role` and `Permission` models (already present) with many‑to‑many relation `UserRoles`.
  - Create join tables `UserRole` and `RolePermission` if needed for explicit PKs.
  - Add `enum Action { CREATE READ UPDATE DELETE }` for permission actions.
  - Add `AdminLog` model to audit admin actions.

### 2️⃣ Backend API Routes (protected by middleware + RBAC)
- **[NEW]** `src/app/api/admin/users/route.ts` – CRUD for users (admin only).
- **[NEW]** `src/app/api/admin/roles/route.ts` – Manage roles and assign permissions.
- **[NEW]** `src/app/api/admin/products/route.ts` – Manage product catalog.
- **[NEW]** `src/app/api/admin/services/route.ts` – Manage services.
- **[NEW]** `src/app/api/admin/blog/route.ts` – Manage blog posts.
- **[NEW]** `src/app/api/admin/logs/route.ts` – Read admin audit logs.

Each route will:
1. Verify JWT via existing middleware.
2. Extract `userId` from `x-user-id` header.
3. Load user’s roles/permissions from DB.
4. Authorize based on required permission (`Action` + `resource`).
5. Return JSON responses (or appropriate HTTP codes).

### 3️⃣ RBAC Helper Library
- **[NEW]** `src/lib/rbac.ts`
  ```ts
  export async function authorize(userId: string, resource: string, action: Action): Promise<boolean> {
    // fetch roles & permissions for user, check if any grant the requested action on the resource
  }
  ```
  Export typed `Action` enum from Prisma.

### 4️⃣ Admin UI (Next.js App Router)
- **[NEW]** `src/app/admin/layout.tsx` – Protected layout with sidebar navigation.
- **[NEW]** `src/app/admin/page.tsx` – Dashboard overview (stats, recent logs).
- **[NEW]** Pages under `/admin/users`, `/admin/roles`, `/admin/products`, `/admin/services`, `/admin/blog`.
- Use **Tailwind CSS** and optional **shadcn/ui** components for tables, forms, modals.
- Implement client‑side data fetching via `fetch('/api/admin/...')` with `Authorization: Bearer <jwt>` header.

### 5️⃣ Server‑Side Rendering for Protected Pages
- Use `getServerSideProps` (or the new `fetch` with `next: { revalidate: 0 }`) to pre‑fetch data and verify auth on the server, redirecting unauthenticated users to `/login`.

### 6️⃣ Tests
- **[NEW]** `tests/rbac.test.ts` – unit tests for `authorize` logic.
- **[NEW]** integration tests for each admin API route (using `supertest`).

### 7️⃣ Documentation & README Updates
- Add a section describing admin panel setup, required env vars (`ADMIN_JWT_SECRET` if separate), and how to seed initial admin user/roles.
- Provide CLI script `npm run seed:admin` to create a default admin user.

## Verification Plan
### Automated Tests
- Run `npm test` after implementing the changes; expect all RBAC unit tests and API integration tests to pass.
- Execute `npx prisma generate` and `npx prisma migrate dev` to ensure schema is valid.

### Manual Verification
- Start dev server (`npm run dev`).
- Log in as the seeded admin user, access `/admin` and perform CRUD operations on each resource.
- Verify that a non‑admin user (role `viewer`) receives 403 responses on protected routes.
- Check that admin actions are recorded in `AdminLog` and visible in the logs page.

---
**Next Steps after Approval**
1. Update `task.md` with a detailed checklist.
2. Execute Prisma migration to add the new models.
3. Install any additional dependencies (`@prisma/client` already present, add `zod` for validation, optional UI libs).
4. Implement the code outlined above.

> Please review the plan, answer the open questions, and approve so we can start coding.
