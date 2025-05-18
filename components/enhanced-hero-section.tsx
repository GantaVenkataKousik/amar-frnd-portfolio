"use client"

import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { Particles } from "@/components/ui/particles"
import { CursorFollow } from "@/components/ui/cursor-follow"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

export function EnhancedHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles className="absolute inset-0" quantity={50} />
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-20" points={40} />
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950"
        style={{ opacity: Math.min(scrollY / 500, 0.5) }}
      ></div>

      <CursorFollow>
        <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="text-cyan-400 font-medium mb-3">Hello, I'm</p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              >
                Amarnath Sagala
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-6 h-16"
              >
                <TypeAnimation
                  sequence={[
                    "AWS Architect",
                    2000,
                    "DevOps Architect",
                    2000,
                    "3X AWS Certified",
                    2000,
                    "Cloud Solutions Expert",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400 mb-8"
              >
                With over 12+ years of experience designing and implementing cutting-edge cloud solutions. Specializing
                in leveraging AWS services to deliver innovative, scalable, and cost-effective architectures.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <AnimatedGradientBorder colors={["#0ea5e9", "#2563eb", "#0891b2", "#0ea5e9"]} className="rounded-md">
                  <Button
                    className="bg-slate-900 text-white hover:bg-slate-800"
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </AnimatedGradientBorder>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex gap-4"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-800/50 text-gray-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-800/50 text-gray-400 hover:text-white"
                  onClick={() => window.open("https://www.linkedin.com/in/amarnath-sagala-86b88161/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-slate-800/50 text-gray-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl animate-pulse-slow"></div>
              <div className="rounded-full overflow-hidden w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto border-2 border-cyan-900/30 relative group">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5hhV0Hqmbp68E9GZdsLIeSQr0IkGQj.png"
                    alt="Amarnath Sagala - AWS Architect"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -right-4 md:bottom-0 md:right-0 bg-slate-800/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700 animate-pulse-slow"
              >
                <p className="text-sm font-medium">AWS Certified</p>
                <p className="text-xs text-cyan-400">Solutions Architect Associate</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-4 -left-4 md:top-10 md:-left-10 bg-slate-800/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700 animate-pulse-slow animation-delay-1000"
              >
                <p className="text-sm font-medium">12+ Years</p>
                <p className="text-xs text-cyan-400">Cloud Experience</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToNextSection}
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ChevronDown className="h-6 w-6 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </CursorFollow>
    </section>
  )
}
