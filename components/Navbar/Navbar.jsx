// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//   Menu, X, Phone, ChevronDown, Mail, ArrowRight,
//   FlaskConical, Settings, Wrench, Droplets, Wind, Flame,
//   Pill, Factory, Coffee, Shirt, Zap, Building2, Home,
//   ChevronRight, Info, Package, Users, MailOpen
// } from "lucide-react";
// import { navItems } from "@/lib/data";
// import { unique_aqua_logo } from "@/public";

// // ─── Brand color palette ────────────────────────────
// const COLORS = {
//   primary: "#0077B6",        // Deep ocean blue
//   secondary: "#00B4D8",      // Bright cyan
//   accent: "#90E0EF",         // Light sky blue
//   dark: "#03045E",           // Navy deep (used sparingly)
//   light: "#CAF0F8",          // Very light blue
//   white: "#FFFFFF",
//   gray50: "#F8FAFC",
//   gray100: "#F1F5F9",
//   gray200: "#E2E8F0",
//   gray300: "#CBD5E1",
//   gray600: "#475569",
//   gray700: "#334155",
//   gray800: "#1E293B",
// };

// // Gradient definitions
// const GRADIENTS = {
//   hero: "linear-gradient(135deg, rgba(3,4,94,0.75) 0%, rgba(0,119,182,0.65) 100%)",
//   light: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)",
//   cta: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
//   megaFooter: "linear-gradient(90deg, #0077B6 0%, #00B4D8 100%)",
//   topBar: "linear-gradient(90deg, rgba(3,4,94,0.7) 0%, rgba(0,119,182,0.6) 100%)",
// };

// const companyInfo = {
//   phone: "+91-253-6699936",
//   email: "sales.unique2010@gmail.com",
// };

// const divisionIcons = { FlaskConical, Settings, Wrench };
// const industryIcons = { Wind, Flame, Pill, Factory, Coffee, Shirt, Zap, Building2, Home };

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen]         = useState(false);
//   const [scrolled, setScrolled]             = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileExpanded, setMobileExpanded] = useState(null);
//   const closeTimeout = useRef(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleMouseEnter = (key) => {
//     clearTimeout(closeTimeout.current);
//     setActiveDropdown(key);
//   };
//   const handleMouseLeave = () => {
//     closeTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
//   };

//   // Reusable hover handlers
//   const itemHover = {
//     onMouseEnter: (e) => { 
//       e.currentTarget.style.background = COLORS.gray100; 
//       e.currentTarget.style.color = COLORS.primary; 
//     },
//     onMouseLeave: (e) => { 
//       e.currentTarget.style.background = ""; 
//       e.currentTarget.style.color = COLORS.gray700; 
//     },
//   };

//   const navLinkStyle = (extra = "") =>
//     `${extra} px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200`;

//   const getNavTextColor = (scrolled) => scrolled ? COLORS.gray700 : COLORS.white;

//   return (
//     <header
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//       style={{ 
//         boxShadow: scrolled ? `0 4px 20px rgba(0,119,182,0.15)` : "none",
//       }}
//     >

//       {/* ── Top info bar with light gradient ─────────────────── */}
//       <div
//         className="hidden md:block transition-all duration-300"
//         style={{
//           background: scrolled ? GRADIENTS.topBar : "rgba(3,4,94,0.4)",
//           backdropFilter: "blur(12px)",
//           borderBottom: `1px solid rgba(255,255,255,0.1)`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs">

//           <div className="flex items-center gap-1.5 font-medium tracking-wide" style={{ color: COLORS.white }}>
//             <Droplets size={12} style={{ color: COLORS.accent }} />
//             <span>Unique Aqua Systems — Total Water Management Since 2002</span>
//           </div>

//           <div className="flex items-center gap-5">
//             <a
//               href={`tel:${companyInfo.phone}`}
//               className="flex items-center gap-1.5 font-medium transition-all duration-200"
//               style={{ color: COLORS.white }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
//               onMouseLeave={e => e.currentTarget.style.color = COLORS.white}
//             >
//               <Phone size={11} style={{ color: COLORS.accent }} /> {companyInfo.phone}
//             </a>
//             <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
//             <a
//               href={`mailto:${companyInfo.email}`}
//               className="flex items-center gap-1.5 font-medium transition-all duration-200"
//               style={{ color: COLORS.white }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
//               onMouseLeave={e => e.currentTarget.style.color = COLORS.white}
//             >
//               <Mail size={11} style={{ color: COLORS.accent }} /> {companyInfo.email}
//             </a>
//           </div>

//         </div>
//       </div>

//       {/* ── Main nav with light gradient ─────────────────────── */}
//       <nav
//         className="transition-all duration-300"
//         style={{
//           background: scrolled 
//             ? GRADIENTS.light 
//             : "linear-gradient(135deg, rgba(3,4,94,0.6) 0%, rgba(0,119,182,0.5) 100%)",
//           backdropFilter: "blur(12px)",
//           borderBottom: `1px solid ${
//             scrolled ? COLORS.gray200 : "rgba(255,255,255,0.15)"
//           }`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src={unique_aqua_logo}
//               alt="Unique Aqua Logo"
//               width={140}
//               height={40}
//               className="h-10 w-auto object-contain"
//               priority
//             />
//           </Link>

//           {/* ── Desktop links ──────────────────────────────── */}
//           <div className="hidden lg:flex items-center gap-1">

//             {/* Home */}
//             <Link
//               href="/"
//               className={navLinkStyle()}
//               style={{ color: getNavTextColor(scrolled) }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color = COLORS.accent;
//                 e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color = getNavTextColor(scrolled);
//                 e.currentTarget.style.background = "";
//               }}
//             >
//               Home
//             </Link>

//             {/* Company */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className={navLinkStyle("flex items-center gap-1")}
//                 style={{ color: getNavTextColor(scrolled) }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.color = COLORS.accent;
//                   e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.color = getNavTextColor(scrolled);
//                   e.currentTarget.style.background = "";
//                 }}
//               >
//                 Company <ChevronDown size={14} />
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "company" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
//                     className="absolute top-full left-0 mt-1 w-52 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden z-50"
//                     style={{ border: `1px solid ${COLORS.gray200}` }}
//                   >
//                     {navItems.company.dropdown.map((item) => (
//                       <Link key={item.href} href={item.href}
//                         className="block px-4 py-3 text-sm transition-colors"
//                         style={{ color: COLORS.gray700 }}
//                         {...itemHover}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Products mega-menu */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className={navLinkStyle("flex items-center gap-1")}
//                 style={{ color: getNavTextColor(scrolled) }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.color = COLORS.accent;
//                   e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.color = getNavTextColor(scrolled);
//                   e.currentTarget.style.background = "";
//                 }}
//               >
//                 Products <ChevronDown size={14} />
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "products" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
//                     className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden z-50"
//                     style={{ border: `1px solid ${COLORS.gray200}` }}
//                   >
//                     <div className="grid grid-cols-3 divide-x divide-gray-100">
//                       {navItems.products.megaMenu.map((division) => (
//                         <div key={division.slug} className="p-5">
//                           <div className="flex items-center gap-2 mb-3">
//                             <div className="w-2 h-2 rounded-full" style={{ background: COLORS.primary }} />
//                             <Link
//                               href={`/products/${division.slug}`}
//                               className="text-xs font-bold uppercase tracking-wider hover:underline"
//                               style={{ color: COLORS.primary }}
//                             >
//                               {division.division}
//                             </Link>
//                           </div>
//                           <div className="space-y-1">
//                             {division.items.map((item) => (
//                               <Link key={item.href} href={item.href}
//                                 className="block text-sm rounded-lg px-2 py-1.5 transition-colors"
//                                 style={{ color: COLORS.gray600 }}
//                                 onMouseEnter={e => { 
//                                   e.currentTarget.style.background = COLORS.gray100; 
//                                   e.currentTarget.style.color = COLORS.primary; 
//                                 }}
//                                 onMouseLeave={e => { 
//                                   e.currentTarget.style.background = ""; 
//                                   e.currentTarget.style.color = COLORS.gray600; 
//                                 }}
//                               >
//                                 {item.label}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     {/* Mega footer with lighter gradient */}
//                     <div
//                       className="px-6 py-3 flex items-center justify-between"
//                       style={{
//                         background: GRADIENTS.megaFooter,
//                       }}
//                     >
//                       <span className="text-sm font-medium" style={{ color: COLORS.white }}>
//                         Explore all products across 3 divisions
//                       </span>
//                       <Link
//                         href="/products"
//                         className="flex items-center gap-1 text-sm font-bold transition-colors"
//                         style={{ color: COLORS.white }}
//                         onMouseEnter={e => e.currentTarget.style.color = COLORS.light}
//                         onMouseLeave={e => e.currentTarget.style.color = COLORS.white}
//                       >
//                         View All <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Application Areas */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("applications")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className={navLinkStyle("flex items-center gap-1")}
//                 style={{ color: getNavTextColor(scrolled) }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.color = COLORS.accent;
//                   e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.color = getNavTextColor(scrolled);
//                   e.currentTarget.style.background = "";
//                 }}
//               >
//                 Application Areas <ChevronDown size={14} />
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "applications" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
//                     className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden z-50"
//                     style={{ border: `1px solid ${COLORS.gray200}` }}
//                   >
//                     {navItems.applicationAreas.dropdown.map((item) => (
//                       <Link key={item.href} href={item.href}
//                         className="block px-4 py-2.5 text-sm transition-colors"
//                         style={{ color: COLORS.gray700 }}
//                         {...itemHover}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                     <div style={{ borderTop: `1px solid ${COLORS.gray200}` }}>
//                       <Link
//                         href="/application-areas"
//                         className="flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors"
//                         style={{ color: COLORS.primary }}
//                         onMouseEnter={e => {
//                           e.currentTarget.style.background = COLORS.gray100;
//                           e.currentTarget.style.color = COLORS.secondary;
//                         }}
//                         onMouseLeave={e => {
//                           e.currentTarget.style.background = "";
//                           e.currentTarget.style.color = COLORS.primary;
//                         }}
//                       >
//                         View All Industries <ArrowRight size={14} />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Clients */}
//             <Link
//               href="/clients"
//               className={navLinkStyle()}
//               style={{ color: getNavTextColor(scrolled) }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color = COLORS.accent;
//                 e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color = getNavTextColor(scrolled);
//                 e.currentTarget.style.background = "";
//               }}
//             >
//               Clients
//             </Link>

