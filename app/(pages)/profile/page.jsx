import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/(utils)/api/auth/[...nextauth]/route';
import UserCard from '@/app/(components)/UserCard';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <main classNAme='max-w-7xl'>
      <div className='grid min-h-screen grid-cols-2'>
        <section className='border-2'>
          {session ? (
            <UserCard user={session?.user} pagetype={'Profile'} />
          ) : (
            <h1 className='text-3xl'>You are not logged in.</h1>
          )}
        </section>
        <section className='border-2'>
          <div className='border-b-2 p-2 text-center text-xl underline'>
            Your Thoughts.
          </div>
        </section>
      </div>
    </main>
  );
}
