import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { Play } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(10,10,10,0.14673913043478262)]">
              <Play className="w-4 h-4 text-accent" />
            </span>
            <span className="font-serif">Sorkin Agency</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#approach" className="text-sm text-foreground hover:text-primary transition-colors">
              Approach
            </Link>
            <Link href="#results" className="text-sm text-foreground hover:text-primary transition-colors">
              Results
            </Link>
            <Link href="#testimonials" className="text-sm text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
          </nav>

          {/* CTA Button */}
          <Button className="rounded-full px-6">Schedule a Consultation</Button>
        </div>
      </div>
    </header>
  )
}
