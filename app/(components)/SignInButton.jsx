'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';
import { FaArrowRight } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

export default function SignInButton() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <Menu as='div' className='relative'>
          <Menu.Button>
            {session?.user?.image ? (
              <div className='relative h-10 w-10'>
                <Image
                  src={session.user.image}
                  alt={session.user.name || 'Profile Pic'}
                  width={40}
                  height={40}
                  quality={100}
                  className='inline-block rounded-full border-2'
                />
              </div>
            ) : (
              <span className='inline-block h-10 w-10 overflow-hidden rounded-full border-2 bg-base-100'>
                <svg
                  className='h-full w-full'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                </svg>
              </span>
            )}
          </Menu.Button>
          <Transition
            enter='transition duration-150 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-150 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <Menu.Items className='absolute right-0 z-[200] mt-1 flex w-72 origin-top-right flex-col rounded-xl bg-base-200 py-6 shadow-lg'>
              <div className='mb-4 flex gap-4 px-6 text-sm'>
                {session?.user?.image ? (
                  <div className='relative h-10 w-10'>
                    <Image
                      src={session.user.image}
                      alt={session.user.name}
                      width={40}
                      height={40}
                      quality={100}
                      className='inline-block rounded-full border-2'
                    />
                  </div>
                ) : (
                  <span className='inline-block h-10 w-10 overflow-hidden rounded-full border-2 bg-stone-100'>
                    <svg
                      className='h-full w-full text-stone-300'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                  </span>
                )}
                <div>
                  <p className='font-medium'>
                    {session.user.name || 'User name'}
                  </p>
                  <p>{session.user.email}</p>
                </div>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/profile'
                    className={`${
                      active && 'bg-stone-700/50'
                    } inline-flex items-center gap-6 px-[34px] py-2 text-sm`}
                  >
                    <MdPerson className='h-5 w-5' />
                    <span>Profile</span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && 'bg-stone-700/50'
                    } inline-flex items-center gap-6 px-[34px] py-2 text-sm`}
                    onClick={() => signOut()}
                  >
                    <FaArrowRight className='h-5 w-5' />
                    <span>Sign Out</span>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <button
          className='rounded-md border border-stone-300 px-3 py-1 text-sm'
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  );
}
