"use client"

import { Button } from "@/components/ui/3d-button"
import { motion } from "framer-motion"

export function Hero() {
  const logos = [
    { name: "Free Russia Foundation", src: "/logos/Free Russia Foundation Logo red.svg" },
    { name: "MT Logo", src: "/logos/mt_logo2 (1).png" },
    { name: "Anti-Corruption Foundation", src: "/logos/Logo_of_the_Anti-Corruption_Foundation_(2022).svg.png" },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Graph */}
      <div className="absolute inset-0">
        <img
          src="/hero-graph.png"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-transparent h-1/4" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-6 text-center flex-1 flex flex-col justify-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <svg viewBox="0 0 28 20" className="w-7 h-5 flex-shrink-0" fill="none">
            <rect width="28" height="20" rx="4" fill="#FF0000"/>
            <polygon points="11,5 11,15 20,10" fill="white"/>
          </svg>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
            YouTube Growth Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-[1.15] mb-8 uppercase tracking-tight"
        >
          I Grew a YouTube Channel to 30 Million Views. I Can Help You Build Yours.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg md:text-xl text-white/60 max-w-4xl mx-auto mb-8 leading-normal"
        >
          We help media organizations and nonprofits grow on YouTube — with strategy, production, and optimization that have driven millions of organic views.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            className="rounded-full px-8 text-base"
            data-cal-link="shimon-sorkin-zh2q7b/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>

      {/* Client Logos at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 w-full border-t border-white/10 py-8 mt-auto"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center h-8 opacity-40 grayscale brightness-200 hover:opacity-80 transition-all duration-300">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-full w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
