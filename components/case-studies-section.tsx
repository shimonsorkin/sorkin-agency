"use client"

import { motion } from "framer-motion"

export function CaseStudiesSection() {
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
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
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

            return study.url ? (
              <motion.a
                key={index}
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                {content}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
