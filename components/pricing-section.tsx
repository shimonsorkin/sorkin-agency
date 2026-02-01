"use client"

import { Button } from "@/components/ui/3d-button"
import { IconCheck } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Strategy Audit",
      price: "$3,500",
      period: "one-time",
      description: "Comprehensive analysis of your current digital presence with actionable recommendations.",
      features: [
        "Full channel audit (YouTube, social, website)",
        "Competitive landscape analysis",
        "Audience insights report",
        "90-day action plan",
        "2-hour strategy presentation",
      ],
    },
    {
      name: "Full Strategy",
      price: "$12,000",
      period: "engagement",
      description: "End-to-end digital media strategy development with implementation support.",
      features: [
        "Everything in Strategy Audit",
        "Content pillars & editorial calendar",
        "Platform-specific playbooks",
        "Production guidelines & templates",
        "Team training sessions",
        "60 days implementation support",
        "Bi-weekly check-in calls",
      ],
      featured: true,
    },
    {
      name: "Ongoing Partnership",
      price: "Custom",
      period: "monthly",
      description: "Continuous strategic guidance and support for sustained growth.",
      features: [
        "Monthly strategy sessions",
        "Performance analysis & optimization",
        "Content review & feedback",
        "Platform updates & recommendations",
        "Priority email support",
        "Quarterly planning workshops",
        "Team training as needed",
        "Direct access to Shimon",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Flexible engagement options designed for organizations of all sizes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Most Popular</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-normal">{plan.description}</p>
              <Button stretch className="mb-6 rounded-full">
                Get Started
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
