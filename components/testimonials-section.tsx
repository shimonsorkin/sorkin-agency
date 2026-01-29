import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Shimon's strategic guidance transformed our YouTube presence completely. His deep understanding of the platform and audience engagement helped us grow from 10K to 100K subscribers in under a year. He genuinely cares about mission-driven work.",
    name: "Alexei Navalny",
    role: "Russian opposition leader, anti-corruption activist, and the most prominent critic of President Vladimir Putin who died in prison in February 2024",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Working with Shimon gave us clarity on our social media strategy when we were spread too thin. His frameworks and training helped our small team punch above our weight and reach audiences we never thought possible.",
    name: "Marcus Thompson",
    role: "Communications Director, Environmental Nonprofit",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Shimon doesn't just give advice—he partners with you to make it happen. His hands-on approach to content strategy and willingness to dive into the details made all the difference for our foundation's digital outreach.",
    name: "Dr. Lisa Park",
    role: "Executive Director, Educational Foundation",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">What Clients Say</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the organizations we have partnered with to amplify their mission.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
