import Link from 'next/link';

export default function SignInDropdown() {
  return (
    <div className='dropdown dropdown-end z-[100]'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost rounded-btn hover:text-secondary'
      >
        Sign In
      </div>
      <ul className='menu dropdown-content z-[100] w-52 rounded-box shadow'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/api/auth/signin'>Sign In</Link>
        </li>
        <li>
          <Link href='/api/auth/signout'>Sign Out</Link>
        </li>
        <li>
          <Link href='/protected/server'>Server</Link>
        </li>
        <li>
          <Link href='/protected/client'>Client</Link>
        </li>
      </ul>
    </div>
  );
}
