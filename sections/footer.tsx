// import { Link } from "react-router-dom";
"use client"
import sairamIcon from "@/public/logos/sairam-icon.png";
import { quickLinks } from "@/lib/constants";
import { Mail } from "lucide-react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // sm:px-16 px-8 sm:py-24 py-12
  return (
    <section className="bg-zinc-950">
      <footer className="max-container padding-x pt-12 sm:pt-24 pb-12 text-accent/80">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-0 wide:justify-around">
          <div className="bg-white/80 w-[160px] h-[56px] rounded lg:self-center ">
            <Image
              src={sairamIcon}
              alt="sairam-icon"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary font-palanquin font-medium text-2xl leading-normal">
              Location
            </h4>

            <div className="mt-2">
              <p className="font-mono  hover:text-primary transition duration-250 ease-in-out">
                {"📍 "}
                <a
                  href="https://www.google.com/maps/place/Sri+Sairam+Engineering+College/@12.9606025,80.0563133,17.72z/data=!4m6!3m5!1s0x3a52f596c7fb72c9:0x8e7a30529f9ef227!8m2!3d12.9602171!4d80.0574071!16s%2Fm%2F02ppmyg?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-8"
                >
                  Sri Sai Ram Engineering College, <br />
                  Sai Leo Nagar, West Tambaram <br />
                  Chennai - 600 044 <br />
                  Tamilnadu <br />
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-primary font-palanquin font-medium text-2xl leading-normal">
              {quickLinks.title}
            </h4>
            <ul className="font-mono">
              {quickLinks.links.map((link) => (
                <li
                  key={link.name}
                  className="mt-2 hover:text-primary transition duration-250 ease-in-out"
                >
                  <Link href={link.linkTo}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary font-palanquin font-medium text-2xl leading-normal">
              Reach Us
            </h4>

            <ul className="font-mono">
              <li className="mb-1 flex items-center gap-2  hover:text-primary transition duration-250 ease-in-out cursor-pointer">
                <InstagramIcon fontSize="medium" />
                <a
                  href="https://www.instagram.com/sairam_mech?igsh=Zzh1dmMzbjNlYjd3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-8"
                >
                  @sairam_mech
                </a>
              </li>
              <li className="mb-1 pl-[1px] flex items-center gap-x-2 text-white-400 hover:text-primary transition duration-250 ease-in-out">
                <Mail size={22} />
                <p>sympo.mech@sairam.edu.in</p>
              </li>
              <li className="pl-[2px] text-start text-sm text-white-400 font-poppins tracking-normal flex flex-col justify-normal gap-2 mt-3">
                <p className=" mb-1 flex items-center gap-2 hover:text-primary transition duration-250 ease-in-out">
                  <Phone size={20} />
                  <span>+91 80981 32667</span>
                </p>
                <p className="mb-1 flex items-center gap-2 hover:text-primary transition duration-250 ease-in-out">
                  <Phone size={20} />
                  <span>+91 63694 03809</span>
                </p>
                <p className="flex items-center gap-2 hover:text-primary transition duration-250 ease-in-out">
                  <Phone size={20} />
                  <span>+91 99629 10748</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-zinc-950 flex flex-col md:justify-center md:items-center border padding-x py-8 border-x-0 border-slate-gray/20 md:text-center ">
        <div className="mb-4 text-accent/80 font-mono">
          Stay updated with the latest events and more..
        </div>
        <div className="flex gap-2">
          <a
            href="https://www.instagram.com/sairam_mech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition duration-250 ease-in-out"
          >
            <InstagramIcon
              fontSize="large"
              sx={{
                // transition: "color 0.25s ease-in-out",
                // "&:hover": {
                //   color: "#90e7e9",
                // },
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/sairam-mechanical-engineering/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition duration-250 ease-in-out"
          >
            <LinkedInIcon
              fontSize="large"
              sx={{
                // transition: "color 0.25s ease-in-out",
                // "&:hover": {
                //   color: "#90e7e9",
                // },
              }}
            />
          </a>
          <a
            href="https://www.youtube.com/@sairammechanicalofficial8424"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition duration-250 ease-in-out"
          >
            <YouTubeIcon
              sx={{
                fontSize: 46,
                paddingBottom: 1,
                // transition: "color 0.25s ease-in-out",
                // "&:hover": {
                //   color: "#90e7e9",
                // },
              }}
            />
          </a>
          <a
            href="https://www.facebook.com/sairamecmech?mibextid=qi2Omg&rdid=6tTnLAW1kU7pwNuO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FmPf3KkcC7Kqgxpet%2F%3Fmibextid%3Dqi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition duration-250 ease-in-out"
          >
            <FacebookIcon
              fontSize="large"
              sx={{
                // fontSize: 46,
                // paddingBottom: 1,
                // transition: "color 0.25s ease-in-out",
                // "&:hover": {
                //   color: "#90e7e9",
                // },
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;