//             {/* News & Events */}
//             <Link
//               href="/news-events"
//               className={navLinkStyle()}
//               style={{ color: getNavTextColor(scrolled) }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color = COLORS.accent;
//                 e.currentTarget.style.background = "rgba(255,255,255,0.1)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color = getNavTextColor(scrolled);
//                 e.currentTarget.style.background = "";
//               }}
//             >
//               News &amp; Events
//             </Link>

//             {/* Contact CTA */}
//             <Link href="/contact">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="ml-2 px-5 py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-200"
//                 style={{
//                   background: GRADIENTS.cta,
//                   color: COLORS.white,
//                   boxShadow: `0 4px 12px rgba(0,119,182,0.3)`,
//                 }}
//               >
//                 Contact Us
//               </motion.div>
//             </Link>

//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="lg:hidden p-2 rounded-lg transition-colors"
//             style={{ color: getNavTextColor(scrolled) }}
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* ── Mobile menu ────────────────────────────────────── */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden overflow-y-auto max-h-[80vh]"
//               style={{ 
//                 background: COLORS.white, 
//                 borderTop: `1px solid ${COLORS.gray200}`,
//               }}
//             >
//               <div className="px-4 py-4 space-y-1">
//                 <Link href="/" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-colors"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   Home
//                 </Link>

//                 {/* Company mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg"
//                     style={{ 
//                       color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray700,
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
//                   >
//                     Company
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "company" ? "rotate(180deg)" : "rotate(0deg)",
//                       color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray600,
//                     }} />
//                   </button>
//                   {mobileExpanded === "company" && (
//                     <div className="pl-4 space-y-1">
//                       {navItems.company.dropdown.map((item) => (
//                         <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                           className="block px-4 py-2 text-sm rounded-lg transition-colors"
//                           style={{ color: COLORS.gray600 }}
//                           {...itemHover}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Products mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg"
//                     style={{ 
//                       color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray700,
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
//                   >
//                     Products
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)",
//                       color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray600,
//                     }} />
//                   </button>
//                   {mobileExpanded === "products" && (
//                     <div className="pl-4 space-y-3">
//                       {navItems.products.megaMenu.map((division) => (
//                         <div key={division.slug}>
//                           <Link href={`/products/${division.slug}`} onClick={() => setMobileOpen(false)}
//                             className="block text-xs font-bold px-4 py-1 uppercase tracking-wider"
//                             style={{ color: COLORS.primary }}
//                           >
//                             {division.division}
//                           </Link>
//                           {division.items.map((item) => (
//                             <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                               className="block px-4 py-2 text-sm rounded-lg transition-colors"
//                               style={{ color: COLORS.gray600 }}
//                               {...itemHover}
//                             >
//                               {item.label}
//                             </Link>
//                           ))}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Application Areas mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg"
//                     style={{ 
//                       color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray700,
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "applications" ? null : "applications")}
//                   >
//                     Application Areas
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "applications" ? "rotate(180deg)" : "rotate(0deg)",
//                       color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray600,
//                     }} />
//                   </button>
//                   {mobileExpanded === "applications" && (
//                     <div className="pl-4 space-y-1">
//                       {navItems.applicationAreas.dropdown.map((item) => (
//                         <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                           className="block px-4 py-2 text-sm rounded-lg transition-colors"
//                           style={{ color: COLORS.gray600 }}
//                           {...itemHover}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <Link href="/clients" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-colors"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   Clients
//                 </Link>

//                 <Link href="/news-events" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-colors"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   News &amp; Events
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 text-center font-bold rounded-lg"
//                   style={{
//                     background: GRADIENTS.cta,
//                     color: COLORS.white,
//                   }}
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// }

// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//   Menu, X, Phone, ChevronDown, Mail, ArrowRight,
//   FlaskConical, Settings, Wrench, Droplets, Wind, Flame,
//   Pill, Factory, Coffee, Shirt, Zap, Building2, Home,
//   ChevronRight, Info, Package, Users, MailOpen
// } from "lucide-react";
// import { navItems } from "@/lib/data";
// import { unique_aqua_logo } from "@/public";

// // ─── Enhanced Brand color palette ────────────────────────────
// const COLORS = {
//   primary: "#1E3A8A",
//   secondary: "#06B6D4",
//   accent: "#67E8F9",
//   dark: "#0F2B6D",
//   light: "#CFFAFE",
//   white: "#FFFFFF",
//   gray50: "#F8FAFC",
//   gray100: "#F1F5F9",
//   gray200: "#E2E8F0",
//   gray300: "#CBD5E1",
//   gray600: "#475569",
//   gray700: "#334155",
//   gray800: "#1E293B",
// };

// const GRADIENTS = {
//   hero: "linear-gradient(135deg, rgba(30,58,138,0.8) 0%, rgba(6,182,212,0.7) 100%)",
//   light: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)",
//   cta: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
//   ctaHover: "linear-gradient(135deg, #0891B2 0%, #2563EB 100%)",
//   megaFooter: "linear-gradient(90deg, #1E3A8A 0%, #06B6D4 100%)",
//   topBar: "linear-gradient(90deg, rgba(30,58,138,0.85) 0%, rgba(6,182,212,0.75) 100%)",
//   glassHero: "linear-gradient(135deg, rgba(30,58,138,0.65) 0%, rgba(6,182,212,0.55) 100%)",
// };

// const companyInfo = {
//   phone: "+91-253-6699936",
//   email: "sales.unique2010@gmail.com",
// };

// const divisionIcons = { FlaskConical, Settings, Wrench };
// const industryIcons = { Wind, Flame, Pill, Factory, Coffee, Shirt, Zap, Building2, Home };

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileExpanded, setMobileExpanded] = useState(null);
//   const [isMounted, setIsMounted] = useState(false); // Add mounted state
//   const closeTimeout = useRef(null);

//   useEffect(() => {
//     setIsMounted(true); // Mark component as mounted on client
    
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
    
