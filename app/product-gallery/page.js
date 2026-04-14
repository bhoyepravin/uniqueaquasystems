// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, Image as ImageIcon, Building2, Factory, Droplets, Flame, Filter, Wrench, FlaskConical, Wind, Zap, Layers, Home, Thermometer, Atom, Package, TestTube, Coffee, Shirt, Pill, Cog,Settings } from "lucide-react";
// import { chemicalProducts, mechanicalProducts, sparesProducts } from "@/lib/data";
// import { exportSystem, ro2000, ro2000UV, ro250, ro250Vertical, ro5000, ro500Chlorination, ro500SS, ro500Vertical, roPlant5000, softener1000Auto, softener450 } from "@/public";

// // ─── Gallery Data Structure ────────────────────────────────────────────────
// // You can organize images by product category
// const galleryData = {
//   categories: [
//     {
//       id: "mechanical",
//       name: "Mechanical Division",
//       icon: Settings,
//       color: "#0096C7",
//       products: [
//         {
//           id: "ro-plants",
//           name: "RO Plants",
//           slug: "reverse-osmosis-ro-plant",
//           images: [
//             { src: ro5000, alt: "5000 LPH RO Plant", caption: "5000 LPH RO Plant Installation" },
//             { src: roPlant5000, alt: "RO Plant 5000 LPH", caption: "Industrial RO System" },
//             { src: ro2000, alt: "2000 LPH RO Plant", caption: "2000 LPH RO System" },
//             { src: ro2000UV, alt: "2000 LPH SS RO with UV", caption: "RO with UV Tank" },
//             { src: ro500SS, alt: "500 LPH SS RO", caption: "Compact RO System" },
//             { src: ro500Vertical, alt: "500 LPH Vertical RO", caption: "Vertical RO Plant" },
//             { src: ro250, alt: "250 LPH RO Plant", caption: "Small Capacity RO System" },
//             { src: ro250Vertical, alt: "250 LPH Vertical RO", caption: "Vertical RO System" },
//           ]
//         },
//         {
//           id: "softeners",
//           name: "Water Softeners",
//           slug: "water-softening-plant",
//           images: [
//             { src: softener1000Auto, alt: "1000 Litre Softener", caption: "Softener with ACF & Auto Valve" },
//             { src: softener450, alt: "450 Litre Softener", caption: "Compact Water Softener" },
//           ]
//         },
//         {
//           id: "special-systems",
//           name: "Special Systems",
//           slug: "industrial-systems",
//           images: [
//             { src: exportSystem, alt: "Export Water System", caption: "Industrial Export System" },
//             { src: ro500Chlorination, alt: "RO with Chlorination", caption: "SMBS Chlorination Dosing System" },
//           ]
//         }
//       ]
//     }
//   ]
// };

// // ─── Lightbox Component ────────────────────────────────────────────────────
// function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
//       onClick={onClose}
//     >
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
//       >
//         <X size={32} />
//       </button>
      
//       <button
//         onClick={(e) => { e.stopPropagation(); onPrev(); }}
//         className="absolute left-4 text-white hover:text-gray-300 transition-colors"
//       >
//         <ChevronLeft size={40} />
//       </button>
      
//       <button
//         onClick={(e) => { e.stopPropagation(); onNext(); }}
//         className="absolute right-4 text-white hover:text-gray-300 transition-colors"
//       >
//         <ChevronRight size={40} />
//       </button>

