import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/(utils)/api/auth/[...nextauth]/route';
import UserCard from '@/app/(components)/UserCard';

export default async function ProtectedServerPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/protected/server');
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a server-side protected page.
        </h1>
        <UserCard user={session?.user} pagetype={'Server'} />
      </div>
    </section>
  );
}
