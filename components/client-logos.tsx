export function ClientLogos() {
  const logos = [
    { name: "Free Russia Foundation", src: "/logos/Free Russia Foundation Logo red.svg" },
    { name: "MT Logo", src: "/logos/mt_logo2 (1).png" },
    { name: "Anti-Corruption Foundation", src: "/logos/Logo_of_the_Anti-Corruption_Foundation_(2022).svg.png" },
  ]

  return (
    <section className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 text-foreground/60">Trusted By Leading Organizations</h2>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-10 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
