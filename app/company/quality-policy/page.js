import { buildMetadata } from "@/utils/seoConfig";
import { aboutData } from "@/lib/data";
import Image from "next/image";

export const metadata = buildMetadata("quality-policy");

export default function QualityPolicyPage() {
  const { qualityPolicy } = aboutData;
  
  // Certificate logos data - replace with your actual image paths
  const certificates = [
    {
      id: 1,
      name: "ISO 9001:2015",
      image: "/certificates/iso-9001.png",
      alt: "ISO 9001:2015 Certificate",
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      image: "/certificates/iso-14001.png",
      alt: "ISO 14001:2015 Certificate",
    },
    {
      id: 3,
      name: "ISO 45001:2018",
      image: "/certificates/iso-45001.png",
      alt: "ISO 45001:2018 Certificate",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{qualityPolicy.title}</h1>
          <div className="w-16 h-1 bg-[#0077B6] rounded mb-8" />
          <p className="text-gray-700 leading-relaxed text-lg">{qualityPolicy.description}</p>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-[#0077B6] font-semibold">Unique Aqua Systems & Chemical Industries — ISO Certified Company</p>
          </div>

          {/* Certificates Logos Section */}
          <div className="mt-12 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  {/* Logo Container */}
                  <div className="w-28 h-28 rounded-xl bg-white shadow-md border border-gray-200 flex items-center justify-center p-4 group-hover:shadow-lg group-hover:border-[#0077B6]/30 transition-all duration-300">
                    {/* Replace with actual certificate image */}
                    <div className="w-full h-full relative">
                      {/* Placeholder - Replace with actual Image component */}
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center text-white text-2xl font-bold">
                        {cert.name.charAt(0)}
                      </div>
                      {/* Uncomment when you have actual images */}
                      {/* <Image
                        src={cert.image}
                        alt={cert.alt}
                        fill
                        className="object-contain"
                      /> */}
                    </div>
                  </div>
                  {/* Certificate Name */}
                  <span className="text-sm font-medium text-gray-600 group-hover:text-[#0077B6] transition-colors duration-300">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}