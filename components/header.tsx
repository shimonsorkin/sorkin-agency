"use client"

import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"

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
            <span>Sorkin Agency</span>
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
          <Button
            className="rounded-full px-6"
            data-cal-link="shimon-sorkin-zh2q7b/30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </header>
  )
}
