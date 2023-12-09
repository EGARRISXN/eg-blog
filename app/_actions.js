'use server';
import { updateUser } from '@/app/db/users';

export async function updateName(name, email) {
  await updateUser(email, { name });
}
