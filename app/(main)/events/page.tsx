import React from "react";
import { technicalEvents, nonTechnicalEvents, workshops } from "@/lib/constants";
import EventCard from "@/components/event-card";

const Events = () => {
  return (
    <section className="pt-[133px]">
      <div className="padding-b  padding-x max-container">
        <h2 className="my-10 text-4xl md:text-[44px] font-sans font-bold tracking-tight gradient-primary text-center uppercase">
          Events
        </h2>

        {/* === TECHNICAL EVENTS === */}
        <div className="my-16">
          <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight gradient-primary mb-8 text-center">
            Technical Events
          </h2>
          <ul className="flex flex-wrap justify-center gap-6">
            {technicalEvents.map((event) => (
              <li key={event.id}>
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        </div>

        {/* === NON-TECHNICAL EVENTS === */}
        <div className="my-16">
          <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight gradient-primary mb-8 text-center">
            Non-Technical Events
          </h2>
          <ul className="flex flex-wrap justify-center gap-6">
            {nonTechnicalEvents.map((event) => (
              <li key={event.id}>
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        </div>

        {/* === WORKSHOPS === */}
        <div className="my-16">
          <h2 className="text-3xl md:text-[36px] uppercase font-sans font-semibold tracking-tight gradient-primary mb-8 text-center">
            Workshops
          </h2>
          <ul className="flex flex-wrap justify-center gap-6">
            {workshops.map((event) => (
              <li key={event.id}>
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Events;
