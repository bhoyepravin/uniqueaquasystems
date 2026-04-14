"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { agri_expo_2008, aima_index_2018, aima_index_2022, ishrae_nashik_sub_chapter, nima_index_2015, nima_token_of_gratitude } from "@/public";

// Sample events data - replace with your actual data
const eventsData = [
  {
    id: 1,
    title: "Agri Expo 2008",
    date: "Dec 15-18, 2024",
    location: "Mumbai, India",
    image: agri_expo_2008,
  },
  {
    id: 2,
    title: "Aima Index 2018",
    date: "Nov 5-6, 2024",
    location: "Delhi, India",
    image: aima_index_2018,
  },
  {
    id: 3,
    title: "Aima Index 2022",
    date: "Oct 20, 2024",
    location: "Pune, India",
    image: aima_index_2022,
  },
  {
    id: 4,
    title: "Nima Index 2015",
    date: "Sep 28, 2024",
    location: "Bangalore, India",
    image: nima_index_2015,
  },
  {
    id: 5,
    title: "Nima Index",
    date: "Sep 10, 2024",
    location: "Chennai, India",
    image: nima_token_of_gratitude,
  },
  {
    id: 6,
    title: "Ishrae Nashik Sub Chapter",
    date: "Aug 5-7, 2024",
    location: "Hyderabad, India",
    image: ishrae_nashik_sub_chapter,
  },
  
];

export default function NewsEventsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#06B6D4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#06B6D4]" />
            <p className="text-[#06B6D4] text-sm md:text-base font-semibold tracking-wider uppercase">
              Our Events
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            News &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Events
              </span>
              <svg className="absolute bottom-2 left-0 w-full h-3 -z-0" viewBox="0 0 300 12">
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
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Stay updated with our latest events and exhibitions across India
          </p>
        </motion.div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white border-cyan-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden ">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Calendar size={48} className="text-white/30" />
                    </div>
                  )}
                  
                  {/* Overlay with date and location */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Date Badge */}
                  {/* <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-center shadow-lg">
                    <div className="text-xs font-bold text-[#1E3A8A]">
                      {event.date.split(",")[0].split("-")[0].trim()}
                    </div>
                    <div className="text-[10px] text-gray-600 uppercase">
                      {event.date.split(",")[0].split("-")[1]?.trim() || "Event"}
                    </div>
                  </div> */}

                  {/* Location Badge */}
                  {/* <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <MapPin size={10} />
                    <span>{event.location}</span>
                  </div> */}
                </div>

                {/* "Participate in Event Name" at bottom */}
                <div className="p-4 text-center bg-white">
                  <p className="text-sm font-semibold text-gray-800">
                    Participate in{" "}
                    <span className="text-[#06B6D4]">{event.title}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}