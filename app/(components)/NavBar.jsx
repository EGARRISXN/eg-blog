import Link from 'next/link';
import { navLinks, socialIcons } from '@/app/(utils)/constants';
import SignInButton from './SignInButton';
import ThemeOptions from './ThemeOptions';

export default function NavBar() {
  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col bg-base-200'>
        <div className='navbar w-full'>
          <div className='navbar-start'>
            <div className='z-[100] hover:text-secondary'>
              <label
                htmlFor='my-drawer-3'
                aria-label='open sidebar'
                className='btn btn-square btn-ghost'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h7'
                  />
                </svg>
              </label>
            </div>
          </div>

          <div className='navbar-end'>
            <SignInButton />
          </div>
        </div>
      </div>

      <div className='drawer-side z-[100]'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu z-[100] min-h-full w-80 bg-base-200 p-4'>
          {/* X Button */}
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='btn btn-square btn-ghost hover:text-secondary'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </label>

          {/* Navigation links */}
          {navLinks.map((link, index) => (
            <li key={index} className='hover:text-primary'>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          <div className='divider'>Links</div>

          {/* Social icons */}
          {socialIcons.map((socialIcon) => (
            <li
              key={socialIcon.title}
              className='tooltip tooltip-top hover:text-secondary'
              data-tip={socialIcon.username}
            >
              <a
                href={socialIcon.href}
                target='_blank'
                rel='noopener noreferrer'
              >
                {socialIcon.icon} {socialIcon.title}
              </a>
            </li>
          ))}

          <div className='divider'>Themes</div>

          <ThemeOptions />
        </ul>
      </div>
    </div>
  );
}
