import React from 'react';
import { Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div>
        <div className="text-[10px] uppercase tracking-[1px] text-brand-gold mb-2 font-bold">Informed Investment Advisor</div>
        <div className="font-serif text-[24px]">Elevate Your Property Strategy.</div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="text-right hidden sm:block">
          <div className="text-[12px] mb-1">stephenejimchukwu1@gmail.com</div>
          <div className="text-[12px] opacity-70">+234 907 726 6555</div>
        </div>
        <a 
          href="https://www.linkedin.com/in/stephen-ejimchukwu-07560924b" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white text-brand-navy text-[10px] uppercase tracking-[2px] font-bold py-4 px-6 hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <Linkedin size={14} /> Work With Me
        </a>
      </div>
    </footer>
  );
};