//     // Initial check
//     onScroll();
    
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleMouseEnter = (key) => {
//     clearTimeout(closeTimeout.current);
//     setActiveDropdown(key);
//   };
  
//   const handleMouseLeave = () => {
//     closeTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
//   };

//   const itemHover = {
//     onMouseEnter: (e) => { 
//       e.currentTarget.style.background = COLORS.gray100; 
//       e.currentTarget.style.color = COLORS.primary; 
//     },
//     onMouseLeave: (e) => { 
//       e.currentTarget.style.background = ""; 
//       e.currentTarget.style.color = COLORS.gray700; 
//     },
//   };

//   const navLinkStyle = (extra = "") =>
//     `${extra} px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200`;

//   // Prevent hydration mismatch by using isMounted for client-only styles
//   const getNavTextColor = (scrolled) => {
//     if (!isMounted) return COLORS.white; // Return default for SSR
//     return scrolled ? COLORS.gray700 : COLORS.white;
//   };

//   // Get background style with hydration safety
//   const getNavBackground = () => {
//     if (!isMounted) {
//       // Return the initial state for SSR (transparent with glass effect)
//       return GRADIENTS.glassHero;
//     }
//     return scrolled ? GRADIENTS.light : GRADIENTS.glassHero;
//   };

//   const getTopBarBackground = () => {
//     if (!isMounted) {
//       return "rgba(30,58,138,0.5)";
//     }
//     return scrolled ? GRADIENTS.topBar : "rgba(30,58,138,0.5)";
//   };

//   const getBorderBottom = () => {
//     if (!isMounted) {
//       return "1px solid rgba(255,255,255,0.15)";
//     }
//     return scrolled ? COLORS.gray200 : "rgba(255,255,255,0.2)";
//   };

//   return (
//     <header
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//       style={{ 
//         boxShadow: isMounted && scrolled ? `0 8px 25px -5px rgba(30,58,138,0.12), 0 4px 10px -6px rgba(0,0,0,0.02)` : "none",
//       }}
//     >

//       {/* ── Top info bar with glassmorphism ─────────────────── */}
//       <div
//         className="hidden md:block transition-all duration-300"
//         style={{
//           background: getTopBarBackground(),
//           backdropFilter: "blur(12px)",
//           borderBottom: `1px solid ${isMounted && scrolled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.15)"}`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs">
//           <div className="flex items-center gap-1.5 font-medium tracking-wide" style={{ color: COLORS.white }}>
//             <Droplets size={12} style={{ color: COLORS.accent }} />
//             <span>Unique Aqua Systems — Total Water Management Since 2002</span>
//           </div>

//           <div className="flex items-center gap-5">
//             <a
//               href={`tel:${companyInfo.phone}`}
//               className="flex items-center gap-1.5 font-medium transition-all duration-200"
//               style={{ color: COLORS.white }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
//               onMouseLeave={e => e.currentTarget.style.color = COLORS.white}
//             >
//               <Phone size={11} style={{ color: COLORS.accent }} /> {companyInfo.phone}
//             </a>
//             <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
//             <a
//               href={`mailto:${companyInfo.email}`}
//               className="flex items-center gap-1.5 font-medium transition-all duration-200"
//               style={{ color: COLORS.white }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
//               onMouseLeave={e => e.currentTarget.style.color = COLORS.white}
//             >
//               <Mail size={11} style={{ color: COLORS.accent }} /> {companyInfo.email}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── Main nav with enhanced glassmorphism ─────────────────────── */}
//       <nav
//         className="transition-all duration-300"
//         style={{
//           background: getNavBackground(),
//           backdropFilter: "blur(16px)",
//           borderBottom: `1px solid ${getBorderBottom()}`,
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
//             <Image
//               src={unique_aqua_logo}
//               alt="Unique Aqua Logo"
//               width={140}
//               height={40}
//               className="h-10 w-auto object-contain"
//               priority
//             />
//           </Link>

//           {/* ── Desktop links ──────────────────────────────── */}
//           <div className="hidden lg:flex items-center gap-1">
//             <Link
//               href="/"
//               className={navLinkStyle()}
//               style={{ color: getNavTextColor(scrolled) }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color = COLORS.secondary;
//                 e.currentTarget.style.background = "rgba(255,255,255,0.15)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color = getNavTextColor(scrolled);
//                 e.currentTarget.style.background = "";
//               }}
//             >
//               Home
//             </Link>

//             {/* Company */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className={navLinkStyle("flex items-center gap-1")}
//                 style={{ color: getNavTextColor(scrolled) }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.color = COLORS.secondary;
//                   e.currentTarget.style.background = "rgba(255,255,255,0.15)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.color = getNavTextColor(scrolled);
//                   e.currentTarget.style.background = "";
//                 }}
//               >
//                 Company <ChevronDown size={14} />
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "company" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-0 mt-1 w-52 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden z-50"
//                     style={{ border: `1px solid ${COLORS.gray200}` }}
//                   >
//                     {navItems.company.dropdown.map((item) => (
//                       <Link key={item.href} href={item.href}
//                         className="block px-4 py-3 text-sm transition-colors"
//                         style={{ color: COLORS.gray700 }}
//                         {...itemHover}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Products mega-menu */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className={navLinkStyle("flex items-center gap-1")}
//                 style={{ color: getNavTextColor(scrolled) }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.color = COLORS.secondary;
//                   e.currentTarget.style.background = "rgba(255,255,255,0.15)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.color = getNavTextColor(scrolled);
//                   e.currentTarget.style.background = "";
//                 }}
//               >
//                 Products <ChevronDown size={14} />
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "products" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[850px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden z-50"
//                     style={{ border: `1px solid ${COLORS.gray200}` }}
//                   >
//                     <div className="grid grid-cols-3 divide-x divide-gray-100">
//                       {navItems.products.megaMenu.map((division) => (
//                         <div key={division.slug} className="p-5">
//                           <div className="flex items-center gap-2 mb-3">
//                             <div className="w-2 h-2 rounded-full" style={{ background: COLORS.secondary }} />
//                             <Link
//                               href={`/products/${division.slug}`}
//                               className="text-xs font-bold uppercase tracking-wider hover:underline transition-colors"
//                               style={{ color: COLORS.primary }}
//                             >
//                               {division.division}
//                             </Link>
//                           </div>
//                           <div className="space-y-1">
//                             {division.items.map((item) => (
//                               <Link key={item.href} href={item.href}
//                                 className="block text-sm rounded-lg px-2 py-1.5 transition-all duration-200"
//                                 style={{ color: COLORS.gray600 }}
//                                 onMouseEnter={e => { 
//                                   e.currentTarget.style.background = COLORS.gray100; 
//                                   e.currentTarget.style.color = COLORS.primary; 
//                                   e.currentTarget.style.transform = "translateX(4px)";
//                                 }}
//                                 onMouseLeave={e => { 
//                                   e.currentTarget.style.background = ""; 
//                                   e.currentTarget.style.color = COLORS.gray600;
//                                   e.currentTarget.style.transform = "translateX(0px)";
//                                 }}
//                               >
//                                 {item.label}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     <div
//                       className="px-6 py-3 flex items-center justify-between"
//                       style={{ background: GRADIENTS.megaFooter }}
//                     >
//                       <span className="text-sm font-medium" style={{ color: COLORS.white }}>
//                         Explore all products across 3 divisions
//                       </span>
//                       <Link
//                         href="/products"
//                         className="flex items-center gap-1 text-sm font-bold transition-all duration-200 group"
//                         style={{ color: COLORS.white }}
//                         onMouseEnter={e => e.currentTarget.style.color = COLORS.light}
//                         onMouseLeave={e => e.currentTarget.style.color = COLORS.white}
//                       >
//                         View All <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Application Areas */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("applications")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className={navLinkStyle("flex items-center gap-1")}
//                 style={{ color: getNavTextColor(scrolled) }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.color = COLORS.secondary;
//                   e.currentTarget.style.background = "rgba(255,255,255,0.15)";
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.color = getNavTextColor(scrolled);
//                   e.currentTarget.style.background = "";
//                 }}
//               >
//                 Application Areas <ChevronDown size={14} />
//               </button>
//               <AnimatePresence>
//                 {activeDropdown === "applications" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }} 
//                     animate={{ opacity: 1, y: 0 }} 
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl overflow-hidden z-50"
//                     style={{ border: `1px solid ${COLORS.gray200}` }}
//                   >
//                     {navItems.applicationAreas.dropdown.map((item) => (
//                       <Link key={item.href} href={item.href}
//                         className="block px-4 py-2.5 text-sm transition-colors"
//                         style={{ color: COLORS.gray700 }}
//                         {...itemHover}
//                       >
//                         {item.label}
//                       </Link>
//                     ))}
//                     <div style={{ borderTop: `1px solid ${COLORS.gray200}` }}>
//                       <Link
//                         href="/application-areas"
//                         className="flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-all duration-200 group"
//                         style={{ color: COLORS.primary }}
//                         onMouseEnter={e => {
//                           e.currentTarget.style.background = COLORS.gray100;
//                           e.currentTarget.style.color = COLORS.secondary;
//                         }}
//                         onMouseLeave={e => {
//                           e.currentTarget.style.background = "";
//                           e.currentTarget.style.color = COLORS.primary;
//                         }}
//                       >
//                         View All Industries <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Clients */}
//             <Link
//               href="/clients"
//               className={navLinkStyle()}
//               style={{ color: getNavTextColor(scrolled) }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color = COLORS.secondary;
//                 e.currentTarget.style.background = "rgba(255,255,255,0.15)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color = getNavTextColor(scrolled);
//                 e.currentTarget.style.background = "";
//               }}
//             >
//               Clients
//             </Link>

//             {/* News & Events */}
//             <Link
//               href="/news-events"
//               className={navLinkStyle()}
//               style={{ color: getNavTextColor(scrolled) }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.color = COLORS.secondary;
//                 e.currentTarget.style.background = "rgba(255,255,255,0.15)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.color = getNavTextColor(scrolled);
//                 e.currentTarget.style.background = "";
//               }}
//             >
//               News &amp; Events
//             </Link>

//             {/* CTA Button */}
//             <Link href="/contact">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="ml-2 px-6 py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-300"
//                 style={{
//                   background: GRADIENTS.cta,
//                   color: COLORS.white,
//                   boxShadow: `0 4px 14px rgba(6,182,212,0.35)`,
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = GRADIENTS.ctaHover;
//                   e.currentTarget.style.transform = "scale(1.05)";
//                   e.currentTarget.style.boxShadow = "0 6px 20px rgba(6,182,212,0.45)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = GRADIENTS.cta;
//                   e.currentTarget.style.transform = "scale(1)";
//                   e.currentTarget.style.boxShadow = "0 4px 14px rgba(6,182,212,0.35)";
//                 }}
//               >
//                 Contact Us
//               </motion.div>
//             </Link>
//           </div>

//           {/* Mobile toggle button */}
//           <button
//             className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-white/20"
//             style={{ color: getNavTextColor(scrolled) }}
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* ── Mobile menu ────────────────────────────────────── */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="lg:hidden overflow-y-auto max-h-[80vh]"
//               style={{ 
//                 background: COLORS.white, 
//                 borderTop: `1px solid ${COLORS.gray200}`,
//                 boxShadow: "0 -4px 10px rgba(0,0,0,0.05)"
//               }}
//             >
//               <div className="px-4 py-4 space-y-1">
//                 <Link href="/" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-all duration-200 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   Home
//                 </Link>

//                 {/* Company mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "company" ? COLORS.gray100 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
//                   >
//                     Company
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "company" ? "rotate(180deg)" : "rotate(0deg)",
//                       color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray600,
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "company" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-4 space-y-1 overflow-hidden"
//                       >
//                         {navItems.company.dropdown.map((item) => (
//                           <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                             className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:translate-x-1"
//                             style={{ color: COLORS.gray600 }}
//                             {...itemHover}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Products mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "products" ? COLORS.gray100 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
//                   >
//                     Products
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)",
//                       color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray600,
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "products" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-4 space-y-3 overflow-hidden"
//                       >
//                         {navItems.products.megaMenu.map((division) => (
//                           <div key={division.slug}>
//                             <Link href={`/products/${division.slug}`} onClick={() => setMobileOpen(false)}
//                               className="block text-xs font-bold px-4 py-1 uppercase tracking-wider"
//                               style={{ color: COLORS.primary }}
//                             >
//                               {division.division}
//                             </Link>
//                             {division.items.map((item) => (
//                               <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                                 className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:translate-x-1"
//                                 style={{ color: COLORS.gray600 }}
//                                 {...itemHover}
//                               >
//                                 {item.label}
//                               </Link>
//                             ))}
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Application Areas mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "applications" ? COLORS.gray100 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "applications" ? null : "applications")}
//                   >
//                     Application Areas
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "applications" ? "rotate(180deg)" : "rotate(0deg)",
//                       color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray600,
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "applications" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-4 space-y-1 overflow-hidden"
//                       >
//                         {navItems.applicationAreas.dropdown.map((item) => (
//                           <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                             className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:translate-x-1"
//                             style={{ color: COLORS.gray600 }}
//                             {...itemHover}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 <Link href="/clients" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-all duration-200 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   Clients
//                 </Link>

//                 <Link href="/news-events" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-all duration-200 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   News &amp; Events
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 text-center font-bold rounded-full transition-all duration-200 hover:scale-105"
//                   style={{
//                     background: GRADIENTS.cta,
//                     color: COLORS.white,
//                   }}
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// }

// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//   Menu, X, Phone, ChevronDown, Mail, ArrowRight,
//   FlaskConical, Settings, Wrench, Droplets, Wind, Flame,
//   Pill, Factory, Coffee, Shirt, Zap, Building2, Home,
// } from "lucide-react";
// import { navItems } from "@/lib/data";
// import { unique_aqua_logo } from "@/public";

// // ─── Enhanced Brand color palette ────────────────────────────
// const COLORS = {
//   primary: "#1E3A8A",
//   secondary: "#06B6D4",
//   accent: "#67E8F9",
//   dark: "#0F2B6D",
//   light: "#CFFAFE",
//   white: "#FFFFFF",
//   gray50: "#F8FAFC",
//   gray100: "#F1F5F9",
//   gray200: "#E2E8F0",
//   gray300: "#CBD5E1",
//   gray600: "#475569",
//   gray700: "#334155",
//   gray800: "#1E293B",
// };

// const GRADIENTS = {
//   light: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)",
//   cta: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
//   ctaHover: "linear-gradient(135deg, #0891B2 0%, #2563EB 100%)",
//   megaFooter: "linear-gradient(90deg, #1E3A8A 0%, #06B6D4 100%)",
//   // Darker navbar gradient for better separation from hero
//   navbarTransparent: "linear-gradient(135deg, rgba(15,35,80,0.85) 0%, rgba(6,120,140,0.8) 100%)",
// };

