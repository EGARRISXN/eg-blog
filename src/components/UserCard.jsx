import Image from 'next/image';

function Card({ user, pagetype }) {
  const greeting =
    user && user.name ? (
      <div className='flex flex-col items-center rounded-lg bg-white p-6 text-5xl font-bold text-black'>
        Hello {user.name}!
      </div>
    ) : null;

  const userImage =
    user && user.image ? (
      <Image
        className='mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500'
        src={user.image}
        width={200}
        height={200}
        alt={user.name || 'Profile Pic'}
        priority={true}
      />
    ) : null;

  return (
    <section className='flex flex-col gap-4'>
      {greeting}
      {userImage}
      <p className='text-center text-2xl'>{pagetype} Page!</p>
    </section>
  );
}

export default Card;
