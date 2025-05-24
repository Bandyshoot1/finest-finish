'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion/dist/framer-motion'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', data)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Contact <span className="text-lighter">Us</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Have questions about our services or want to schedule a cleaning? Fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-lighter" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-lighter" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">info@finestfinish.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-lighter" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-300">123 Cleaning St, Suite 100<br />Clean City, CC 12345</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitSuccess ? (
              <div className="bg-primary/10 p-8 rounded-xl border border-lighter/30 text-center">
                <svg className="h-16 w-16 text-lighter mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
                <p className="text-gray-300 mb-6">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-primary/10 p-8 rounded-xl border border-primary/30">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-darker/70 border border-primary/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lighter"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full bg-darker/70 border border-primary/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lighter"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full bg-darker/70 border border-primary/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lighter"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block mb-2">Service Interested In</label>
                  <select
                    id="service"
                    {...register('service')}
                    className="w-full bg-darker/70 border border-primary/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lighter"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="vacation">Vacation Rental Cleaning</option>
                    <option value="business">Business Cleaning</option>
                    <option value="construction">Construction Cleanup</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full bg-darker/70 border border-primary/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lighter"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage