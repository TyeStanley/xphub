'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useCallback } from 'react';

interface SmoothScrollLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ href, className, children }) => {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 65;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    },
    [href],
  );

  return (
    <Link
      href={href}
      className={cn('text-gray-700 transition-colors hover:text-gray-900', className)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
