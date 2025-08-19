"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { TrendingUp, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">StockSense</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Features
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Testimonials
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={scrollToWaitlist}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Join Waitlist
          </Button>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-6 py-4 space-y-3">
            <a
              href="#features"
              className="block text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="block text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </a>
            <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
