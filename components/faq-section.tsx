"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleQuestion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What types of organizations do you work with?",
      answer:
        "We specialize in working with media organizations (news outlets, digital publishers, content creators) and nonprofits/NGOs looking to expand their digital reach and engagement.",
    },
    {
      question: "How long does a typical engagement take?",
      answer:
        "A Strategy Audit typically takes 2-3 weeks. Full Strategy engagements run 6-8 weeks depending on complexity. Ongoing partnerships are month-to-month with recommended 6-month commitments for best results.",
    },
    {
      question: "Do you handle content production?",
      answer:
        "We focus on strategy, planning, and training rather than content production. However, we can recommend trusted production partners and help you build internal capacity through training.",
    },
    {
      question: "Can you work with remote teams?",
      answer:
        "Absolutely. Most of our clients are distributed teams across different time zones. We use video calls, collaborative documents, and async communication to make partnerships work seamlessly.",
    },
    {
      question: "What platforms do you specialize in?",
      answer:
        "Our primary expertise is YouTube strategy and growth, but we also provide comprehensive guidance for Instagram, TikTok, LinkedIn, Twitter/X, and newsletter/email strategies—tailored to your audience.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We establish clear KPIs at the start of each engagement, typically including subscriber/follower growth, engagement rates, view counts, and mission-specific metrics like donations or sign-ups.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about working with Sorkin Agency.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <IconChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndexes.includes(index) ? "rotate-180" : ""}`}
                />
              </button>
              {openIndexes.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-normal"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
