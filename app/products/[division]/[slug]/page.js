// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { getProductBySlug, getProductsByDivision } from "@/lib/data";
// import { buildProductMetadata } from "@/utils/seoConfig";
// import { CheckCircle, ArrowRight } from "lucide-react";

// export async function generateStaticParams() {
//   const { chemicalProducts, mechanicalProducts, sparesProducts } = await import("@/lib/data");
//   const params = [];
//   chemicalProducts.forEach((p) => params.push({ division: "chemical", slug: p.slug }));
//   mechanicalProducts.forEach((p) => params.push({ division: "mechanical", slug: p.slug }));
//   sparesProducts.forEach((p) => params.push({ division: "spares", slug: p.slug }));
//   return params;
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   return buildProductMetadata(slug);
// }

// export default async function ProductDetailPage({ params }) {
//   const { division, slug } = await params;
//   const product = getProductBySlug(slug);
//   if (!product) notFound();

//   const divisionLabels = {
//     chemical: "Chemical Water Treatment Division",
//     mechanical: "Mechanical Water Treatment Division",
//     spares: "Spares & Equipments Division",
//   };

//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Breadcrumb */}
//         <div className="mb-6 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
//           <Link href="/" className="hover:text-[#0077B6]">Home</Link> /
//           <Link href="/products" className="hover:text-[#0077B6]">Products</Link> /
//           <Link href={`/products/${division}`} className="hover:text-[#0077B6]">{divisionLabels[division]}</Link> /
//           <span className="text-gray-900">{product.name}</span>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Header */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//               <div
//                 className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
//                 style={{ backgroundColor: (product.color || "#0077B6") + "20", color: product.color || "#0077B6" }}
//               >
//                 {divisionLabels[division]}
//               </div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
//               {product.subtitle && <p className="text-gray-500 text-lg mb-4">{product.subtitle}</p>}
//               <p className="text-gray-700 leading-relaxed">{product.description}</p>
//             </div>

//             {/* Problems (if any) */}
//             {product.problems && product.problems.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Common Problems Addressed</h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {product.problems.map((problem, i) => (
//                     <div key={i} className="bg-red-50 rounded-xl p-4 border border-red-100">
//                       <h3 className="font-bold text-red-700 mb-2">{problem.title}</h3>
//                       <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Chemicals / Solutions */}
//             {product.chemicals && product.chemicals.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">
//                   UNI-TREAT® Series of {product.name} Chemical Solutions
//                 </h2>
//                 <div className="space-y-3">
//                   {product.chemicals.map((chem, i) => (
//                     <div key={i} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
//                       <div className="w-8 h-8 rounded-full bg-[#0077B6] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
//                         {String.fromCharCode(97 + i).toUpperCase()}
//                       </div>
//                       <div>
//                         <span className="font-bold text-[#0077B6]">{chem.name}</span>
//                         <span className="text-gray-700"> — {chem.type}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Models table */}
//             {product.models && product.models.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Available Models</h2>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead>
//                       <tr className="bg-[#0077B6] text-white rounded-lg">
//                         <th className="px-4 py-3 text-left rounded-tl-lg">Model</th>
//                         {product.models[0].capacity && <th className="px-4 py-3 text-left">Capacity</th>}
//                         {product.models[0].flow && <th className="px-4 py-3 text-left">Flow Rate</th>}
//                         {product.models[0].resinCap && <th className="px-4 py-3 text-left rounded-tr-lg">Resin Capacity</th>}
//                         {product.models[0].flowRate && <th className="px-4 py-3 text-left rounded-tr-lg">Flow Rate</th>}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {product.models.map((model, i) => (
//                         <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                           <td className="px-4 py-3 font-semibold text-gray-900">{model.model}</td>
//                           {model.capacity && <td className="px-4 py-3 text-gray-700">{model.capacity}</td>}
//                           {model.flow && <td className="px-4 py-3 text-gray-700">{model.flow}</td>}
//                           {model.resinCap && <td className="px-4 py-3 text-gray-700">{model.resinCap}</td>}
//                           {model.flowRate && <td className="px-4 py-3 text-gray-700">{model.flowRate}</td>}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-6 text-white">
//               <h3 className="font-bold text-lg mb-3">Get a Quote</h3>
//               <p className="text-white/80 text-sm mb-4">Contact our experts for pricing and technical consultation.</p>
//               <Link href="/contact">
//                 <div className="w-full bg-white text-[#0077B6] rounded-xl px-4 py-3 font-bold text-center hover:bg-gray-100 transition-colors cursor-pointer">
//                   Request Quote →
//                 </div>
//               </Link>
//             </div>

