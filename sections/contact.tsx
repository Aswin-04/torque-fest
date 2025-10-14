import contactUsImg  from "@/public/logos/contact-us-1.svg"
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const phoneNumbers = [
  "+91 98847 17979",
  "+91 97908 17205",
];

const Contact = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col gap-8 lg:hidden" >
        <h2 className="h2 font-palanquin uppercase text-center font-bold tracking-tight gradient-primary">Contact Us</h2>
        <div className="rounded-xl bg-zinc-950/50">
          <Image src={contactUsImg} alt="contact-logo" width={350} className="p-4 mx-auto rounded-3xl" ></Image>
          <ul className="flex flex-col items-center py-12 px-4 gap-6 justify-start max-sm:text-center">
            {phoneNumbers.map((phone, index) => (
              <li key={index} className="flex  gap-2 font-mono text-primary">
                <Phone size={20} fill="" />
                <p >
                  {phone}
                </p>
              </li>
            ))}
            <li key={"email"} className="flex  gap-2 font-mono text-primary">
              <Mail/>
              <p>saimech25@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-lg:hidden bg-zinc-950/50  flex justify-center gap-10 rounded-xl py-4">
        <div className="min-w-[40%] px-4 flex justify-center items-center">
          <Image
            src={contactUsImg}
            alt="events"
            width={350}
            className=" rounded-3xl"
          />
        </div>
        <div className="py-8 px-4">
            <h2 className="h2 font-palanquin uppercase text-center font-bold tracking-tight gradient-primary">
              Contact Us
            </h2>
          <div className="flex flex-col items-center py-12 px-4 gap-6 justify-center">
            <ul className="flex flex-col  items-start gap-6 justify-center">
              {phoneNumbers.map((phone, index) => (
                <li key={index} className="flex  gap-2 font-mono text-primary">
                  <Phone size={20} fill="" />
                  <p className="">
                    {phone}
                  </p>
                </li>
              ))}
              <li key={"email"} className="flex  gap-2 font-mono text-primary">
                <Mail/>
                <p>saimech25@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;