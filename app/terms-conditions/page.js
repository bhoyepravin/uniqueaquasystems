"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FileText, Scale, Shield, AlertCircle, 
  CheckCircle, Mail, Phone, MapPin, 
  Globe, Clock, DollarSign, Users, 
  ArrowRight, BookOpen, Gavel 
} from "lucide-react";

export default function TermsConditionsPage() {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      icon: BookOpen,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the Unique Aqua Systems & Chemical Industries website, you agree to be bound by these Terms & Conditions.",
        "If you do not agree with any part of these terms, please do not use our website or services.",
        "We reserve the right to modify these terms at any time without prior notice. Continued use of the site constitutes acceptance of modified terms."
      ]
    },
    {
      icon: Globe,
      title: "Use of Website",
      content: [
        "You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others.",
        "You may not reproduce, distribute, modify, or create derivative works of our content without explicit permission.",
        "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
        "You are responsible for maintaining the confidentiality of your account information."
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, images, and software, is the property of Unique Aqua Systems & Chemical Industries.",
        "The UNI-TREAT® trademark and other marks are registered and protected under applicable intellectual property laws.",
        "You may not use our trademarks, logos, or trade dress without our prior written consent.",
        "Unauthorized use of our intellectual property may result in legal action."
      ]
    },
    {
      icon: DollarSign,
      title: "Products & Services",
      content: [
        "All product descriptions, specifications, and pricing are subject to change without notice.",
        "We reserve the right to discontinue any product or service at any time.",
        "Quotations provided are valid for 30 days unless otherwise specified.",
        "All sales are subject to our standard terms of sale, which will be provided upon order confirmation.",
        "Technical specifications and performance data are approximate and may vary based on operating conditions."
      ]
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: [
        "Unique Aqua Systems & Chemical Industries shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website.",
        "Our total liability for any claim arising from our products or services shall not exceed the amount paid for the specific product or service.",
        "We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.",
        "Some jurisdictions do not allow limitations on implied warranties, so these limitations may not apply to you."
      ]
    },
    {
      icon: AlertCircle,
      title: "Disclaimer of Warranties",
      content: [
        "Our products and services are provided 'as is' without any warranties, express or implied.",
        "We do not guarantee that product performance will meet your specific requirements or expectations.",
        "It is your responsibility to ensure that our products are suitable for your intended application.",
        "Technical advice provided by our representatives is for guidance only and does not constitute a warranty."
      ]
    },
    {
      icon: Gavel,
      title: "Governing Law",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of India.",
        "Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Nashik, Maharashtra.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.",
        "Our failure to enforce any right or provision does not constitute a waiver of such right or provision."
      ]
    }
  ];

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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Section */}
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
              Legal Agreement
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Terms &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Conditions
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
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website or purchasing our products and services.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
            <FileText size={14} />
            <span>Effective Date: {lastUpdated}</span>
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="h-1 bg-gradient-to-r from-[#1E3A8A] via-[#06B6D4] to-[#1E3A8A]" />
            
            <div className="p-8 md:p-12">
              {/* Introduction */}
              <div className="mb-10 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-[#1E3A8A]/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mt-1" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Unique Aqua Systems & Chemical Industries. These Terms & Conditions govern your use of our website 
                  and the purchase of our products and services. By accessing our website or making a purchase, you agree to be 
                  bound by these terms. Please read them carefully before proceeding.
                </p>
              </div>

              {/* Terms Sections */}
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06B6D4]/10 to-[#1E3A8A]/10 flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-[#06B6D4]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle size={16} className="text-[#06B6D4] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Contact Information */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Mail size={20} className="text-[#06B6D4]" />
                  Contact Us
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Mail size={18} className="text-[#06B6D4]" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm font-medium text-gray-900">info@uniqueaquasystems.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Phone size={18} className="text-[#06B6D4]" />
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-sm font-medium text-gray-900">+91-0253-2941322</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <MapPin size={18} className="text-[#06B6D4]" />
                    <div>
                      <p className="text-xs text-gray-500">Address</p>
                      <p className="text-sm font-medium text-gray-900">Nashik, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Clock size={18} className="text-[#06B6D4]" />
                    <div>
                      <p className="text-xs text-gray-500">Business Hours</p>
                      <p className="text-sm font-medium text-gray-900">Mon-Sat: 9:30 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Unique Aqua Systems & Chemical Industries. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link href="/terms-conditions" className="hover:text-[#06B6D4] transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-[#06B6D4] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}