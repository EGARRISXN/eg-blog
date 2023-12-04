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
        className='mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl'
        src={user.image}
        alt={user.name || 'Profile Pic'}
        width={100}
        height={100}
        quality={100}
        priority
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
