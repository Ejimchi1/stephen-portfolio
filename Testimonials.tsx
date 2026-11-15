import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Working with Stephen was one of the best decisions I made as an investor. He walked me through the location, the infrastructure plans around it, and the long-term value case before I committed a single naira. Professional, patient, and honest.",
    author: "Prince Chimenem Godspower",
  },
  {
    quote: "I was based abroad when I decided to invest in property back home. Stephen made the entire process seamless with detailed updates, verified documentation, and video walkthroughs. If you're in the diaspora, Stephen is who you want handling it.",
    author: "Obasi Blessing Nmesoma",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="p-10 md:p-16 border-b border-[#EEE] bg-brand-gray">
      <h3 className="font-serif text-[18px] text-brand-navy mb-8">Client Feedback</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="p-8 bg-white border border-[#EEE] relative"
          >
            <p className="text-[13px] text-[#444] font-serif italic mb-6 leading-[1.7]">
              "{testimonial.quote}"
            </p>
            <div className="text-[10px] uppercase tracking-[1px] font-bold text-brand-gold">
              - {testimonial.author}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
