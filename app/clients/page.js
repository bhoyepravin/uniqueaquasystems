// import Image from "next/image";
// import { buildMetadata } from "@/utils/seoConfig";
// import { clientsData } from "@/lib/data";

// export const metadata = buildMetadata("clients");

// export default function ClientsPage() {
//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">{clientsData.title}</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">{clientsData.description}</p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {clientsData.clients.map((client, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3"
//             >
//               {client.logo ? (
//                 <div className="relative w-32 h-16">
//                   <Image
//                     src={client.logo}
//                     alt={client.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               ) : (
//                 <div className="w-32 h-16 bg-blue-50 rounded flex items-center justify-center">
//                   <span className="text-[#0077B6] font-semibold text-sm text-center px-2">
//                     {client.name}
//                   </span>
//                 </div>
//               )}
//               <p className="text-gray-700 font-medium text-sm text-center">{client.name}</p>
//             </div>
//           ))}
//         </div>
//         <div className="mt-16 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-3xl p-10 text-white text-center">
//           <h2 className="text-3xl font-bold mb-4">Join Our Growing Client Family</h2>
//           <p className="text-white/90 text-lg mb-6">Be part of 35+ leading companies who trust Unique Aqua for their water treatment needs.</p>
//           <a href="/contact" className="inline-block bg-white text-[#0077B6] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
//             Get Started Today →
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { clientsData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, Building2, Award, Star, 
  ArrowRight, CheckCircle, Heart, 
  Globe, Shield, TrendingUp, Zap 
} from "lucide-react";

export default function ClientsPage() {
  // Client categories for better organization
  const clientCategories = {
    industrial: clientsData.clients.slice(0, Math.ceil(clientsData.clients.length / 2)),
    commercial: clientsData.clients.slice(Math.ceil(clientsData.clients.length / 2))
  };

  const stats = [
    { icon: Users, value: "35+", label: "Happy Clients" },
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "10+", label: "Years of Excellence" },
    { icon: Star, value: "99%", label: "Client Satisfaction" }
  ];

  const testimonials = [
    {
      quote: "Unique Aqua has been instrumental in improving our water treatment efficiency. Their solutions are top-notch and reliable.",
      author: "Rajesh Sharma",
      company: "Tech Industries Ltd.",
      rating: 5
    },
    {
      quote: "The team at Unique Aqua provides exceptional service and support. Highly recommended for all water treatment needs.",
      author: "Priya Mehta",
      company: "Green Manufacturing Co.",
      rating: 5
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
              Our Trusted Partners
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Clients
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
            {clientsData.description}
          </p>
        </motion.div>

        

        {/* Clients Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Companies That Trust Us
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Join 35+ leading companies who have chosen Unique Aqua for their water treatment solutions
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientsData.clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 h-full flex flex-col items-center">
                  {/* Logo Container */}
                  <div className="relative w-32 h-20 mb-4 flex items-center justify-center">
                    {client.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#06B6D4]/10 to-[#1E3A8A]/10 rounded-xl flex items-center justify-center">
                        <span className="text-[#1E3A8A] font-semibold text-sm text-center px-2">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Client Name */}
                  <p className="text-gray-700 font-semibold text-sm text-center group-hover:text-[#1E3A8A] transition-colors">
                    {client.name}
                  </p>
                  
                  {/* Decorative checkmark on hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle size={16} className="text-[#06B6D4]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
              <p className="text-[#06B6D4] text-sm md:text-base font-semibold tracking-wider uppercase">
                Client Testimonials
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 flex items-center justify-center">
                      <Users size={18} className="text-[#06B6D4]" />
                    </div>
                    <div>
                      {/* <p className="font-semibold text-gray-900">{testimonial.author}</p> */}
                      {/* <p className="text-sm text-gray-500">{testimonial.company}</p> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#06B6D4] rounded-3xl p-10 md:p-12 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Join Our Growing Client Family
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Be part of 35+ leading companies who trust Unique Aqua for their water treatment needs.
                Experience excellence in every drop.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Get Started Today</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}