import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import UserCard from '@/components/UserCard';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?callbackUrl=/dashboard');
  }

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={'Dashboard'} />
      ) : (
        <h1 className='text-5xl'>You Shall Not Pass!</h1>
      )}
    </>
  );
}
