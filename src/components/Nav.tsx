import Link from 'next/link';
import Image from 'next/image';
import SmoothScrollLink from './SmoothScrollLink';
import MobileNavModal from './MobileNavModal';
import { menuItems } from '@/constants';
import RequestQuoteButton from './RequestQuoteButton';

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#E3E9FF] bg-white px-5">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/xphub-logo.png"
                alt="XPHub Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <SmoothScrollLink key={item.href} href={item.href}>
                {item.label}
              </SmoothScrollLink>
            ))}
          </div>

          <RequestQuoteButton className="hidden md:flex md:w-auto" />

          <MobileNavModal />
        </div>
      </div>
    </nav>
  );
}
