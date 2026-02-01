"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const scrollAmount = 574 // card width (550) + gap (24)
    if (direction === "right") {
      container.scrollTo({ left: container.scrollLeft + scrollAmount, behavior: "smooth" })
    } else {
      container.scrollTo({ left: container.scrollLeft - scrollAmount, behavior: "smooth" })
    }
  }

  const services = [
    {
      client: "",
      project: "Eye-catching visuals that drive clicks",
      metric: "Thumbnail Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "#d4d4d4",
      url: "",
    },
    {
      client: "",
      project: "Build your presence across platforms",
      metric: "Social Media Revamp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "#b0b0b0",
      url: "",
    },
    {
      client: "",
      project: "What to fix and why",
      metric: "Channel Audit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "#c8c8c8",
      url: "",
    },
    {
      client: "",
      project: "Professional post-production for your content",
      metric: "Video Editing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "#9e9e9e",
      url: "",
    },
    {
      client: "",
      project: "What others in your niche are doing",
      metric: "Competitor Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "#a8a8a8",
      url: "",
    },
    {
      client: "",
      project: "Who you should target and what they watch",
      metric: "Audience Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "#b8b8b8",
      url: "",
    },
    {
      client: "",
      project: "From concept to final cut",
      metric: "Podcast Production",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "#bdbdbd",
      url: "",
    },
  ]

  const renderCard = (service: typeof services[number], index: number, setKey: string) => {
    const content = (
      <>
        <div className="aspect-[3/2] overflow-hidden" style={{ backgroundColor: service.bgColor }} />
        <div className="p-8">
          <div className="text-sm font-semibold text-primary mb-2">{service.client}</div>
          <h3 className="font-serif text-2xl font-bold mb-3">{service.project}</h3>
          <div className="text-3xl font-bold text-primary mb-4">{service.metric}</div>
          <p className="text-muted-foreground leading-normal">{service.description}</p>
        </div>
      </>
    )

    return (
      <div key={`${setKey}-${index}`} className="flex-shrink-0 w-[550px]">
        {service.url ? (
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
          >
            {content}
          </a>
        ) : (
          <div className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
            {content}
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive digital media consulting tailored for mission-driven organizations.
          </motion.p>
        </div>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border-2 border-border hover:border-accent shadow-lg flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border-2 border-border hover:border-accent shadow-lg flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div
            className="relative flex"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {/* Multiple sets for seamless infinite scroll */}
            {Array.from({ length: 8 }).map((_, setIndex) => (
              <div
                key={`set-${setIndex}`}
                className={`flex gap-6 animate-scroll-services${setIndex > 0 ? ' ml-6' : ''}`}
                aria-hidden={setIndex > 0 ? "true" : undefined}
              >
                {services.map((service, index) => renderCard(service, index, `set${setIndex}`))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