//       <div className="relative max-w-5xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
//         <div className="relative bg-black rounded-lg overflow-hidden">
//           <Image
//             src={images[currentIndex].src}
//             alt={images[currentIndex].alt}
//             width={1200}
//             height={800}
//             className="w-full h-auto max-h-[80vh] object-contain"
//           />
//           {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//             <p className="text-white text-center">{images[currentIndex].caption}</p>
//           </div> */}
//         </div>
//         <div className="text-center text-white mt-4">
//           {currentIndex + 1} / {images.length}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Product Card Component ────────────────────────────────────────────────
// function ProductCard({ product, categoryColor, onImageClick }) {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative h-48 bg-gray-100">
//         {product.images[0] && (
//           <Image
//             src={product.images[0].src}
//             alt={product.images[0].alt}
//             fill
//             className="object-cover"
//           />
//         )}
//         <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//           <button
//             onClick={() => onImageClick(product.images, 0)}
//             className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
//           >
//             View Gallery
//           </button>
//         </div>
//       </div>
//       <div className="p-4">
//         {/* <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3> */}
//         {/* <p className="text-sm text-gray-500 mb-3">{product.images.length} Photos</p> */}
//         {/* <Link
//           href={`/products/${galleryData.categories.find(c => c.products.includes(product))?.id || 'chemical'}/${product.slug}`}
//           className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
//           style={{ color: categoryColor }}
//         >
//           View Product <span aria-hidden="true">→</span>
//         </Link> */}
//       </div>
//     </div>
//   );
// }

// // ─── Main Gallery Page ─────────────────────────────────────────────────────
// export default function GalleryPage() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [lightboxImages, setLightboxImages] = useState(null);
//   const [lightboxIndex, setLightboxIndex] = useState(0);
//   const [viewMode, setViewMode] = useState("grid");

//   const openLightbox = (images, index) => {
//     setLightboxImages(images);
//     setLightboxIndex(index);
//   };

//   const closeLightbox = () => {
//     setLightboxImages(null);
//     setLightboxIndex(0);
//   };

//   const nextImage = () => {
//     setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
//   };

//   const prevImage = () => {
//     setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
//   };

//   // Flatten all images for "All" view
//   const getAllImages = () => {
//     const allImages = [];
//     galleryData.categories.forEach(category => {
//       category.products.forEach(product => {
//         product.images.forEach((image, idx) => {
//           allImages.push({
//             ...image,
//             productName: product.name,
//             categoryName: category.name,
//             categoryColor: category.color,
//           });
//         });
//       });
//     });
//     if (galleryData.projects) {
//       galleryData.projects.images.forEach(image => {
//         allImages.push({ ...image, productName: galleryData.projects.name, categoryName: "Projects", categoryColor: galleryData.projects.color });
//       });
//     }
//     if (galleryData.facility) {
//       galleryData.facility.images.forEach(image => {
//         allImages.push({ ...image, productName: galleryData.facility.name, categoryName: "Facility", categoryColor: galleryData.facility.color });
//       });
//     }
//     return allImages;
//   };

//   const allImages = getAllImages();

//   const filteredImages = selectedCategory === "all" 
//     ? allImages 
//     : allImages.filter(img => {
//         if (selectedCategory === "projects") return img.categoryName === "Projects";
//         if (selectedCategory === "facility") return img.categoryName === "Facility";
//         return img.categoryName === galleryData.categories.find(c => c.id === selectedCategory)?.name;
//       });

//   const categories = [
//     // { id: "all", name: "All Photos", icon: Grid3x3, color: "#6B7280" },
//     { id: "chemical", name: "Chemical Division", icon: FlaskConical, color: "#0077B6" },
//     { id: "mechanical", name: "Mechanical Division", icon: Settings, color: "#0096C7" },
//     { id: "spares", name: "Spares & Equipment", icon: Wrench, color: "#00B4D8" },
    
//     { id: "facility", name: "Manufacturing Facility", icon: Factory, color: "#F59E0B" },
//   ];

//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Hero Section */}
//         <div className="bg-gradient-to-br from-[#03045E] to-[#0077B6] rounded-3xl p-10 text-white mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
//           <p className="text-white/90 text-lg max-w-3xl">
//             Explore our water treatment solutions, installations, and manufacturing facilities through our visual journey.
//           </p>
//         </div>