//             {/* Division quick links */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//               <h3 className="font-bold text-gray-900 mb-4">More Products</h3>
//               <div className="space-y-2">
//                 {getProductsByDivision(division).filter((p) => p.slug !== product.slug).slice(0, 5).map((p) => (
//                   <Link key={p.slug} href={`/products/${division}/${p.slug}`} className="block text-sm text-gray-600 hover:text-[#0077B6] hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors">
//                     {p.name}
//                   </Link>
//                 ))}
//                 <Link href={`/products/${division}`} className="flex items-center gap-1 text-sm text-[#0077B6] font-semibold mt-3">
//                   View All <ArrowRight size={14} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { getProductBySlug, getProductsByDivision } from "@/lib/data";
// import { buildProductMetadata } from "@/utils/seoConfig";
// import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

// export async function generateStaticParams() {
//   const { chemicalProducts, mechanicalProducts, sparesProducts } = await import("@/lib/data");
//   const params = [];
//   chemicalProducts.forEach((p) => params.push({ division: "chemical", slug: p.slug }));
//   mechanicalProducts.forEach((p) => params.push({ division: "mechanical", slug: p.slug }));
//   sparesProducts.forEach((p) => params.push({ division: "spares", slug: p.slug }));
//   return params;
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   return buildProductMetadata(slug);
// }

// export default async function ProductDetailPage({ params }) {
//   const { division, slug } = await params;
//   const product = getProductBySlug(slug);
//   if (!product) notFound();

//   const divisionLabels = {
//     chemical: "Chemical Water Treatment Division",
//     mechanical: "Mechanical Water Treatment Division",
//     spares: "Spares & Equipments Division",
//   };

//   // Get the problem background color based on product color
//   const problemBgColor = product.color ? `${product.color}10` : "#dc262610";
//   const problemBorderColor = product.color ? `${product.color}20` : "#dc262620";
//   const problemTitleColor = product.color || "#dc2626";

//   return (
//     <div className="min-h-screen pt-32 pb-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Breadcrumb */}
//         <div className="mb-6 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
//           <Link href="/" className="hover:text-[#0077B6] transition-colors">Home</Link> /
//           <Link href="/products" className="hover:text-[#0077B6] transition-colors">Products</Link> /
//           <Link href={`/products/${division}`} className="hover:text-[#0077B6] transition-colors">{divisionLabels[division]}</Link> /
//           <span className="text-gray-900 font-medium">{product.name}</span>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Header */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//               <div
//                 className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
//                 style={{ backgroundColor: (product.color || "#0077B6") + "20", color: product.color || "#0077B6" }}
//               >
//                 {divisionLabels[division]}
//               </div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
//               {product.subtitle && <p className="text-gray-500 text-lg mb-4">{product.subtitle}</p>}
//               <p className="text-gray-700 leading-relaxed">{product.description}</p>
//             </div>