// const companyInfo = {
//   phone: "+91-0253-2941322",
//   email: "sales.unique2010@gmail.com",
// };

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileExpanded, setMobileExpanded] = useState(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const closeTimeout = useRef(null);

//   useEffect(() => {
//     setIsMounted(true);
    
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
    
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleMouseEnter = (key) => {
//     clearTimeout(closeTimeout.current);
//     setActiveDropdown(key);
//   };
  
//   const handleMouseLeave = () => {
//     closeTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
//   };

//   const itemHover = {
//     onMouseEnter: (e) => { 
//       e.currentTarget.style.background = COLORS.gray100; 
//       e.currentTarget.style.color = COLORS.primary; 
//     },
//     onMouseLeave: (e) => { 
//       e.currentTarget.style.background = ""; 
//       e.currentTarget.style.color = COLORS.gray700; 
//     },
//   };

//   const navLinkStyle = (extra = "") =>
//     `${extra} px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200`;

//   const getNavTextColor = (scrolled) => {
//     if (!isMounted) return COLORS.white;
//     return scrolled ? COLORS.gray700 : COLORS.white;
//   };

//   const getNavBackground = () => {
//   if (!isMounted) return "rgba(15,35,80,0.7)";
  
//   return scrolled 
//     ? "#ffffff" 
//     : "rgba(15,35,80,0.55)"; // transparent dark overlay
// };

//   // const getNavBackground = () => {
//   //   if (!isMounted) return GRADIENTS.navbarTransparent;
//   //   // Use solid white when scrolled for better readability
//   //   return scrolled ? COLORS.white : GRADIENTS.navbarTransparent;
//   // };

//   const getTopBarBackground = () => {
//     if (!isMounted) return "rgba(89, 146, 198, 1)";
//     return scrolled ? "rgba(255,255,255,0.95)" : "rgba(89, 146, 198, 1)";
//   };

//   const getTopBarTextColor = () => {
//     if (!isMounted) return COLORS.white;
//     return scrolled ? COLORS.gray600 : COLORS.white;
//   };

//   const getBorderBottom = () => {
//     if (!isMounted) return "1px solid rgba(255,255,255,0.2)";
//     return scrolled ? `1px solid ${COLORS.gray200}` : "1px solid rgba(255,255,255,0.2)";
//   };

//   return (
//     <header
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//       style={{ 
//         boxShadow: isMounted && scrolled ? `0 8px 30px -8px rgba(0,0,0,0.12), 0 4px 12px -6px rgba(0,0,0,0.05)` : "none",
//       }}
//     >
//       {/* ── Top info bar ─────────────────────────────────────── */}
//       <div
//         className="hidden md:block transition-all duration-300"
//         style={{
//           background: getTopBarBackground(),
//           backdropFilter: "blur(12px)",
//           borderBottom: "none",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center text-xs">
//           <div className="flex items-center gap-1.5 font-medium tracking-wide" style={{ color: getTopBarTextColor() }}>
//             <Droplets size={12} style={{ color: COLORS.accent }} />
//             <span>Unique Aqua Systems — Total Water Management Since 2002</span>
//           </div>

//           <div className="flex items-center gap-5">
//             <a
//               href={`tel:${companyInfo.phone}`}
//               className="flex items-center gap-1.5 font-medium transition-all duration-200"
//               style={{ color: getTopBarTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
//               onMouseLeave={e => e.currentTarget.style.color = getTopBarTextColor()}
//             >
//               <Phone size={11} style={{ color: COLORS.accent }} /> {companyInfo.phone}
//             </a>
//             <span style={{ color: scrolled ? COLORS.gray300 : "rgba(255,255,255,0.3)" }}>|</span>
//             <a
//               href={`mailto:${companyInfo.email}`}
//               className="flex items-center gap-1.5 font-medium transition-all duration-200"
//               style={{ color: getTopBarTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.accent}
//               onMouseLeave={e => e.currentTarget.style.color = getTopBarTextColor()}
//             >
//               <Mail size={11} style={{ color: COLORS.accent }} /> {companyInfo.email}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── Main nav with premium glassmorphism ─────────────────────── */}
//       <nav
//   className="transition-all duration-300"
//   style={{
//     background: getNavBackground(),
//     backdropFilter: scrolled ? "none" : "blur(20px)", // strong blur initially
//     WebkitBackdropFilter: scrolled ? "none" : "blur(18px)", // safari support
//     borderBottom: getBorderBottom(),
//   }}
// >
//       {/* <nav
//         className="transition-all duration-300"
//         style={{
//           background: getNavBackground(),
//           backdropFilter: scrolled ? "none" : "blur(16px)",
//           borderBottom: getBorderBottom(),
//         }}
//       > */}
//         <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
//           <Link href="/" className="flex items-center transition-all duration-300 hover:opacity-90">
//             <Image
//               src={unique_aqua_logo}
//               alt="Unique Aqua Logo"
//               width={130}
//               height={36}
//               className="h-9 w-auto object-contain"
//               priority
//             />
//           </Link>

//           {/* ── Desktop links ──────────────────────────────── */}
//           <div className="hidden lg:flex items-center gap-6">
//   <Link
//     href="/"
//     className={`${navLinkStyle("text-[15px] relative group")}`}
//     style={{ color: getNavTextColor(scrolled) }}
//     onMouseEnter={e => {
//       e.currentTarget.style.color = "#67E8F9";
//     }}
//     onMouseLeave={e => {
//       e.currentTarget.style.color = getNavTextColor(scrolled);
//     }}
//   >
//     Home
//     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//   </Link>

//   {/* Company */}
//   <div className="relative" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
//     <button
//       className={navLinkStyle("flex items-center gap-1 text-[15px] relative group")}
//       style={{ color: getNavTextColor(scrolled) }}
//       onMouseEnter={e => {
//         e.currentTarget.style.color = "#67E8F9";
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.color = getNavTextColor(scrolled);
//       }}
//     >
//       Company <ChevronDown size={16} />
//       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//     </button>

//     <AnimatePresence>
//       {activeDropdown === "company" && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           transition={{ duration: 0.2 }}
//           className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-md overflow-hidden z-50 border border-gray-100"
//         >
//           {navItems.company.dropdown.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="block px-4 py-3 text-base transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
//               style={{ color: COLORS.gray700 }}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </div>

//   {/* Products */}
//   <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
//     <button
//       className={navLinkStyle("flex items-center gap-1 text-[15px] relative group")}
//       style={{ color: getNavTextColor(scrolled) }}
//       onMouseEnter={e => {
//         e.currentTarget.style.color = "#67E8F9";
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.color = getNavTextColor(scrolled);
//       }}
//     >
//       Products <ChevronDown size={16} />
//       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//     </button>

//     <AnimatePresence>
//       {activeDropdown === "products" && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           transition={{ duration: 0.2 }}
//           className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[750px] bg-white rounded-xl shadow-lg overflow-hidden z-50 border border-gray-100"
//         >
//           <div className="grid grid-cols-3 divide-x divide-gray-100">
//             {navItems.products.megaMenu.map((division) => (
//               <div key={division.slug} className="p-5">
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-2 h-2 rounded-full bg-blue-600" />
//                   <Link
//                     href={`/products/${division.slug}`}
//                     className="text-sm font-bold uppercase tracking-wider text-blue-700 hover:underline"
//                   >
//                     {division.division}
//                   </Link>
//                 </div>

//                 <div className="space-y-1">
//                   {division.items.map((item) => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       className="block text-base rounded-lg px-2 py-1.5 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 hover:translate-x-1"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="px-6 py-3 flex items-center justify-between bg-blue-600">
//             <span className="text-sm font-medium text-white">
//               Explore all products across 3 divisions
//             </span>
//             <Link
//               href="/products"
//               className="flex items-center gap-1 text-sm font-bold text-white group"
//             >
//               View All
//               <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </div>

//   {/* Application Areas */}
//   <div className="relative" onMouseEnter={() => handleMouseEnter("applications")} onMouseLeave={handleMouseLeave}>
//     <button
//       className={navLinkStyle("flex items-center gap-1 text-[15px] relative group")}
//       style={{ color: getNavTextColor(scrolled) }}
//       onMouseEnter={e => {
//         e.currentTarget.style.color = "#67E8F9";
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.color = getNavTextColor(scrolled);
//       }}
//     >
//       Application Areas <ChevronDown size={16} />
//       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//     </button>

//     <AnimatePresence>
//       {activeDropdown === "applications" && (
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           transition={{ duration: 0.2 }}
//           className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-md overflow-hidden z-50 border border-gray-100"
//         >
//           {navItems.applicationAreas.dropdown.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="block px-4 py-2.5 text-base text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
//             >
//               {item.label}
//             </Link>
//           ))}

//           <div className="border-t border-gray-200">
//             <Link
//               href="/application-areas"
//               className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-blue-600 group"
//             >
//               View All Industries
//               <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </div>

//   <Link
//     href="/clients"
//     className={`${navLinkStyle("text-[15px] relative group")}`}
//     style={{ color: getNavTextColor(scrolled) }}
//     onMouseEnter={e => (e.currentTarget.style.color = "#67E8F9")}
//     onMouseLeave={e => (e.currentTarget.style.color = getNavTextColor(scrolled))}
//   >
//     Clients
//     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//   </Link>

//   <Link
//     href="/news-events"
//     className={`${navLinkStyle("text-[15px] relative group")}`}
//     style={{ color: getNavTextColor(scrolled) }}
//     onMouseEnter={e => (e.currentTarget.style.color = "#67E8F9")}
//     onMouseLeave={e => (e.currentTarget.style.color = getNavTextColor(scrolled))}
//   >
//     News & Events
//     <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600  transition-all duration-300 group-hover:w-full"></span>
//   </Link>

//   {/* CTA Button */}
//   <Link href="/contact">
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.98 }}
//     className="ml-2 px-5 py-2 rounded-lg text-base font-semibold cursor-pointer text-white transition-all duration-300 shadow-sm"
//     style={{
//       background: "linear-gradient(135deg, #06B6D4, #3B82F6)",
//       boxShadow: "0 8px 25px -5px rgba(6,182,212,0.4)",
//     }}
//   >
//     Contact Us
//   </motion.div>
// </Link>
// </div>

