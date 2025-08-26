"use client"

import { useState } from "react"

export default function AnimatedHoodie() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px] py-6 md:py-8">
      {/* Glow Effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[380px] sm:w-[480px] sm:h-[540px] md:w-[560px] md:h-[640px] lg:w-[640px] lg:h-[740px] bg-red-500/10 rounded-2xl blur-xl md:blur-3xl transition-all duration-700 z-10"></div>

      {/* Elegant Border Frame */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-[640px] aspect-[6/7] px-3 sm:px-4 md:px-0">
        <div className="absolute inset-0 w-full h-full border border-gray-800/50 rounded-2xl pointer-events-none">
          <div className="absolute inset-0 border border-red-500/20 rounded-2xl"></div>
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500 rounded-br-2xl"></div>
        </div>
        {/* Product Image */}
        <img
          src="/images/heat.png"
          alt="TRUE HEAT"
          className="object-contain rounded-2xl md:group-hover:scale-105 transition-all duration-700 w-full h-full relative z-30 shadow-xl"
          style={{
            imageRendering: "auto",
            animationPlayState: "running",
          }}
        />
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none z-5 hidden sm:block">
        <div className="absolute top-10 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/2 right-5 w-1.5 h-1.5 bg-red-600 rounded-full animate-ping opacity-50"></div>
      </div>

      {/* Subtle background integration */}
      <div className="absolute inset-8 bg-gradient-to-br from-gray-900/20 to-transparent rounded-lg z-0"></div>
    </div>
  )
}
