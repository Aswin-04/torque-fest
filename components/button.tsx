import React from "react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "default" }) => {
  const baseStyles =
    "font-grotesk w-full flex justify-center items-center whitespace-nowrap transition-all duration-150 ease-in-out font-medium rounded-lg px-4 py-1.5 group cursor-pointer";

  const variants = {
    default:
      "text-zinc-950 bg-gradient-to-r from-primary/50 via-primary/90 to-primary/50",
    outline:
      "text-primary/70 border bg-black border-primary/50",
  };

  return (
    <button className={clsx(baseStyles, variants[variant])}>
      {children}
      <ArrowRight className="w-3 h-3 tracking-normal text-[#003f6c]-500 group-hover:translate-x-1 transition-transform duration-150 ease-in-out ml-1" />
    </button>
  );
};

export default Button;
