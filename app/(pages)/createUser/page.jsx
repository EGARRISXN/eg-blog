// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/api/(utils)/auth/[...nextauth]/route';
import CreateUserForm from '@/app/(components)/CreateUserForm';

export default async function CreateUser() {
  // const session = await getServerSession(authOptions);

  // if (!session.user.role !== 'admin') {
  //   return (
  //     <section className='py-24'>
  //       <div className='container'>
  //         <h1 className='text-2xl font-bold'>DENIED.</h1>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className='py-24'>
      <div className='container'>
        <CreateUserForm />
      </div>
    </section>
  );
}
