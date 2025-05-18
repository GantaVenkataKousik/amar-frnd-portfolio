"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { TextReveal } from "@/components/ui/text-reveal"
import { ParallaxEffect } from "@/components/ui/parallax-effect"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Mic, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SpeakingSection() {
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

  const speakingEvents = [
    {
      title: "Architecting for Scale: Lessons from the Field",
      event: "AWS re:Invent",
      date: "December 2023",
      location: "Las Vegas, NV",
      audience: "1,200+ attendees",
      image: "/speaking-reinvent.png",
      link: "#",
      type: "Conference",
    },
    {
      title: "Optimizing Serverless Architectures",
      event: "ServerlessConf",
      date: "October 2023",
      location: "New York, NY",
      audience: "800+ attendees",
      image: "/speaking-serverless.png",
      link: "#",
      type: "Conference",
    },
    {
      title: "Cloud Security Best Practices",
      event: "Cloud Security Summit",
      date: "August 2023",
      location: "Virtual",
      audience: "2,500+ attendees",
      image: "/speaking-security.png",
      link: "#",
      type: "Webinar",
    },
    {
      title: "Multi-Region Disaster Recovery Strategies",
      event: "AWS Community Day",
      date: "June 2023",
      location: "San Francisco, CA",
      audience: "500+ attendees",
      image: "/speaking-community.png",
      link: "#",
      type: "Meetup",
    },
  ]

  return (
    <section id="speaking" className="py-20 relative">
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal
            text="Speaking Engagements"
            className="text-3xl font-bold mb-4 inline-block text-gradient"
            as="h2"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and insights at industry conferences and events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {speakingEvents.map((event, index) => (
            <ParallaxEffect key={index} speed={0.3} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-900/50 backdrop-blur-sm h-full flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-cyan-500/80 backdrop-blur-sm text-white">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <div className="flex items-center text-cyan-400 mb-4">
                        <Mic className="h-4 w-4 mr-2" />
                        <span>{event.event}</span>
                      </div>
                      <div className="space-y-2 text-gray-400 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.audience}</span>
                        </div>
                      </div>
                      <Link href={event.link} className="mt-4 inline-block">
                        <Button variant="outline" size="sm" className="gap-2 border-slate-700 hover:border-cyan-600/50">
                          <ExternalLink className="h-4 w-4" />
                          View Presentation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ShineBorder>
              </div>
            </ParallaxEffect>
          ))}
        </div>
      </div>
    </section>
  )
}
