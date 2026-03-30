"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Users, Star, Award, TrendingUp } from "lucide-react";
import { clientsData } from "@/lib/data";

export default function ClientsSection() {
  const doubledClients = [...clientsData.clients, ...clientsData.clients];
  
  // Create a second set for opposite direction
  const tripledClients = [...clientsData.clients, ...clientsData.clients, ...clientsData.clients];
  
  // Split clients into two rows for dual ticker effect
  const firstRowClients = clientsData.clients.slice(0, Math.ceil(clientsData.clients.length / 2));
  const secondRowClients = clientsData.clients.slice(Math.ceil(clientsData.clients.length / 2));
  const doubledFirstRow = [...firstRowClients, ...firstRowClients];
  const doubledSecondRow = [...secondRowClients, ...secondRowClients];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-[#06B6D4]/20 rounded-full" />
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#1E3A8A]/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#67E8F9]/30 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            <span className="text-[#06B6D4] font-semibold text-sm uppercase tracking-wider">
              Our Clients
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {clientsData.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-full mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {clientsData.description}
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16"
        >
          {[
            { icon: Users, label: "Active Clients", value: "500+", color: "#1E3A8A" },
            { icon: Building2, label: "Industries Served", value: "20+", color: "#06B6D4" },
            { icon: Award, label: "Years of Trust", value: "20+", color: "#1E3A8A" },
            { icon: TrendingUp, label: "Success Rate", value: "99%", color: "#06B6D4" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex justify-center mb-2">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${stat.color}15` }}
                  >
                    <Icon size={20} style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Premium Scrolling Ticker with Dual Rows */}
        <div className="space-y-6">
          {/* First Row - Left to Right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {doubledFirstRow.map((client, i) => (
                <div
                  key={`first-${i}`}
                  className="inline-flex items-center bg-white rounded-xl px-6 py-3 shadow-md border border-gray-100 min-w-max group hover:shadow-xl transition-all duration-300"
                >
                  <Building2 size={16} className="text-[#06B6D4] mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  {/* FIX: Access client.name instead of client */}
                  <span className="text-gray-700 font-semibold text-sm md:text-base">{client.name}</span>
                  <Star size={12} className="text-yellow-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              {doubledSecondRow.map((client, i) => (
                <div
                  key={`second-${i}`}
                  className="inline-flex items-center bg-white rounded-xl px-6 py-3 shadow-md border border-gray-100 min-w-max group hover:shadow-xl transition-all duration-300"
                >
                  <Building2 size={16} className="text-[#1E3A8A] mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  {/* FIX: Access client.name instead of client */}
                  <span className="text-gray-700 font-semibold text-sm md:text-base">{client.name}</span>
                  <Star size={12} className="text-yellow-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All Clients CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/clients">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <span>View All Clients</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-12 pt-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
            <span className="text-xs text-gray-400">Trusted by industry leaders</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
            <span className="text-xs text-gray-400">Across Asian region</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#67E8F9]" />
            <span className="text-xs text-gray-400">Since 2002</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}