//             {/* Problems with Images */}
//             {product.problems && product.problems.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Common Problems Addressed</h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {product.problems.map((problem, i) => (
//                     <div 
//                       key={i} 
//                       className="rounded-xl p-4 border transition-all duration-300 hover:shadow-md"
//                       style={{ 
//                         backgroundColor: problemBgColor,
//                         borderColor: problemBorderColor
//                       }}
//                     >
//                       <div className="flex items-start gap-3">
//                         {/* Image Section */}
//                         <div className="flex-shrink-0">
//                           {problem.image ? (
//                             <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-sm">
//                               <Image
//                                 src={problem.image}
//                                 alt={problem.title}
//                                 width={50}
//                                 height={50}
//                                 className="object-contain"
//                                 onError={(e) => {
//                                   // Fallback if image doesn't exist - show colored circle with first letter
//                                   const parent = e.target.parentElement;
//                                   parent.innerHTML = `<div class="w-14 h-14 rounded-lg flex items-center justify-center" style="background-color: ${problemTitleColor}20">
//                                     <span class="text-xl font-bold" style="color: ${problemTitleColor}">${problem.title.charAt(0)}</span>
//                                   </div>`;
//                                 }}
//                               />
//                             </div>
//                           ) : (
//                             <div 
//                               className="w-14 h-14 rounded-lg flex items-center justify-center"
//                               style={{ backgroundColor: `${problemTitleColor}20` }}
//                             >
//                               <span className="text-xl font-bold" style={{ color: problemTitleColor }}>
//                                 {problem.title.charAt(0)}
//                               </span>
//                             </div>
//                           )}
//                         </div>
                        
