'use client';

import { useState } from 'react';
import QuoteModal from './QuoteModal';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function RequestQuoteButton({ className }: { className?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={cn(
          'w-full rounded-lg bg-primary text-white hover:bg-[#991818] md:w-auto',
          className,
        )}
      >
        Get a quote
      </Button>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
