'use client';
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
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a client-side protected page.
        </h1>
        <UserCard user={session?.user} pagetype={'Client'} />
      </div>
    </section>
  );
}
