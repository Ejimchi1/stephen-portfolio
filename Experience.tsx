import React from 'react';
import { motion } from 'motion/react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="p-10 md:p-16 border-b border-[#EEE] bg-brand-gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-serif text-[18px] text-brand-navy mb-8">Professional Experience</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-l border-[#CCC] pl-6 relative before:absolute before:left-[-4px] before:top-2 before:w-2 before:h-2 before:bg-brand-gold before:rounded-full">
            <div className="text-[10px] uppercase tracking-[1px] text-brand-gold font-bold mb-1">Present</div>
            <h4 className="font-serif text-[16px] text-brand-navy mb-1">Managing Director</h4>
            <div className="text-[12px] text-[#666]">Top-Tier Realty</div>
            <p className="text-[13px] text-[#444] leading-[1.6] mt-3">
              Responsible for strategic direction, business development, investment positioning, and client relationships.
            </p>
          </div>

          <div className="border-l border-[#CCC] pl-6 relative before:absolute before:left-[-4px] before:top-2 before:w-2 before:h-2 before:bg-[#CCC] before:rounded-full">
            <div className="text-[10px] uppercase tracking-[1px] text-[#999] font-bold mb-1">Previous</div>
            <h4 className="font-serif text-[16px] text-brand-navy mb-1">Sales &amp; Marketing Exec.</h4>
            <div className="text-[12px] text-[#666]">Fastfruit Housing Limited</div>
            <p className="text-[13px] text-[#444] leading-[1.6] mt-3">
              Gained professional real estate experience before establishing Top-Tier Realty.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
