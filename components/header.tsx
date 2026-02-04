"use client"

import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { ArrowRight } from "lucide-react"

export function Header() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <img src="/sorkin-logo.svg" alt="Sorkin Agency" className="w-7 h-8" />
            <span className="uppercase">Sorkin Agency</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 uppercase">
            <Link href="#services" className="text-base font-semibold text-foreground hover:text-accent transition-colors duration-300">
              Services
            </Link>
            <Link href="#approach" className="text-base font-semibold text-foreground hover:text-accent transition-colors duration-300">
              Approach
            </Link>
            <Link href="#results" className="text-base font-semibold text-foreground hover:text-accent transition-colors duration-300">
              Results
            </Link>
            <Link href="#testimonials" className="text-base font-semibold text-foreground hover:text-accent transition-colors duration-300">
              Testimonials
            </Link>
          </nav>

          {/* CTA Button */}
          <Button
            variant="solid"
            className="rounded-full px-6 border-black border-b-black hover:bg-[oklch(0.60_0.22_25)] hover:text-white hover:border-[oklch(0.45_0.22_25)] hover:border-b-[oklch(0.50_0.22_25)] transition-all duration-300"
            data-cal-link="shimon-sorkin-zh2q7b/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            <span className="uppercase">Work With Us</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </header>
  )
}
