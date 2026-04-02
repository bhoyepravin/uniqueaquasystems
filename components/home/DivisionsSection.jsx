"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskConical, Settings, Wrench, ArrowRight, Droplets, Shield, Zap } from "lucide-react";
import { aboutData } from "@/lib/data";

const iconMap = { FlaskConical, Settings, Wrench };

// Ensure divisionLinks matches the number of divisions
// Add fallback links if needed
const getDivisionLink = (index) => {
  const links = [
    "/products/chemical",
    "/products/mechanical", 
    "/products/spares",
    "/products/water-treatment" // Fallback for any extra divisions
  ];
  return links[index] || "/products";
};

export default function DivisionsSection() {
  // Check if aboutData.divisions exists and is an array
  if (!aboutData?.divisions || !Array.isArray(aboutData.divisions)) {
    return null;
  }

  return (
    <section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#06B6D4]/20 rounded-full" />
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#1E3A8A]/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#67E8F9]/30 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            <p className="text-[#06B6D4] text-sm md:text-base font-semibold tracking-wider uppercase">
              Our Divisions
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Complete Water Treatment{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Under One Roof
              </span>
              <svg className="absolute bottom-2 left-0 w-full h-3 -z-0" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,8 C30,4 60,12 90,8 C120,4 150,12 180,8 C210,4 240,12 270,8 C300,4 330,12 360,8" 
                  stroke="url(#gradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-primary">
            Unique Aqua Systems & Chemical Industries operates through three specialized divisions, 
            making us your one-stop solution for all water treatment needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {aboutData.divisions.map((division, i) => {
            const Icon = iconMap[division.icon] || FlaskConical;
            const divisionLink = getDivisionLink(i);
            
            return (
              <motion.div
                key={division.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Link href={divisionLink} className="block h-full">
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 group">
                    {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" style={{ padding: '1px' }} />
                    
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#06B6D4]/5 to-transparent rounded-full blur-2xl" />
                    
                    <div className="p-8 relative z-10">
                      {/* Icon Container with premium styling */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                        <div
                          className="relative w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg"
                          style={{ 
                            background: `linear-gradient(135deg, ${division.color}20 0%, ${division.color}10 100%)`,
                            boxShadow: `0 8px 20px -5px ${division.color}40`
                          }}
                        >
                          <Icon size={32} style={{ color: division.color }} strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      {/* Title with decorative element */}
                      <div className="relative">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1E3A8A] transition-colors duration-300 font-title">
                          {division.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mb-4 group-hover:w-20 transition-all duration-500" />
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed font-primary">
                        {division.description}
                      </p>
                      
                      {/* CTA Link with premium styling */}
                      <div className="flex items-center justify-between">
                        <span 
                          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300 font-primary" 
                          style={{ color: division.color }}
                        >
                          Explore Products 
                          <ArrowRight size={16} className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <Droplets size={12} style={{ color: division.color }} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-50 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        {/* Optional: View All Divisions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/products/mechanical"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border-2 border-[#06B6D4] text-[#06B6D4] font-semibold hover:bg-[#06B6D4] hover:text-white transition-all duration-300 group shadow-md hover:shadow-xl font-primary"
          >
            <span>View All Divisions</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}