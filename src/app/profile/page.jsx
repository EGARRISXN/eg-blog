import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import UserCard from '@/components/UserCard';

export default async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <UserCard user={session?.user} pagetype={'Profile'} />
      ) : (
        <h1 className='text-3xl'>You must login to access your Profile.</h1>
      )}
    </div>
  );
}

// 'use client';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import { useEffect } from 'react';

// export default function Home() {
//   const { data: session } = useSession();

//   useEffect(() => {
//     console.log('session object is', session);
//   }, []);
//   return (
//     <>
//       {!session && (
//         <>
//           Not logged in <br />
//           <button onClick={() => signIn()}>Log In</button>
//         </>
//       )}
//       //Once user is logged in, check if session is present and do cool stuffs
//       {session && (
//         <>
//           Logged in as {session.user} <br />
//           <button onClick={() => signOut()}>Log out</button>
//         </>
//       )}
//     </>
//   );
// }
