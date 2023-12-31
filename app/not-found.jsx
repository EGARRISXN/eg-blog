import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='py-24'>
      <div className='text-3xl font-semibold'>
        <h1 className='text-2xl font-bold'>404 | PAGE NOT FOUND</h1>
        <br />
        <Link href='/'>
          <button
            className={`
        flex items-center gap-2
        rounded-full px-8 py-2
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

        transition-all

        hover:text-violet-500
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
    `}
          >
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
}