//                         {/* Content */}
//                         <div className="flex-1">
//                           <h3 
//                             className="font-bold mb-2 text-base"
//                             style={{ color: problemTitleColor }}
//                           >
//                             {problem.title}
//                           </h3>
//                           <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Chemicals / Solutions */}
//             {product.chemicals && product.chemicals.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">
//                    {product.name} Solutions
//                 </h2>
//                 <div className="space-y-3">
//                   {product.chemicals.map((chem, i) => (
//                     <div 
//                       key={i} 
//                       className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-sm"
//                       style={{ 
//                         backgroundColor: `${product.color || "#0077B6"}10`,
//                         borderColor: `${product.color || "#0077B6"}20`
//                       }}
//                     >
//                       <div 
//                         className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
//                         style={{ backgroundColor: product.color || "#0077B6" }}
//                       >
//                         {String.fromCharCode(97 + i).toUpperCase()}
//                       </div>
//                       <div>
//                         <span className="font-bold" style={{ color: product.color || "#0077B6" }}>{chem.name}</span>
//                         <span className="text-gray-700"> — {chem.type}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Types (for mechanical products) */}
//             {product.types && product.types.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Available Types</h2>
//                 <div className="flex flex-wrap gap-3">
//                   {product.types.map((type, i) => (
//                     <span 
//                       key={i}
//                       className="px-4 py-2 rounded-full text-sm font-medium"
//                       style={{ 
//                         backgroundColor: `${product.color || "#0077B6"}10`,
//                         color: product.color || "#0077B6"
//                       }}
//                     >
//                       {type}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Models table */}
//             {product.models && product.models.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Available Models</h2>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm">
//                     <thead>
//                       <tr style={{ backgroundColor: product.color || "#0077B6" }} className="text-white rounded-lg">
//                         <th className="px-4 py-3 text-left rounded-tl-lg">Model</th>
//                         {product.models[0].capacity && <th className="px-4 py-3 text-left">Capacity</th>}
//                         {product.models[0].flow && <th className="px-4 py-3 text-left">Flow Rate</th>}
//                         {product.models[0].resinCap && <th className="px-4 py-3 text-left">Resin Capacity</th>}
//                         {product.models[0].flowRate && <th className="px-4 py-3 text-left rounded-tr-lg">Flow Rate</th>}
//                         {product.models[0].inlet && <th className="px-4 py-3 text-left">Inlet</th>}
//                         {product.models[0].chamberL && <th className="px-4 py-3 text-left">Length</th>}
//                         {product.models[0].chamberW && <th className="px-4 py-3 text-left">Width</th>}
//                         {product.models[0].chamberH && <th className="px-4 py-3 text-left rounded-tr-lg">Height</th>}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {product.models.map((model, i) => (
//                         <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                           <td className="px-4 py-3 font-semibold text-gray-900">{model.model}</td>
//                           {model.capacity && <td className="px-4 py-3 text-gray-700">{model.capacity}</td>}
//                           {model.flow && <td className="px-4 py-3 text-gray-700">{model.flow}</td>}
//                           {model.resinCap && <td className="px-4 py-3 text-gray-700">{model.resinCap}</td>}
//                           {model.flowRate && <td className="px-4 py-3 text-gray-700">{model.flowRate}</td>}
//                           {model.inlet && <td className="px-4 py-3 text-gray-700">{model.inlet}</td>}
//                           {model.chamberL && <td className="px-4 py-3 text-gray-700">{model.chamberL}</td>}
//                           {model.chamberW && <td className="px-4 py-3 text-gray-700">{model.chamberW}</td>}
//                           {model.chamberH && <td className="px-4 py-3 text-gray-700">{model.chamberH}</td>}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {/* Cartridges (for spares products) */}
//             {product.cartridges && product.cartridges.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Available Cartridges</h2>
//                 <div className="space-y-3">
//                   {product.cartridges.map((cartridge, i) => (
//                     <div 
//                       key={i}
//                       className="p-4 rounded-xl border"
//                       style={{ 
//                         backgroundColor: `${product.color || "#0077B6"}05`,
//                         borderColor: `${product.color || "#0077B6"}20`
//                       }}
//                     >
//                       <h3 className="font-bold text-gray-900 mb-2">{cartridge.name}</h3>
//                       <div className="grid md:grid-cols-2 gap-2 text-sm">
//                         {cartridge.micron && <p><span className="font-semibold">Micron:</span> {cartridge.micron}</p>}
//                         {cartridge.config && <p><span className="font-semibold">Configuration:</span> {cartridge.config}</p>}
//                         {cartridge.flow && <p><span className="font-semibold">Flow Rate:</span> {cartridge.flow}</p>}
//                         {cartridge.media && <p><span className="font-semibold">Media:</span> {cartridge.media}</p>}
//                         {cartridge.lengths && <p><span className="font-semibold">Lengths:</span> {cartridge.lengths}</p>}
//                         {cartridge.note && <p className="col-span-2 text-gray-500 text-xs mt-1">{cartridge.note}</p>}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Items (for spares products) */}
//             {product.items && product.items.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Available Items</h2>
//                 <div className="space-y-4">
//                   {product.items.map((item, i) => (
//                     <div 
//                       key={i}
//                       className="p-4 rounded-xl border"
//                       style={{ 
//                         backgroundColor: `${product.color || "#0077B6"}05`,
//                         borderColor: `${product.color || "#0077B6"}20`
//                       }}
//                     >
//                       <h3 className="font-bold text-gray-900 mb-2">{item.category}</h3>
//                       <p className="text-sm text-gray-600">{item.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Testing Parameters (for water testing kits) */}
//             {product.testingParameters && product.testingParameters.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Testing Parameters</h2>
//                 <div className="flex flex-wrap gap-2">
//                   {product.testingParameters.map((param, i) => (
//                     <span 
//                       key={i}
//                       className="px-3 py-1.5 rounded-full text-xs font-medium"
//                       style={{ 
//                         backgroundColor: `${product.color || "#0077B6"}10`,
//                         color: product.color || "#0077B6"
//                       }}
//                     >
//                       {param}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Microbe Detection (for water testing kits) */}
//             {product.microbeDetection && product.microbeDetection.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Microbe Detection Devices</h2>
//                 <div className="space-y-3">
//                   {product.microbeDetection.map((microbe, i) => (
//                     <div 
//                       key={i}
//                       className="p-4 rounded-xl border"
//                       style={{ 
//                         backgroundColor: `${product.color || "#0077B6"}05`,
//                         borderColor: `${product.color || "#0077B6"}20`
//                       }}
//                     >
//                       <div className="flex flex-wrap justify-between items-start gap-2">
//                         <div>
//                           <span className="font-bold text-gray-900">{microbe.code}</span>
//                           <span className="text-gray-700"> — {microbe.type}</span>
//                         </div>
//                       </div>
//                       <p className="text-sm text-gray-500 mt-2">{microbe.industries}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-6 text-white">
//               <h3 className="font-bold text-lg mb-3">Get a Quote</h3>
//               <p className="text-white/80 text-sm mb-4">Contact our experts for pricing and technical consultation.</p>
//               <Link href="/contact">
//                 <div className="w-full bg-white text-[#0077B6] rounded-xl px-4 py-3 font-bold text-center hover:bg-gray-100 transition-colors cursor-pointer">
//                   Request Quote →
//                 </div>
//               </Link>
//             </div>

