// import { buildMetadata } from "@/utils/seoConfig";
// import { aboutData, companyInfo } from "@/lib/data";
// import Link from "next/link";

// export const metadata = buildMetadata("about-us");

// export default function AboutUsPage() {
//   const { whoWeAre, qualityPolicy, mission, vision, divisions } = aboutData;
//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Hero */}
//         <div className="bg-gradient-to-br from-[#03045E] to-[#0077B6] rounded-3xl p-10 text-white mb-12">
//           <h1 className="text-4xl font-bold mb-4">About Us</h1>
//           <p className="text-white/90 text-lg max-w-3xl">{whoWeAre.subtitle}</p>
//         </div>

//         {/* Highlights */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//           {whoWeAre.highlights.map((h, i) => (
//             <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
//               <div className="text-3xl font-bold text-[#0077B6] mb-1">{h.value}</div>
//               <div className="text-sm text-gray-500">{h.description}</div>
//             </div>
//           ))}
//         </div>

//         {/* About paragraphs */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h2>
//           <div className="space-y-4">
//             {whoWeAre.paragraphs.map((p, i) => (
//               <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
//             ))}
//           </div>
//         </div>

//         {/* Mission & Quality Policy */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-8 text-white">
//             <h2 className="text-xl font-bold mb-4">{mission.title}</h2>
//             <p className="text-white/90 leading-relaxed">{mission.description}</p>
//           </div>
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">{qualityPolicy.title}</h2>
//             <p className="text-gray-700 leading-relaxed text-sm">{qualityPolicy.description}</p>
//           </div>
//         </div>

//         {/* Vision */}
//         <div className="bg-gray-900 rounded-2xl p-8 text-white">
//           <h2 className="text-xl font-bold mb-4">{vision.title}</h2>
//           <p className="text-gray-300 leading-relaxed">{vision.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { aboutData, companyInfo } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, Target, Eye, Award, Shield, 
  TrendingUp, Droplets, Factory, 
  CheckCircle, ArrowRight, Star, 
  Heart, Globe, Leaf, Clock 
} from "lucide-react";

export default function AboutUsPage() {
  const { whoWeAre, qualityPolicy, mission, vision, divisions } = aboutData;
  
  // Map highlights to icons
  const highlightIcons = {
    "25+": TrendingUp,
    "500+": Users,
    "50+": Factory,
    "99.8%": Star
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-32 right-20 w-2 h-2 bg-[#06B6D4]/20 rounded-full" />
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#1E3A8A]/20 rounded-full" />
          <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-[#67E8F9]/30 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 md:pt-10">
        {/* Hero Section - Quality Policy Page Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            <p className="text-[#06B6D4] text-sm md:text-base font-semibold tracking-wider uppercase">
              Our Story
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            About{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Us
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
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-primary">
            {whoWeAre.subtitle}
          </p>
        </motion.div>

        {/* Highlights / Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {whoWeAre.highlights.map((h, i) => {
            const Icon = highlightIcons[h.value] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#06B6D4]/10 to-[#1E3A8A]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{h.value}</div>
                  <div className="text-xs md:text-sm text-gray-500">{h.description}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Who We Are Section - Quality Policy Card Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-1 bg-gradient-to-r from-[#1E3A8A] via-[#06B6D4] to-[#1E3A8A]" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Who We Are</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mt-2" />
                </div>
              </div>
              <div className="space-y-4">
                {whoWeAre.paragraphs.map((p, i) => (
                  <motion.p 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-gray-700 leading-relaxed font-primary"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Quality Policy Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Mission Card - Quality Policy Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative h-full bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#06B6D4] rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{mission.title}</h2>
                    <div className="w-12 h-0.5 bg-white/40 mt-1" />
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">{mission.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Quality Policy Card - Quality Policy Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative h-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{qualityPolicy.title}</h2>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mt-1" />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">{qualityPolicy.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/quality-policy" className="inline-flex items-center gap-2 text-[#06B6D4] text-sm font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Card - Quality Policy Banner Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -5 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gray-900 rounded-3xl p-8 md:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#06B6D4]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#1E3A8A]/20 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-white/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{vision.title}</h2>
                  <div className="w-16 h-0.5 bg-[#06B6D4]/40 mt-1" />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {vision.description}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}