//         {/* View Mode Toggle */}
//         <div className="flex justify-end mb-6">
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1 flex gap-1">
//             <button
//               onClick={() => setViewMode("grid")}
//               className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-[#0077B6] text-white" : "text-gray-500 hover:bg-gray-100"}`}
//             >
//               <Grid3x3 size={18} />
//             </button>
//             <button
//               onClick={() => setViewMode("masonry")}
//               className={`p-2 rounded-md transition-colors ${viewMode === "masonry" ? "bg-[#0077B6] text-white" : "text-gray-500 hover:bg-gray-100"}`}
//             >
//               <LayoutGrid size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           {categories.map((category) => {
//             const Icon = category.icon;
//             return (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   selectedCategory === category.id
//                     ? "bg-[#0077B6] text-white shadow-md"
//                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
//                 }`}
//               >
//                 <Icon size={16} />
//                 {category.name}
//               </button>
//             );
//           })}
//         </div>

//         {/* Product-wise Gallery Section (only for division categories) */}
//         {selectedCategory !== "all" && selectedCategory !== "projects" && selectedCategory !== "facility" && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//               {categories.find(c => c.id === selectedCategory)?.name}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {galleryData.categories
//                 .find(c => c.id === selectedCategory)
//                 ?.products.map((product, idx) => (
//                   <ProductCard
//                     key={idx}
//                     product={product}
//                     categoryColor={galleryData.categories.find(c => c.id === selectedCategory)?.color}
//                     onImageClick={openLightbox}
//                   />
//                 ))}
//             </div>
//           </div>
//         )}

//         {/* Image Grid View */}
//         <div className={`${viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "columns-2 md:columns-3 lg:columns-4 gap-4"} space-y-4`}>
//           {filteredImages.map((image, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.02 }}
//               className={`group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${
//                 viewMode === "grid" ? "" : "break-inside-avoid"
//               }`}
//               onClick={() => openLightbox(filteredImages, idx)}
//             >
//               <div className="relative w-full" style={{ paddingBottom: "75%" }}>
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-3">
//                   {/* <p className="text-white text-sm font-medium">{image.caption}</p> */}
//                   {/* <p className="text-white/70 text-xs mt-1">{image.productName}</p> */}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredImages.length === 0 && (
//           <div className="text-center py-20">
//             <ImageIcon size={64} className="mx-auto text-gray-300 mb-4" />
//             <p className="text-gray-500">No images found in this category.</p>
//           </div>
//         )}

//         {/* Lightbox */}
//         <AnimatePresence>
//           {lightboxImages && (
//             <Lightbox
//               images={lightboxImages}
//               currentIndex={lightboxIndex}
//               onClose={closeLightbox}
//               onNext={nextImage}
//               onPrev={prevImage}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, 
  Image as ImageIcon, Factory, Wrench, FlaskConical, 
  Settings, Camera, Sparkles, Award, ChevronRight as ChevronRightIcon
} from "lucide-react";
import { 
  exportSystem, ro2000, ro2000UV, ro250, ro250Vertical, 
  ro5000, ro500Chlorination, ro500SS, ro500Vertical, 
  roPlant5000, softener1000Auto, softener450 
} from "@/public";

