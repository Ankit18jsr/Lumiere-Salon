import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useForm as useRHForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { fadeUp, pageTransition } from '../utils/animations';

const services = [
  "Signature Haircut & Style",
  "Balayage Full Canvas",
  "Color Adjustment",
  "Lumière Glow Facial",
  "Bridal Makeup Trial",
  "Manicure Polish"
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useRHForm();

  const handleNext = async () => {
    let isValid = false;
    if (step === 1) isValid = await trigger(['service']);
    if (step === 2) isValid = await trigger(['date', 'time']);
    
    if (isValid) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/bookings', data);
      toast.success('Appointment requested successfully! We will email you to confirm.');
      setStep(4); // Success step
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="bg-beige-50 min-h-screen py-32 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-lg text-charcoal mb-4">Request an Appointment</h1>
          <p className="text-gray-500 font-sans">Reserve your serene escape via the form below.</p>
        </div>

        <div className="glass-card p-8 md:p-12 bg-white flex flex-col relative overflow-hidden">
          
          {/* Progress Bar */}
          {step < 4 && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-beige-200">
              <motion.div 
                className="h-full bg-gold-400"
                initial={{ width: `${((step - 1) / 3) * 100}%` }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            
            {/* Step 1: Service */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full space-y-6"
              >
                <h3 className="heading-md text-charcoal">Step 1: Select Service</h3>
                <div className="space-y-4">
                  <label className="block text-sm font-sans text-gray-600 mb-2">What service are you booking?</label>
                  <select 
                    {...register("service", { required: "Please select a service" })} 
                    className="form-input"
                  >
                    <option value="">-- Choose a treatment --</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="text-blush-500 text-xs">{errors.service.message}</span>}
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={handleNext} className="btn-gold">Next Step</button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full space-y-6"
              >
                <h3 className="heading-md text-charcoal">Step 2: Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans text-gray-600 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      {...register("date", { required: "Date is required" })}
                      className="form-input w-full"
                    />
                    {errors.date && <span className="text-blush-500 text-xs">{errors.date.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-sans text-gray-600 mb-2">Preferred Time</label>
                    <select 
                      {...register("time", { required: "Time is required" })}
                      className="form-input"
                    >
                      <option value="">-- Choose time --</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                    </select>
                    {errors.time && <span className="text-blush-500 text-xs">{errors.time.message}</span>}
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={handleBack} className="text-gray-400 hover:text-charcoal transition-colors">← Back</button>
                  <button type="button" onClick={handleNext} className="btn-gold">Next Step</button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <motion.form
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col h-full space-y-6"
              >
                <h3 className="heading-md text-charcoal">Step 3: Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" placeholder="First Name" {...register("firstName", { required: "First name is required" })} className="form-input" />
                    {errors.firstName && <span className="text-blush-500 text-xs">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" {...register("lastName", { required: "Last name is required" })} className="form-input" />
                    {errors.lastName && <span className="text-blush-500 text-xs">{errors.lastName.message}</span>}
                  </div>
                </div>
                <div>
                  <input type="email" placeholder="Email Address" {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })} className="form-input" />
                  {errors.email && <span className="text-blush-500 text-xs">{errors.email.message}</span>}
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" {...register("phone", { required: "Phone is required" })} className="form-input" />
                  {errors.phone && <span className="text-blush-500 text-xs">{errors.phone.message}</span>}
                </div>
                <div>
                  <textarea placeholder="Any special notes or requests?" {...register("notes")} className="form-input" rows="3"></textarea>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <button type="button" onClick={handleBack} disabled={isSubmitting} className="text-gray-400 hover:text-charcoal transition-colors">← Back</button>
                  <button type="submit" disabled={isSubmitting} className="btn-gold">
                    {isSubmitting ? 'Submitting...' : 'Confirm Request'}
                  </button>
                </div>
              </motion.form>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-gold-100 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  ✓
                </div>
                <h3 className="heading-md text-charcoal mb-4">Request Received</h3>
                <p className="text-gray-500 font-sans mb-8">
                  Thank you, {watch('firstName')}. We have received your booking request for {watch('service')} on {watch('date')}. Our concierge will email you shortly to confirm your appointment.
                </p>
                <button onClick={() => window.location.reload()} className="btn-outline border-beige-300">Book Another</button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking;
