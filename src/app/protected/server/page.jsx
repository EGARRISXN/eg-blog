import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import UserCard from '@/components/UserCard';
import { BsTypeH1 } from 'react-icons/bs';

export default async function ProtectedServerPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/protected/server');
    return null; // Return early to avoid rendering the page
  }

  return (
    <section className='flex flex-col gap-6'>
      <h1 className='text-center text-3xl font-bold'>
        This is a server-side protected page.
      </h1>
      <UserCard user={session && session.user} pagetype={'Server'} />
    </section>
  );
}