import Link from 'next/link';

export default function LoginButton() {
  return (
    <Link href='/login'>
      <button type='button' className='btn btn-ghost'>
        Login
      </button>
    </Link>
  );
}
