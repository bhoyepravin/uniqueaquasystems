"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, Award, Globe, Shield, Users, Droplets, TrendingUp } from "lucide-react";
import { aboutData } from "@/lib/data";

export default function AboutSection() {
  const { whoWeAre, qualityPolicy, mission } = aboutData;
  
  const features = [
    { title: qualityPolicy.title, icon: Shield, color: "#1E3A8A" },
    { title: mission.title, icon: TrendingUp, color: "#06B6D4" },
    { title: "ISO Certified Company", icon: Award, color: "#1E3A8A" },
    { title: "Asian Region Service", icon: Globe, color: "#06B6D4" },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-[#06B6D4]/30 rounded-full" />
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#1E3A8A]/20 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#67E8F9]/40 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left - Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Section Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#06B6D4]" />
                <span className="text-[#06B6D4] font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#06B6D4]" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {whoWeAre.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {whoWeAre.paragraphs[0]}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {whoWeAre.paragraphs[2]}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${item.color}15` }}
                    >
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base group-hover:text-[#1E3A8A] transition-colors">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link href="/company/about-us">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right - Stats + Mission Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Highlights Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {whoWeAre.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100">
                    <div className="relative">
                      <div className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                        {h.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500 font-medium">
                        {h.description}
                      </div>
                      {/* Decorative dot */}
                      <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#06B6D4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission Card - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#06B6D4]" />
              
              <div className="relative p-6 md:p-8 text-white">
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Droplets size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {mission.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  {mission.description}
                </p>
                
                {/* Decorative Arrow */}
                <div className="absolute bottom-4 right-4 opacity-20">
                  <TrendingUp size={48} />
                </div>
              </div>
            </motion.div>

            {/* Additional Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-4 pt-2"
            >
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Shield size={12} />
                <span>Trusted Since 2002</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Users size={12} />
                <span>500+ Happy Clients</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <Globe size={12} />
                <span>Asian Region</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}