import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Event } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const EventDetailsRenderer = ({ event }: {event: Event}) => {
  return (
    <main className="relative">
      <section className="max-container mx-auto text-accent/80">
        <div className="flex justify-center items-center md:h-screen padding-x max-md:pt-[6.688rem]">
          <div className="mt-12 flex flex-col md:flex-row md:h-[calc(100vh-20rem)] overflow-hidden border border-red-950 rounded-xl pl-6 max-md:px-4 max-md:pb-8">
            {/* Event Logo/Image */}
            <div className="md:flex-shrink-0 md:w-1/3 md:min-w-[300px] md:h-full flex items-center justify-center p-4  max-md:max-w-[400px] max-md:self-center max-md:mt-8 max-xs:mt-4">
              <Image
                src={event.logo}
                alt={event.title}
                className="w-full h-auto rounded-lg shadow-lg md:sticky md:top-0  border-white/30"
              />
            </div>

            {/* Event Details */}
            <div className="flex-1 overflow-y-auto p-4  max-md:p-0 font-sans">
              <h2 className="text-primary font-inter tracking-tight text-3xl font-bold my-8 max-xs:text-2xl max-md:text-center">
                {event.title}
              </h2>

              {/* Description */}
              <div className="bg-zinc-950 p-4 rounded-lg shadow-sm mb-5">
                <h3 className="h3-text">Description</h3>
                <p className="mb-2">{event.description}</p>
              </div>

              {/* Guidelines */}
              {event.guidelines && event.guidelines.length > 0 && (
                <div className="bg-zinc-950 p-4 rounded-lg shadow-sm mb-5">
                  <h3 className="h3-text">Guidelines</h3>
                  <ol className="list-decimal list-inside pl-4">
                    {event.guidelines.map((rule, index) => (
                      <li
                        className="mb-2"
                        key={index}
                        style={{ listStylePosition: "outside" }}
                      >
                        {rule}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* General Instructions */}
              {event.generalInstructions &&
                event.generalInstructions.length > 0 && (
                  <div className="bg-zinc-950 p-4 rounded-lg shadow-sm mb-5">
                    <h3 className="h3-text">General Instructions</h3>
                    {event.generalInstructions.map((section, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="font-medium text-primary mb-2">
                          {section.title}
                        </h4>
                        <ul className="list-disc list-inside pl-4">
                          {section.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="mb-2"
                              style={{ listStylePosition: "outside" }}
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

              {/* Coordinators */}
              {event.eventCoordinators && event.eventCoordinators.length > 0 && (
                <div className="bg-zinc-950 p-4 rounded-lg shadow-sm mt-5">
                  <h3 className="h3-text">Coordinators</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {event.eventCoordinators.map((coordinator, index) => (
                      <div
                        className="flex flex-col items-start md:items-start lg:items-center"
                        key={index}
                      >
                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg mt-4 mb-4 max-xs:w-[85px] max-xs:h-[85px] bg-zinc-900">
                          {coordinator.image && (
                            <Image
                              src={coordinator.image}
                              alt={coordinator.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <p className="mb-2 max-sm:text-xs text-center self-center">
                          {coordinator.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact */}
              {event.eventCoordinators && event.eventCoordinators.length > 0 && (
                <div className="bg-zinc-950  p-4 rounded-lg shadow-sm mt-5">
                  <h3 className="h3-text">Contact</h3>
                  <div className="flex flex-col gap-4">
                    {event.eventCoordinators.map(
                      (coordinator, index) =>
                        coordinator.contact && (
                          <div
                            key={index}
                            className="flex items-center gap-2 max-sm:text-xs"
                          >
                            <p className="whitespace-nowrap">
                              {coordinator.name}:
                            </p>
                            <p className="text-bold text-primary">
                              {coordinator.contact}
                            </p>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

              {/* Notes */}
              {event.notes && event.notes.length > 0 && (
                <div className="bg-zinc-950 p-4 rounded-lg shadow-sm mt-5">
                  <h3 className="h3-text">Note</h3>
                  <ul className="list-disc list-inside pl-4">
                    {event.notes.map((note, index) => (
                      <li
                        key={index}
                        className="mb-2"
                        style={{ listStylePosition: "outside"}}
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex mt-8 max-lg:flex-col gap-4">
                <Link href={'/events'} >
                  <button
                    className="font-grotesk w-full flex justify-center items-center whitespace-nowrap transition-all duration-150 ease-in-out font-medium rounded-lg px-4 py-1.5 group cursor-pointer text-primary/70 border bg-black border-primary/50"
                    // preventScrollReset
                  >
                    <ArrowLeft className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:-translate-x-1 transition-transform duration-150 ease-in-out mr-1" />
                    Go Back
                  </button>
                </Link>

                <a
                  href="https://forms.gle/Y2JgsG5ey7n9zcJTA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Register Now</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetailsRenderer;