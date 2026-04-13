import Link from "next/link";
import { Phone, Mail, MapPin, Droplets } from "lucide-react";
import { companyInfo } from "@/lib/data";
import Image from "next/image";
import { unique_aqua_logo } from "@/public";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#03045E] to-[#023E8A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="mb-4">
  <div className="w-40 h-16 relative">
    <Image
      src= {unique_aqua_logo}
      alt="Unique Aqua Logo"
      fill
      className="object-contain"
    />
  </div>
</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              ISO certified water treatment specialists since 2002. Chemical, mechanical & spares — total water management under one roof.
            </p>
            <div className="text-xs text-white/50">Formerly known as: Unique Chemicals</div>
          </div>

          {/* Products - 3 Column Grid */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base uppercase tracking-wider mb-5 text-[#90E0EF]">Products</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Chemical Division */}
              <div>
                <Link href="/products/chemical" className="font-semibold text-white/90 hover:text-[#90E0EF] transition-colors block mb-3 text-sm">
                  Chemical Division →
                </Link>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/products/chemical/cooling-towers-open-loop" className="hover:text-white transition-colors text-sm">Open Loop Cooling Systems</Link></li>
                  <li><Link href="/products/chemical/closed-loop-cooling-chillers" className="hover:text-white transition-colors text-sm">Closed Loop Cooling Systems</Link></li>
                  <li> <Link href= "/products/chemical/ro-chemicals" className="hover:text-white transition-colors"> RO Chemicals </Link> </li>
                  <li><Link href="/products/chemical/boiler-water-treatment" className="hover:text-white transition-colors text-sm">Boiler Water Treatment</Link></li>
                  <li><Link href="/products/chemical/descaling-products" className="hover:text-white transition-colors text-sm">Descaling Chemicals</Link></li>
                  <li><Link href="/products/chemical/speciality-chemicals" className="hover:text-white transition-colors text-sm">Speciality Chemicals</Link></li>
                  <li><Link href="/products/chemical/defoamers" className="hover:text-white transition-colors text-sm">Antifoams and defoamers</Link></li>
                  <li><Link href="/products/chemical/etp-chemicals" className="hover:text-white transition-colors text-sm">ETP Chemicals</Link></li>
                  <li><Link href="/products/chemical/fire-side-chemicals" className="hover:text-white transition-colors text-sm">Fire Side Chemicals</Link></li>
                  
                  <li><Link href="/products/chemical/sugar-process-chemicals" className="hover:text-white transition-colors text-sm">Sugar Process Chemicals</Link></li>
                </ul>
              </div>

              {/* Mechanical Division */}
              <div>
                <Link href="/products/mechanical" className="font-semibold text-white/90 hover:text-[#90E0EF] transition-colors block mb-3 text-sm">
                  Mechanical Division →
                </Link>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/products/mechanical/sand-carbon-iron-filters" className="hover:text-white transition-colors text-sm">Sand, Carbon & Iron Filters</Link></li>
                  <li><Link href="/products/mechanical/water-softening-plant" className="hover:text-white transition-colors text-sm">Water Softening Plant</Link></li>
                  <li><Link href="/products/mechanical/demineralization-dm-plant" className="hover:text-white transition-colors text-sm">DM Plant</Link></li>
                  <li><Link href="/products/mechanical/reverse-osmosis-ro-plant" className="hover:text-white transition-colors text-sm">RO Plant</Link></li>
                  <li><Link href="/products/mechanical/uv-disinfection-system" className="hover:text-white transition-colors text-sm">UV Disinfection System</Link></li>
                </ul>
              </div>

              {/* Spares & Equipments */}
              <div>
                <Link href="/products/spares" className="font-semibold text-white/90 hover:text-[#90E0EF] transition-colors block mb-3 text-sm">
                  Spares & Equipments →
                </Link>
                <ul className="space-y-2 text-white/70">
                  <li><Link href="/products/spares/water-testing-kits" className="hover:text-white transition-colors text-sm">Water Testing Kits</Link></li>
                  <li><Link href="/products/spares/filtration-cartridges-housings" className="hover:text-white transition-colors text-sm">Filter Cartridges & Housings</Link></li>
                  <li><Link href="/products/spares/water-treatment-plants-spares" className="hover:text-white transition-colors text-sm">Water Treatment Spares</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-base uppercase tracking-wider mb-5 text-[#90E0EF]">Company</h4>
            <ul className="space-y-2.5 text-white/70">
              <li><Link href="/company/about-us" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/company/quality-policy" className="hover:text-white transition-colors text-sm">Quality Policy</Link></li>
              <li><Link href="/company/our-mission" className="hover:text-white transition-colors text-sm">Our Mission</Link></li>
              <li><Link href="/application-areas" className="hover:text-white transition-colors text-sm">Application Areas</Link></li>
              <li><Link href="/clients" className="hover:text-white transition-colors text-sm">Our Clients</Link></li>
              <li><Link href="/news-events" className="hover:text-white transition-colors text-sm">News & Events</Link></li>
              <li><Link href="/product-gallery" className="hover:text-white transition-colors text-sm">Product Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact - Moved after Company */}
          <div>
            <h4 className="font-bold text-base uppercase tracking-wider mb-5 text-[#90E0EF]">Contact</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#90E0EF] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{companyInfo.address}</span>
              </div>
              <a href={`tel:${companyInfo.phone1}`} className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                <Phone size={16} className="text-[#90E0EF]" /> {companyInfo.phone1}
              </a>
              <a href={`tel:${companyInfo.phone2}`} className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                <Phone size={16} className="text-[#90E0EF]" /> {companyInfo.phone2}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors text-sm">
                <Mail size={16} className="text-[#90E0EF]" /> {companyInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <div>© {new Date().getFullYear()} Unique Aqua Systems & Chemical Industries. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors text-sm">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}