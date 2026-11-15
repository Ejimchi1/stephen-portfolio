import React from 'react';
import { motion } from 'motion/react';
import companyImage from '../assets/images/company-image.jpg';

export const Company: React.FC = () => {
  return (
    <section id="company" className="p-10 md:p-16 border-b border-[#EEE]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-[18px] text-brand-navy mb-4">Top-Tier Realty</h3>
          <p className="text-[13px] text-[#444] leading-[1.7] mb-6">
            An Abuja-based real estate company focused on helping clients discover, evaluate and acquire strategic property investments. Our approach goes beyond selling property. We help clients understand the market, location, infrastructure, potential demand and long-term value behind an investment.
          </p>
          
          <div className="aspect-[4/3] w-full bg-brand-gray border border-[#EEE] relative overflow-hidden mb-6">
            <img 
              src={companyImage} 
              alt="Top-Tier Realty Properties" 
              className="w-full h-full object-cover grayscale mix-blend-multiply"
            />
            <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[1px] text-brand-navy/50 font-bold mix-blend-normal z-[-1]">
              Image Placeholder
            </div>
          </div>

          <div className="p-5 border-l-4 border-brand-gold bg-brand-gray">
            <p className="font-serif text-[15px] italic text-brand-navy m-0">
              "People shouldn't just buy property. They should understand the investment behind it."
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-[18px] text-brand-navy mb-4">Investment Philosophy</h3>
          <p className="text-[13px] text-[#444] leading-[1.7] mb-6">
            I believe real estate investment is a game of positioning. Before making an investment decision, I encourage clients to consider: Location, Infrastructure, Accessibility, Development trajectory, Demand, Entry point, and Future value.
          </p>
          <p className="text-[13px] text-brand-navy font-semibold">
            The objective is not to own property for the sake of ownership. The objective is to own the right property for your financial vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
