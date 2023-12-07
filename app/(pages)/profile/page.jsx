import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/(utils)/api/auth/[...nextauth]/route';
import UserCard from '@/app/(components)/UserCard';
import UpdateUserForm from '@/app/(components)/UpdateUserForm';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?callbackUrl=/profile');
  }

  return (
    <main classNAme='py-24'>
      <div className='container grid grid-cols-2'>
        <section className='border-2'>
          {session ? (
            <UserCard user={session?.user} pagetype={'Profile'} />
          ) : (
            <h1 className='text-2xl font-bold'>You are not logged in.</h1>
          )}
        </section>
        <section className='border-2'>
          <UpdateUserForm />
        </section>
      </div>
    </main>
  );
}
