import React from 'react'
import { motion } from 'framer-motion'

export default function ChefSection() {
  return (
    <section className="relative bg-[#2d1b15] text-[#f7eedc] py-24 z-10">
      {/* Torn paper top edge effect to blend with previous section */}
      <div 
        className="absolute top-[-30px] left-0 w-full h-[60px] z-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\' opacity=\'.25\' fill=\'%232d1b15\'/%3E%3Cpath d=\'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\' opacity=\'.5\' fill=\'%232d1b15\'/%3E%3Cpath d=\'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\' fill=\'%232d1b15\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(180deg)'
        }}
      />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">Meet Our Master Chef</h2>
            <p className="text-lg leading-relaxed mb-6 font-light opacity-90">
              With over 20 years of culinary experience across Italy and France, Chef Antonio brings an unparalleled level of expertise and passion to our kitchen. 
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-xl mb-1 text-primary">Uncompromising Hygiene</h4>
                <p className="text-sm opacity-80">Our kitchen operates under the strictest international safety and hygiene protocols, ensuring every dish is as safe as it is delicious.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-bold text-xl mb-1 text-primary">Premium Ingredients</h4>
                <p className="text-sm opacity-80">We source only the highest grade, farm-fresh local produce and authentic imported spices. Quality you can taste in every bite.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/30 p-2">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Decorative Pizza */}
            <motion.img 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              src="/pizza.png" 
              alt="Pizza" 
              className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full object-cover drop-shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