//             {/* Division quick links */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//               <h3 className="font-bold text-gray-900 mb-4">More Products in {divisionLabels[division]}</h3>
//               <div className="space-y-2">
//                 {getProductsByDivision(division)
//                   .filter((p) => p.slug !== product.slug)
//                   .slice(0, 5)
//                   .map((p) => (
//                     <Link 
//                       key={p.slug} 
//                       href={`/products/${division}/${p.slug}`} 
//                       className="block text-sm text-gray-600 hover:text-[#0077B6] hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors"
//                     >
//                       {p.name}
//                     </Link>
//                   ))}
//                 <Link 
//                   href={`/products/${division}`} 
//                   className="flex items-center gap-1 text-sm font-semibold mt-3 transition-colors"
//                   style={{ color: product.color || "#0077B6" }}
//                 >
//                   View All Products <ArrowRight size={14} />
//                 </Link>
//               </div>
//             </div>

//             {/* Contact Info Card */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//               <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
//               <p className="text-sm text-gray-600 mb-4">Our technical team is ready to assist you with your specific requirements.</p>
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <Phone size={14} className="text-[#0077B6]" />
//                   <span>+91-253-6699936</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <Mail size={14} className="text-[#0077B6]" />
//                   <span>sales.unique2010@gmail.com</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, getProductsByDivision } from "@/lib/data";
import { buildProductMetadata } from "@/utils/seoConfig";
import { CheckCircle, ArrowRight, Phone, Mail, AlertTriangle, Droplets, ShieldAlert, Bug, Flame, Waves, CircleOff, XCircle, AlertCircle } from "lucide-react";

export async function generateStaticParams() {
  const { chemicalProducts, mechanicalProducts, sparesProducts } = await import("@/lib/data");
  const params = [];
  chemicalProducts.forEach((p) => params.push({ division: "chemical", slug: p.slug }));
  if (mechanicalProducts) mechanicalProducts.forEach((p) => params.push({ division: "mechanical", slug: p.slug }));
  if (sparesProducts) sparesProducts.forEach((p) => params.push({ division: "spares", slug: p.slug }));
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildProductMetadata(slug);
}

// Map problem titles to Lucide icons (fallback if images don't load)
const problemIconMap = {
  "Scale": Droplets,
  "Corrosion": ShieldAlert,
  "Fouling": AlertTriangle,
  "Microbiological Contaminants": Bug,
  "Scaling": Flame,
  "Microbial Growth": Bug,
  "Hard Scale Deposits": AlertTriangle,
  "Equipment Downtime": XCircle,
  "Membrane Fouling": CircleOff,
  "Biofouling": Bug,
  "Excessive Foaming": Waves,
  "Process Interruption": AlertCircle,
  "Suspended Solids": Waves,
  "Heavy Metal Contamination": AlertTriangle,
  "Slag Deposits": Flame,
  "High Temperature Corrosion": ShieldAlert,
  "Evaporator Scaling": Droplets,
  "High Viscosity Massecuite": AlertCircle
};

