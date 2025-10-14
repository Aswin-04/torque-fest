import { Details } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const DetailsRenderer = ({ details }: {details: Details}) => {
  return (
    <section className="max-container">
      {/* for small screens */}
      <div data-aos="fade-right" className="flex flex-col gap-8 lg:hidden">
        <div>
          <h2 className='h2 font-palanquin uppercase text-center font-bold tracking-tight gradient-primary'>
            {details.title}
          </h2>
        </div>
        <div className="flex flex-col items-center px-4 py-8 rounded-xl bg-zinc-950/80 text-accent/80">
          <div data-aos="zoom-in">
            <Image
              src={details.img}
              alt={details.imgAlt}
              width={details.imgWidth}
              className="rounded-3xl"
            />
          </div>
          <p className="font-mono leading-8 text-hc max-lg:max-w-lg max-md:max-w-md mt-8">
            {details.description}
          </p>
          {details.linkTo && (
            <a
              href={details.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-primary group flex items-center"
            >
              <span className="underline underline-offset-8 decoration-primary text-clr-500">
                Follow us on Instagram
              </span>
              <ArrowRight className="w-4 h-4 tracking-normal text-[#2dd2c7]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
            </a>
          )}  
        </div>
      </div>

      {/* for large screens */}
      <div
        data-aos="fade-down"
        className="flex max-lg:hidden rounded-xl bg-zinc-950/80 text-accent/80 py-4"
      >
        <div
          data-aos="zoom-in"
          className="min-w-[45%] pl-8 flex justify-center items-center"
        >
          <Image
            src={details.img}
            alt={details.imgAlt}
            width={details.imgWidth}
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center px-8 py-8">
          <h2 className='h2 font-palanquin uppercase text-center font-bold tracking-tight gradient-primary'>
            {details.title}
          </h2>
          <p className="font-mono leading-8 text-hc max-w-4xl mt-6">
            {details.description}
          </p>
          {details.linkTo && (
            <a
              href={details.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-primary group flex items-center"
            >
              <span className="underline underline-offset-8 decoration-primary text-clr-500">
                Follow us on Instagram
              </span>
              <ArrowRight className="w-4 h-4 tracking-normal text-[#2dd2c7]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailsRenderer;