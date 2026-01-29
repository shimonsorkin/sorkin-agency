"use client"

import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "International News Organization",
      project: "YouTube Channel Strategy",
      metric: "500% subscriber growth",
      description: "Developed comprehensive YouTube strategy including content pillars, publishing schedule, and audience engagement tactics for a major news outlet.",
      image: "/channels4_profile (4).jpg",
    },
    {
      client: "Environmental Nonprofit",
      project: "Social Media Revamp",
      metric: "3x engagement rate",
      description: "Created multi-platform social media strategy that tripled engagement and significantly increased donation conversions.",
      image: "/channels4_profile (5).jpg",
    },
    {
      client: "Educational Foundation",
      project: "Video Content Strategy",
      metric: "10M+ views in 6 months",
      description: "Built end-to-end video content strategy including format development, SEO optimization, and distribution planning.",
      image: "/channels4_profile (6).jpg",
    },
    {
      client: "Regional Media Network",
      project: "Digital Transformation",
      metric: "200K new subscribers",
      description: "Led comprehensive digital communications overhaul, establishing presence across YouTube, social platforms, and newsletter channels.",
      image: "/channels4_profile (7).jpg",
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
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
