"use client";
import { buildMetadata } from "@/utils/seoConfig";
import { aboutData } from "@/lib/data";
import Image from "next/image";
import { certificate_01, certificate_02, certificate_03 } from "@/public";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, FileCheck, Target, TrendingUp } from "lucide-react";

// export const metadata = buildMetadata("quality-policy");

export default function QualityPolicyPage() {
  const { qualityPolicy } = aboutData;
  
  // Certificate logos data - replace with your actual image paths
  const certificates = [
    {
      id: 1,
      name: "ISO 9001:2015",
      image: certificate_01,
      alt: "ISO 9001:2015 Certificate",
      description: "Quality Management System"
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      image: certificate_02,
      alt: "ISO 14001:2015 Certificate",
      description: "Environmental Management"
    },
    {
      id: 3,
      name: "ISO 45001:2018",
      image: certificate_03,
      alt: "ISO 45001:2018 Certificate",
      description: "Occupational Health & Safety"
    },
  ];

  const qualityCommitments = [
    {
      icon: Shield,
      title: "Zero Defect Policy",
      description: "We maintain rigorous quality checks at every stage of production to ensure zero defects in our deliverables."
    },
    {
      icon: Award,
      title: "Industry Standards",
      description: "All our products meet or exceed international quality standards and regulatory requirements."
    },
    {
      icon: CheckCircle,
      title: "Continuous Improvement",
      description: "We continuously upgrade our processes and technology to deliver superior quality solutions."
    },
    {
      icon: Target,
      title: "Customer Satisfaction",
      description: "Our quality policy is centered around exceeding customer expectations and building long-term partnerships."
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 md:pt-10">
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
              Our Commitment
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Quality{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Policy
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
            Our unwavering commitment to excellence drives everything we do. 
            We deliver world-class water treatment solutions that meet the highest quality standards.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Decorative header bar */}
            <div className="h-2 bg-gradient-to-r from-[#1E3A8A] via-[#06B6D4] to-[#1E3A8A]" />
            
            <div className="p-8 md:p-12">
              {/* Title Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{qualityPolicy.title}</h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mt-2" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-lg mb-8 font-primary">
                {qualityPolicy.description}
              </p>

             

            

              {/* Certificates Section */}
              <div className="pt-8 border-t border-gray-100">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Certifications</h3>
                  <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                    We are proud to be accredited with these prestigious certifications that validate our commitment to quality, safety, and environmental responsibility.
                  </p>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mx-auto mt-4" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                        {/* Certificate Image Container */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                          <div className="relative w-full h-full">
                            <Image
                              src={cert.image}
                              alt={cert.alt}
                              fill
                              className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          {/* Decorative badge */}
                          <div className="absolute top-3 right-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#1E3A8A] flex items-center justify-center shadow-lg">
                              <Award className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Certificate Info */}
                        <div className="p-5 text-center">
                          <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#1E3A8A] transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {cert.description}
                          </p>
                          <div className="mt-3 inline-flex items-center gap-1 text-xs text-[#06B6D4] font-medium">
                            <span>Verified</span>
                            <CheckCircle size={12} />
                          </div>
                        </div>

                        {/* Bottom decorative line */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}