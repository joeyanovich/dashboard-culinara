'use client';

import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { IconProps } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  icon: React.ComponentType<IconProps>;
  tooltip: string;
  href: string;
  isMenuOpen: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon, tooltip, href, isMenuOpen }) => {
  return (
    <TooltipProvider>
      {isMenuOpen ? (
        <li className="flex items-center p-2 transition duration-300 rounded-lg">
          <Link href={href} className="flex items-center gap-2 group">
            <Icon className="size-8 text-slate-400 group-hover:text-amber-300 transition-colors duration-300" />
            <span className="text-slate-400 font-semibold whitespace-nowrap group-hover:text-amber-300 transition-colors duration-300">{tooltip}</span>
          </Link>
        </li>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <li className="p-2 transition duration-300 rounded-lg">
              <Link href={href} className="flex items-center justify-center">
                <Icon className="size-8 text-slate-400 hover:text-amber-300 transition-colors duration-300" />
              </Link>
            </li>
          </TooltipTrigger>
          <TooltipContent className='relative'>
            <div className="absolute top-2 left-6 whitespace-nowrap p-2 text-[10px] bg-amber-300 text-slate-800 font-bold rounded">{tooltip}</div>
          </TooltipContent>
        </Tooltip>
      )}
    </TooltipProvider>
  );
};
