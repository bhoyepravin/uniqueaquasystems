"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, Image as ImageIcon, Building2, Factory, Droplets, Flame, Filter, Wrench, FlaskConical, Wind, Zap, Layers, Home, Thermometer, Atom, Package, TestTube, Coffee, Shirt, Pill, Cog,Settings } from "lucide-react";
import { chemicalProducts, mechanicalProducts, sparesProducts } from "@/lib/data";
import { exportSystem, ro2000, ro2000UV, ro250, ro250Vertical, ro5000, ro500Chlorination, ro500SS, ro500Vertical, roPlant5000, softener1000Auto, softener450 } from "@/public";

// ─── Gallery Data Structure ────────────────────────────────────────────────
// You can organize images by product category
const galleryData = {
  categories: [
    {
      id: "mechanical",
      name: "Mechanical Division",
      icon: Settings,
      color: "#0096C7",
      products: [
        {
          id: "ro-plants",
          name: "RO Plants",
          slug: "reverse-osmosis-ro-plant",
          images: [
            { src: ro5000, alt: "5000 LPH RO Plant", caption: "5000 LPH RO Plant Installation" },
            { src: roPlant5000, alt: "RO Plant 5000 LPH", caption: "Industrial RO System" },
            { src: ro2000, alt: "2000 LPH RO Plant", caption: "2000 LPH RO System" },
            { src: ro2000UV, alt: "2000 LPH SS RO with UV", caption: "RO with UV Tank" },
            { src: ro500SS, alt: "500 LPH SS RO", caption: "Compact RO System" },
            { src: ro500Vertical, alt: "500 LPH Vertical RO", caption: "Vertical RO Plant" },
            { src: ro250, alt: "250 LPH RO Plant", caption: "Small Capacity RO System" },
            { src: ro250Vertical, alt: "250 LPH Vertical RO", caption: "Vertical RO System" },
          ]
        },
        {
          id: "softeners",
          name: "Water Softeners",
          slug: "water-softening-plant",
          images: [
            { src: softener1000Auto, alt: "1000 Litre Softener", caption: "Softener with ACF & Auto Valve" },
            { src: softener450, alt: "450 Litre Softener", caption: "Compact Water Softener" },
          ]
        },
        {
          id: "special-systems",
          name: "Special Systems",
          slug: "industrial-systems",
          images: [
            { src: exportSystem, alt: "Export Water System", caption: "Industrial Export System" },
            { src: ro500Chlorination, alt: "RO with Chlorination", caption: "SMBS Chlorination Dosing System" },
          ]
        }
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
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X size={32} />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeft size={40} />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronRight size={40} />
      </button>

      <div className="relative max-w-5xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-black rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white text-center">{images[currentIndex].caption}</p>
          </div> */}
        </div>
        <div className="text-center text-white mt-4">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Product Card Component ────────────────────────────────────────────────
function ProductCard({ product, categoryColor, onImageClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 bg-gray-100">
        {product.images[0] && (
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover"
          />
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onImageClick(product.images, 0)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            View Gallery
          </button>
        </div>
      </div>
      <div className="p-4">
        {/* <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3> */}
        {/* <p className="text-sm text-gray-500 mb-3">{product.images.length} Photos</p> */}
        {/* <Link
          href={`/products/${galleryData.categories.find(c => c.products.includes(product))?.id || 'chemical'}/${product.slug}`}
          className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
          style={{ color: categoryColor }}
        >
          View Product <span aria-hidden="true">→</span>
        </Link> */}
      </div>
    </div>
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

  // Flatten all images for "All" view
  const getAllImages = () => {
    const allImages = [];
    galleryData.categories.forEach(category => {
      category.products.forEach(product => {
        product.images.forEach((image, idx) => {
          allImages.push({
            ...image,
            productName: product.name,
            categoryName: category.name,
            categoryColor: category.color,
          });
        });
      });
    });
    if (galleryData.projects) {
      galleryData.projects.images.forEach(image => {
        allImages.push({ ...image, productName: galleryData.projects.name, categoryName: "Projects", categoryColor: galleryData.projects.color });
      });
    }
    if (galleryData.facility) {
      galleryData.facility.images.forEach(image => {
        allImages.push({ ...image, productName: galleryData.facility.name, categoryName: "Facility", categoryColor: galleryData.facility.color });
      });
    }
    return allImages;
  };

  const allImages = getAllImages();

  const filteredImages = selectedCategory === "all" 
    ? allImages 
    : allImages.filter(img => {
        if (selectedCategory === "projects") return img.categoryName === "Projects";
        if (selectedCategory === "facility") return img.categoryName === "Facility";
        return img.categoryName === galleryData.categories.find(c => c.id === selectedCategory)?.name;
      });

  const categories = [
    // { id: "all", name: "All Photos", icon: Grid3x3, color: "#6B7280" },
    { id: "chemical", name: "Chemical Division", icon: FlaskConical, color: "#0077B6" },
    { id: "mechanical", name: "Mechanical Division", icon: Settings, color: "#0096C7" },
    { id: "spares", name: "Spares & Equipment", icon: Wrench, color: "#00B4D8" },
    
    { id: "facility", name: "Manufacturing Facility", icon: Factory, color: "#F59E0B" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#03045E] to-[#0077B6] rounded-3xl p-10 text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-white/90 text-lg max-w-3xl">
            Explore our water treatment solutions, installations, and manufacturing facilities through our visual journey.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-end mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1 flex gap-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-[#0077B6] text-white" : "text-gray-500 hover:bg-gray-100"}`}
            >
              <Grid3x3 size={18} />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 rounded-md transition-colors ${viewMode === "masonry" ? "bg-[#0077B6] text-white" : "text-gray-500 hover:bg-gray-100"}`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#0077B6] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon size={16} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Product-wise Gallery Section (only for division categories) */}
        {selectedCategory !== "all" && selectedCategory !== "projects" && selectedCategory !== "facility" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.categories
                .find(c => c.id === selectedCategory)
                ?.products.map((product, idx) => (
                  <ProductCard
                    key={idx}
                    product={product}
                    categoryColor={galleryData.categories.find(c => c.id === selectedCategory)?.color}
                    onImageClick={openLightbox}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Image Grid View */}
        <div className={`${viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "columns-2 md:columns-3 lg:columns-4 gap-4"} space-y-4`}>
          {filteredImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              className={`group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer ${
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
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  {/* <p className="text-white text-sm font-medium">{image.caption}</p> */}
                  {/* <p className="text-white/70 text-xs mt-1">{image.productName}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No images found in this category.</p>
          </div>
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
      </div>
    </div>
  );
}