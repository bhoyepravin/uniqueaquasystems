// import { buildMetadata } from "@/utils/seoConfig";
// import Link from "next/link";
// import { FlaskConical, Settings, Wrench, ArrowRight } from "lucide-react";

// export const metadata = buildMetadata("products");

// const divisions = [
//   {
//     slug: "chemical",
//     title: "Chemical Water Treatment Division",
//     description: "UNI-TREAT® series of specialty chemicals for cooling water, boiler water, descaling, RO treatment, fire side Chemicals, Defoamers, Polyelectrolytes and sugar process applications.",
//     icon: FlaskConical,
//     color: "#0077B6",
//     count: "7 Product Categories",
//   },
//   {
//     slug: "mechanical",
//     title: "Mechanical Water Treatment Division",
//     description: "UNITREAT® complete mechanical water treatment systems — sand filters, softeners, DM plants, RO plants, UV disinfection systems.",
//     icon: Settings,
//     color: "#0096C7",
//     count: "6 Product Categories",
//   },
//   {
//     slug: "spares",
//     title: "Spares & Equipments Division",
//     description: "Complete water treatment plant accessories — water testing kits, filtration cartridges, FRP vessels, filtration media and multiport valves.",
//     icon: Wrench,
//     color: "#00B4D8",
//     count: "3 Product Categories",
//   },
  
// ];

// export default function ProductsPage() {
//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Complete water treatment solutions across 3 specialized divisions — chemical treatments, mechanical systems, and spares & equipment.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {divisions.map((div) => {
//             const Icon = div.icon;
//             return (
//               <Link key={div.slug} href={`/products/${div.slug}`}>
//                 <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 group border border-gray-100 h-full">
//                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: div.color + "20" }}>
//                     <Icon size={32} style={{ color: div.color }} />
//                   </div>
//                   <div className="text-xs font-semibold text-gray-400 mb-2">{div.count}</div>
//                   <h2 className="text-xl font-bold text-gray-900 mb-3">{div.title}</h2>
//                   <p className="text-gray-600 mb-6 text-sm leading-relaxed">{div.description}</p>
//                   <span className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: div.color }}>
//                     Explore Division <ArrowRight size={16} />
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import { buildMetadata } from "@/utils/seoConfig";
import Link from "next/link";
import { motion } from "framer-motion";
import { FlaskConical, Settings, Wrench, ArrowRight, Droplets, Shield, Award, Sparkles, CheckCircle } from "lucide-react";

export const metadata = buildMetadata("products");

const divisions = [
  {
    slug: "chemical",
    title: "Chemical Water Treatment Division",
    description: "UNI-TREAT® series of specialty chemicals for cooling water, boiler water, descaling, RO treatment, fire side Chemicals, Defoamers, Polyelectrolytes and sugar process applications.",
    icon: FlaskConical,
    color: "#0077B6",
    gradient: "from-[#0077B6] to-[#00B4D8]",
    count: "7 Product Categories",
    features: ["Cooling Water Treatment", "Boiler Water Treatment", "RO Chemicals", "Descaling Products"]
  },
  {
    slug: "mechanical",
    title: "Mechanical Water Treatment Division",
    description: "UNITREAT® complete mechanical water treatment systems — sand filters, softeners, DM plants, RO plants, UV disinfection systems.",
    icon: Settings,
    color: "#0096C7",
    gradient: "from-[#0096C7] to-[#00B6D4]",
    count: "6 Product Categories",
    features: ["RO Plants", "Water Softeners", "DM Plants", "UV Systems"]
  },
  {
    slug: "spares",
    title: "Spares & Equipments Division",
    description: "Complete water treatment plant accessories — water testing kits, filtration cartridges, FRP vessels, filtration media and multiport valves.",
    icon: Wrench,
    color: "#00B4D8",
    gradient: "from-[#00B4D8] to-[#48CAE4]",
    count: "3 Product Categories",
    features: ["Testing Kits", "Filter Cartridges", "FRP Vessels", "Filter Media"]
  },
];

export default function ProductsPage() {
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            <p className="text-[#06B6D4] text-sm md:text-base font-semibold tracking-wider uppercase">
              Complete Solutions
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Products
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
            Complete water treatment solutions across 3 specialized divisions — chemical treatments, 
            mechanical systems, and spares & equipment. 
          </p>  
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Award size={16} className="text-[#06B6D4]" />
              <span>ISO Certified</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Shield size={16} className="text-[#06B6D4]" />
              <span>Quality Assured</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Sparkles size={16} className="text-[#06B6D4]" />
              {/* <span>20+ Years Experience</span> */}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#06B6D4]">200+</div>
            <div className="text-xs text-gray-500">Industries Served</div>  

          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#06B6D4]">3</div>
            <div className="text-xs text-gray-500">Divisions</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#06B6D4]">500+</div>
            <div className="text-xs text-gray-500">Installations</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-[#06B6D4]">35+</div>
            <div className="text-xs text-gray-500">Happy Clients</div>
          </div>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((div, index) => {
            const Icon = div.icon;
            return (
              <Link key={div.slug} href={`/products/${div.slug}`}>
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full hover:-translate-y-2">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0  rounded-2xl -z-10" style={{ padding: '1px' }} />
                  
                  {/* Decorative top bar */}
                  <div className={`h-1 bg-gradient-to-r ${div.gradient}`} />
                  
                  <div className="p-6 relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-5">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                      <div 
                        className="relative w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md"
                        style={{ 
                          background: `linear-gradient(135deg, ${div.color}20 0%, ${div.color}10 100%)`,
                          boxShadow: `0 8px 20px -5px ${div.color}40`
                        }}
                      >
                        <Icon size={28} style={{ color: div.color }} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Count Badge */}
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-500 text-[10px] font-semibold mb-3">
                      <CheckCircle size={10} className="text-[#06B6D4]" />
                      {div.count}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E3A8A] transition-colors duration-300">
                      {div.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {div.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {div.features.map((feature, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-gray-50 text-gray-500">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between mt-2">
                      <span 
                        className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                        style={{ color: div.color }}
                      >
                        Explore Division 
                        <ArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                      </span>
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <Droplets size={10} style={{ color: div.color }} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

       

        
      </div>
    </div>
  );
}