//           {/* Mobile toggle */}
//           <button
//             className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-white/10"
//             style={{ color: getNavTextColor(scrolled) }}
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile menu - keep existing code */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="lg:hidden overflow-y-auto max-h-[80vh]"
//               style={{ 
//                 background: COLORS.white, 
//                 borderTop: `1px solid ${COLORS.gray200}`,
//                 boxShadow: "0 -4px 10px rgba(0,0,0,0.05)"
//               }}
//             >
//               {/* Mobile menu content - same as your existing code */}
//               <div className="px-4 py-4 space-y-1">
//                 <Link href="/" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-all duration-200 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   Home
//                 </Link>
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "company" ? COLORS.gray100 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
//                   >
//                     Company
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "company" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "company" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-4 space-y-1 overflow-hidden"
//                       >
//                         {navItems.company.dropdown.map((item) => (
//                           <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                             className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:translate-x-1"
//                             style={{ color: COLORS.gray600 }}
//                             {...itemHover}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "products" ? COLORS.gray100 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
//                   >
//                     Products
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "products" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-4 space-y-3 overflow-hidden"
//                       >
//                         {navItems.products.megaMenu.map((division) => (
//                           <div key={division.slug}>
//                             <Link href={`/products/${division.slug}`} onClick={() => setMobileOpen(false)}
//                               className="block text-xs font-bold px-4 py-1 uppercase tracking-wider"
//                               style={{ color: COLORS.primary }}
//                             >
//                               {division.division}
//                             </Link>
//                             {division.items.map((item) => (
//                               <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                                 className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:translate-x-1"
//                                 style={{ color: COLORS.gray600 }}
//                                 {...itemHover}
//                               >
//                                 {item.label}
//                               </Link>
//                             ))}
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-lg transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "applications" ? COLORS.gray100 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "applications" ? null : "applications")}
//                   >
//                     Application Areas
//                     <ChevronDown size={16} style={{
//                       transition: "transform 0.2s",
//                       transform: mobileExpanded === "applications" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "applications" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-4 space-y-1 overflow-hidden"
//                       >
//                         {navItems.applicationAreas.dropdown.map((item) => (
//                           <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
//                             className="block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:translate-x-1"
//                             style={{ color: COLORS.gray600 }}
//                             {...itemHover}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//                 <Link href="/clients" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-all duration-200 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   Clients
//                 </Link>
//                 <Link href="/news-events" onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-lg transition-all duration-200 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                   {...itemHover}
//                 >
//                   News &amp; Events
//                 </Link>
//                 <Link
//                   href="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 text-center font-bold rounded-full transition-all duration-200 hover:scale-105"
//                   style={{
//                     background: GRADIENTS.cta,
//                     color: COLORS.white,
//                   }}
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//   Menu, X, Phone, ChevronDown, Mail, ArrowRight,
//   FlaskConical, Settings, Wrench, Droplets, Wind, Flame,
//   Pill, Factory, Coffee, Shirt, Zap, Building2, Home,
// } from "lucide-react";
// import { navItems } from "@/lib/data";
// import { unique_aqua_logo } from "@/public";

// // ─── Enhanced Brand color palette ────────────────────────────
// const COLORS = {
//   primary: "#0F2B6D",    // Deep corporate blue
//   primaryLight: "#1E4A8A",
//   secondary: "#06B6D4",
//   accent: "#67E8F9",
//   dark: "#0F2B6D",
//   light: "#CFFAFE",
//   white: "#FFFFFF",
//   gray50: "#F8FAFC",
//   gray100: "#F1F5F9",
//   gray200: "#E2E8F0",
//   gray300: "#CBD5E1",
//   gray600: "#475569",
//   gray700: "#334155",
//   gray800: "#1E293B",
// };

// const GRADIENTS = {
//   cta: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
//   ctaHover: "linear-gradient(135deg, #0891B2 0%, #2563EB 100%)",
//   megaFooter: "linear-gradient(90deg, #0F2B6D 0%, #06B6D4 100%)",
// };

// const companyInfo = {
//   phone: "+91-0253-2941322",
//   email: "sales.unique2010@gmail.com",
// };

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileExpanded, setMobileExpanded] = useState(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const closeTimeout = useRef(null);
//   const navbarRef = useRef(null);  // ← ADD THIS LINE

//   useEffect(() => {
//   setIsMounted(true);
  
//   const onScroll = () => {
//     setScrolled(window.scrollY > 20);
//   };
  
//   onScroll();
//   window.addEventListener("scroll", onScroll);
  
//   // ← ADD THIS CLICK OUTSIDE DETECTION
//   const handleClickOutside = (event) => {
//     if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//       setActiveDropdown(null);
//       setMobileOpen(false);
//     }
//   };
  
//   document.addEventListener("mousedown", handleClickOutside);
  
//   return () => {
//     window.removeEventListener("scroll", onScroll);
//     document.removeEventListener("mousedown", handleClickOutside); // ← ADD THIS
//   };
// }, []);

//   const handleMouseEnter = (key) => {
//     clearTimeout(closeTimeout.current);
//     setActiveDropdown(key);
//   };
  
//   const handleMouseLeave = () => {
//      setActiveDropdown(null);  // ← Changed: closes immediately, no delay
//   };

//   const handleLinkClick = () => {
//   // Close all dropdowns immediately when a link is clicked
//   setActiveDropdown(null);
//   setMobileOpen(false);
//   setMobileExpanded(null);
// };

//   const getNavBackground = () => {
//     if (!isMounted) return "#ffffff";
//     return "#ffffff";
//   };

//   const getTopBarBackground = () => {
//     if (!isMounted) return "#67E8F9";
//     return "#67E8F9";
//   };

//   const getTopBarTextColor = () => {
//     if (!isMounted) return COLORS.primary;
//     return COLORS.primary;
//   };

//   const getBorderBottom = () => {
//     if (!isMounted) return "1px solid rgba(0,0,0,0.1)";
//     return scrolled ? `1px solid ${COLORS.gray200}` : "1px solid rgba(0,0,0,0.08)";
//   };

//   const getNavTextColor = () => {
//     if (!isMounted) return COLORS.gray700;
//     return COLORS.gray700;
//   };

//   return (
//     <header
//       ref={navbarRef}  // ← ADD THIS
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//       style={{ 
//         boxShadow: isMounted && scrolled ? "0 4px 20px -6px rgba(0,0,0,0.12)" : "0 2px 10px -5px rgba(0,0,0,0.08)",
//       }}
//     >
//       {/* ── Top info bar - visible initially, hides on scroll ────── */}
//       <div
//         className="hidden md:block transition-all duration-300 overflow-hidden"
//         style={{
//           background: getTopBarBackground(),
//           borderBottom: "none",
//           maxHeight: scrolled ? "0" : "40px",
//           opacity: scrolled ? 0 : 1,
//           paddingTop: scrolled ? "0" : "6px",
//           paddingBottom: scrolled ? "0" : "6px",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
//           <div className="flex items-center gap-1.5 font-medium tracking-wide" style={{ color: getTopBarTextColor() }}>
//             <Droplets size={12} style={{ color: COLORS.primary }} />
//             <span>Unique Aqua Systems — Total Water Management Since 2002</span>
//           </div>

//           <div className="flex items-center gap-5">
//             <a
//               href={`tel:${companyInfo.phone}`}
//               className="flex items-center gap-1.5 font-medium transition-colors duration-200"
//               style={{ color: getTopBarTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.white}
//               onMouseLeave={e => e.currentTarget.style.color = getTopBarTextColor()}
//             >
//               <Phone size={11} style={{ color: COLORS.primary }} /> {companyInfo.phone}
//             </a>
//             <span style={{ color: COLORS.primary, opacity: 0.3 }}>|</span>
//             <a
//               href={`mailto:${companyInfo.email}`}
//               className="flex items-center gap-1.5 font-medium transition-colors duration-200"
//               style={{ color: getTopBarTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.white}
//               onMouseLeave={e => e.currentTarget.style.color = getTopBarTextColor()}
//             >
//               <Mail size={11} style={{ color: COLORS.primary }} /> {companyInfo.email}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── Main nav with white background ──────────────────────── */}
//       <nav
//         className="transition-all duration-300"
//         style={{
//           background: getNavBackground(),
//           backdropFilter: "none",
//           WebkitBackdropFilter: "none",
//           borderBottom: getBorderBottom(),
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           {/* Logo with increased size and crisp rendering */}
//           <Link href="/" className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-90">
//             <div className="relative">
//               <Image
//                 src={unique_aqua_logo}
//                 alt="Unique Aqua Logo"
//                 width={180}
//                 height={52}
//                 className="h-12 w-auto object-contain"
//                 priority
//                 style={{ 
//                   filter: "none",
//                   imageRendering: "crisp-edges",
//                 }}
//               />
//             </div>
//           </Link>

//           {/* ── Desktop navigation ──────────────────────────────── */}
//           <div className="hidden lg:flex items-center gap-2">
//             {/* Home Link */}
//             <Link
//               href="/"
//               onClick={handleLinkClick}  // ← ADD THIS
//               className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group"
//               style={{ color: getNavTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//               onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//             >
//               Home
//               <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//             </Link>

//             {/* Company Dropdown */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 relative group"
//                 style={{ color: getNavTextColor() }}
//                 onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//                 onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//               >
//                 Company <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
//                 <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//               </button>

//               <AnimatePresence>
//                 {activeDropdown === "company" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100"
//                   >
//                     <div className="py-2">
//                       {navItems.company.dropdown.map((item) => (
//                         <Link
//                           key={item.href}
//                           href={item.href}
//                           onClick={handleLinkClick}
//                           className="block px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600"
//                           style={{ color: COLORS.gray700 }}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Products Mega Menu */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 relative group"
//                 style={{ color: getNavTextColor() }}
//                 onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//                 onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//               >
//                 Products <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
//                 <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//               </button>

//               <AnimatePresence>
//   {activeDropdown === "products" && (
//     <motion.div
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 8 }}
//       transition={{ duration: 0.2 }}
//       className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100"
//     >
//       <div className="grid grid-cols-3 divide-x divide-gray-100">
//         {navItems.products.megaMenu.map((division) => (
//           <div key={division.slug} className="p-5">
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
//               <Link
//                 href={`/products/${division.slug}`}
//                 className="text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-cyan-600 transition-colors"
//               >
//                 {division.division}
//               </Link>
//             </div>

//             <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
//               {division.items.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="block text-sm rounded-lg px-3 py-2 text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600 "
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="px-6 py-3 flex items-center justify-between bg-gradient-to-r from-blue-700 to-cyan-600">
//         <span className="text-sm font-medium text-white">
//           Complete water treatment solutions across 3 divisions
//         </span>
//         <Link
//           href="/products"
//           className="flex items-center gap-1 text-sm font-semibold text-white group"
//         >
//           View All Products
//           <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//         </Link>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//             </div>

