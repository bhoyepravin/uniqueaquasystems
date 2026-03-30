"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowRight, Droplets, Shield, Clock, CheckCircle, Zap } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function CTASection() {
  const benefits = [
    { icon: Shield, text: "ISO Certified" },
    { icon: Clock, text: "24/7 Support" },
    { icon: CheckCircle, text: "Tailored Solutions" },
    { icon: Zap, text: "Quick Response" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#06B6D4]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1E3A8A]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <div className="absolute top-20 right-20 w-2 h-2 bg-[#06B6D4]/20 rounded-full" />
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-[#1E3A8A]/20 rounded-full" />
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#67E8F9]/30 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Premium gradient background with animated glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#06B6D4]" />
          
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
         
          
          <div className="relative p-8 sm:p-12 md:p-16 text-center">
            {/* Icon with animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative inline-block mb-6"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
              <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Droplets size={40} className="text-white" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Solve Your Water Treatment Challenges?
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch with our water treatment experts. We provide tailored solutions for every industry and every scale — from domestic to large industrial plants.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8"
            >
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-center justify-center gap-2 text-white/80 text-sm">
                    <Icon size={14} className="text-white/60" />
                    <span>{benefit.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.div>
              </Link>
              <Link href="/products">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 cursor-pointer"
                >
                  <span>Browse Products</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Contact Info with decorative separator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/20"
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90">
                <a 
                  href={`tel:${companyInfo.phone1}`} 
                  className="flex items-center gap-2 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span className="font-medium">{companyInfo.phone1}</span>
                </a>
                <div className="hidden sm:block w-px h-6 bg-white/20" />
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="flex items-center gap-2 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="font-medium">{companyInfo.email}</span>
                </a>
              </div>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3 mt-6"
            >
              <div className="flex items-center gap-1">
                <Shield size={12} className="text-white/50" />
                <span className="text-white/50 text-xs">20+ Years Experience</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-1">
                <CheckCircle size={12} className="text-white/50" />
                <span className="text-white/50 text-xs">500+ Happy Clients</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-1">
                <Zap size={12} className="text-white/50" />
                <span className="text-white/50 text-xs">24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}