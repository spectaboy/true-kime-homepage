"use client"

import Head from "next/head"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Instagram, Twitter, Youtube, ArrowRight, Star, Play, Mail } from "lucide-react"
import Image from "next/image"
import AnimatedHoodie from "@/components/animated-hoodie"
import { motion } from "framer-motion"
import React from "react"
import Link from "next/link"

export default function TrueKimeHomepage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const philosophyRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const products = [
    {
      id: 1,
      name: "True Kime Branded Tee Shirt",
      price: "$35 CAD",
      imageFront: "/images/truekime_shirtfront.webp",
      imageBack: "/images/truekime_shirtback.webp",
    },
    {
      id: 2,
      name: "True Kime Branded Hoodie",
      price: "$50 CAD",
      imageFront: "/images/truekimehoodiefront.webp",
      imageBack: "/images/truekimehoodieback.webp",
    },
    {
      id: 3,
      name: "Ariel Torres 'Airbender Torres' Tee Shirt",
      price: "$42 CAD",
      imageFront: "/images/arieltorres.webp",
      badge: "Featured",
    },
    {
      id: 4,
      name: "Grace Lau '#1 World Ranked' Tee Shirt",
      price: "$42 CAD",
      imageFront: "/images/GraceLauShirt1.webp",
      badge: "Featured",
    },
  ]

  // Animation variants for scroll
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-body">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </Head>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Image
                src="/images/tk-compass-logo.png"
                alt="TK Compass Logo"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300"
              />
              <div className="hidden md:flex space-x-6">
                <a href="#philosophy" className="text-gray-300 hover:text-red-500 transition-colors font-brand">
                  Philosophy
                </a>
                <a href="#products" className="text-gray-300 hover:text-red-500 transition-colors font-brand">
                  Collection
                </a>
                <a href="#champions" className="text-gray-300 hover:text-red-500 transition-colors font-brand">
                  Champions
                </a>
                <a href="#kimecast" className="text-gray-300 hover:text-red-500 transition-colors font-brand">
                  KimeCast
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-red-500 font-brand"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-red-500 font-brand"
                asChild
              >
                <Link href="/team">Our Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-brand"
              >
                <a href="https://d2530f-0d.myshopify.com/" target="_blank" rel="noopener noreferrer">
                  Shop Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center bg-black overflow-hidden">
        {/* Hero Content - Split Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-32 pb-20">
            {/* Left Side - Logo and Content */}
            <motion.div
              className="flex flex-col justify-center space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
            >
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Image
                  src="/images/true-kime-logo-red.png"
                  alt="TRUE KIME"
                  width={800}
                  height={250}
                  className="w-full max-w-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </motion.div>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed font-body"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpVariant}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              >
                Where martial arts discipline meets modern streetwear culture
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpVariant}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold group font-brand"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black px-8 py-4 text-lg font-semibold font-brand"
                  asChild
                >
                  <a href="https://d2530f-0d.myshopify.com/" target="_blank" rel="noopener noreferrer">
                    Shop Now
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Product Showcase */}
            <div className="flex justify-center items-center">
              <div className="relative group">
                <AnimatedHoodie />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" ref={philosophyRef} className="py-24 relative bg-black">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/tk-compass-logo.png"
            alt="TK Compass Background"
            width={800}
            height={800}
            className="mx-auto mt-24"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-red-500 mb-8 tracking-tight font-brand flex flex-wrap justify-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                className="inline-block"
              >
                Decide.
              </motion.span>
              <motion.span
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                className="inline-block"
              >
                Commit.
              </motion.span>
              <motion.span
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                className="inline-block"
              >
                Stay True.
              </motion.span>
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
            >
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-body">
                  <span className="font-brush text-red-500 font-bold text-3xl transform -rotate-1 inline-block">
                    Kime
                  </span>{' '}
                  is a Japanese word that translates to "decision" — a powerful concept that shapes our lives. Every choice we make defines who we are, what we stand for, and the path we walk. At True Kime, we believe that decisions are everything — they determine our growth, our struggles, and our successes.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed font-body">
                  Life throws challenges at us. Sometimes, we lose our way, get distracted, or feel uncertain about the path ahead. That's where True Kime comes in. Our brand represents the mindset of staying true to yourself, your goals, and your journey, no matter how tough it gets.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed font-body">
                  True Kime brings this philosophy to life through premium streetwear. Every piece tells the story of those who choose to stay true to their path.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 font-brand"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Featured Collection
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 font-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Precision-crafted pieces for the modern warrior
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpVariant}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              >
                <Card className="bg-black border-gray-800 hover:border-red-500 transition-all duration-300 group overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl">
                  <div className="relative h-80 overflow-hidden group">
                    {product.imageBack ? (
                      <>
                        <img
                          src={product.imageFront}
                          alt={product.name}
                          width={300}
                          height={400}
                          className="w-full h-80 object-cover transition-opacity duration-1000 absolute inset-0 z-10 group-hover:opacity-0 group-hover:scale-110 group-hover:shadow-xl transition-transform"
                          style={{ pointerEvents: 'none' }}
                        />
                        <img
                          src={product.imageBack}
                          alt={product.name + ' Back'}
                          width={300}
                          height={400}
                          className="w-full h-80 object-cover transition-opacity duration-1000 absolute inset-0 z-20 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-xl transition-transform"
                          style={{ pointerEvents: 'none' }}
                        />
                      </>
                    ) : (
                      <Image
                        src={product.imageFront}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">{product.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl text-white mb-2 font-bold font-brand tracking-wide" style={{ letterSpacing: '0.03em' }}>{product.name}</h3>
                    <p className="text-2xl font-bold text-red-500 font-body">{product.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Champions Section */}
      <section id="champions" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 font-brand"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Worn By{' '}
              <span className="font-brush text-red-500 transform rotate-1 inline-block text-5xl">Champions</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 font-body"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Athletes who embody the True Kime spirit
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Ariel & Grace */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{ duration: 0.8, delay: 0, ease: 'easeOut' }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500 transition-all duration-300 group overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-black p-4 flex items-center justify-center" style={{ minHeight: '320px', minWidth: '220px' }}>
                    <img
                      src="/images/ariel_grace_kime.jpg"
                      alt="Ariel Torres & Grace Lau in True Kime"
                      width={400}
                      height={400}
                      className="max-h-80 w-auto object-contain border-4 border-red-500 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <blockquote className="text-gray-300 italic mb-4 font-body text-lg">Ariel Torres & Grace Lau repping True Kime.</blockquote>
                </CardContent>
              </Card>
            </motion.div>
            {/* Card 2: Karim */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500 transition-all duration-300 group overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-black p-4 flex items-center justify-center group" style={{ minHeight: '320px', minWidth: '220px' }}>
                    {/* Background brush illustration */}
                    <img
                      src="/images/tk-compass-logo.png"
                      alt="Brush Stroke"
                      className="absolute left-1/2 top-1/2 w-40 h-40 opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                      style={{ zIndex: 1 }}
                    />
                    {/* Karim front/back images, both centered and with border/shadow */}
                    <div className="relative flex items-center justify-center w-full h-full z-10">
                      <img
                        src="/images/karim_kime.webp"
                        alt="Karim in True Kime"
                        width={400}
                        height={400}
                        className="max-h-80 w-auto object-contain border-4 border-red-500 rounded-lg shadow-lg transition-all duration-1000 group-hover:opacity-0 group-hover:scale-105 group-hover:shadow-2xl"
                        style={{ pointerEvents: 'none', position: 'relative' }}
                      />
                      <img
                        src="/images/karim_podium.jpg"
                        alt="Karim Podium"
                        width={400}
                        height={400}
                        className="max-h-80 w-auto object-contain border-4 border-red-500 rounded-lg shadow-lg transition-all duration-1000 absolute left-1/2 top-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-2xl -translate-x-1/2 -translate-y-1/2"
                        style={{ pointerEvents: 'none' }}
                      />
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic mb-4 font-body text-lg">Karim showing off his True Kime spirit.</blockquote>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KimeCast Section */}
      <section id="kimecast" className="py-24 bg-black relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Animated Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="space-y-8"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-6 font-brand">
                  <span className="font-brush text-red-500 transform -rotate-1 inline-block">KimeCast</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-2xl text-gray-300 leading-relaxed font-body">
                    Join us on our journey through the world of martial arts, where every story is a testament to dedication and passion.
                  </p>
                  <p className="text-xl text-gray-400 leading-relaxed font-body">
                    From behind-the-scenes moments to athlete spotlights, we're bringing you closer to the heart of the martial arts community.
                  </p>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }
                    }}
                    className="pt-4"
                  >
                    <a
                      href="https://www.instagram.com/truekimecast/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group font-brand text-xl"
                    >
                      Follow our journey
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: CAST Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative group">
                <Image
                  src="/images/CAST.png"
                  alt="True Kime Cast"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand/About + Instagram */}
            <div className="md:col-span-1 flex flex-col justify-center">
              <Image src="/images/true-kime-logo-alt.png" alt="TRUE KIME" width={300} height={80} className="mb-6" />
              <p className="text-gray-400 mb-6 max-w-md font-body">
                Premium streetwear inspired by martial arts philosophy. Decide. Commit. Stay True.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/truekimeshop" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 font-brand">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
            {/* Contact Us section */}
            <div className="md:col-span-1 flex flex-col justify-center">
              <h4 className="text-white font-semibold mb-4 font-brand">Contact Us</h4>
              <div className="flex flex-col gap-3 text-gray-300 font-body">
                <a href="mailto:truekimeshop@gmail.com" className="inline-flex items-center space-x-3 hover:text-red-500 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>truekimeshop@gmail.com</span>
                </a>
                <div className="inline-flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21a8.25 8.25 0 10-15 0h15z" />
                  </svg>
                  <span>Markham, Ontario Canada</span>
                </div>
              </div>
            </div>
            {/* Newsletter sign-up */}
            <div className="md:col-span-1 flex flex-col justify-center">
              <h4 className="text-white font-semibold mb-4 font-brand">Stay Updated</h4>
              <p className="text-gray-400 mb-4 font-body">Subscribe to our newsletter for updates and news.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                />
                <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-r-md font-bold hover:bg-red-700 transition">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-body">
            <p>&copy; 2025 True Kime. All rights reserved. Stay True.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
