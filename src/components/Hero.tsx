import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroImages = [
  'https://www.ati.net.co/img/gallery/400/BCNP5702.JPG',
  'https://www.ati.net.co/img/gallery/400/CEPR8726.JPG',
  'https://www.ati.net.co/img/gallery/400/CFKF4606.JPG',
  'https://www.ati.net.co/img/gallery/400/CHAR7168.JPG'
];

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10" />
      <div className="absolute inset-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-andarilho text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Asistencia Técnica Industrial
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Expertos en recuperación de cartera y servicios técnicos industriales
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 transition-all duration-300"
            >
              Contactar ahora
              <ArrowRight className="ml-2 h-5 w-5 animate-float" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300"
            >
              Nuestros servicios
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}