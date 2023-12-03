"use client";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { navLinks, themeIcons, socialIcons } from "@/constants";
import LoginButton from "@/components/LoginButton";

const NavBar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar w-full">
          <div className="navbar-start">
            <div className="z-[100] hover:text-secondary">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
          </div>

          <div className="navbar-end">
            <LoginButton />
            <div className="dropdown dropdown-end z-[100]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn hover:text-secondary"
              >
                Theme: {themeIcons.find((t) => t.theme === theme)?.icon}
              </div>
              <ul className="menu dropdown-content z-[100] w-52 rounded-box shadow">
                {themeIcons.map((icon) => (
                  <li key={icon.theme}>
                    <button
                      onClick={() => changeTheme(icon.theme)}
                      onTouchStart={() => changeTheme(icon.theme)}
                      className="btn btn-ghost btn-sm justify-end hover:text-primary"
                    >
                      {icon.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-side z-[100] ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu z-[100] min-h-full w-80 bg-base-200 p-4">
          {/* X Button */}
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="btn btn-square btn-ghost hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          {/* Navigation links */}
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-primary">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}

          <div className="divider">Socials</div>

          {/* Social icons */}
          {socialIcons.map((socialIcon) => (
            <li
              key={socialIcon.title}
              className="tooltip tooltip-top hover:text-secondary"
              data-tip={socialIcon.username}
            >
              <a
                href={socialIcon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcon.icon} {socialIcon.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