export default async function ProductDetailPage({ params }) {
  const { division, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const divisionLabels = {
    chemical: "Chemical Water Treatment Division",
    mechanical: "Mechanical Water Treatment Division",
    spares: "Spares & Equipments Division",
  };

  // Get the problem background color based on product color
  const problemBgColor = product.color ? `${product.color}10` : "#dc262610";
  const problemBorderColor = product.color ? `${product.color}20` : "#dc262620";
  const problemTitleColor = product.color || "#dc2626";

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#0077B6] transition-colors">Home</Link> /
          <Link href="/products" className="hover:text-[#0077B6] transition-colors">Products</Link> /
          <Link href={`/products/${division}`} className="hover:text-[#0077B6] transition-colors">{divisionLabels[division]}</Link> /
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            {/* Header with Image on Right */}
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
  <div className="flex flex-col md:flex-row">
    {/* Content Section - Left Side */}
    <div className="flex-1 p-8">
      {/* <div
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
        style={{ backgroundColor: (product.color || "#0077B6") + "20", color: product.color || "#0077B6" }}
      >
        {divisionLabels[division]}
      </div> */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
      {/* {product.subtitle && <p className="text-gray-500 text-lg mb-4">{product.subtitle}</p>} */}
      <p className="text-gray-700 leading-relaxed">{product.description}</p>
    </div>
    
    {/* Image Section - Right Side */}
    {product.headerImage && (
      <div className="relative md:w-2/5 h-64 md:h-auto min-h-[300px] bg-gray-100">
        <Image
          src={product.headerImage}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
    )}
  </div>
</div>

            {/* Problems with Images */}
{product.problems && product.problems.length > 0 && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
    <h2 className="text-xl font-bold text-gray-900 mb-6">Common Problems Addressed</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {product.problems.map((problem, i) => (
        <div 
          key={i} 
          className="rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-md"
          style={{ 
            backgroundColor: problemBgColor,
            borderColor: problemBorderColor
          }}
        >
          {/* Full Image at Top */}
          {problem.image && (
            <div className="relative w-full h-48 overflow-hidden bg-gray-100">
              <Image
                src={problem.image}
                alt={problem.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          {/* Content Below Image */}
          <div className="p-4">
            <h3 
              className="font-bold mb-2 text-lg"
              style={{ color: problemTitleColor }}
            >
              {problem.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

            {/* Chemicals / Solutions */}
            {product.chemicals && product.chemicals.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                   {product.name} Solutions
                </h2>
                <div className="space-y-3">
                  {product.chemicals.map((chem, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-sm"
                      style={{ 
                        backgroundColor: `${product.color || "#0077B6"}10`,
                        borderColor: `${product.color || "#0077B6"}20`
                      }}
                    >
                      <div 
                        className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: product.color || "#0077B6" }}
                      >
                        {String.fromCharCode(97 + i).toUpperCase()}
                      </div>
                      <div>
                        <span className="font-bold" style={{ color: product.color || "#0077B6" }}>{chem.name}</span>
                        <span className="text-gray-700"> — {chem.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Types (for mechanical products) */}
            {product.types && product.types.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Available Types</h2>
                <div className="flex flex-wrap gap-3">
                  {product.types.map((type, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: `${product.color || "#0077B6"}10`,
                        color: product.color || "#0077B6"
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Models table */}
            {product.models && product.models.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Available Models</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: product.color || "#0077B6" }} className="text-white rounded-lg">
                        <th className="px-4 py-3 text-left rounded-tl-lg">Model</th>
                        {product.models[0].capacity && <th className="px-4 py-3 text-left">Capacity</th>}
                        {product.models[0].flow && <th className="px-4 py-3 text-left">Flow Rate</th>}
                        {product.models[0].resinCap && <th className="px-4 py-3 text-left">Resin Capacity</th>}
                        {product.models[0].flowRate && <th className="px-4 py-3 text-left rounded-tr-lg">Flow Rate</th>}
                        {product.models[0].inlet && <th className="px-4 py-3 text-left">Inlet</th>}
                        {product.models[0].chamberL && <th className="px-4 py-3 text-left">Length</th>}
                        {product.models[0].chamberW && <th className="px-4 py-3 text-left">Width</th>}
                        {product.models[0].chamberH && <th className="px-4 py-3 text-left rounded-tr-lg">Height</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {product.models.map((model, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-3 font-semibold text-gray-900">{model.model}</td>
                          {model.capacity && <td className="px-4 py-3 text-gray-700">{model.capacity}</td>}
                          {model.flow && <td className="px-4 py-3 text-gray-700">{model.flow}</td>}
                          {model.resinCap && <td className="px-4 py-3 text-gray-700">{model.resinCap}</td>}
                          {model.flowRate && <td className="px-4 py-3 text-gray-700">{model.flowRate}</td>}
                          {model.inlet && <td className="px-4 py-3 text-gray-700">{model.inlet}</td>}
                          {model.chamberL && <td className="px-4 py-3 text-gray-700">{model.chamberL}</td>}
                          {model.chamberW && <td className="px-4 py-3 text-gray-700">{model.chamberW}</td>}
                          {model.chamberH && <td className="px-4 py-3 text-gray-700">{model.chamberH}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Cartridges (for spares products) */}
            {product.cartridges && product.cartridges.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Available Cartridges</h2>
                <div className="space-y-3">
                  {product.cartridges.map((cartridge, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl border"
                      style={{ 
                        backgroundColor: `${product.color || "#0077B6"}05`,
                        borderColor: `${product.color || "#0077B6"}20`
                      }}
                    >
                      <h3 className="font-bold text-gray-900 mb-2">{cartridge.name}</h3>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        {cartridge.micron && <p><span className="font-semibold">Micron:</span> {cartridge.micron}</p>}
                        {cartridge.config && <p><span className="font-semibold">Configuration:</span> {cartridge.config}</p>}
                        {cartridge.flow && <p><span className="font-semibold">Flow Rate:</span> {cartridge.flow}</p>}
                        {cartridge.media && <p><span className="font-semibold">Media:</span> {cartridge.media}</p>}
                        {cartridge.lengths && <p><span className="font-semibold">Lengths:</span> {cartridge.lengths}</p>}
                        {cartridge.note && <p className="col-span-2 text-gray-500 text-xs mt-1">{cartridge.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Items (for spares products) */}
            {product.items && product.items.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Available Items</h2>
                <div className="space-y-4">
                  {product.items.map((item, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl border"
                      style={{ 
                        backgroundColor: `${product.color || "#0077B6"}05`,
                        borderColor: `${product.color || "#0077B6"}20`
                      }}
                    >
                      <h3 className="font-bold text-gray-900 mb-2">{item.category}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testing Parameters (for water testing kits) */}
            {product.testingParameters && product.testingParameters.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Testing Parameters</h2>
                <div className="flex flex-wrap gap-2">
                  {product.testingParameters.map((param, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: `${product.color || "#0077B6"}10`,
                        color: product.color || "#0077B6"
                      }}
                    >
                      {param}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Microbe Detection (for water testing kits) */}
            {product.microbeDetection && product.microbeDetection.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Microbe Detection Devices</h2>
                <div className="space-y-3">
                  {product.microbeDetection.map((microbe, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl border"
                      style={{ 
                        backgroundColor: `${product.color || "#0077B6"}05`,
                        borderColor: `${product.color || "#0077B6"}20`
                      }}
                    >
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <span className="font-bold text-gray-900">{microbe.code}</span>
                          <span className="text-gray-700"> — {microbe.type}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{microbe.industries}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Get a Quote</h3>
              <p className="text-white/80 text-sm mb-4">Contact our experts for pricing and technical consultation.</p>
              <Link href="/contact">
                <div className="w-full bg-white text-[#0077B6] rounded-xl px-4 py-3 font-bold text-center hover:bg-gray-100 transition-colors cursor-pointer">
                  Request Quote →
                </div>
              </Link>
            </div>

            {/* Division quick links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">More Products in {divisionLabels[division]}</h3>
              <div className="space-y-2">
                {getProductsByDivision(division)
                  .filter((p) => p.slug !== product.slug)
                  .slice(0, 5)
                  .map((p) => (
                    <Link 
                      key={p.slug} 
                      href={`/products/${division}/${p.slug}`} 
                      className="block text-sm text-gray-600 hover:text-[#0077B6] hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                <Link 
                  href={`/products/${division}`} 
                  className="flex items-center gap-1 text-sm font-semibold mt-3 transition-colors"
                  style={{ color: product.color || "#0077B6" }}
                >
                  View All Products <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Our technical team is ready to assist you with your specific requirements.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} className="text-[#0077B6]" />
                  <span>+91 9322142163</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} className="text-[#0077B6]" />
                  <span>+91-253-6699936</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} className="text-[#0077B6]" />
                  <span>info@uniqueaquasystems.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} className="text-[#0077B6]" />
                  <span>sales.unique2010@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

