import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import portrait from '../assets/images/about-portrait.jpg';

const navLinks = [
  { name: 'Overview', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Track Record', href: '#track-record' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden sticky top-0 z-50 flex items-center justify-between p-6 bg-[#000] border-b border-white/10 shrink-0">
        <h1 className="font-serif text-xl leading-tight text-white">
          Stephen<br/>Ejimchukwu
        </h1>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col justify-between bg-[#000] border-r border-white/10 p-10 w-full md:w-[320px] fixed z-40 h-[calc(100vh-77px)] md:h-screen top-[77px] md:top-0 left-0 overflow-y-auto`}>
        <div>
          <div className="w-full aspect-[4/5] bg-[#1A1A1A] border border-brand-gold mb-5 flex items-center justify-center relative overflow-hidden hidden md:flex">
            <img src={portrait} alt="Stephen" className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" />
          </div>
          <h1 className="font-serif text-[28px] leading-[1.1] mb-2 hidden md:block text-white">Stephen<br/>Ejimchukwu</h1>
          <p className="text-[12px] text-brand-gold uppercase tracking-[1px] mb-10 hidden md:block">Investment Strategist</p>

          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 text-[12px] uppercase tracking-[1.5px] mb-4 pb-1 border-b border-transparent hover:text-brand-gold hover:border-brand-gold w-max transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="text-[11px] leading-[1.6] text-white/40 mt-10 md:mt-0">
          &copy; {new Date().getFullYear()} Stephen Ejimchukwu.<br/>
          Managing Director, Top-Tier Realty.
        </div>
      </aside>
    </>
  );
};
