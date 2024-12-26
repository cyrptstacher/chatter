'use client';

import { cn } from '@/utils';
import { Twitter } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { ChatterLogo } from '../HumeWordmark';

export type NavRailProps = {
  variant?: 'light' | 'dark';
};

export const NavRail: FC<NavRailProps> = ({ variant = 'light' }) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'flex h-16 w-full items-center',
        'pr-0 md:pr-[var(--pad)]',
        'z-10 gap-4',
        isDark && 'bg-black',
      )}
    >
      <div className={'flex shrink items-center gap-3 pl-6'}>
        <Link
          href={'https://chatterai.fun/'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <ChatterLogo
            className={cn(
              'text-xl',
              isDark ? 'text-neutral-100' : 'text-neutral-700',
            )}
          />
          <span className={'sr-only'}>Chatter AI website</span>
        </Link>
      </div>
      <div className={'relative isolate h-full grow'}>
        <div
          className={
            'absolute right-0 top-0 flex flex-col items-end gap-2 pr-6 pt-4'
          }
        >
          <Link
            href={'https://x.com/ChatterAiX'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={cn(
              'flex items-center justify-center',
              'size-8 rounded-full',
              isDark
                ? 'border border-neutral-100'
                : 'border border-neutral-700',
              'bg-transparent',
              isDark
                ? 'hover:bg-neutral-100 hover:text-black'
                : 'hover:bg-neutral-700 hover:text-white',
              isDark
                ? 'focus:bg-neutral-100 focus:text-black'
                : 'focus:bg-neutral-700 focus:text-white',
              'focus:outline-none',
              isDark ? 'text-neutral-100' : 'text-neutral-800',
            )}
          >
            <Twitter className="size-4" />
            <span className="sr-only">Follow on X (Twitter)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};