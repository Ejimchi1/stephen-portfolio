import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="p-10 md:p-16 border-b border-[#EEE] flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[500px]"
      >
        <h2 className="font-serif text-4xl md:text-[42px] m-0 leading-[1.1] text-brand-navy">
          Positioning for where value is going.
        </h2>
        <p className="text-[15px] mt-4 text-[#666] leading-[1.5]">
          Helping clients navigate the Abuja real estate market through data-driven acquisition and strategic foresight.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-brand-gold pl-5 shrink-0"
      >
        <div className="font-serif text-[32px] text-brand-navy leading-none mb-1">₦2B+</div>
        <div className="text-[11px] uppercase text-[#999] tracking-[1px] font-medium">Direct Asset Sales</div>
      </motion.div>
    </section>
  );
};
