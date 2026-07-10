import prisma from '@/lib/prisma';
import { Action } from '@prisma/client';

/**
 * Checks whether a user has the required permission for a given resource.
 * Returns true if any of the user's roles grant the permission.
 */
export async function authorize(
  userId: string,
  resource: string,
  action: Action,
): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { roles: { include: { permissions: true } } },
  });
  if (!user) return false;
  return user.roles.some((role) =>
    role.permissions.some(
      (perm) => perm.resource === resource && perm.action === action,
    ),
  );
}
