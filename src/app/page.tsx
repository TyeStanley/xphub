import { Button } from '@/components/ui/button';
import { services, whyUs } from '@/constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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

            {/* Get a quote button */}
            <Button className="mt-3 w-full bg-primary text-white">
              {/* TODO: Create Modal for quote form */}
              Get a quote
            </Button>
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
      <section
        id="services"
        className="my-5 flex w-full flex-col items-center justify-center md:my-12 md:flex-row"
      >
        <div className="flex flex-col items-center justify-center px-5 md:w-1/2">
          <div className="relative flex aspect-square max-w-[450px] flex-col gap-4 rounded border border-[#E0DEF7] bg-[#F7F7FD] p-5">
            <h2 className="text-lg font-bold text-[#100A55] md:text-xl">
              From Chemicals to Petroleum: We&apos;ve Got You Covered
            </h2>
            <p className="text-xs text-[#100A55] md:text-sm">
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
              <div key={service.id} className="flex items-start space-x-4 lg:flex-col lg:space-x-0">
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
      </section>

      <section id="why-us" className="bg-[#F7F7FD] px-5 py-8 md:py-12">
        <h2 className="mb-3 text-center text-3xl font-bold">
          Why Choose <span className="text-primary">Xphub</span>?
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
      </section>

      <section id="about" className="pb-[500px]">
        <h2>About Us</h2>
      </section>
      <section id="availability" className="pb-[500px]">
        <h2>Availability</h2>
      </section>
    </main>
  );
}
