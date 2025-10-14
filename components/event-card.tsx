import Image, { StaticImageData } from "next/image";
import Button from "./button";
import Link from "next/link";
import { Event } from "@/lib/types";

const EventCard = ({event}: {event: Event}) => {

  // const handleLinkClick = () => {
  //   // Save the scroll position in sessionStorage
  //   sessionStorage.setItem("scrollPosition", window.scrollY);
  // };

  return (
    <div className="p-4 max-w-xs rounded-3xl overflow-hidden  m-6  bg-zinc-950/80">
      <div className="flex justify-center " >
        <Image src={event.logo} alt={event.title} width={275} height={275} className="rounded-3xl" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold font-mono text-lg mb-2 text-center text-primary  whitespace-nowrap">{event.title}</div>
      </div>
      <div className="w-[80%] mb-8 mx-auto">
        <Link href={`events/${event.id}`} >
          <Button variant="outline" >View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;