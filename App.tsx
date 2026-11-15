/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Company } from './Company';
import { Philosophy } from './Philosophy';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { Footer } from './Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-ink selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main className="md:ml-[320px] w-full md:w-[calc(100%-320px)] relative overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Company />
        <Philosophy />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
