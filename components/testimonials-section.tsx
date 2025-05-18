"use client"

import { useEffect, useRef, useState } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, FinTech Innovations",
      image: "/placeholder.svg?height=100&width=100&query=professional woman with short hair",
      quote:
        "Amarnath's expertise in AWS architecture transformed our infrastructure. His strategic approach to cloud migration saved us millions in operational costs while improving our system reliability.",
    },
    {
      name: "Michael Chen",
      position: "VP of Engineering, TechGlobal",
      image: "/placeholder.svg?height=100&width=100&query=asian man with glasses professional",
      quote:
        "Working with Amarnath on our cloud transformation was a game-changer. His deep knowledge of AWS services and best practices helped us build a scalable platform that handles our growing customer base with ease.",
    },
    {
      name: "Jessica Williams",
      position: "Director of IT, HealthCare Solutions",
      image: "/placeholder.svg?height=100&width=100&query=professional black woman smiling",
      quote:
        "Amarnath's implementation of our HIPAA-compliant cloud infrastructure was flawless. His attention to security details and compliance requirements ensured we met all regulatory standards while maintaining performance.",
    },
    {
      name: "Robert Garcia",
      position: "CEO, E-commerce Platform",
      image: "/placeholder.svg?height=100&width=100&query=latino man in suit professional",
      quote:
        "The serverless architecture Amarnath designed for our platform handled our Black Friday traffic without a hitch. His proactive approach to scaling and performance optimization saved us from potential revenue loss during our busiest season.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 relative bg-slate-950/50">
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4 inline-block text-gradient">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">What clients and colleagues say about working with me</p>
        </div>

        <div className="relative animate-on-scroll">
          <ShineBorder className="relative overflow-hidden" borderClassName="border border-slate-800 rounded-xl">
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 md:p-12">
              <Quote className="text-cyan-500/20 w-24 h-24 absolute top-6 left-6" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-cyan-500/30">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-medium text-center">{testimonials[activeIndex].name}</h4>
                    <p className="text-cyan-400 text-sm text-center">{testimonials[activeIndex].position}</p>
                  </div>

                  <div className="md:w-3/4">
                    <p className="text-gray-300 text-lg italic leading-relaxed">"{testimonials[activeIndex].quote}"</p>
                  </div>
                </div>
              </div>
            </div>
          </ShineBorder>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-slate-700 hover:border-cyan-600/50 hover:bg-slate-800/50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 p-0 rounded-full ${
                  activeIndex === index ? "bg-cyan-500" : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-slate-700 hover:border-cyan-600/50 hover:bg-slate-800/50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