//             {/* Application Areas Dropdown */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("applications")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 relative group"
//                 style={{ color: getNavTextColor() }}
//                 onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//                 onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//               >
//                 Application Areas <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
//                 <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//               </button>

//               <AnimatePresence>
//                 {activeDropdown === "applications" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100"
//                   >
//                     <div className="py-2">
//                       {navItems.applicationAreas.dropdown.map((item) => (
//                         <Link
//                           key={item.href}
//                           href={item.href}
//                           className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600"
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                     <div className="border-t border-gray-100 bg-gray-50">
//                       <Link
//                         href="/application-areas"
//                         className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-cyan-600 group"
//                       >
//                         View All Industries
//                         <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Clients Link */}
//             <Link
//               href="/clients"
//               className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group"
//               style={{ color: getNavTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//               onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//             >
//               Clients
//               <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//             </Link>

//             {/* News & Events Link */}
//             <Link
//               href="/news-events"
//               className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group"
//               style={{ color: getNavTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//               onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//             >
//               News & Events
//               <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//             </Link>

//             {/* CTA Button */}
//             <Link href="/contact" className="ml-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer text-white shadow-md hover:shadow-lg transition-shadow duration-300"
//                 style={{
//                   background: GRADIENTS.cta,
//                 }}
//               >
//                 Contact Us
//               </motion.button>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
//             style={{ color: getNavTextColor() }}
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
//               style={{ 
//                 background: COLORS.white, 
//                 borderTop: `1px solid ${COLORS.gray100}`,
//               }}
//             >
//               <div className="px-4 py-4 space-y-1">
//                 <Link
//                   href="/"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-xl transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                 >
//                   Home
//                 </Link>

//                 {/* Company Mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "company" ? COLORS.gray50 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
//                   >
//                     Company
//                     <ChevronDown size={16} className="transition-transform duration-200" style={{
//                       transform: mobileExpanded === "company" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "company" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-5 space-y-1 overflow-hidden"
//                       >
//                         {navItems.company.dropdown.map((item) => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setMobileOpen(false)}
//                             className="block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
//                             style={{ color: COLORS.gray600 }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Products Mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "products" ? COLORS.gray50 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
//                   >
//                     Products
//                     <ChevronDown size={16} className="transition-transform duration-200" style={{
//                       transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "products" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-5 space-y-3 overflow-hidden"
//                       >
//                         {navItems.products.megaMenu.map((division) => (
//                           <div key={division.slug} className="mt-2">
//                             <Link
//                               href={`/products/${division.slug}`}
//                               onClick={() => setMobileOpen(false)}
//                               className="block text-xs font-bold px-4 py-1 uppercase tracking-wider text-blue-700"
//                             >
//                               {division.division}
//                             </Link>
//                             <div className="space-y-1 mt-1">
//                               {division.items.map((item) => (
//                                 <Link
//                                   key={item.href}
//                                   href={item.href}
//                                   onClick={() => setMobileOpen(false)}
//                                   className="block px-4 py-2 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
//                                   style={{ color: COLORS.gray600 }}
//                                 >
//                                   {item.label}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Application Areas Mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "applications" ? COLORS.gray50 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "applications" ? null : "applications")}
//                   >
//                     Application Areas
//                     <ChevronDown size={16} className="transition-transform duration-200" style={{
//                       transform: mobileExpanded === "applications" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "applications" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-5 space-y-1 overflow-hidden"
//                       >
//                         {navItems.applicationAreas.dropdown.map((item) => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setMobileOpen(false)}
//                             className="block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
//                             style={{ color: COLORS.gray600 }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                         <Link
//                           href="/application-areas"
//                           onClick={() => setMobileOpen(false)}
//                           className="block px-4 py-2.5 text-sm font-semibold text-cyan-600"
//                         >
//                           View All Industries →
//                         </Link>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 <Link
//                   href="/clients"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-xl transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                 >
//                   Clients
//                 </Link>

//                 <Link
//                   href="/news-events"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 font-medium rounded-xl transition-all duration-200 hover:bg-gray-50 hover:translate-x-1"
//                   style={{ color: COLORS.gray700 }}
//                 >
//                   News & Events
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={() => setMobileOpen(false)}
//                   className="block px-4 py-3 mt-3 text-center font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-md"
//                   style={{
//                     background: GRADIENTS.cta,
//                     color: COLORS.white,
//                   }}
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// }


// "use client";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import {
//   Menu, X, Phone, ChevronDown, Mail, ArrowRight,
//   FlaskConical, Settings, Wrench, Droplets, Wind, Flame,
//   Pill, Factory, Coffee, Shirt, Zap, Building2, Home,
// } from "lucide-react";
// import { navItems } from "@/lib/data";
// import { unique_aqua_logo } from "@/public";

// // ─── Enhanced Brand color palette ────────────────────────────
// const COLORS = {
//   primary: "#0F2B6D",
//   primaryLight: "#1E4A8A",
//   secondary: "#06B6D4",
//   accent: "#67E8F9",
//   dark: "#0F2B6D",
//   light: "#CFFAFE",
//   white: "#FFFFFF",
//   gray50: "#F8FAFC",
//   gray100: "#F1F5F9",
//   gray200: "#E2E8F0",
//   gray300: "#CBD5E1",
//   gray600: "#475569",
//   gray700: "#334155",
//   gray800: "#1E293B",
// };

// const GRADIENTS = {
//   cta: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
//   ctaHover: "linear-gradient(135deg, #0891B2 0%, #2563EB 100%)",
//   megaFooter: "linear-gradient(90deg, #0F2B6D 0%, #06B6D4 100%)",
// };

// const companyInfo = {
//   phone: "+91-9322142163",
//   email: "sales.unique2010@gmail.com",
// };

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileExpanded, setMobileExpanded] = useState(null);
//   const [isMounted, setIsMounted] = useState(false);
//   const closeTimeout = useRef(null);
//   const navbarRef = useRef(null);

//   useEffect(() => {
//     setIsMounted(true);
    
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
    
//     onScroll();
//     window.addEventListener("scroll", onScroll);
    
//     // Click outside detection
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setActiveDropdown(null);
//         setMobileOpen(false);
//       }
//     };
    
//     document.addEventListener("mousedown", handleClickOutside);
    
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleMouseEnter = (key) => {
//     clearTimeout(closeTimeout.current);
//     setActiveDropdown(key);
//   };
  
//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   // This function closes ALL dropdowns immediately when any link is clicked
//   const handleLinkClick = () => {
//     setActiveDropdown(null);
//     setMobileOpen(false);
//     setMobileExpanded(null);
//   };

//   const getNavBackground = () => {
//     if (!isMounted) return "#ffffff";
//     return "#ffffff";
//   };

//   const getTopBarBackground = () => {
//     if (!isMounted) return "#67E8F9";
//     return "#67E8F9";
//   };

//   const getTopBarTextColor = () => {
//     if (!isMounted) return COLORS.primary;
//     return COLORS.primary;
//   };

//   const getBorderBottom = () => {
//     if (!isMounted) return "1px solid rgba(0,0,0,0.1)";
//     return scrolled ? `1px solid ${COLORS.gray200}` : "1px solid rgba(0,0,0,0.08)";
//   };

//   const getNavTextColor = () => {
//     if (!isMounted) return COLORS.gray700;
//     return COLORS.gray700;
//   };

//   return (
//     <header
//       ref={navbarRef}
//       className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//       style={{ 
//         boxShadow: isMounted && scrolled ? "0 4px 20px -6px rgba(0,0,0,0.12)" : "0 2px 10px -5px rgba(0,0,0,0.08)",
//       }}
//     >
//       {/* ── Top info bar - visible initially, hides on scroll ────── */}
//       <div
//         className="hidden md:block transition-all duration-300 overflow-hidden"
//         style={{
//           background: getTopBarBackground(),
//           borderBottom: "none",
//           maxHeight: scrolled ? "0" : "40px",
//           opacity: scrolled ? 0 : 1,
//           paddingTop: scrolled ? "0" : "6px",
//           paddingBottom: scrolled ? "0" : "6px",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
//           <div className="flex items-center gap-1.5 font-medium tracking-wide" style={{ color: getTopBarTextColor() }}>
//             <Droplets size={12} style={{ color: COLORS.primary }} />
//             <span>Unique Aqua Systems — Total Water Management Since 2002</span>
//           </div>

//           <div className="flex items-center gap-5">
//             <a
//               href={`tel:${companyInfo.phone}`}
//               className="flex items-center gap-1.5 font-medium transition-colors duration-200"
//               style={{ color: getTopBarTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.white}
//               onMouseLeave={e => e.currentTarget.style.color = getTopBarTextColor()}
//             >
//               <Phone size={11} style={{ color: COLORS.primary }} /> {companyInfo.phone}
//             </a>
//             <span style={{ color: COLORS.primary, opacity: 0.3 }}>|</span>
//             <a
//               href={`mailto:${companyInfo.email}`}
//               className="flex items-center gap-1.5 font-medium transition-colors duration-200"
//               style={{ color: getTopBarTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = COLORS.white}
//               onMouseLeave={e => e.currentTarget.style.color = getTopBarTextColor()}
//             >
//               <Mail size={11} style={{ color: COLORS.primary }} /> {companyInfo.email}
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── Main nav with white background ──────────────────────── */}
//       <nav
//         className="transition-all duration-300"
//         style={{
//           background: getNavBackground(),
//           backdropFilter: "none",
//           WebkitBackdropFilter: "none",
//           borderBottom: getBorderBottom(),
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" onClick={handleLinkClick} className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-90">
//             <div className="relative">
//               <Image
//                 src={unique_aqua_logo}
//                 alt="Unique Aqua Logo"
//                 width={180}
//                 height={52}
//                 className="h-12 w-auto object-contain"
//                 priority
//                 style={{ 
//                   filter: "none",
//                   imageRendering: "crisp-edges",
//                 }}
//               />
//             </div>
//           </Link>

//           {/* ── Desktop navigation ──────────────────────────────── */}
//           <div className="hidden lg:flex items-center gap-2">
//             {/* Home Link */}
//             <Link
//               href="/"
//               onClick={handleLinkClick}
//               className="px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 relative group"
//               style={{ color: getNavTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//               onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//             >
//               Home
//               <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//             </Link>

//             {/* Company Dropdown */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className="px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 relative group"
//                 style={{ color: getNavTextColor() }}
//                 onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//                 onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//               >
//                 Company <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
//                 <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//               </button>

