'use client';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { themeIcons } from '@/constants';

export default function ThemeDropdown() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className='dropdown dropdown-end z-[100]'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost rounded-btn hover:text-secondary'
      >
        Theme: {themeIcons.find((t) => t.theme === theme)?.icon}
      </div>
      <ul className='menu dropdown-content z-[100] w-52 rounded-box shadow'>
        {themeIcons.map((icon) => (
          <li key={icon.theme}>
            <button
              onClick={() => changeTheme(icon.theme)}
              onTouchStart={() => changeTheme(icon.theme)}
              className='btn btn-ghost btn-sm justify-end hover:text-primary'
            >
              {icon.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
