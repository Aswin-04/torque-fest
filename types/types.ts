import { StaticImageData } from "next/image";

export interface OverviewProps {
  title: string,
  img: string | StaticImageData,
  imgAlt: string,
  imgWidth: number,
  description: string,
  linkTo: string,
  linkLabel: string,
}