// ─── Gallery Data Structure with All Images ─────────────────────────────────
const galleryData = {
  categories: [
    {
      id: "chemical",
      name: "Chemical Division",
      icon: FlaskConical,
      color: "#0077B6",
      gradient: "from-[#0077B6] to-[#00B4D8]",
      description: "Advanced chemical treatment solutions for water treatment",
      images: [
        { src: ro5000, alt: "RO Chemicals Application", caption: "RO Antiscalant Application", productName: "RO Chemicals" },
        { src: roPlant5000, alt: "Chemical Dosing System", caption: "Chemical Dosing System", productName: "Cooling Water Treatment" },
        { src: ro2000, alt: "Cooling Water Chemicals", caption: "Cooling Tower Treatment", productName: "Cooling Water Treatment" },
      ]
    },
    {
      id: "mechanical",
      name: "Mechanical Division",
      icon: Settings,
      color: "#0096C7",
      gradient: "from-[#0096C7] to-[#00B6D4]",
      description: "Complete mechanical water treatment systems",
      images: [
        { src: ro5000, alt: "5000 LPH RO Plant", caption: "5000 LPH RO Plant Installation", productName: "RO Plants" },
        { src: roPlant5000, alt: "RO Plant 5000 LPH", caption: "Industrial RO System", productName: "RO Plants" },
        { src: ro2000, alt: "2000 LPH RO Plant", caption: "2000 LPH RO System", productName: "RO Plants" },
        { src: ro2000UV, alt: "2000 LPH SS RO with UV", caption: "RO with UV Tank", productName: "RO Plants" },
        { src: ro500SS, alt: "500 LPH SS RO", caption: "Compact RO System", productName: "RO Plants" },
        { src: ro500Vertical, alt: "500 LPH Vertical RO", caption: "Vertical RO Plant", productName: "RO Plants" },
        { src: ro250, alt: "250 LPH RO Plant", caption: "Small Capacity RO System", productName: "RO Plants" },
        { src: ro250Vertical, alt: "250 LPH Vertical RO", caption: "Vertical RO System", productName: "RO Plants" },
        { src: ro500Chlorination, alt: "RO with Chlorination", caption: "SMBS Chlorination Dosing System", productName: "RO Plants" },
        { src: softener1000Auto, alt: "1000 Litre Softener", caption: "Softener with ACF & Auto Valve", productName: "Water Softeners" },
        { src: softener450, alt: "450 Litre Softener", caption: "Compact Water Softener", productName: "Water Softeners" },
        { src: exportSystem, alt: "Export Water System", caption: "Industrial Export System", productName: "Special Systems" },
      ]
    },
    {
      id: "spares",
      name: "Spares & Equipment",
      icon: Wrench,
      color: "#00B4D8",
      gradient: "from-[#00B4D8] to-[#48CAE4]",
      description: "Quality spares and equipment for water treatment",
      images: [
        { src: ro5000, alt: "Filter Housing", caption: "Filter Housing Systems", productName: "Filtration Systems" },
        { src: roPlant5000, alt: "Filter Cartridges", caption: "Filter Cartridge Assembly", productName: "Filtration Systems" },
      ]
    },
    {
      id: "facility",
      name: "Manufacturing Facility",
      icon: Factory,
      color: "#F59E0B",
      gradient: "from-[#F59E0B] to-[#FCD34D]",
      description: "State-of-the-art manufacturing facility",
      images: [
        { src: roPlant5000, alt: "Manufacturing Unit", caption: "Our Manufacturing Facility", productName: "Manufacturing Facility" },
        { src: ro2000, alt: "Production Line", caption: "Production Line", productName: "Manufacturing Facility" },
        { src: ro5000, alt: "Quality Control", caption: "Quality Testing Lab", productName: "Manufacturing Facility" },
      ]
    }
  ]
};

// ─── Lightbox Component ────────────────────────────────────────────────────
function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <X size={28} />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative max-w-6xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-black rounded-2xl overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1400}
            height={900}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          {images[currentIndex].caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-center text-sm md:text-base">{images[currentIndex].caption}</p>
            </div>
          )}
        </div>
        <div className="text-center text-white mt-4 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Gallery Page ─────────────────────────────────────────────────────
