import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'SparkleClean transformed my home! The team was professional and thorough. My house has never looked better.',
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'We use SparkleClean for our office cleaning and couldn\'t be happier. Reliable and excellent service every time.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'Their vacation rental cleaning service is a game-changer. Fast turnaround and impeccable results.',
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">
          What Our <span className="text-lighter">Clients Say</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-darker/80 p-6 rounded-lg border border-primary/30"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lighter">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials