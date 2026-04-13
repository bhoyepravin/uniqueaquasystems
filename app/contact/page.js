"use client";
import { useState } from "react";
import { companyInfo } from "@/lib/data";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    productInterest: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatWhatsAppMessage = (data) => {
    return `*New Enquiry from Unique Aqua Website*
    
*Customer Details:*
👤 *Name:* ${data.firstName} ${data.lastName}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone || "Not provided"}

*Enquiry Details:*
📦 *Product/Service:* ${data.productInterest || "Not specified"}

💬 *Message:* 
${data.message}

---
*Sent from Website Contact Form*
*Date:* ${new Date().toLocaleString()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate required fields
      if (!formData.firstName || !formData.email || !formData.message) {
        throw new Error("Please fill in all required fields");
      }

      // Format the message
      const whatsappMessage = formatWhatsAppMessage(formData);
      
      // WhatsApp number (replace with your actual number)
      const whatsappNumber = "919850066616"; // Replace with your actual WhatsApp number
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        productInterest: "",
        message: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our water treatment experts</p>
        </div>
        
        {/* Equal height grid using items-stretch */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info - Left Column */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-4 flex-1">
                <div className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Works & Office</div>
                    <div className="text-gray-600 text-sm">{companyInfo.address}</div>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Telephone</div>
                    <a href={`tel:${companyInfo.phone1}`} className="text-[#0077B6] hover:underline block">{companyInfo.phone1}</a>
                    <a href={`tel:${companyInfo.phone2}`} className="text-[#0077B6] hover:underline block">{companyInfo.phone2}</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-[#0077B6] hover:underline">{companyInfo.email}</a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#0077B6]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-600 text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</div>
                    <div className="text-gray-500 text-xs">Sunday: Closed</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Contact Button - Now at bottom */}
              <div className="mt-6 bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.614-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.55 4.118 1.514 5.857L0 24l6.292-1.502C8.059 23.424 10.001 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.957 0-3.795-.548-5.367-1.5l-.383-.218-3.731.892.892-3.731-.218-.383C3.548 15.795 3 13.957 3 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Chat with us on WhatsApp</div>
                    <div className="text-sm text-gray-600">Quick response within 24 hours</div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${companyInfo.phone1?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <div className="text-green-800">
                    <p className="font-semibold">Message Ready!</p>
                    <p className="text-sm">WhatsApp will open with your message. Just click send!</p>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <AlertCircle className="text-red-600" size={20} />
                  <div className="text-red-800">
                    <p className="font-semibold">Error</p>
                    <p className="text-sm">Please fill all required fields.</p>
                  </div>
                </div>
              )}

              <form className="space-y-4 flex-1 flex flex-col" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product/Service of Interest</label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                  >
                    <option value="">Select a product/service</option>
                    <option>Cooling Tower Chemicals</option>
                    <option>Boiler Water Treatment</option>
                    <option>RO Plant</option>
                    <option>DM Plant</option>
                    <option>Water Softener</option>
                    <option>UV Disinfection System</option>
                    <option>Descaling Chemicals</option>
                    <option>Sugar Process Chemicals</option>
                    <option>Water Testing Kits</option>
                    <option>Filter Cartridges</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                    placeholder="Tell us about your water treatment requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send via WhatsApp
                    </>
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy. We'll respond via WhatsApp within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}