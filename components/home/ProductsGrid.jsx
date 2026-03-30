"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical, Settings, Wrench, Droplets, Filter, Gauge, Beaker, Factory, Shield, Zap } from "lucide-react";
import { chemicalProducts, mechanicalProducts, sparesProducts } from "@/lib/data";

const iconMap = {
  chemical: FlaskConical,
  mechanical: Settings,
  spares: Wrench,
};

const divisionColors = {
  chemical: "#06B6D4",
  mechanical: "#1E3A8A",
  spares: "#3B82F6",
};

const featured = [
  { product: chemicalProducts[0], division: "chemical" },
  { product: chemicalProducts[2], division: "chemical" },
  { product: chemicalProducts[4], division: "chemical" },
  { product: mechanicalProducts[1], division: "mechanical" },
  { product: mechanicalProducts[3], division: "mechanical" },
  { product: sparesProducts[0], division: "spares" },
];

export default function ProductsGrid() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
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
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            <span className="text-[#06B6D4] font-semibold text-sm uppercase tracking-wider">
              Featured Products
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Product Range
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-full mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From chemical treatments to complete mechanical systems — everything you need for total water management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featured.map(({ product, division }, i) => {
            const Icon = iconMap[division] || Droplets;
            const divisionColor = divisionColors[division] || "#06B6D4";
            
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
                <Link href={`/products/${division}/${product.slug}`} className="block h-full">
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100">
                    {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" style={{ padding: '1px' }} />
                    
                    {/* Division color accent bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-300"
                      style={{ background: `linear-gradient(90deg, ${divisionColor}, ${divisionColor}80)` }}
                    />
                    
                    <div className="p-6 relative z-10">
                      {/* Icon Container */}
                      <div className="relative mb-5">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        <div
                          className="relative w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                          style={{ 
                            background: `linear-gradient(135deg, ${divisionColor}20 0%, ${divisionColor}10 100%)`,
                            boxShadow: `0 8px 20px -5px ${divisionColor}40`
                          }}
                        >
                          <Icon size={28} style={{ color: divisionColor }} strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      {/* Division Badge */}
                      <div className="mb-3">
                        <span 
                          className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                          style={{ 
                            background: `${divisionColor}15`,
                            color: divisionColor,
                          }}
                        >
                          {division === "chemical" ? "Chemical Division" : division === "mechanical" ? "Mechanical Division" : "Spares & Equipments"}
                        </span>
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {product.shortDescription}
                      </p>
                      
                      {/* CTA Link */}
                      <div className="flex items-center justify-between pt-2">
                        <span 
                          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                          style={{ color: divisionColor }}
                        >
                          View Details 
                          <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                        </span>
                        <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <Droplets size={12} style={{ color: divisionColor }} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-gray-50 to-transparent rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <span>View All Products</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}