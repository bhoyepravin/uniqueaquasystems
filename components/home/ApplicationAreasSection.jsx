"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Wind, Flame, Pill, Factory, Coffee, Shirt, Zap, 
  Building2, Building, Cog, ArrowRight, Droplets, 
  ChevronRight, Sparkles, Shield, TrendingUp 
} from "lucide-react";
import { applicationAreas } from "@/lib/data";

const iconMap = { Wind, Flame, Pill, Factory, Coffee, Shirt, Zap, Building2, Building, Cog };

export default function ApplicationAreasSection() {
  const featured = applicationAreas.slice(0, 6);
  
  // Stats for the section
  const stats = [
    { value: "200+", label: "Industries Served", icon: Building2 },
    { value: "5000+", label: "Projects Completed", icon: TrendingUp },
    { value: "99%", label: "Client Satisfaction", icon: Sparkles },
    { value: "24/7", label: "Technical Support", icon: Shield },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#06B6D4]" />
      
      {/* Animated wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 w-full h-48" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="white" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <div className="absolute top-20 right-20 w-2 h-2 bg-white/20 rounded-full" />
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white/20 rounded-full" />
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/30 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-white/90 font-semibold text-sm uppercase tracking-wider">
              Application Areas
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/50" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Tailored water treatment solutions for every industry — from cooling towers to pharmaceutical pure water systems.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featured.map((area, i) => {
            const Icon = iconMap[area.icon] || Factory;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full group"
              >
                <Link href={`/application-areas/${area.slug}`} className="block h-full">
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:bg-white/20">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="p-6 relative z-10">
                      {/* Icon Container */}
                      <div className="relative mb-5">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                          <Icon size={28} className="text-white" />
                        </div>
                      </div>
                      
                      {/* Industry Name */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                        {area.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                        {area.description}
                      </p>
                      
                      {/* Solutions List */}
                      <div className="space-y-1.5 mb-4">
                        {area.solutions.slice(0, 2).map((s, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-white/60 group-hover:text-white/80 transition-colors">
                            <div className="w-1 h-1 rounded-full bg-white/40" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Link */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 group-hover:text-white group-hover:gap-2 transition-all duration-300">
                          Learn More
                          <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <Droplets size={14} className="text-white/40 group-hover:text-white/70 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/application-areas">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-white text-[#1E3A8A] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <span>View All Application Areas</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-12 pt-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-xs text-white/60">Expert Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-xs text-white/60">Tailored Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-xs text-white/60">ISO Certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}