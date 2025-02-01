'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import SmoothScrollLink from './SmoothScrollLink';
import { Menu } from 'lucide-react';
import { menuItems } from '@/constants';
import RequestQuoteButton from './RequestQuoteButton';

const MobileNavModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
        <Menu className="h-6 w-6" />
      </Button>

      {open && (
        <>
          <div
            className="fixed inset-x-0 bottom-0 top-[65px] z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="fixed left-0 right-0 top-[65px] z-50 rounded-b-sm bg-white px-5 py-8">
            <div className="flex flex-col gap-2.5 pb-5">
              {menuItems.map((item) => (
                <Button
                  key={item.href}
                  onClick={() => setOpen(false)}
                  className="w-full bg-white py-6 text-left font-semibold hover:bg-[#FFE0DB]"
                >
                  <SmoothScrollLink href={item.href} className="w-full">
                    {item.label}
                  </SmoothScrollLink>
                </Button>
              ))}
            </div>

            <div className="border-t border-[#E3E9FF] pt-5">
              <RequestQuoteButton className="w-full py-6 text-left font-semibold" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNavModal;
