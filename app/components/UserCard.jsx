import Image from 'next/image';

export default function Card({ user, pagetype }) {
  const userName = user && user.name ? <div>{user.name}</div> : null;

  const userImage =
    user && user.image ? (
      <Image
        className='rounded-full border-4 shadow-black drop-shadow-xl'
        src={user.image}
        alt={user.name || 'Profile Pic'}
        width={80}
        height={80}
        quality={100}
      />
    ) : null;

  return (
    <section className='flex w-fit items-center border-b-2 border-r-2'>
      <div className='p-2'>{userImage}</div>
      <div className='p-2'>
        Hello, {userName}.<br />
        <span className='font-bold'>Your {pagetype} Page!</span>
      </div>
    </section>
  );
}
