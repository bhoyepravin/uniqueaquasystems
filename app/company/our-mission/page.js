// import { buildMetadata } from "@/utils/seoConfig";
// import { aboutData } from "@/lib/data";

// export const metadata = buildMetadata("our-mission");

// export default function OurMissionPage() {
//   const { mission, vision } = aboutData;
//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 space-y-8">
//         <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-10 text-white">
//           <h1 className="text-4xl font-bold mb-4">{mission.title}</h1>
//           <p className="text-white/90 leading-relaxed text-lg">{mission.description}</p>
//         </div>
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">{vision.title}</h2>
//           <div className="w-16 h-1 bg-[#0077B6] rounded mb-6" />
//           <p className="text-gray-700 leading-relaxed text-lg">{vision.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { aboutData } from "@/lib/data";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Globe, Shield, TrendingUp, Award, Zap } from "lucide-react";

export default function OurMissionPage() {
  const { mission, vision } = aboutData;

  const coreObjectives = [
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Delivering superior water treatment solutions with unwavering quality standards"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expanding our footprint to serve communities worldwide"
    },
    {
      icon: Rocket,
      title: "Innovation Drive",
      description: "Continuously advancing water treatment technologies"
    },
    {
      icon: Award,
      title: "Customer First",
      description: "Building lasting relationships through exceptional service"
    }
  ];

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

      <div className="max-w-6xl mx-auto px-6 relative z-10 md:pt-10">
        {/* Header Section */}
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
              Our Guiding Light
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Mission &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Vision
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
            Our mission and vision drive every decision we make, guiding us toward a sustainable future
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#06B6D4] rounded-3xl p-10 md:p-12 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">{mission.title}</h2>
                  <div className="w-20 h-0.5 bg-white/40 mt-2" />
                </div>
              </div>
              <p className="text-white/90 leading-relaxed text-base md:text-lg max-w-3xl">
                {mission.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Section */}
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
            <div className="p-10 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#06B6D4]" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{vision.title}</h2>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mt-2" />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {vision.description}
              </p>
            </div>
          </div>
        </motion.div>


        
      </div>
    </div>
  );
}