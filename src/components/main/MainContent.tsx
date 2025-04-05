"use client";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function MainContent() {
  return (
    <main className="min-h-screen pt-16">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
