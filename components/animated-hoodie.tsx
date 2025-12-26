"use client"

export default function AnimatedHoodie() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Product Image */}
      <img
        src="/images/herodesign.png"
        alt="TRUE KIME Hero"
        className="w-full h-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl object-contain relative z-30 transition-transform duration-700 hover:scale-105"
        style={{
          imageRendering: "auto",
        }}
      />
    </div>
  )
}
