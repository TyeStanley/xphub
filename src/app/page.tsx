import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col bg-[#F7F7FD] py-8 md:flex-row">
        <div className="flex flex-col gap-4 px-4">
          <p className="text-center text-sm font-bold uppercase italic text-primary">
            Transparency on every load, Trust in every turn
          </p>
          <h1 className="text-center text-4xl font-bold text-[#000929]">
            Trusted Liquid Bulk Transport Solutions
          </h1>
          <p className="text-center text-sm text-[#4D5461]">
            We&apos;re all about being clear with every load & ensuring your liquid reaches its
            destination safely and on time.
          </p>

          {/* Get a quote button */}
          <Button className="mt-3 w-full bg-primary text-white">
            {/* TODO: Create Modal for quote form */}
            Get a quote
          </Button>
        </div>
        <div className="relative mt-5 aspect-square bg-[url('/assets/map-bg.png')] bg-cover bg-center">
          <Image
            src="/assets/truck-hero.png"
            alt="Truck Hero"
            fill
            className="absolute bottom-0 object-contain"
          />
        </div>
      </section>

      <section className="pb-[500px]" id="services">
        <h2>Services</h2>
      </section>
      <section className="pb-[500px]" id="why-us">
        <h2>Why Us?</h2>
      </section>
      <section className="pb-[500px]" id="about">
        <h2>About Us</h2>
      </section>
      <section className="pb-[500px]" id="availability">
        <h2>Availability</h2>
      </section>
    </main>
  );
}