//               <AnimatePresence>
//                 {activeDropdown === "company" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.15 }}
//                     className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100"
//                   >
//                     <div className="py-2">
//                       {navItems.company.dropdown.map((item) => (
//                         <Link
//                           key={item.href}
//                           href={item.href}
//                           onClick={handleLinkClick}
//                           className="block px-4 py-2.5 text-sm font-bold transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600"
//                           style={{ color: COLORS.gray700 }}
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Products Mega Menu */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className="px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 relative group"
//                 style={{ color: getNavTextColor() }}
//                 onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//                 onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//               >
//                 Products <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
//                 <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//               </button>

//               <AnimatePresence>
//                 {activeDropdown === "products" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.15 }}
//                     className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1100px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100"
//                   >
//                     <div className="grid grid-cols-3 divide-x divide-gray-100">
//                       {navItems.products.megaMenu.map((division) => (
//                         <div key={division.slug} className="p-5">
//                           <div className="flex items-center gap-2 mb-3">
//                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
//                             <Link
//                               href={`/products/${division.slug}`}
//                               onClick={handleLinkClick}
//                               className="text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-cyan-600 transition-colors"
//                             >
//                               {division.division}
//                             </Link>
//                           </div>

//                           <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
//                             {division.items.map((item) => (
//                               <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 onClick={handleLinkClick}
//                                 className="block text-sm rounded-lg px-3 py-2 text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600"
//                               >
//                                 {item.label}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="px-6 py-3 flex items-center justify-between bg-gradient-to-r from-blue-700 to-cyan-600">
//                       <span className="text-sm font-bold text-white">
//                         Complete water treatment solutions across 3 divisions
//                       </span>
//                       <Link
//                         href="/products"
//                         onClick={handleLinkClick}
//                         className="flex items-center gap-1 text-sm font-semibold text-white group"
//                       >
//                         View All Products
//                         <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Product Gallery Link */}
// <Link
//   href="/product-gallery"
//   onClick={handleLinkClick}
//   className="px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 relative group"
//   style={{ color: getNavTextColor() }}
//   onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//   onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
// >
//   Product Gallery
//   <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
// </Link>

            

//             {/* Application Areas Dropdown */}
//             <div className="relative" onMouseEnter={() => handleMouseEnter("applications")} onMouseLeave={handleMouseLeave}>
//               <button
//                 className="px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-1 relative group"
//                 style={{ color: getNavTextColor() }}
//                 onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//                 onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//               >
//                 Application Areas <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
//                 <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//               </button>

//               <AnimatePresence>
//                 {activeDropdown === "applications" && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 8 }}
//                     transition={{ duration: 0.15 }}
//                     className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100"
//                   >
//                     <div className="py-2">
//                       {navItems.applicationAreas.dropdown.map((item) => (
//                         <Link
//                           key={item.href}
//                           href={item.href}
//                           onClick={handleLinkClick}
//                           className="block px-4 py-2.5 text-sm font-bold text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-cyan-600"
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                     <div className="border-t border-gray-100 bg-gray-50">
//                       <Link
//                         href="/application-areas"
//                         onClick={handleLinkClick}
//                         className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-cyan-600 group"
//                       >
//                         View All Industries
//                         <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Clients Link */}
//             <Link
//               href="/clients"
//               onClick={handleLinkClick}
//               className="px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 relative group"
//               style={{ color: getNavTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//               onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//             >
//               Clients
//               <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//             </Link>

//             {/* News & Events Link */}
//             <Link
//               href="/news-events"
//               onClick={handleLinkClick}
//               className="px-3 py-2 text-sm font-bold rounded-lg transition-all duration-200 relative group"
//               style={{ color: getNavTextColor() }}
//               onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
//               onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
//             >
//               News & Events
//               <span className="absolute left-3 right-3 -bottom-1 h-0.5 bg-cyan-500 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
//             </Link>

//             {/* CTA Button */}
//             <Link href="/contact" onClick={handleLinkClick} className="ml-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer text-white shadow-md hover:shadow-lg transition-shadow duration-300"
//                 style={{
//                   background: GRADIENTS.cta,
//                 }}
//               >
//                 Contact Us
//               </motion.button>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
//             style={{ color: getNavTextColor() }}
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
//               style={{ 
//                 background: COLORS.white, 
//                 borderTop: `1px solid ${COLORS.gray100}`,
//               }}
//             >
//               <div className="px-4 py-4 space-y-1">
//                 <Link
//                   href="/"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-3 font-medium rounded-xl transition-all duration-200 hover:bg-gray-50"
//                   style={{ color: COLORS.gray700 }}
//                 >
//                   Home
//                 </Link>

//                 {/* Company Mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "company" ? COLORS.gray50 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
//                   >
//                     Company
//                     <ChevronDown size={16} className="transition-transform duration-200" style={{
//                       transform: mobileExpanded === "company" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "company" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-5 space-y-1 overflow-hidden"
//                       >
//                         {navItems.company.dropdown.map((item) => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={handleLinkClick}
//                             className="block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50"
//                             style={{ color: COLORS.gray600 }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Products Mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "products" ? COLORS.gray50 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
//                   >
//                     Products
//                     <ChevronDown size={16} className="transition-transform duration-200" style={{
//                       transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "products" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-5 space-y-3 overflow-hidden"
//                       >
//                         {navItems.products.megaMenu.map((division) => (
//                           <div key={division.slug} className="mt-2">
//                             <Link
//                               href={`/products/${division.slug}`}
//                               onClick={handleLinkClick}
//                               className="block text-xs font-bold px-4 py-1 uppercase tracking-wider text-blue-700"
//                             >
//                               {division.division}
//                             </Link>
//                             <div className="space-y-1 mt-1">
//                               {division.items.map((item) => (
//                                 <Link
//                                   key={item.href}
//                                   href={item.href}
//                                   onClick={handleLinkClick}
//                                   className="block px-4 py-2 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50"
//                                   style={{ color: COLORS.gray600 }}
//                                 >
//                                   {item.label}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Application Areas Mobile */}
//                 <div>
//                   <button
//                     className="w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all duration-200"
//                     style={{ 
//                       color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray700,
//                       background: mobileExpanded === "applications" ? COLORS.gray50 : "transparent",
//                     }}
//                     onClick={() => setMobileExpanded(mobileExpanded === "applications" ? null : "applications")}
//                   >
//                     Application Areas
//                     <ChevronDown size={16} className="transition-transform duration-200" style={{
//                       transform: mobileExpanded === "applications" ? "rotate(180deg)" : "rotate(0deg)",
//                     }} />
//                   </button>
//                   <AnimatePresence>
//                     {mobileExpanded === "applications" && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="pl-5 space-y-1 overflow-hidden"
//                       >
//                         {navItems.applicationAreas.dropdown.map((item) => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             onClick={handleLinkClick}
//                             className="block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50"
//                             style={{ color: COLORS.gray600 }}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                         <Link
//                           href="/application-areas"
//                           onClick={handleLinkClick}
//                           className="block px-4 py-2.5 text-sm font-semibold text-cyan-600"
//                         >
//                           View All Industries →
//                         </Link>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 <Link
//                   href="/clients"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-3 font-medium rounded-xl transition-all duration-200 hover:bg-gray-50"
//                   style={{ color: COLORS.gray700 }}
//                 >
//                   Clients
//                 </Link>

//                 <Link
//                   href="/news-events"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-3 font-medium rounded-xl transition-all duration-200 hover:bg-gray-50"
//                   style={{ color: COLORS.gray700 }}
//                 >
//                   News & Events
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-3 mt-3 text-center font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-md"
//                   style={{
//                     background: GRADIENTS.cta,
//                     color: COLORS.white,
//                   }}
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu, X, Phone, ChevronDown, Mail, ArrowRight,
  FlaskConical, Settings, Wrench, Droplets, Wind, Flame,
  Pill, Factory, Coffee, Shirt, Zap, Building2, Home,
  Shield, Award, Target, Users, Calendar, Sparkles,
  CheckCircle, Clock, Globe
} from "lucide-react";
import { navItems } from "@/lib/data";
import { unique_aqua_logo } from "@/public";

// ─── Premium Brand color palette ────────────────────────────
const COLORS = {
  primary: "#0F2B6D",
  primaryLight: "#1E4A8A",
  secondary: "#06B6D4",
  accent: "#67E8F9",
  dark: "#0F2B6D",
  light: "#CFFAFE",
  white: "#FFFFFF",
  gray50: "#F8FAFC",
  gray100: "#F1F5F9",
  gray200: "#E2E8F0",
  gray300: "#CBD5E1",
  gray600: "#475569",
  gray700: "#334155",
  gray800: "#1E293B",
  gold: "#F59E0B",
};

const GRADIENTS = {
  cta: "linear-gradient(135deg, #06B6D4 0%, #0F2B6D 100%)",
  ctaHover: "linear-gradient(135deg, #0891B2 0%, #1E3A8A 100%)",
  topBar: "linear-gradient(135deg, #06B6D4 0%, #0F2B6D 100%)",
  dropdownHover: "linear-gradient(90deg, rgba(6,182,212,0.08) 0%, rgba(15,43,109,0.04) 100%)",
  goldAccent: "linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)",
};

