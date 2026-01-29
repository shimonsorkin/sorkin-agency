import Link from "next/link"
import { IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconMail } from "@tabler/icons-react"
import { Play } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(10,10,10,0.14673913043478262)]">
                <Play className="w-4 h-4 text-accent" />
              </span>
              <span className="font-serif text-xl font-bold">Sorkin Agency</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Strategic digital media consulting for media organizations and nonprofits. Helping mission-driven
              organizations grow their audience and amplify their impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-muted-foreground hover:text-primary transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-muted-foreground hover:text-primary transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:shimon@sorkin.agency"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <IconMail className="w-4 h-4" />
                  shimon@sorkin.agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sorkin Agency. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <IconBrandTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <IconBrandYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
