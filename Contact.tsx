import React, { useState } from 'react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="p-10 md:p-16 bg-white border-b border-[#EEE]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12">
        <div>
          <h3 className="font-serif text-[18px] text-brand-navy mb-4">Contact</h3>
          <p className="text-[13px] text-[#666] leading-[1.6] mb-8">
            Whether you are looking to acquire property, build a real estate portfolio, or understand an emerging investment location — I'd be glad to connect.
          </p>
          <div className="text-[12px] text-brand-navy font-semibold mb-2">stephenejimchukwu1@gmail.com</div>
          <div className="text-[12px] text-[#666] mb-6">+234 907 726 6555</div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border-b border-[#EEE] py-3 text-[13px] text-brand-navy focus:border-brand-gold outline-none w-full mb-4 bg-transparent transition-colors"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-b border-[#EEE] py-3 text-[13px] text-brand-navy focus:border-brand-gold outline-none w-full mb-4 bg-transparent transition-colors"
              placeholder="Email Address"
            />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="border-b border-[#EEE] py-3 text-[13px] text-brand-navy focus:border-brand-gold outline-none w-full mb-4 bg-transparent transition-colors"
              placeholder="Phone Number"
            />
            <textarea
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="border-b border-[#EEE] py-3 text-[13px] text-brand-navy focus:border-brand-gold outline-none w-full mb-8 bg-transparent transition-colors resize-none"
              placeholder="How can we help you?"
            ></textarea>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-max bg-brand-navy text-white text-[10px] uppercase tracking-[2px] font-bold py-4 px-8 hover:bg-brand-gold transition-colors disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 text-green-800 text-[12px] border border-green-100">
                Thank you for your message. We will get back to you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
