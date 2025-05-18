"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Set up intersection observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="#" className="flex items-center gap-3" onClick={scrollToTop}>
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="font-bold text-lg">A</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40 blur-sm"></div>
              </div>
              <span className="font-medium text-white">Amarnath Sagala</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="#"
                  className={`text-sm transition-colors ${
                    activeSection === "hero" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={`text-sm transition-colors ${
                    activeSection === "about" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className={`text-sm transition-colors ${
                    activeSection === "experience" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className={`text-sm transition-colors ${
                    activeSection === "skills" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className={`text-sm transition-colors ${
                    activeSection === "services" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className={`text-sm transition-colors ${
                    activeSection === "projects" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#certifications"
                  className={`text-sm transition-colors ${
                    activeSection === "certifications"
                      ? "text-cyan-400 font-medium"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => scrollToSection("certifications")}
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className={`text-sm transition-colors ${
                    activeSection === "contact" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link
              href="#"
              className={`transition-colors py-2 ${
                activeSection === "hero" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={scrollToTop}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`transition-colors py-2 ${
                activeSection === "about" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={() => scrollToSection("about")}
            >
              About
            </Link>
            <Link
              href="#experience"
              className={`transition-colors py-2 ${
                activeSection === "experience" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className={`transition-colors py-2 ${
                activeSection === "skills" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Link>
            <Link
              href="#services"
              className={`transition-colors py-2 ${
                activeSection === "services" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={() => scrollToSection("services")}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className={`transition-colors py-2 ${
                activeSection === "projects" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Link>
            <Link
              href="#certifications"
              className={`transition-colors py-2 ${
                activeSection === "certifications" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={() => scrollToSection("certifications")}
            >
              Certifications
            </Link>
            <Link
              href="#contact"
              className={`transition-colors py-2 ${
                activeSection === "contact" ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
