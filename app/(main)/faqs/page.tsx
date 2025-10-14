'use client'
import { useEffect, useState } from "react"
import Accordion from '@/components/accordion';
import { faqContent } from '@/lib/constants'

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number | null) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="relative">
      <section className="padding-x padding-b min-h[calc(100vh - 113px)] max-container mt-[113px] flex flex-col items-center">
        <div data-aos="fade-down" className="flex justify-center items-center p-12">
          <h2 className='my-8 h1 gradient-primary tracking-tight text-center ' >FAQs</h2>
        </div>
        <div className="grow w-full">
          <ul data-aos="fade-down" className=" bg-zinc-900 flex-col flex gap-[1px]">
            {faqContent.map((content, index) => (
              <Accordion
                content={content}
                key={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default FAQs;