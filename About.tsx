import React from 'react';
import { motion } from 'motion/react';
import aboutPortrait from '../assets/images/about-portrait.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="p-10 md:p-16 border-b border-[#EEE]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
        
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-[18px] text-brand-navy mb-4">Strategy & Expertise</h3>
            <p className="text-[13px] text-[#444] leading-[1.7] mb-6">
              I am a Real Estate Entrepreneur passionate about helping people make better financial decisions through property. My journey from the Igbo apprenticeship system to establishing Top-Tier Realty has taught me that the objective is not to own property, but to own the <strong className="text-brand-navy">right</strong> property.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.7] mb-6">
              Beyond real estate, I am interested in the intersection of technology, data and business, with a long-term vision of building solutions that improve the way people interact with the real estate ecosystem.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-[#EEE] p-4">
                <span className="text-[10px] text-brand-gold font-bold uppercase">Education</span>
                <div className="text-[12px] text-brand-navy font-semibold mt-1">Miva Open University Nigeria</div>
              </div>
              <div className="border border-[#EEE] p-4">
                <span className="text-[10px] text-brand-gold font-bold uppercase">Key Territory</span>
                <div className="text-[12px] text-brand-navy font-semibold mt-1">Abuja Investment Corridors</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            <div className="aspect-[4/5] md:aspect-[3/4] w-full bg-brand-gray border border-[#EEE] relative overflow-hidden">
               <img 
                src={aboutPortrait} 
                alt="Stephen Ejimchukwu" 
                className="w-full h-full object-cover object-top grayscale mix-blend-multiply"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
