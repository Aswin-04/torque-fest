// file: app/events/layout.tsx

import Header from "@/sections/header";

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* No Footer here */}
    </>
  );
}