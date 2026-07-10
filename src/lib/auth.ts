import bcrypt from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';

const SALT_ROUNDS = 12;

function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET not defined');
  return new TextEncoder().encode(secret);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function signJwt(payload: Record<string, unknown>, expiresIn = '15m'): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expiresIn)
    .sign(getJwtSecret());
}

export async function verifyJwt(token: string): Promise<Record<string, unknown>> {
  const { payload } = await jwtVerify(token, getJwtSecret());
  return payload as Record<string, unknown>;
}
