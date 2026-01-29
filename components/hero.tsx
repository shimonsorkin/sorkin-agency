"use client"

import { Button } from "@/components/ui/3d-button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

declare global {
  interface Window {
    Calendly: any;
  }
}

export function Hero() {
  return (
    <section className="pt-32 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            {"Free 30-minute consultation"}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            {"Response within 24 hours"}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-center leading-[1.2] mb-6 [&>div]:whitespace-nowrap"
        >
          <div>I Grew a YouTube Channel to 30 Million Views.</div>
          <div>I Can Help You Do the Same.</div>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Full-service YouTube consulting for media organizations and nonprofits — from someone who's done it.
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
            onClick={() => {
              if (typeof window !== 'undefined' && window.Calendly) {
                window.Calendly.initPopupWidget({url: 'https://calendly.com/shimonsorkin/30min'});
              }
              return false;
            }}
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
