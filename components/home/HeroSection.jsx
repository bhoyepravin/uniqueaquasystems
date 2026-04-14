// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { company_img, dm_plant, ro5000, ro500Chlorination, ro500SS, ro500Vertical, slide_1, slide_2, slide_4, slide_5, slide_6 } from "@/public";

// export default function HeroSection() {
//   const slides = [
//     {
//     title: "Company Overview",
//     subtitle: "Unique Aqua Systems & Chemical Industries",
//     description:
//       "Unique Aqua Systems & Chemical Industries, established in 2002, is a leading provider of comprehensive water treatment solutions. We specialize in delivering high-quality products and services to various industries, ensuring efficient and sustainable water management practices.",
//     image: company_img,
//     // background: slide_1,
//     alt: "Industrial water treatment system",
//   },

//   {
//     title: "Deionized Water Treatment Solutions",
//     subtitle: "Deionized Water Treatment Solutions",
//     description:
//       "Deionized water treatment solutions for industrial applications, providing high-purity water for processes such as manufacturing, cooling, and boiler feedwater, ensuring optimal performance and equipment longevity.",
//     image: dm_plant,
//     // background: slide_1,
//     alt: "deionized water treatment system",
//   },

//   {
//     title: "Unique Aqua Systems & Chemical Industries",
//     subtitle: "Total Water Treatment Solutions",
//     description:
//       "Delivering complete water treatment solutions including design, supply, installation, and maintenance for various industries.",
//     image: ro500Vertical,
//     // background: slide_1,
//     alt: "Industrial water treatment system",
//   },
//   {
//     title: "Innovative Water Treatment Technologies",
//     subtitle: "Advanced Solutions",
//     description:
//       "Implementing cutting-edge technologies to enhance water purification efficiency, sustainability, and operational performance.",
//     image: ro500SS,
//     // background: slide_2,
//     alt: "Advanced water treatment plant technology",
//   },
//   {
//     title: "Chemical Water Treatment",
//     subtitle: "Serving Since 2002",
//     description:
//       "Specialized in water treatment chemicals, dosing systems, and solutions to improve water quality and prevent scaling, corrosion, and fouling.",
//     image: ro500Chlorination,
//     // background: slide_4,
//     alt: "Chemical treatment consultancy services",
//   },
//   {
//     title: "Mechanical Water Treatment",
//     subtitle: "Serving Since 2002",
//     description:
//       "Providing filtration systems, RO plants, softeners, and other mechanical solutions for efficient and reliable water treatment processes.",
//     image: ro5000,
//     // background: slide_5,
//     alt: "Mechanical treatment consultancy services",
//   },
//   {
//     title: "Spares & Equipments",
//     subtitle: "Serving Since 2002",
//     description:
//       "Offering a wide range of high-quality spare parts and equipment to ensure smooth operation and maintenance of water treatment systems.",
//     image: slide_6,
//     // background: slide_6,
//     alt: "Spares & Equipments",
//   },
// ];

