import React from 'react';
import { motion } from 'motion/react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="p-10 md:p-16 border-b border-[#EEE] bg-brand-navy text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <div className="text-brand-gold text-4xl font-serif leading-none mb-4">"</div>
        <blockquote className="text-[22px] md:text-[28px] font-serif leading-[1.4] mb-8 text-white">
          Real estate is not just about land. It is about understanding how cities grow. It is about identifying where infrastructure is going. It is about understanding demand before the market fully responds. And it is about positioning yourself before the opportunity becomes obvious to everyone.
        </blockquote>
      </motion.div>
    </section>
  );
};
