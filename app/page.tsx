"use client"

import Head from "next/head"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Instagram, Twitter, Youtube, ArrowRight, Star, Play, Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import AnimatedHoodie from "@/components/animated-hoodie"
import { motion } from "framer-motion"
import React from "react"
import Link from "next/link"
import NewsletterSignup from "@/components/newsletter-signup"

export default function TrueKimeHomepage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const philosophyRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)

  // Pre-launch countdown (adjust launch date/time as needed)
  const LAUNCH_DATE = new Date("2025-08-28T16:00:00Z").getTime() // Thu 12pm ET (EDT)
  const [nowTs, setNowTs] = useState<number>(() => Date.now())
  const displayDate = "08/28/2025"
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const isPrelaunch = nowTs < LAUNCH_DATE

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const currentTs = Date.now()
      setNowTs(currentTs)
      const diff = Math.max(0, LAUNCH_DATE - currentTs)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)
    return () => window.clearInterval(intervalId)
  }, [])

  const formatTime = (n: number) => n.toString().padStart(2, "0")

  const navLinks = [
    { href: '#philosophy', text: 'Philosophy' },
    { href: '#products', text: 'Collection' },
    { href: '#champions', text: 'Champions' },
    { href: '#kimecast', text: 'KimeCast' },
    { href: '/contact', text: 'Contact' },
    { href: '/team', text: 'Our Team' },
  ];

  const products = [
    {
      id: 1,
      name: "True Heat Varsity Tee",
      price: "$35 CAD",
      imageFront: "/images/varsityshirttrueheat.png",
      badge: "Limited",
    },
    {
      id: 2,
      name: "True Heat Minimalist Tee",
      price: "$35 CAD",
      imageFront: "/images/minimalistfronttrueheat.png",
      imageBack: "/images/minimalistbacktrueheat.png",
      badge: "Limited",
    },
    {
      id: 3,
      name: "True Heat Cursive Tee",
      price: "$35 CAD",
      imageFront: "/images/cursivefronttrueheat.png",
      imageBack: "/images/cursivebacktrueheat.png",
      badge: "Limited",
    },
    {
      id: 4,
      name: "True Heat Varsity Shorts",
      price: "$35 CAD",
      imageFront: "/images/varsityshortstrueheat.png",
      badge: "Limited",
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
      {/* Announcement Bar */}
      {isPrelaunch && (
        <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-12 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-brand tracking-wide text-white/90">TRUE HEAT</span>
              <span className="text-white/80">drops on</span>
              <span className="font-semibold">{displayDate}</span>
              <span className="hidden sm:inline text-white/60">•</span>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 bg-black/30 rounded-md px-2 py-0.5 font-mono">
                  <span className="tabular-nums">{timeLeft.days}d</span>
                  <span className="opacity-60">:</span>
                  <span className="tabular-nums">{formatTime(timeLeft.hours)}h</span>
                  <span className="opacity-60">:</span>
                  <span className="tabular-nums">{formatTime(timeLeft.minutes)}m</span>
                  <span className="opacity-60">:</span>
                  <span className="tabular-nums">{formatTime(timeLeft.seconds)}s</span>
                </div>
              </div>
            </div>
            <a href="https://instagram.com/truekimeshop" target="_blank" rel="noopener noreferrer" className="hidden sm:inline underline underline-offset-2 decoration-white/60 hover:decoration-white font-body">
              Follow @truekimeshop
            </a>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed ${isPrelaunch ? 'top-12' : 'top-0'} w-full z-40 bg-black/80 backdrop-blur-md border-b border-red-900/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <a href="#">
                <Image
                  src="/images/newlogo.png"
                  alt="TRUE KIME"
                  width={40}
                  height={40}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <div className="hidden md:flex space-x-6">
                {navLinks.slice(0, 4).map(link => (
                  <a key={link.href} href={link.href} className="text-gray-300 hover:text-red-500 transition-colors font-brand">
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
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
            <div className="md:hidden flex items-center">
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-red-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-colors font-brand"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-4 px-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-brand"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href="https://d2530f-0d.myshopify.com/" target="_blank" rel="noopener noreferrer">
                    Shop Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className={`relative min-h-screen flex ${isPrelaunch ? 'pt-28 md:pt-28 lg:pt-24' : 'pt-20'} items-start md:items-center bg-black overflow-hidden`}> 
        {/* Hero Content - Split Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-20">
            {/* Left Side - Logo and Content */}
            <motion.div
              className="flex flex-col justify-center space-y-8 text-center lg:text-left"
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
                  className="w-full max-w-md lg:max-w-2xl mx-auto lg:mx-0 hover:scale-105 transition-transform duration-500"
                  priority
                />
              </motion.div>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-body"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpVariant}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              >
                Where martial arts discipline meets modern streetwear culture
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
            className="mx-auto mt-24 w-1/2 md:w-auto"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h2
              className="text-4xl md:text-7xl font-bold text-red-500 mb-8 tracking-tight font-brand flex flex-wrap justify-center gap-x-4 gap-y-2"
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
              className="text-lg md:text-xl text-gray-400 font-body max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Precision-crafted pieces for the modern warrior
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpVariant}
                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              >
                <Card className="bg-black border-gray-800 hover:border-red-500 transition-all duration-300 group overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden group">
                    {product.imageBack ? (
                      <>
                        <Image
                          src={product.imageFront}
                          alt={product.name}
                          width={300}
                          height={400}
                          className="w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 z-10 group-hover:opacity-0 group-hover:scale-110 group-hover:shadow-xl transition-transform"
                        />
                        <Image
                          src={product.imageBack}
                          alt={product.name + ' Back'}
                          width={300}
                          height={400}
                          className="w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 z-20 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-xl transition-transform"
                        />
                      </>
                    ) : (
                      <Image
                        src={product.imageFront}
                        alt={product.name}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {product.badge && (
                      <Badge className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-600 text-white z-30 text-[10px] sm:text-xs px-2 py-0.5">{product.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl text-white mb-2 font-bold font-brand tracking-wide flex-grow" style={{ letterSpacing: '0.03em' }}>{product.name}</h3>
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
              className="text-lg md:text-xl text-gray-400 font-body max-w-3xl mx-auto"
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
              <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500 transition-all duration-300 group overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-black p-4 flex items-center justify-center min-h-[320px]">
                    <Image
                      src="/images/ariel_grace_kime.jpg"
                      alt="Ariel Torres & Grace Lau in True Kime"
                      width={400}
                      height={400}
                      className="max-h-80 w-auto object-contain border-4 border-red-500 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <blockquote className="text-gray-300 italic mb-4 font-body text-lg text-center">Ariel Torres & Grace Lau repping True Kime.</blockquote>
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
              <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500 transition-all duration-300 group overflow-hidden transform-gpu hover:scale-105 hover:shadow-2xl h-full">
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-black p-4 flex items-center justify-center group min-h-[320px]">
                    {/* Background brush illustration */}
                    <Image
                      src="/images/tk-compass-logo.png"
                      alt="Brush Stroke"
                      width={160}
                      height={160}
                      className="absolute left-1/2 top-1/2 w-40 h-40 opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                    />
                    {/* Karim front/back images, both centered and with border/shadow */}
                    <div className="relative flex items-center justify-center w-full h-full z-10">
                      <Image
                        src="/images/karim_kime.webp"
                        alt="Karim in True Kime"
                        width={400}
                        height={400}
                        className="max-h-80 w-auto object-contain border-4 border-red-500 rounded-lg shadow-lg transition-all duration-1000 group-hover:opacity-0 group-hover:scale-105 group-hover:shadow-2xl absolute"
                      />
                      <Image
                        src="/images/karim_podium.jpg"
                        alt="Karim Podium"
                        width={400}
                        height={400}
                        className="max-h-80 w-auto object-contain border-4 border-red-500 rounded-lg shadow-lg transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-2xl"
                      />
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic mb-4 font-body text-lg text-center">Karim showing off his True Kime spirit.</blockquote>
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
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 font-brand">
                  <span className="font-brush text-red-500 transform -rotate-1 inline-block">KimeCast</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-body">
                    Join us on our journey through the world of martial arts, where every story is a testament to dedication and passion.
                  </p>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-body">
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
                      className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors group font-brand text-lg md:text-xl"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
            {/* Brand/About + Instagram */}
            <div className="flex flex-col items-center md:items-start">
              <Image src="/images/true-kime-logo-alt.png" alt="TRUE KIME" width={240} height={64} className="mb-6" />
              <p className="text-gray-400 mb-6 max-w-md font-body">
                Premium streetwear inspired by martial arts philosophy. Decide. Commit. Stay True.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/truekimeshop" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 font-brand">
                    <Instagram className="w-6 h-6" />
                  </Button>
                </a>
              </div>
            </div>
            {/* Contact Us section */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-semibold mb-4 font-brand text-lg">Contact Us</h4>
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
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-semibold mb-4 font-brand text-lg">Stay Updated</h4>
              <p className="text-gray-400 mb-4 font-body">Subscribe to our newsletter for updates and news.</p>
              <NewsletterSignup />
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