//   const [current, setCurrent] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 75) {
//       nextSlide();
//     }
//     if (touchStart - touchEnd < -75) {
//       prevSlide();
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const colors = {
//     primary: "#1E3A8A",
//     secondary: "#06B6D4",
//     accent: "#67E8F9",
//     white: "#FFFFFF",
//     dark: "#0F2B6D",
//     light: "#CFFAFE",
//   };

//   const getImageUrl = (image) => {
//     if (typeof image === 'string') return image;
//     if (image && typeof image === 'object' && image.src) return image.src;
//     return '';
//   };

//   return (
//     <section 
//       className="relative w-full min-h-screen md:min-h-[90vh] overflow-hidden"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="absolute inset-0"
//           style={{
//             background: "linear-gradient(135deg, rgba(30,58,138,0.92) 0%, rgba(6,182,212,0.82) 100%)",
//           }}
//         />
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           {/* Background image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${getImageUrl(slides[current].background)})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               opacity: 0.5,
//             }}
//           />
          
//           {/* Darker overlay for better text contrast */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

//           {/* Main content container with stable height */}
//           <div className="relative z-10 min-h-screen md:min-h-[80vh] flex items-center">
//             <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
//               {/* Top padding to prevent navbar collision */}
//               <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-6" />
              
//               <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
//                 {/* Text Content Container - Fixed min-height to prevent layout shift */}
//                 <div className="order-2 lg:order-1">
//                   <div className="max-w-xl mx-auto lg:mx-0">
//                     {/* Subtitle Badge */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="mb-4 sm:mb-5 md:mb-6"
//                     >
//                       <p 
//                         className="inline-block text-xs sm:text-sm md:text-base font-semibold tracking-wide px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm"
//                         style={{ 
//                           color: colors.accent,
//                           background: "rgba(103,232,249,0.15)",
//                           border: `1px solid ${colors.accent}40`,
//                         }}
//                       >
//                         {slides[current].subtitle}
//                       </p>
//                     </motion.div>

//                     {/* Title Container - With fixed max-width and proper text handling */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.1 }}
//                       className="mb-4 sm:mb-5 md:mb-6"
//                     >
//                       <h1 
//                         className="font-bold tracking-tight text-white"
//                         style={{
//                           fontSize: "clamp(28px, 5vw, 64px)",
//                           lineHeight: "1.15",
//                           maxWidth: "700px",
//                           wordBreak: "break-word",
//                           overflowWrap: "break-word",
//                           hyphens: "auto",
//                         }}
//                       >
//                         {slides[current].title}
//                       </h1>
//                     </motion.div>

//                     {/* Description - With stable height */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                       className="mb-6 sm:mb-7 md:mb-8"
//                     >
//                       <p 
//                         className="text-white/85 leading-relaxed"
//                         style={{
//                           fontSize: "clamp(14px, 2.5vw, 18px)",
//                           maxWidth: "550px",
//                         }}
//                       >
//                         {slides[current].description}
//                       </p>
//                     </motion.div>

//                     {/* Buttons Container */}
//                     <motion.div 
//                       className="flex flex-col sm:flex-row gap-3 sm:gap-4"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.3 }}
//                     >
//                       <Link
//                         href="/contact"
//                         className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
//                         style={{
//                           background: `linear-gradient(135deg, ${colors.secondary}, #3B82F6)`,
//                           color: colors.white,
//                           boxShadow: `0 8px 25px -5px rgba(6,182,212,0.4)`,
//                         }}
//                       >
//                         <span className="text-sm sm:text-base">Get Started</span>
//                         <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                       </Link>

//                       <Link
//                         href="/products"
//                         className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full font-semibold text-center transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
//                         style={{
//                           border: `1.5px solid ${colors.white}`,
//                           color: colors.white,
//                           background: "rgba(255,255,255,0.08)",
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.background = "rgba(255,255,255,0.18)";
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.background = "rgba(255,255,255,0.08)";
//                         }}
//                       >
//                         <span className="text-sm sm:text-base">View Products</span>
//                       </Link>
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Image Container - Fixed aspect ratio */}
//                 <motion.div
//                   initial={{ x: 50, opacity: 0, scale: 0.95 }}
//                   animate={{ x: 0, opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   className="order-1 lg:order-2 mb-8 lg:mb-0"
//                 >
//                   <div className="relative w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl">
//                     {/* Glow effect background */}
//                     <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
                    
//                     {/* Responsive image container with fixed aspect ratio */}
//                     <div className="relative aspect-square max-h-[280px] sm:max-h-[340px] md:max-h-[400px] lg:max-h-[480px] w-full">
//                       {typeof slides[current].image === 'string' ? (
//                         <img
//                           src={slides[current].image}
//                           alt={slides[current].alt}
//                           className="w-full h-full object-contain drop-shadow-2xl"
//                           style={{
//                             filter: "drop-shadow(0 25px 30px -12px rgba(0,0,0,0.35))",
//                           }}
//                         />
//                       ) : (
//                         <Image
//                           src={slides[current].image}
//                           alt={slides[current].alt}
//                           fill
//                           className="object-contain drop-shadow-2xl"
//                           priority={current === 0}
//                           sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 400px, 480px"
//                         />
//                       )}
//                     </div>
                    
//                     {/* Decorative glow effects - Hidden on mobile */}
//                     <div 
//                       className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-3xl opacity-40 hidden sm:block"
//                       style={{ background: colors.accent }}
//                     />
//                     <div 
//                       className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-3xl opacity-30 hidden sm:block"
//                       style={{ background: colors.secondary }}
//                     />
//                   </div>
//                 </motion.div>
//               </div>
              
//               {/* Bottom spacing for balance */}
//               <div className="pb-8 sm:pb-12 md:pb-16" />
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 backdrop-blur-md p-2.5 sm:p-3.5 rounded-full text-white transition-all duration-300 hover:scale-110 group z-20"
//         style={{
//           background: "rgba(255,255,255,0.12)",
//           border: "1px solid rgba(255,255,255,0.25)",
//           backdropFilter: "blur(8px)",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.background = `rgba(6,182,212,0.7)`;
//           e.currentTarget.style.borderColor = colors.accent;
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background = "rgba(255,255,255,0.12)";
//           e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
//         }}
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 backdrop-blur-md p-2.5 sm:p-3.5 rounded-full text-white transition-all duration-300 hover:scale-110 group z-20"
//         style={{
//           background: "rgba(255,255,255,0.12)",
//           border: "1px solid rgba(255,255,255,0.25)",
//           backdropFilter: "blur(8px)",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.background = `rgba(6,182,212,0.7)`;
//           e.currentTarget.style.borderColor = colors.accent;
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background = "rgba(255,255,255,0.12)";
//           e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
//         }}
//         aria-label="Next slide"
//       >
//         <ChevronRight size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
//       </button>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className="transition-all duration-300"
//             style={{
//               width: index === current ? "20px" : "6px",
//               height: "6px",
//               borderRadius: "9999px",
//               background: index === current ? colors.accent : "rgba(255,255,255,0.5)",
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Swipe indicator for mobile */}
//       <div className="sm:hidden absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-pulse pointer-events-none">
//         <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center">
//           <ChevronLeft size={12} className="text-white/70" />
//           <ChevronRight size={12} className="text-white/70 -ml-1" />
//         </div>
//         <span className="text-white/50 text-[10px]">Swipe</span>
//       </div>