const companyInfo = {
  phone: "+91-9322142163",
  email: "sales.unique2010@gmail.com",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const closeTimeout = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll);
    
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (key) => {
    clearTimeout(closeTimeout.current);
    setActiveDropdown(key);
  };
  
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const getNavBackground = () => {
    if (!isMounted) return "#ffffff";
    return scrolled ? "rgba(255, 255, 255, 0.98)" : "#ffffff";
  };

  const getTopBarBackground = () => {
    if (!isMounted) return GRADIENTS.topBar;
    return GRADIENTS.topBar;
  };

  const getNavTextColor = () => {
    if (!isMounted) return COLORS.gray700;
    return COLORS.gray700;
  };

  const getAppIcon = (label) => {
    const icons = {
      "Cooling Towers": Wind,
      "Boilers & Steam Systems": Flame,
      "Pharmaceutical Industry": Pill,
      "Sugar Industry": Factory,
      "Food & Beverage": Coffee,
      "Textile & Dyeing": Shirt,
      "Power Plants": Zap,
      "Hotels & Hospitals": Building2,
      "Construction & Buildings": Home,
      "Automotive & Engineering": Settings,
    };
    const Icon = icons[label] || Droplets;
    return <Icon size={15} className="mr-2" />;
  };

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        boxShadow: isMounted && scrolled ? "0 8px 30px -8px rgba(0,0,0,0.12)" : "0 2px 15px -5px rgba(0,0,0,0.08)",
      }}
    >
      {/* ── Premium Top Info Bar ──────────────────────────────────── */}
      <div
        className="hidden md:block transition-all duration-300 overflow-hidden"
        style={{
          background: getTopBarBackground(),
          maxHeight: scrolled ? "0" : "42px",
          opacity: scrolled ? 0 : 1,
          paddingTop: scrolled ? "0" : "8px",
          paddingBottom: scrolled ? "0" : "8px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-white animate-pulse" />
              <span className="text-white text-sm font-semibold tracking-wide">
                ISO 9001:2015 Certified Company
              </span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Award size={14} className="text-white" />
              <span className="text-white text-sm font-medium">
                Total Water Management Since 2002
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-white text-sm font-semibold transition-all duration-200 hover:scale-105 group"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                <Phone size={13} className="text-white" />
              </div>
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 text-white text-sm font-semibold transition-all duration-200 hover:scale-105 group"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                <Mail size={13} className="text-white" />
              </div>
              <span>{companyInfo.email}</span>
            </a>
            
          </div>
        </div>
      </div>

      {/* ── Premium Main Navigation ──────────────────────────────── */}
      <nav
        className="transition-all duration-300"
        style={{
          background: getNavBackground(),
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${COLORS.gray200}` : "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Premium Logo */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center shrink-0 transition-all duration-300 hover:opacity-90 hover:scale-105 group">
            <div className="relative">
              <Image
                src={unique_aqua_logo}
                alt="Unique Aqua Logo"
                width={200}
                height={58}
                className="h-14 w-auto object-contain"
                priority
              />
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </Link>

          {/* ── Premium Desktop Navigation ──────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home Link */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className="px-4 py-2.5 text-[15px] font-bold rounded-xl transition-all duration-200 relative group"
              style={{ color: getNavTextColor() }}
              onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
              onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
            >
              Home
              <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>

            {/* Company Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
              <button
                className="px-4 py-2.5 text-[15px] font-bold rounded-xl transition-all duration-200 flex items-center gap-1.5 relative group"
                style={{ color: getNavTextColor() }}
                onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
                onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
              >
                Company 
                <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </button>

              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                  >
                    <div className="py-2">
                      {navItems.company.dropdown.map((item, idx) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="group flex items-center gap-3 px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-[#06B6D4]/10 hover:to-transparent"
                          style={{ color: COLORS.gray700 }}
                        >
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#06B6D4]/10 to-[#0F2B6D]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {idx === 0 && <Users size={15} className="text-[#06B6D4]" />}
                            {idx === 1 && <Shield size={15} className="text-[#06B6D4]" />}
                            {idx === 2 && <Target size={15} className="text-[#06B6D4]" />}
                          </div>
                          <span className="group-hover:text-[#06B6D4] transition-colors">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="px-5 py-3 bg-gradient-to-r from-[#06B6D4]/5 to-transparent border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock size={12} />
                        <span>Est. 2002 | ISO Certified</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Mega Menu - Premium Compact */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
              <button
                className="px-4 py-2.5 text-[15px] font-bold rounded-xl transition-all duration-200 flex items-center gap-1.5 relative group"
                style={{ color: getNavTextColor() }}
                onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
                onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
              >
                Products 
                <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </button>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                  >
                    <div className="grid grid-cols-3 divide-x divide-gray-100">
                      {navItems.products.megaMenu.map((division) => {
                        const getDivisionIcon = () => {
                          if (division.slug === "chemical") return <FlaskConical size={16} />;
                          if (division.slug === "mechanical") return <Settings size={16} />;
                          return <Wrench size={16} />;
                        };
                        
                        return (
                          <div key={division.slug} className="p-5">
                            <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-gray-100">
                              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#06B6D4]/15 to-[#0F2B6D]/15 flex items-center justify-center">
                                {getDivisionIcon()}
                              </div>
                              <Link
                                href={`/products/${division.slug}`}
                                onClick={handleLinkClick}
                                className="text-[11px] font-black uppercase tracking-wider text-[#0F2B6D] hover:text-[#06B6D4] transition-colors"
                              >
                                {division.division}
                              </Link>
                            </div>

                            <div
  className="space-y-1 max-h-[340px] overflow-y-auto hide-scrollbar pr-2 no-scroll-chain"
>
                              {division.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={handleLinkClick}
                                  className="block text-[13px] font-medium rounded-lg px-3 py-2 text-gray-600 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#06B6D4]/8 hover:to-transparent hover:text-[#06B6D4] hover:pl-4"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Product Gallery Link */}
            <Link
              href="/product-gallery"
              onClick={handleLinkClick}
              className="px-4 py-2.5 text-[15px] font-bold rounded-xl transition-all duration-200 relative group"
              style={{ color: getNavTextColor() }}
              onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
              onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
            >
              Product Gallery
              <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>

            {/* Application Areas Dropdown - Premium */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("applications")} onMouseLeave={handleMouseLeave}>
              <button
                className="px-4 py-2.5 text-[15px] font-bold rounded-xl transition-all duration-200 flex items-center gap-1.5 relative group"
                style={{ color: getNavTextColor() }}
                onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
                onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
              >
                Applications 
                <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
              </button>

              <AnimatePresence>
                {activeDropdown === "applications" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                  >
                    <div className="grid grid-cols-2 gap-1 p-3 max-h-[420px] overflow-y-auto">
                      {navItems.applicationAreas.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleLinkClick}
                          className="flex items-center px-3 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-[#06B6D4]/10 hover:to-transparent hover:text-[#06B6D4]"
                          style={{ color: COLORS.gray700 }}
                        >
                          {getAppIcon(item.label)}
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clients Link */}
            <Link
              href="/clients"
              onClick={handleLinkClick}
              className="px-4 py-2.5 text-[15px] font-bold rounded-xl transition-all duration-200 relative group"
              style={{ color: getNavTextColor() }}
              onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
              onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
            >
              Clients
              <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>

            {/* News & Events Link */}
            <Link
              href="/news-events"
              onClick={handleLinkClick}
              className="px-4 py-2.5 text-[15px] font-bold rounded-xl transition-all duration-200 relative group"
              style={{ color: getNavTextColor() }}
              onMouseEnter={e => e.currentTarget.style.color = "#06B6D4"}
              onMouseLeave={e => e.currentTarget.style.color = getNavTextColor()}
            >
              News & Events
              <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#0F2B6D] scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>

            {/* Premium CTA Button */}
            <Link href="/contact" onClick={handleLinkClick} className="ml-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative overflow-hidden group px-6 py-2.5 rounded-xl text-[14px] font-bold cursor-pointer text-white shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: GRADIENTS.cta,
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Quote
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 rounded-xl transition-all duration-200 hover:bg-gray-100"
            style={{ color: getNavTextColor() }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Premium Version */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
              style={{ 
                background: COLORS.white, 
                borderTop: `1px solid ${COLORS.gray100}`,
              }}
            >
              <div className="px-4 py-4 space-y-1">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:bg-gray-50"
                  style={{ color: COLORS.gray700 }}
                >
                  Home
                </Link>

                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3.5 font-semibold rounded-xl transition-all duration-200"
                    style={{ 
                      color: mobileExpanded === "company" ? COLORS.primary : COLORS.gray700,
                      background: mobileExpanded === "company" ? COLORS.gray50 : "transparent",
                    }}
                    onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
                  >
                    Company
                    <ChevronDown size={16} className="transition-transform duration-200" style={{
                      transform: mobileExpanded === "company" ? "rotate(180deg)" : "rotate(0deg)",
                    }} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "company" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-5 space-y-1 overflow-hidden"
                      >
                        {navItems.company.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50"
                            style={{ color: COLORS.gray600 }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3.5 font-semibold rounded-xl transition-all duration-200"
                    style={{ 
                      color: mobileExpanded === "products" ? COLORS.primary : COLORS.gray700,
                      background: mobileExpanded === "products" ? COLORS.gray50 : "transparent",
                    }}
                    onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
                  >
                    Products
                    <ChevronDown size={16} className="transition-transform duration-200" style={{
                      transform: mobileExpanded === "products" ? "rotate(180deg)" : "rotate(0deg)",
                    }} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "products" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-5 space-y-3 overflow-hidden"
                      >
                        {navItems.products.megaMenu.map((division) => (
                          <div key={division.slug} className="mt-2">
                            <Link
                              href={`/products/${division.slug}`}
                              onClick={handleLinkClick}
                              className="block text-xs font-bold px-4 py-1 uppercase tracking-wider text-blue-700"
                            >
                              {division.division}
                            </Link>
                            <div className="space-y-1 mt-1">
                              {division.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={handleLinkClick}
                                  className="block px-4 py-2 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50"
                                  style={{ color: COLORS.gray600 }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/product-gallery"
                  onClick={handleLinkClick}
                  className="block px-4 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:bg-gray-50"
                  style={{ color: COLORS.gray700 }}
                >
                  Product Gallery
                </Link>

                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3.5 font-semibold rounded-xl transition-all duration-200"
                    style={{ 
                      color: mobileExpanded === "applications" ? COLORS.primary : COLORS.gray700,
                      background: mobileExpanded === "applications" ? COLORS.gray50 : "transparent",
                    }}
                    onClick={() => setMobileExpanded(mobileExpanded === "applications" ? null : "applications")}
                  >
                    Application Areas
                    <ChevronDown size={16} className="transition-transform duration-200" style={{
                      transform: mobileExpanded === "applications" ? "rotate(180deg)" : "rotate(0deg)",
                    }} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "applications" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-5 space-y-1 overflow-hidden"
                      >
                        {navItems.applicationAreas.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 hover:bg-gray-50"
                            style={{ color: COLORS.gray600 }}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/application-areas"
                          onClick={handleLinkClick}
                          className="block px-4 py-2.5 text-sm font-semibold text-cyan-600"
                        >
                          View All Industries →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/clients"
                  onClick={handleLinkClick}
                  className="block px-4 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:bg-gray-50"
                  style={{ color: COLORS.gray700 }}
                >
                  Clients
                </Link>

                <Link
                  href="/news-events"
                  onClick={handleLinkClick}
                  className="block px-4 py-3.5 font-semibold rounded-xl transition-all duration-200 hover:bg-gray-50"
                  style={{ color: COLORS.gray700 }}
                >
                  News & Events
                </Link>

                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="block px-4 py-3.5 mt-3 text-center font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-md"
                  style={{
                    background: GRADIENTS.cta,
                    color: COLORS.white,
                  }}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}