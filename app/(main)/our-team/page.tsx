"use client"
// import { useEffect } from "react";
import ProfileCard from '@/components/profile-card';
import {
  keyPersonsProfiles,
  staffCoordinatorsProfiles,
  studentCoordinatorsProfiles,
} from '@/lib/constants'



const OurTeam = () => {

  
  return (
    <main className="relative">

      <section className="max-container pt-[6.688rem]">
        <div data-aos="fade-down"className="flex justify-center items-center pt-12 lg:p-12">
          <h2 className='my-10 h1 gradient-primary tracking-tight text-center ' >Our Team</h2>
        </div>

        <section className="padding-x pb-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight gradient-primary">
              Key Persons
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {keyPersonsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight gradient-primary">
              Faculty <span className="whitespace-nowrap">Co-ordinators</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center">
            {staffCoordinatorsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>

        <section className="padding-x py-12">
          <div data-aos="fade-in" className="my-4 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight gradient-primary">
              Student <span className="whitespace-nowrap">Co-ordinators</span>
            </h2>
          </div>

          <div className="flex gap-x-24 gap-y-8 flex-wrap justify-center padding-b">
            {studentCoordinatorsProfiles.map((profile, index) => (
              <ProfileCard profile={profile} key={index} />
            ))}
          </div>
        </section>
      </section>

    </main>
  );
};

export default OurTeam;