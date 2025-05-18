"use client"

import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-20" points={40} />
      <div className="absolute inset-0 hero-gradient"></div>

      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-medium mb-3 animate-on-scroll">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-on-scroll animate-delay-100">
              Amarnath
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-16 animate-on-scroll animate-delay-200">
              <TypeAnimation
                sequence={[
                  "AWS Solutions Architect",
                  2000,
                  "Cloud Infrastructure Expert",
                  2000,
                  "DevOps Specialist",
                  2000,
                  "Technical Leader",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
            <p className="text-gray-400 mb-8 animate-on-scroll animate-delay-300">
              With over 13 years of experience designing and implementing scalable, high-performance cloud solutions.
              Specialized in AWS architecture, infrastructure automation, and cloud-native applications.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-on-scroll animate-delay-400">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-slate-700 hover:border-cyan-600/50 hover:bg-slate-800/50">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex gap-4 animate-on-scroll animate-delay-500">
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
            </div>
          </div>

          <div className="relative animate-float">
            <ShineBorder
              className="rounded-full overflow-hidden w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto"
              borderClassName="border-2 border-cyan-900/30"
            >
              <Image
                src="/placeholder-78wp2.png"
                alt="Amarnath - AWS Solutions Architect"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
            </ShineBorder>

            <div className="absolute -bottom-4 -right-4 md:bottom-0 md:right-0 bg-slate-800/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700 animate-pulse-slow">
              <p className="text-sm font-medium">AWS Certified</p>
              <p className="text-xs text-cyan-400">Solutions Architect Professional</p>
            </div>

            <div className="absolute -top-4 -left-4 md:top-10 md:-left-10 bg-slate-800/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700 animate-pulse-slow animation-delay-1000">
              <p className="text-sm font-medium">13+ Years</p>
              <p className="text-xs text-cyan-400">Cloud Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
