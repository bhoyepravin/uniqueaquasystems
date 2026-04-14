"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, Lock, Eye, Database, Cookie, 
  Mail, Phone, MapPin, ArrowRight, 
  CheckCircle, Globe, Users, FileText 
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, company name, and job title when you contact us or request information.",
        "Technical Information: IP address, browser type, device information, and usage data when you visit our website.",
        "Communication Data: Records of your correspondence with us via email, phone, or contact forms.",
        "Transaction Data: Details about products and services you inquire about or purchase from us."
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide requested information about our products and services.",
        "To process orders, manage accounts, and deliver our water treatment solutions.",
        "To improve our website, products, and customer service based on your feedback and usage patterns.",
        "To send periodic emails about company news, product updates, and industry insights (you may opt-out anytime).",
        "To comply with legal obligations and protect our legitimate business interests."
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing & Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.",
        "We may disclose information when required by law, to enforce our site policies, or to protect our rights, property, or safety.",
        "In the event of a business merger or acquisition, your information may be transferred to the new entity."
      ]
    },
    {
      icon: Database,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
        "Secure SSL encryption for data transmission on our website.",
        "Regular security assessments and updates to our systems.",
        "Access to personal information is restricted to authorized personnel only.",
        "While we strive to protect your data, no method of transmission over the internet is 100% secure."
      ]
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking Technologies",
      content: [
        "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.",
        "Essential cookies are necessary for website functionality.",
        "Analytics cookies help us understand how visitors interact with our site.",
        "You can control cookie preferences through your browser settings.",
        "Disabling cookies may affect certain features of our website."
      ]
    },
    {
      icon: Globe,
      title: "Your Rights",
      content: [
        "Access: Request a copy of the personal information we hold about you.",
        "Correction: Request correction of inaccurate or incomplete information.",
        "Deletion: Request deletion of your personal information under certain circumstances.",
        "Opt-out: Unsubscribe from marketing communications at any time.",
        "Data Portability: Request transfer of your data to another service provider."
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
              Legal Notice
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#06B6D4]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-title">
            Privacy{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] bg-clip-text text-transparent">
                Policy
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
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
            <FileText size={14} />
            <span>Last Updated: {lastUpdated}</span>
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
                    <Shield className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#06B6D4] to-transparent mt-1" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Unique Aqua Systems & Chemical Industries ("we", "our", "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website or use our services. Please read this policy carefully to understand our practices regarding 
                  your personal data.
                </p>
              </div>

              {/* Policy Sections */}
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
                  Contact Us About Privacy
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal information, 
                  please contact us:
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