'use client';
//! You must use an AuthProvider for client components to useSession
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import UserCard from '@/app/(components)/UserCard';

export default function ProtectedClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/protected/client');
    },
  });

  return (
    <section className='flex flex-col gap-6'>
      <h1 className='text-center text-3xl font-bold'>
        This is a client-side protected page.
      </h1>
      <UserCard user={session?.user} pagetype={'Client'} />
    </section>
  );
}
