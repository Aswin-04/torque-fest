import Image from 'next/image';
import Hero from '@/sections/hero';
import Overview from '@/sections/overview';
import { eventsContent, aboutContent } from '@/lib/constants';
import Contact from '@/sections/contact';

export default function Home() {
  return (
    <>
      <section className='padding-x padding-b'>
        <Hero></Hero>
      </section>

      <section className='padding'>
        <Overview content={eventsContent} ></Overview>
      </section>
      <section className='padding'>
        <Overview content={aboutContent} ></Overview>
      </section>
      <section className='padding' >
        <Contact></Contact>
      </section>
    </>
  );
}
