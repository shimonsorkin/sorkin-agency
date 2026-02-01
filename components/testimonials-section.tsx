import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/navalny.webp",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Alexei Navalny",
    role: "Russian opposition leader and the most prominent critic of President Vladimir Putin",
    rating: 5,
  },
  {
    image: "/natalia-arno.jpg",
    imageClassName: "scale-125 object-[20%_20%]",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Natalia Arno",
    role: "Founder and President, Free Russia Foundation",
    rating: 5,
  },
  {
    image: "/lyubov-sobol.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Lyubov Sobol",
    role: "Lawyer and politician, Anti-Corruption Foundation (FBK)",
    rating: 5,
  },
  {
    image: "/vladimir-milov.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Vladimir Milov",
    role: "Politician, former Deputy Minister of Energy of Russia",
    rating: 5,
  },
  {
    image: "/kara-murza.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Vladimir Kara-Murza",
    role: "Politician, journalist, and Pulitzer Prize laureate",
    rating: 5,
  },
  {
    image: "/linor-goralik.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Linor Goralik",
    role: "Writer, poet, and artist",
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