export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImages, setLightboxImages] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid");

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImages(null);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  // Get all images from all categories
  const getAllImages = () => {
    const allImages = [];
    galleryData.categories.forEach(category => {
      if (category.images && category.images.length > 0) {
        category.images.forEach((image) => {
          allImages.push({
            ...image,
            categoryName: category.name,
            categoryId: category.id,
            categoryColor: category.color,
          });
        });
      }
    });
    return allImages;
  };

  const allImages = getAllImages();

  // Filter images based on selected category
  const filteredImages = selectedCategory === "all" 
    ? allImages 
    : allImages.filter(img => img.categoryId === selectedCategory);

  const categories = [
    { id: "all", name: "All Photos", icon: Camera, color: "#6B7280", gradient: "from-gray-500 to-gray-600" },
    { id: "chemical", name: "Chemical Division", icon: FlaskConical, color: "#0077B6", gradient: "from-[#0077B6] to-[#00B4D8]" },
    { id: "mechanical", name: "Mechanical Division", icon: Settings, color: "#0096C7", gradient: "from-[#0096C7] to-[#00B6D4]" },
    { id: "spares", name: "Spares & Equipment", icon: Wrench, color: "#00B4D8", gradient: "from-[#00B4D8] to-[#48CAE4]" },
    { id: "facility", name: "Manufacturing Facility", icon: Factory, color: "#F59E0B", gradient: "from-[#F59E0B] to-[#FCD34D]" },
  ];

  // Get current category stats
  const currentCategory = categories.find(c => c.id === selectedCategory);
  const imageCount = filteredImages.length;

  return (
    <div className="relative min-h-screen pt-24 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-32 right-20 w-2 h-2 bg-[#06B6D4]/20 rounded-full" />
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-[#1E3A8A]/20 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 md:pt-10">
        {/* Hero Section - Quality Policy Page Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            <p className="text-[#06B6D4] text-sm md:text-base font-semibold tracking-wider uppercase">
              Visual Journey
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Photo{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Gallery
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
            Explore our water treatment solutions, installations, and manufacturing facilities through our visual journey.
            Witness our commitment to quality and innovation in every frame.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Camera size={16} className="text-[#06B6D4]" />
              <span>{allImages.length}+ Photos</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Award size={16} className="text-[#06B6D4]" />
              <span>ISO Certified</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-md`
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
          
          {/* Category Stats */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Showing <span className="font-bold text-[#06B6D4]">{imageCount}</span> photos in{" "}
              <span className="font-semibold text-gray-700">{currentCategory?.name}</span>
            </p>
          </div>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-end mb-6"
        >
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-1 flex gap-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "grid" 
                  ? "bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white shadow-sm" 
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Grid3x3 size={18} />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 rounded-lg transition-all duration-300 ${
                viewMode === "masonry" 
                  ? "bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white shadow-sm" 
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </motion.div>

        {/* Image Grid View */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={viewMode === "grid" 
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" 
            : "columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5"
          }
        >
          {filteredImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: Math.min(idx * 0.02, 0.5) }}
              whileHover={{ y: -5 }}
              className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                viewMode === "grid" ? "" : "break-inside-avoid"
              }`}
              onClick={() => openLightbox(filteredImages, idx)}
            >
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-xs font-semibold">{image.productName}</p>
                    <p className="text-white/80 text-xs mt-0.5">{image.categoryName}</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <span 
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white shadow-sm"
                    style={{ backgroundColor: image.categoryColor }}
                  >
                    {image.categoryName === "Mechanical Division" ? "Mechanical" : 
                     image.categoryName === "Chemical Division" ? "Chemical" :
                     image.categoryName === "Spares & Equipment" ? "Spares" : 
                     image.categoryName === "Manufacturing Facility" ? "Facility" : ""}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <ImageIcon size={40} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Images Found</h3>
            <p className="text-gray-500">No images available in this category yet.</p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImages && (
            <Lightbox
              images={lightboxImages}
              currentIndex={lightboxIndex}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrev={prevImage}
            />
          )}
        </AnimatePresence>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-2xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Want to See More?</h3>
            <p className="text-white/80 mb-6">Contact us for detailed product catalogs and case studies</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1E3A8A] rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Request Catalog
              <ChevronRightIcon size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}