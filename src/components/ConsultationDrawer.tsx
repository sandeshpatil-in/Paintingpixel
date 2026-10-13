'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, MessageSquare } from 'lucide-react';
import { PaintingItem } from '@/data/paintings';

interface ConsultationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPainting?: PaintingItem | null;
}

export default function ConsultationDrawer({
  isOpen,
  onClose,
  selectedPainting,
}: ConsultationDrawerProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'self-portrait',
    comments: selectedPainting ? `Interested in portrait artwork (${selectedPainting.alt}).` : '',
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const sendWhatsApp = () => {
    const text = `Hello Paintstar Atelier! I would like to inquire about commissioning a custom digital oil painting.%0A%0A*Name:* ${formData.name}%0A*Contact:* ${formData.phone}%0A*Category:* ${formData.category}%0A*Comments:* ${formData.comments}`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.65, 0.05, 0.36, 1] }}
            className="fixed top-0 right-0 h-screen overflow-hidden w-full md:max-w-[75%] bg-white z-[1001] shadow-2xl flex flex-col"
          >
            <div className="overflow-y-auto overflow-x-hidden h-full flex flex-col justify-between md:py-16 pb-10 pt-6 2xl:px-24 xl:px-16 lg:px-12 sm:px-8 px-6">
              {/* Header with Title and Close Button */}
              <div>
                <div className="flex max-md:flex-col-reverse justify-between max-md:gap-5 items-start">
                  <div className="fs-80 font-serif leading-[1.1] text-[#0b1012]">
                    Let&apos;s revive your wall
                  </div>

                  {/* Rotating Cross Close Button */}
                  <button
                    onClick={onClose}
                    aria-label="Close form"
                    className="relative group md:w-14 w-10 md:h-14 h-10 flex items-center max-md:ml-auto justify-center bg-black transition-colors cursor-pointer shrink-0"
                  >
                    <span className="absolute md:w-5 w-4 h-[1.5px] bg-white rotate-45 duration-300 transition-transform group-hover:rotate-90" />
                    <span className="absolute md:w-5 w-4 h-[1.5px] bg-white -rotate-45 duration-300 transition-transform group-hover:-rotate-90" />
                  </button>
                </div>

                {/* Sub-bar: Quick Contact */}
                <div className="grid lg:grid-cols-9 grid-cols-1 max-lg:gap-6 mt-8 pb-8 border-b border-gray-100">
                  <div className="col-span-4">
                    <div className="text-para sm:text-sm text-xs tracking-widest leading-normal font-medium mb-2 uppercase font-mono">
                      NEED A QUICKER WAY? <br /> TALK TO US.
                    </div>
                    <div className="fs-30 font-medium text-[#0b1012]">
                      <a
                        className="hover:text-[#ff543e] transition-colors underlineAnimate w-fit block"
                        href="tel:+919876543210"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="col-span-5 flex items-center lg:justify-end">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <div className="py-8 flex-1">
                {isSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="fs-60 font-serif mb-2 text-[#0b1012]">
                      Thank you!
                    </h3>
                    <p className="text-[#7e8488] max-w-md text-sm mb-8 leading-relaxed font-light">
                      We have received your request. A Paintstar Master Curator will review your preferences and contact you with digital canvas proofs.
                    </p>
                    <div className="flex gap-4">
                      <button
                        onClick={sendWhatsApp}
                        className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" /> Send on WhatsApp
                      </button>
                      <button
                        onClick={onClose}
                        className="px-6 py-3.5 border border-gray-300 hover:border-black rounded-full text-xs font-semibold uppercase tracking-widest cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#7e8488] font-mono mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff543e] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#7e8488] font-mono mb-2">
                          Contact / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff543e] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#7e8488] font-mono mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="hello@paintstar.studio"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff543e] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#7e8488] font-mono mb-2">
                          Portrait Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff543e] text-sm bg-white"
                        >
                          <option value="self-portrait">Self Portrait Paintings</option>
                          <option value="children-portrait">Children&apos;s Portrait Paintings</option>
                          <option value="family-painting">Family Portrait Paintings</option>
                          <option value="wedding-couple-painting">Couple Portrait Paintings</option>
                          <option value="photo-restoration">Photo Restoration &amp; Paintings</option>
                        </select>
                      </div>
                    </div>

                    {/* Reference photo upload */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#7e8488] font-mono mb-2">
                        Upload Reference Photo
                      </label>
                      <label className="border-2 border-dashed border-gray-200 hover:border-[#ff543e] rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50/50">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        {filePreview ? (
                          <div className="flex items-center gap-4">
                            <img
                              src={filePreview}
                              alt="Upload preview"
                              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                            />
                            <div className="text-left text-xs">
                              <span className="font-semibold block text-gray-800">
                                {uploadedFile?.name}
                              </span>
                              <span className="text-gray-400">Click to change file</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center text-center">
                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                            <span className="text-xs font-medium text-gray-700">
                              Drop reference photograph here or browse
                            </span>
                            <span className="text-[10px] text-gray-400 mt-1">
                              JPG, PNG, TIFF up to 25MB
                            </span>
                          </div>
                        )}
                      </label>
                    </div>

                    {/* Comments */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#7e8488] font-mono mb-2">
                        Comments / Size Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        placeholder="e.g. Looking for a 36x48 inch canvas for our living room wall."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff543e] text-sm resize-none"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full py-4.5 bg-[#0b1012] hover:bg-[#ff543e] text-white rounded-full text-xs font-semibold uppercase tracking-[0.25em] transition-all shadow-xl cursor-pointer"
                      >
                        Submit Consultation Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
