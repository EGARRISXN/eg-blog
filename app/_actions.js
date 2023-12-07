'use server';
import { updateUser } from '@/app/(utils)/db/users';

export async function updateName(name, email) {
  await updateUser(email, { name });
}
