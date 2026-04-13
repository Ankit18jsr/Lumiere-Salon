import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { fadeUp, fadeLeft, fadeRight, pageTransition } from '../utils/animations';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Temporary simulation
    return new Promise(resolve => {
      setTimeout(() => {
        toast.success('Your message has been sent. We will respond shortly.');
        reset();
        resolve();
      }, 1000);
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="bg-white min-h-screen pb-24"
    >
      <section className="pt-40 pb-16 px-4 text-center">
        <motion.h1 variants={fadeUp} className="heading-xl text-charcoal mb-4">Contact Us</motion.h1>
        <motion.p variants={fadeUp} className="text-gray-500 font-sans max-w-xl mx-auto">
          We would be delighted to hear from you. Reach out for consultations or inquiries.
        </motion.p>
        <div className="gold-divider"></div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-beige-50 rounded-2xl overflow-hidden shadow-glass">
          
          {/* Info Panel Left */}
          <motion.div variants={fadeLeft} className="p-10 md:p-14 bg-ink text-white flex flex-col justify-between">
            <div>
              <span className="text-gold-400 uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
              <h2 className="heading-md mb-8">Lumière Salon & Spa</h2>
              
              <div className="space-y-6 font-sans text-sm text-beige-300">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-gold-400 text-lg mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Our Location</p>
                    <p>123 Luxury Avenue, Suite 100<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="text-gold-400 text-lg mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <p>+1 (310) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-gold-400 text-lg mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <p>hello@lumieresalon.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-serif text-lg text-gold-300 mb-4">Opening Hours</h4>
              <ul className="space-y-2 font-sans text-sm text-beige-300">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Tuesday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between text-white/50">
                  <span>Sunday & Monday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form Panel Right */}
          <motion.div variants={fadeRight} className="p-10 md:p-14 bg-white flex items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
              <h3 className="heading-md text-charcoal mb-6">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Your Name" {...register("name", { required: "Name is required" })} className="form-input bg-beige-50" />
                  {errors.name && <span className="text-blush-500 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <input type="email" placeholder="Your Email" {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email structure" } })} className="form-input bg-beige-50" />
                  {errors.email && <span className="text-blush-500 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>
              
              <div>
                <input type="text" placeholder="Subject" {...register("subject", { required: "Subject is required" })} className="form-input bg-beige-50" />
                {errors.subject && <span className="text-blush-500 text-xs mt-1 block">{errors.subject.message}</span>}
              </div>

              <div>
                <textarea placeholder="Your Message" {...register("message", { required: "Message is required" })} rows="5" className="form-input bg-beige-50 resize-none"></textarea>
                {errors.message && <span className="text-blush-500 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="btn-gold w-full text-center justify-center">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
