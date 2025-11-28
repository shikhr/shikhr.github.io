'use client';

import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import XIcon from '@mui/icons-material/X';
import { DATA } from '../data';

import { useState, useEffect } from 'react';

// Shared button/icon wrapper component
const NavButton = ({
  children,
  onClick,
  href,
  label,
  external,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  label: string;
  external?: boolean;
}) => {
  const className =
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-black/10 dark:hover:bg-white/10  hover:text-accent-foreground h-10 w-10 rounded-full mx-0.5 group-hover:mx-1';

  if (href) {
    return (
      <a
        href={href}
        className={className}
        aria-label={label}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} aria-label={label}>
      {children}
    </button>
  );
};

export function Navbar({
  theme,
  setTheme,
}: {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}) {
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <div
        className={`group w-max rounded-full border-flora shadow-md dark:shadow-2xl z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center bg-background backdrop-blur-2xl transition-all duration-300 px-2 py-2 gap-0 hover:px-3 hover:py-2.5 hover:gap-1`}
      >
        <NavButton href="#" label="Home">
          <HomeIcon sx={{ fontSize: 22 }} />
        </NavButton>

        <div className="shrink-0 bg-gray-700 w-px h-11/12 group-hover:h-10/12  transition-all duration-300  mx-0.5  group-hover:mx-1" />

        <NavButton href={DATA.contact.social.github} label="GitHub" external>
          <GitHubIcon sx={{ fontSize: 22 }} />
        </NavButton>

        <NavButton
          href={DATA.contact.social.linkedin}
          label="LinkedIn"
          external
        >
          <LinkedInIcon sx={{ fontSize: 22 }} />
        </NavButton>

        <NavButton href={DATA.contact.social.twitter} label="X" external>
          <XIcon sx={{ fontSize: 22 }} />
        </NavButton>

        {/* <NavButton href={`mailto:${DATA.contact.email}`} label="Email" external>
          <EmailIcon sx={{ fontSize: 22 }} />
        </NavButton> */}

        <div className="shrink-0 bg-gray-700 w-px h-11/12 group-hover:h-10/12  transition-all duration-300  mx-0.5  group-hover:mx-1" />

        <NavButton onClick={toggleTheme} label="Toggle theme">
          {theme === 'dark' ? (
            <DarkModeIcon sx={{ fontSize: 22 }} />
          ) : (
            <LightModeIcon sx={{ fontSize: 22 }} />
          )}
        </NavButton>
      </div>
    </div>
  );
}
