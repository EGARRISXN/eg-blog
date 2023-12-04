import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import UserCard from '@/components/UserCard';

export default async function ProtectedServerPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/protected/server');
  }

  return (
    <section className='flex flex-col gap-6'>
      <h1 className='text-center text-3xl font-bold'>
        This is a server-side protected page.
      </h1>
      <UserCard user={session?.user} pagetype={'Server'} />
    </section>
  );
}
