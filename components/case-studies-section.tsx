"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CaseStudiesSection() {
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

  const caseStudies = [
    {
      client: "Russian Opposition Media",
      project: "YouTube Channel Strategy",
      metric: "30M+ organic views in 8 months",
      description: "Developed comprehensive YouTube strategy including content pillars, publishing schedule, and audience engagement tactics for a major news outlet.",
      image: "/channels4_profile (4).jpg",
      url: "https://www.youtube.com/@NavalnyLiveChannel/featured",
    },
    {
      client: "Civic Education Platform",
      project: "Social Media Revamp",
      metric: "3x engagement rate",
      description: "Created multi-platform social media strategy that tripled engagement and significantly increased donation conversions.",
      image: "/channels4_profile (5).jpg",
      url: "https://www.youtube.com/@UlpanPolitika/featured",
    },
    {
      client: "Pro-Democracy Nonprofit",
      project: "Channel Launch & Production",
      metric: "23K subscribers. 2.8M views. All organic",
      description: "We launched a YouTube channel from zero. Developed the concept, designed the branding, created the formats, and produced 350+ videos — reaching 23K subscribers and 2.8M views organically.",
      image: "/channels4_profile (6).jpg",
      url: "https://www.youtube.com/@TransitChannel/featured",
    },
    {
      client: "Russian Opposition Politician",
      project: "Digital Transformation",
      metric: "600K+ subscribers in 18 months",
      description: "Led comprehensive digital communications overhaul, establishing presence across YouTube, social platforms, and newsletter channels.",
      image: "/channels4_profile (7).jpg",
      url: "https://www.youtube.com/@SobolLyubov",
    },
    {
      client: "Think Tank",
      project: "Podcast Production",
      metric: "170K views. 12 episodes. All organic",
      description: "We owned full podcast production for 12 episodes — research, scripting, filming, editing, and design — reaching 170,000 organic views.",
      image: "/reformum-logo.png",
      url: "https://www.youtube.com/playlist?list=PLRl3zYcXQYXA9YgyRzIWR7C2RwxRic6LB",
    },
  ]

  const renderCard = (study: typeof caseStudies[number], index: number, setKey: string) => {
    const content = (
      <>
        <div className="aspect-[3/2] overflow-hidden">
          <img
            src={study.image || "/placeholder.svg"}
            alt={study.project}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
          <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
          <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
          <p className="text-muted-foreground leading-relaxed">{study.description}</p>
        </div>
      </>
    )

    return (
      <div key={`${setKey}-${index}`} className="flex-shrink-0 w-[550px]">
        {study.url ? (
          <a
            href={study.url}
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
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Real results from media organizations and nonprofits we have partnered with.
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
                className={`flex gap-6 animate-scroll-cases${setIndex > 0 ? ' ml-6' : ''}`}
                aria-hidden={setIndex > 0 ? "true" : undefined}
              >
                {caseStudies.map((study, index) => renderCard(study, index, `set${setIndex}`))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
