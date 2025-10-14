import { StaticImageData } from "next/image";

interface EventCoordinator {
  image: string | StaticImageData;
  name: string;
  contact: string;
}

interface GeneralInstruction {
  title: string;
  points: string[];
}

export interface Event {
  id: number;
  logo: string | StaticImageData ; 
  title: string;
  description: string;
  guidelines: string[];
  generalInstructions?: GeneralInstruction[]; // optional (only present in some events)
  eventCoordinators: EventCoordinator[];
  notes: string[];
}


export interface Details {
  title: string;
  img: StaticImageData; 
  imgAlt: string;
  imgWidth: number;
  description: string;
  linkTo?: string;
}


export interface Profile {
  id?: number;
  img: StaticImageData;       
  imgAlt: string;    
  name: string;      
  year: string;      
  linkedIn: string;
}
