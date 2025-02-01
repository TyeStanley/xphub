import { menuItems, services, testimonials, whyUs } from '@/constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SmoothScrollLink from '@/components/SmoothScrollLink';
import Link from 'next/link';
import RequestQuoteButton from '@/components/RequestQuoteButton';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section
        id="hero"
        className="mx-auto flex w-full flex-col items-center justify-center bg-[#F7F7FD] py-8 md:flex-row md:justify-center md:py-0"
      >
        <div className="flex justify-center md:w-1/2">
          <div className="flex w-full max-w-[520px] flex-col gap-4 px-5 text-center md:items-center md:justify-center md:px-8 md:text-left">
            <p className="w-full text-sm font-bold italic text-primary">
              TRANSPARENCY ON EVERY LOAD, TRUST IN EVERY TURN
            </p>
            <h1 className="text-4xl font-bold text-[#000929] xl:text-5xl">
              Trusted Liquid Bulk Transport Solutions
            </h1>
            <p className="text-sm text-[#4D5461] xl:text-base">
              We&apos;re all about being clear with every load & ensuring your liquid reaches its
              destination safely and on time.
            </p>

            <RequestQuoteButton className="mt-3" />
          </div>
        </div>

        <div className="relative mt-5 w-full bg-[url('/assets/map-bg.png')] bg-cover bg-center md:mt-0 md:w-1/2">
          <div className="relative top-[10px] mx-auto flex w-[350px] justify-between md:top-[20px] xl:right-[70px] xl:top-[40px]">
            <Image
              src="/assets/end-point.png"
              alt="End Point"
              width={56}
              height={85}
              className="relative left-[5px] top-[44px] z-10 h-[58px] w-[33px] object-contain xl:top-[60px] xl:h-[85px] xl:w-[56px]"
            />
            <Image
              src="/assets/route.png"
              alt="Route"
              width={412}
              height={138}
              className="relative h-[95px] w-[283px] object-contain xl:h-[138px] xl:w-[412px]"
            />
            <Image
              src="/assets/start-point.png"
              alt="Start Point"
              width={56}
              height={56}
              className="relative right-[20px] top-[10px] z-10 h-[30px] w-[30px] object-contain xl:top-[4px] xl:h-[56px] xl:w-[56px]"
            />
          </div>
          <Image
            src="/assets/truck-hero.png"
            alt="Truck Hero"
            width={815}
            height={610}
            className="relative mx-auto h-auto w-[393px] object-contain xl:w-[815px]"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="my-5 w-full px-5 md:my-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="flex md:w-1/2 md:justify-between">
            <div className="relative flex aspect-square flex-col gap-4 rounded border border-[#E0DEF7] bg-[#F7F7FD] p-5">
              <h2 className="z-10 mt-3 text-lg font-bold text-[#100A55] sm:mt-10 sm:text-3xl md:mt-2 md:text-lg lg:mt-7 lg:text-2xl">
                From Chemicals to Petroleum: We&apos;ve Got You Covered
              </h2>
              <p className="z-10 text-xs text-[#100A55] sm:text-base md:text-sm lg:text-base">
                We specialize in the transportation of a wide variety of liquid bulk products,
                including:
              </p>
              <Image
                src="/assets/truck-services.png"
                alt="Truck Services"
                width={529}
                height={198}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 transform object-contain"
              />
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center md:mt-0 md:w-1/2">
            <div className="mx-auto grid grid-cols-1 gap-8 p-5 md:max-w-[800px] lg:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-start space-x-4 lg:flex-col lg:space-x-0"
                >
                  <div className="relative h-12 w-12 flex-shrink-0 lg:mb-4 lg:h-16 lg:w-16">
                    <Image src={service.icon} alt={service.title} fill className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="mb-2 font-bold text-[#000929] md:text-lg">{service.title}</h3>
                    <p className="text-sm text-[#4D5461] md:text-base">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="w-full bg-[#F7F7FD] px-5 py-8 md:py-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center">
          <h2 className="mb-3 text-center text-3xl font-bold">
            Why Choose <span className="text-primary">XPHUB</span>?
          </h2>
          <p className="mb-8 text-center text-[#4D5461] md:mb-12">
            Our commitment to safety, reliability, and professionalism drives every mile we travel
          </p>

          <div className="mx-auto grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
            {whyUs.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="relative mb-5 aspect-square">
                  <Image src={item.image} alt={item.alt} fill className="rounded-lg object-cover" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[#000929]">{item.title}</h3>
                <p className="mb-4 text-[#4D5461]">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => {
                    let tagStyle = '';

                    switch (tag.text) {
                      case 'Certified Safe':
                        tagStyle = 'bg-green-100 text-green-800';
                        break;
                      case 'On-Time Delivery':
                        tagStyle = 'bg-amber-100 text-amber-800';
                        break;
                      case 'Tech-Driven':
                        tagStyle = 'bg-blue-100 text-blue-800';
                        break;
                      case 'Fully Insured':
                        tagStyle = 'bg-pink-100 text-pink-800';
                        break;
                      case 'Community Trusted':
                        tagStyle = 'bg-purple-100 text-purple-800';
                        break;
                      case 'Personal Touch':
                        tagStyle = 'bg-indigo-100 text-indigo-800';
                        break;
                      default:
                        tagStyle = 'bg-gray-100 text-gray-800';
                    }

                    return (
                      <span key={index} className={cn('rounded-full px-3 py-1 text-sm', tagStyle)}>
                        {tag.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full px-5 py-8 md:py-12">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center">
          <h2 className="mb-2 text-3xl font-bold">
            About <span className="text-primary">XPHUB</span>
          </h2>
          <p className="mb-8 max-w-[800px] text-[#475467] md:mb-12">
            With over 30 years of family history in the industry,{' '}
            <span className="text-primary">XPHUB</span> continues our legacy as a trusted partner in
            liquid bulk transport, specializing in the safe and timely delivery of liquid goods
            across the United States.
          </p>

          <div className="flex w-full flex-col-reverse gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col gap-8 md:w-1/2">
              <div className="space-y-5 border-l-4 border-primary py-2 pl-4">
                <h3 className="text-xl font-bold">About</h3>
                <p className="text-[#4D5461]">
                  Started in 2025, <span className="text-primary">XPHUB</span> has become a trusted
                  partner in liquid bulk transport, specializing in the safe and timely delivery of
                  liquid goods across the United States.
                </p>
                <p className="text-[#4D5461]">
                  Our family-operated business is built on a foundation of trust, reliability, and
                  an unwavering commitment to safety.
                </p>
              </div>

              <div className="space-y-5 border-l-4 border-primary py-2 pl-4">
                <h3 className="text-xl font-bold">Our Values</h3>

                <p className="text-[#4D5461]">
                  <span className="font-semibold text-[#000929]">Integrity: </span>
                  We believe in doing business honestly and transparently.
                </p>

                <p className="text-[#4D5461]">
                  <span className="font-semibold text-[#000929]">Safety: </span>
                  Our commitment to safety is at the core of everything we do.
                </p>

                <p className="text-[#4D5461]">
                  <span className="font-semibold text-[#000929]">Customer Service: </span>
                  We strive to build long-lasting relationships with our clients through exceptional
                  service.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:w-1/2">
              <Image
                src="/assets/about-us.png"
                alt="Xphub transport truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="w-full bg-gradient-to-b from-white to-[#F0EFFB] px-5 py-8 md:py-12"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="md:max-w-[80%]">
              <p className="mb-2 font-bold italic text-primary">ONE MILE AT A TIME</p>
              <h2 className="text-3xl font-bold text-[#000929]">
                Delivering Trust & Reliability, One Shipment at a Time
              </h2>
              <p className="mt-2 text-[#4D5461]">
                Hear from the businesses and partners who count on{' '}
                <span className="text-primary">XPHUB</span> to transport their liquid cargo with
                care and precision.
              </p>
            </div>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full md:w-1/2"
          >
            <CarouselContent className="ml-[-12px] flex w-full gap-2">
              {testimonials.map((testimonial, index) => {
                const cardStyle =
                  index % 2 === 0
                    ? 'border-primary bg-[rgba(255,224,219,0.30)]'
                    : 'border-[#FFD789] bg-[rgba(255,232,188,0.30)]';

                return (
                  <CarouselItem key={index} className="h-full basis-[85%] pl-3 md:pl-5">
                    <div className={`rounded-xl border-[2px] ${cardStyle} p-5`}>
                      <div className="mb-5 flex items-start justify-between">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="aspect-square rounded-lg object-contain"
                        />
                        <Image
                          src="/assets/quote.png"
                          alt="Quote"
                          width={25}
                          height={21}
                          className="object-contain"
                        />
                      </div>

                      <h3 className="mb-2.5 whitespace-nowrap text-lg font-semibold text-[#000929]">
                        {testimonial.name}
                      </h3>

                      <p className="text-sm text-[#4D5461]">{testimonial.quote}</p>

                      <p className="mt-5 flex items-center whitespace-nowrap">
                        <Image
                          src="/assets/star.png"
                          alt="Star"
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                        <span className="ml-1 font-semibold text-[#000929]">
                          {testimonial.rating}
                        </span>
                        <span className="ml-1.5 text-sm text-[#4D5461]">
                          from {testimonial.company}
                        </span>
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="hidden w-full md:block">
              <CarouselPrevious className="absolute -left-10 top-1/2" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="w-full bg-white px-5 pt-8 md:relative md:py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col md:flex-row">
          <div className="md:z-10 md:w-1/2">
            <h2 className="text-left text-2xl font-bold text-[#000929]">
              Trusted & Expert <span className="text-primary">Liquid Bulk Transport</span> You Can
              Rely On
            </h2>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-bold text-[#000929]">24/7 Service and Support</h3>
              <p className="text-[#4D5461]">
                Our dedicated dispatch team is available 24 hours a day, 7 days a week, ensuring
                that your cargo is monitored and supported at all times.
              </p>
              <p className="mt-3 text-[#4D5461]">
                Whether it&apos;s an update on delivery status or assistance with logistics,
                we&apos;re always just a phone call away.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-bold text-[#000929]">Service Area</h3>
              <p className="text-[#4D5461]">
                We serve clients across the United States, ensuring that no matter where your liquid
                cargo needs to go, <span className="text-primary">XPHUB</span> is ready to deliver.
              </p>
            </div>
          </div>

          <div className="relative -mx-7 mt-5 aspect-square w-screen md:absolute md:bottom-0 md:right-0 md:top-0 md:mt-0 md:w-[50%]">
            <Image
              src="/assets/availability-map.png"
              alt="Availability Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-[#F7F7FD] px-5 py-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-xl border-[2px] border-primary bg-[rgba(255,224,219,0.40)] p-8 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:max-w-[500px]">
              <h2 className="text-3xl font-bold text-[#000929]">Request a Quote</h2>
              <p className="mt-4 text-[#4D5461]">
                We make it easy to get started. Simply request a quote, and our team will provide
                you with a tailored solution that meets your specific needs.
              </p>

              <RequestQuoteButton className="mt-5" />
            </div>

            <div className="relative -mx-8 md:w-1/2">
              <Image
                src="/assets/quote-truck-mobile.png"
                alt="Transport Truck"
                width={356}
                height={175}
                className="relative top-5 w-full object-contain md:hidden"
              />
              <Image
                src="/assets/quote-truck.png"
                alt="Transport Truck"
                width={736}
                height={352}
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="w-full bg-white px-5 py-8 md:py-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-center gap-5 md:items-start">
              <Image
                src="/assets/xphub-logo.png"
                alt="Xphub Logo"
                width={120}
                height={40}
                className="object-contain"
              />

              <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#000929] md:h-[21px] md:flex-row md:items-start md:gap-8">
                {menuItems.map((item) => (
                  <SmoothScrollLink key={item.href} href={item.href}>
                    {item.label}
                  </SmoothScrollLink>
                ))}
              </nav>
            </div>

            <div className="mt-7 flex h-[83px] flex-col items-center gap-5 md:mt-0 md:items-start md:justify-between">
              <div className="flex gap-7">
                <Link href="#">
                  <Image src="/assets/socials/twitter.png" alt="Twitter" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/assets/socials/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link href="#">
                  <Image src="/assets/socials/facebook.png" alt="Facebook" width={24} height={24} />
                </Link>
              </div>

              <p className="flex items-center gap-2 text-center text-sm font-medium text-[#000929] md:text-right">
                <Image src="/assets/marker.png" alt="Marker" width={16} height={16} />
                Houston, TX
              </p>
            </div>
          </div>

          <div className="my-8 flex flex-col items-center gap-5 border-t border-[#EAECF0] pt-8 text-sm text-[#4D5461] md:flex-row md:justify-between">
            <p>© 2025 XPHUB. All rights reserved.</p>
            <div className="flex gap-7">
              <Link href="#footer">Terms</Link>
              <Link href="#footer">Privacy</Link>
              <Link href="#footer">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
