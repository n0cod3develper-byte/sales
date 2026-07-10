const { PrismaClient, Action } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const SALT_ROUNDS = 12;

async function main() {
  // Create permissions for each resource
  const resources = ['User', 'Role', 'Permission', 'Service', 'Product', 'Blog', 'Settings'];
  const actions = [Action.CREATE, Action.READ, Action.UPDATE, Action.DELETE];
  await prisma.permission.createMany({
    data: resources.flatMap(resource =>
      actions.map(action => ({ resource, action }))
    ),
    skipDuplicates: true,
  });

  // Create admin role with all permissions
  const allPermissions = await prisma.permission.findMany();
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
      description: 'Full access',
      permissions: { connect: allPermissions.map((p: { id: string }) => ({ id: p.id })) },
    },
  });

  // Create default admin user
  const adminEmail = 'ventas@facirepuestos.com.co';
  const adminPassword = await bcrypt.hash('Elguru47', SALT_ROUNDS);
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: adminPassword,
      name: 'Admin',
      roles: { connect: [{ id: adminRole.id }] },
    },
  });

  console.log('Seed data created');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
