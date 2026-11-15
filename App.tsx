/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Company } from './components/Company';
import { Philosophy } from './components/Philosophy';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
