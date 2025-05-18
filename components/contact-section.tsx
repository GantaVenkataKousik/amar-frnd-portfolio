"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Linkedin, Github, Phone } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" className="py-12 sm:py-20 relative bg-slate-950/50">
      <div className="absolute inset-0 dotted-grid"></div>
      <div ref={containerRef} className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 inline-block text-gradient">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Let's connect and explore how we can innovate together! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="animate-on-scroll">
            <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
              <div className="bg-slate-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-slate-800 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                      <p className="text-white text-sm sm:text-base break-all">amarnath.sagala@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-slate-800 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                      <p className="text-white text-sm sm:text-base">+91 99897 09009</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-slate-800 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                      <p className="text-white text-sm sm:text-base">Hyderabad, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12">
                  <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Connect with me</h4>
                  <div className="flex gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-slate-700 hover:border-cyan-600/50 hover:bg-slate-800/50"
                      onClick={() => window.open("https://www.linkedin.com/in/amarnath-sagala-86b88161/", "_blank")}
                    >
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-slate-700 hover:border-cyan-600/50 hover:bg-slate-800/50"
                    >
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </ShineBorder>
          </div>

          <div className="animate-on-scroll animate-delay-200">
            <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
              <div className="bg-slate-900/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send Me a Message</h3>

                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <label htmlFor="name" className="text-xs sm:text-sm text-gray-400">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20 text-sm h-9 sm:h-10"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label htmlFor="email" className="text-xs sm:text-sm text-gray-400">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20 text-sm h-9 sm:h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="subject" className="text-xs sm:text-sm text-gray-400">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can I help you?"
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20 text-sm h-9 sm:h-10"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="message" className="text-xs sm:text-sm text-gray-400">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20 text-sm min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 h-10 text-sm">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </ShineBorder>
          </div>
        </div>
      </div>
    </section>
  )
}
