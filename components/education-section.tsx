"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { TextReveal } from "@/components/ui/text-reveal"
import { ParallaxEffect } from "@/components/ui/parallax-effect"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import Image from "next/image"

export function EducationSection() {
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

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2008 - 2010",
      description: "Specialized in Distributed Systems and Cloud Computing",
      image: "/education/stanford.png",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Indian Institute of Technology",
      period: "2004 - 2008",
      description: "Graduated with honors, focused on Software Engineering",
      image: "/education/iit.png",
    },
  ]

  const courses = [
    {
      name: "Advanced AWS Architecture",
      provider: "AWS Training and Certification",
      date: "2022",
      credential: "AWS-ADV-ARCH-2022",
      image: "/education/aws-training.png",
    },
    {
      name: "Kubernetes for Enterprise Environments",
      provider: "Linux Foundation",
      date: "2021",
      credential: "LF-K8S-ENT-2021",
      image: "/education/linux-foundation.png",
    },
    {
      name: "Cloud Security Specialization",
      provider: "Cloud Security Alliance",
      date: "2020",
      credential: "CSA-SEC-2020",
      image: "/education/csa.png",
    },
    {
      name: "Enterprise DevOps Masterclass",
      provider: "DevOps Institute",
      date: "2019",
      credential: "DOI-ENT-2019",
      image: "/education/devops-institute.png",
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 dotted-grid"></div>
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal
            text="Education & Training"
            className="text-3xl font-bold mb-4 inline-block text-gradient"
            as="h2"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">Academic background and continuous professional development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((item, index) => (
            <ParallaxEffect key={index} speed={0.2} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-900/50 backdrop-blur-sm p-6 h-full flex items-center">
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-20 h-20 bg-slate-800 rounded-lg p-3 flex items-center justify-center border border-slate-700">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.institution}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                      <div className="flex items-center text-cyan-400 mb-2">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>{item.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </ShineBorder>
              </div>
            </ParallaxEffect>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-8 text-center animate-on-scroll">Professional Training</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-900/50 backdrop-blur-sm p-6 h-full">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg p-3 flex items-center justify-center border border-slate-700">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.provider}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-medium mb-2 text-center">{course.name}</h4>
                  <div className="flex items-center justify-center text-cyan-400 text-sm mb-2">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>{course.provider}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Award className="h-4 w-4 mr-2" />
                    <span>ID: {course.credential}</span>
                  </div>
                </div>
              </ShineBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
