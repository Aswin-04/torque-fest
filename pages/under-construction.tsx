import React from 'react';

// Define the type for SVG component props for better type-safety
type IconProps = React.SVGProps<SVGSVGElement>;

/**
 * A construction-themed icon component.
 * It features a simple gear/cog design.
 */
const ConstructionIcon = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="M11 10.27 7 3.34" />
    <path d="m20.66 17-1.73-1" />
    <path d="m3.34 7 1.73 1" />
    <path d="M14 12h8" />
    <path d="M2 12h2" />
    <path d="m20.66 7-1.73 1" />
    <path d="m3.34 17 1.73-1" />
    <path d="m17 3.34-1 1.73" />
    <path d="m11 13.73-4 6.93" />
  </svg>
);

/**
 * A modern, clean "Under Construction" page component.
 * Uses Tailwind CSS for styling and is designed to fit well within a Next.js/Shadcn project.
 */
export default function UnderConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 font-sans">
      <div className="text-center max-w-lg w-full">
        {/* Animated Icon */}
        <div className="mb-8">
          <ConstructionIcon className="h-20 w-20 text-yellow-400 mx-auto animate-spin-slow" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-100 mb-4">
          Website Development in Progress
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Our website for the symposium is currently under construction. We are working hard to bring you an amazing online experience.
        </p>

        {/* Call to action or information */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
           <h2 className="text-lg font-semibold text-gray-200 mb-2">Stay Tuned!</h2>
           <p className="text-gray-400">
             The full site will be launching soon. Please check back later!
           </p>
        </div>
        
        {/* Footer with college name */}
        <footer className="mt-12 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sri Sai Ram Enginerring College. All Rights Reserved.</p>
        </footer>
      </div>

      

    </div>
  );
}