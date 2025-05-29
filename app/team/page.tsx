"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight as ArrowRightIcon } from "lucide-react"
import { useState } from "react"

export default function TeamPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const teamMembers = [
    {
      name: "Zac \"Big Man\" Chin",
      role: "Founder/CEO",
      imageFront: "/images/TeamWebsitePic.jpg",
      imageBack: "/images/zackarate.jpg",
      vision: "Zac's vision is to inspire others to stay true to themselves and their journey, blending martial arts discipline with modern streetwear culture. He leads True Kime with authenticity, passion, and a commitment to community.",
      instagram: "zac_karate",
      quote: "Stay true to your path, no matter how tough it gets."
    },
    {
      name: "Omar Almishri",
      role: "Web Developer",
      imageFront: "/images/team/omar.jpg",
    },
  ]

  const contributors = [
    {
      name: "Jane Doe",
      role: "Ambassador",
      description: "Social media, athlete outreach, and event support.",
      image: "/images/team/jane.jpg",
      linkedin: "#",
    },
    {
      name: "John Smith",
      role: "Media Team",
      description: "Photography, video, and creative content.",
      image: "/images/team/john.jpg",
      linkedin: "#",
    },
    {
      name: "Alex Lee",
      role: "Contributor",
      description: "Brand strategy and partnerships.",
      image: "/images/team/alex.jpg",
      linkedin: "#",
    },
    {
      name: "Maria Gomez",
      role: "Ambassador",
      description: "Community outreach and event planning.",
      image: "/images/team/maria.jpg",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Media Team",
      description: "Video editing and social content.",
      image: "/images/team/david.jpg",
      linkedin: "#",
    },
    {
      name: "Sophie Tran",
      role: "Contributor",
      description: "Copywriting and blog content.",
      image: "/images/team/sophie.jpg",
      linkedin: "#",
    },
    {
      name: "Liam Patel",
      role: "Ambassador",
      description: "Brand promotion and athlete relations.",
      image: "/images/team/liam.jpg",
      linkedin: "#",
    },
  ]

  // Carousel state
  const [carouselIndex, setCarouselIndex] = useState(0);
  const visibleCount = 3;
  const cardWidth = 280; // px, including gap
  const canScroll = contributors.length > visibleCount;
  const maxIndex = canScroll ? contributors.length - visibleCount : 0;
  const safeIndex = Math.max(0, Math.min(carouselIndex, maxIndex));
  const handlePrev = () => {
    if (canScroll) setCarouselIndex(i => Math.max(0, i - 1));
  };
  const handleNext = () => {
    if (canScroll) setCarouselIndex(i => Math.min(maxIndex, i + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Team Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-brand">
              <span className="text-white">Our </span><span className="text-red-500">Team</span>
            </h1>
            <p className="text-xl text-gray-400 font-body">
              The minds behind True Kime
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              {/* Zac's Card - Larger */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpVariant}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500 transition-all duration-300 group overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl rounded-lg flex flex-col items-center max-w-md w-full mx-auto"
                style={{ minWidth: '420px', minHeight: '540px' }}
              >
                <div className="relative w-full h-[420px] overflow-hidden rounded-t-lg flex items-center justify-center border-4 border-red-500">
                  <img
                    src={teamMembers[0].imageFront}
                    alt={teamMembers[0].name}
                    className="w-full h-full object-contain transition-all duration-1000 absolute inset-0 z-10 group-hover:opacity-0 group-hover:scale-105 group-hover:shadow-2xl bg-black"
                    style={{ pointerEvents: 'none' }}
                  />
                  <img
                    src={teamMembers[0].imageBack}
                    alt={teamMembers[0].name + ' Alt'}
                    className="w-full h-full object-contain transition-all duration-1000 absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-2xl z-20 bg-black"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
                <div className="p-8 w-full flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-white mb-2 font-brand text-center">{teamMembers[0].name}</h3>
                  <p className="text-xl font-bold text-red-500 font-body text-center mb-4">{teamMembers[0].role}</p>
                </div>
              </motion.div>
              {/* Zac's Vision Blurb on the right */}
              <div className="flex items-center justify-center h-full p-8">
                <div className="w-full max-w-md">
                  <div className="text-red-500 font-brand text-2xl md:text-3xl font-bold mb-4 text-center">Founder's Message</div>
                  <div className="text-white font-montserrat font-semibold text-xl md:text-2xl text-center leading-relaxed mb-6" style={{ lineHeight: 1.5 }}>
                    {teamMembers[0].vision}
                  </div>
                  <div className="text-gray-300 italic text-lg text-center font-montserrat mt-6">"{teamMembers[0].quote}"<span className="block text-sm not-italic text-gray-400 mt-2">- Zac Chin</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 