//       {/* Bottom gradient fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { company_img, dm_plant, ro5000, ro500Chlorination, ro500SS, ro500Vertical, slide_1, slide_2, slide_4, slide_5, slide_6 } from "@/public";

export default function HeroSection() {
  const slides = [
    {
      title: "Company Overview",
      subtitle: "Unique Aqua Systems & Chemical Industries",
      description:
        "Unique Aqua Systems & Chemical Industries, established in 2002, is a leading provider of comprehensive water treatment solutions. We specialize in delivering high-quality products and services to various industries, ensuring efficient and sustainable water management practices.",
      image: company_img,
      alt: "Industrial water treatment system",
    },
    {
      title: "Deionized Water Treatment Solutions",
      subtitle: "Deionized Water Treatment Solutions",
      description:
        "Deionized water treatment solutions for industrial applications, providing high-purity water for processes such as manufacturing, cooling, and boiler feedwater, ensuring optimal performance and equipment longevity.",
      image: dm_plant,
      alt: "deionized water treatment system",
    },
    {
      title: "Unique Aqua Systems & Chemical Industries",
      subtitle: "Total Water Treatment Solutions",
      description:
        "Delivering complete water treatment solutions including design, supply, installation, and maintenance for various industries.",
      image: ro500Vertical,
      alt: "Industrial water treatment system",
    },
    {
      title: "Innovative Water Treatment Technologies",
      subtitle: "Advanced Solutions",
      description:
        "Implementing cutting-edge technologies to enhance water purification efficiency, sustainability, and operational performance.",
      image: ro500SS,
      alt: "Advanced water treatment plant technology",
    },
    {
      title: "Chemical Water Treatment",
      subtitle: "Serving Since 2002",
      description:
        "Specialized in water treatment chemicals, dosing systems, and solutions to improve water quality and prevent scaling, corrosion, and fouling.",
      image: ro500Chlorination,
      alt: "Chemical treatment consultancy services",
    },
    {
      title: "Mechanical Water Treatment",
      subtitle: "Serving Since 2002",
      description:
        "Providing filtration systems, RO plants, softeners, and other mechanical solutions for efficient and reliable water treatment processes.",
      image: ro5000,
      alt: "Mechanical treatment consultancy services",
    },
    {
      title: "Spares & Equipments",
      subtitle: "Serving Since 2002",
      description:
        "Offering a wide range of high-quality spare parts and equipment to ensure smooth operation and maintenance of water treatment systems.",
      image: slide_6,
      alt: "Spares & Equipments",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const colors = {
    primary: "#1E3A8A",
    secondary: "#06B6D4",
    accent: "#67E8F9",
    white: "#FFFFFF",
    dark: "#0F2B6D",
    light: "#CFFAFE",
  };

  const getImageUrl = (image) => {
    if (typeof image === 'string') return image;
    if (image && typeof image === 'object' && image.src) return image.src;
    return '';
  };

  return (
    <section 
      className="relative w-full min-h-screen overflow-y-auto overflow-x-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background gradient overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(30,58,138,0.92) 0%, rgba(6,182,212,0.82) 100%)",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative z-10 min-h-screen"
        >
          {/* Background image */}
          <div
            className="fixed inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl(slides[current].background)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
            }}
          />
          
          {/* Darker overlay for better text contrast */}
          <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

          {/* Main content container - Scrollable */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
              {/* Top padding to prevent navbar collision */}
              <div className="pt-14 sm:pt-16 md:pt-20 lg:pt-6" />
              
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Text Content Container - Mobile optimized with auto height */}
                <div className="order-2 lg:order-1">
                  <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                    {/* Subtitle Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-3 sm:mb-4 md:mb-6"
                    >
                      <p 
                        className="inline-block text-xs sm:text-sm md:text-base font-semibold tracking-wide px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full backdrop-blur-sm"
                        style={{ 
                          color: colors.accent,
                          background: "rgba(103,232,249,0.15)",
                          border: `1px solid ${colors.accent}40`,
                        }}
                      >
                        {slides[current].subtitle}
                      </p>
                    </motion.div>

                    {/* Title - Responsive with proper wrapping */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="mb-3 sm:mb-4 md:mb-6"
                    >
                      <h1 
                        className="font-bold tracking-tight text-white"
                        style={{
                          fontSize: "clamp(22px, 5vw, 64px)",
                          lineHeight: "1.2",
                          maxWidth: "100%",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {slides[current].title}
                      </h1>
                    </motion.div>

                    {/* Description - With scrollable container if needed */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mb-5 sm:mb-6 md:mb-8"
                    >
                      <div 
                        className="text-white/85 leading-relaxed mx-auto lg:mx-0"
                        style={{
                          fontSize: "clamp(13px, 3.5vw, 18px)",
                          maxWidth: "100%",
                          lineHeight: "1.5",
                          maxHeight: isMobile ? "none" : "auto",
                          overflowY: "auto",
                        }}
                      >
                        <p>{slides[current].description}</p>
                      </div>
                    </motion.div>

                    {/* Buttons - Always visible with proper spacing */}
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base min-w-[140px] sm:min-w-[160px]"
                        style={{
                          background: `linear-gradient(135deg, ${colors.secondary}, #3B82F6)`,
                          color: colors.white,
                          boxShadow: `0 8px 25px -5px rgba(6,182,212,0.4)`,
                        }}
                      >
                        <span>Get Started</span>
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href="/products"
                        className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-center transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md text-sm sm:text-base min-w-[140px] sm:min-w-[160px]"
                        style={{
                          border: `1.5px solid ${colors.white}`,
                          color: colors.white,
                          background: "rgba(255,255,255,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        }}
                      >
                        <span>View Products</span>
                      </Link>
                    </motion.div>
                    
                    {/* Extra bottom padding for mobile to ensure scrolling space */}
                    <div className="h-4 sm:h-6 md:h-8 lg:h-0" />
                  </div>
                </div>

                {/* Image Container - Mobile optimized */}
                <motion.div
                  initial={{ x: 50, opacity: 0, scale: 0.95 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0"
                >
                  <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-lg xl:max-w-xl mx-auto">
                    {/* Glow effect background - Hidden on very small screens */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10 hidden sm:block" />
                    
                    {/* Responsive image container */}
                    <div className="relative aspect-square w-full">
                      {typeof slides[current].image === 'string' ? (
                        <img
                          src={slides[current].image}
                          alt={slides[current].alt}
                          className="w-full h-full object-contain drop-shadow-2xl"
                          style={{
                            filter: "drop-shadow(0 25px 30px -12px rgba(0,0,0,0.35))",
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          src={slides[current].image}
                          alt={slides[current].alt}
                          fill
                          className="object-contain drop-shadow-2xl"
                          priority={current === 0}
                          sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                        />
                      )}
                    </div>
                    
                    {/* Decorative glow effects - Hidden on mobile */}
                    <div 
                      className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full blur-3xl opacity-40 hidden md:block"
                      style={{ background: colors.accent }}
                    />
                    <div 
                      className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full blur-3xl opacity-30 hidden md:block"
                      style={{ background: colors.secondary }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Visible on tablet and up */}
      <button
        onClick={prevSlide}
        className="hidden md:flex fixed left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 backdrop-blur-md p-2 sm:p-2.5 md:p-3.5 rounded-full text-white transition-all duration-300 hover:scale-110 group z-30"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `rgba(6,182,212,0.7)`;
          e.currentTarget.style.borderColor = colors.accent;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.12)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex fixed right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 backdrop-blur-md p-2 sm:p-2.5 md:p-3.5 rounded-full text-white transition-all duration-300 hover:scale-110 group z-30"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `rgba(6,182,212,0.7)`;
          e.currentTarget.style.borderColor = colors.accent;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.12)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
        }}
        aria-label="Next slide"
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      {/* Dots Navigation - Mobile friendly */}
      <div className="fixed bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="transition-all duration-300"
            style={{
              width: index === current ? (isMobile ? "16px" : "20px") : (isMobile ? "4px" : "6px"),
              height: isMobile ? "4px" : "6px",
              borderRadius: "9999px",
              background: index === current ? colors.accent : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe indicator for mobile - Only shows on touch devices */}
      <div className="md:hidden fixed bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-pulse pointer-events-none z-30">
        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <ChevronLeft size={14} className="text-white/70" />
          <ChevronRight size={14} className="text-white/70 -ml-0.5" />
        </div>
        <span className="text-white/50 text-[10px] sm:text-xs">Swipe to navigate</span>
      </div>

      {/* Bottom gradient fade */}
      <div className="fixed bottom-0 left-0 right-0 h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-20" />
    </section>
  );
}