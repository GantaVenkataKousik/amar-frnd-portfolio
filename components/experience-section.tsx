"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { TextReveal } from "@/components/ui/text-reveal"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
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

  const experiences = [
    {
      title: "Application Development Team Lead",
      company: "Accenture",
      period: "Jun 2021 - Present",
      description:
        "Leading application development teams and architecting AWS cloud solutions for enterprise clients. Responsible for technical leadership and delivering client-specific POCs within 4-week timelines.",
      skills: ["Amazon VPC", "Amazon EC2", "AWS", "Cloud Architecture", "DevOps"],
    },
    {
      title: "Senior Data Engineer",
      company: "Accenture",
      period: "Jan 2021 - Present",
      location: "Hyderabad Area, India",
      description:
        "Designing and implementing data solutions using AWS services. Optimizing data pipelines and ensuring efficient data processing workflows.",
      skills: ["Big Data", "AWS Glue", "Data Engineering", "ETL", "Data Analytics"],
    },
    {
      title: "Application Development Senior Analyst",
      company: "Accenture",
      period: "Feb 2017 - Jun 2021",
      location: "Hyderabad",
      description:
        "Developed and maintained cloud-based applications. Implemented AWS solutions and contributed to architecture design.",
      skills: ["Big Data", "AWS Glue", "Cloud Computing", "Application Development"],
    },
    {
      title: "Technical Analyst",
      company: "ION",
      period: "Nov 2012 - Jan 2017",
      location: "Hyderabad Area, India",
      description:
        "Analyzed technical issues and provided solutions. Worked on troubleshooting service failures and performance optimization.",
      skills: ["Technical Analysis", "Troubleshooting", "System Monitoring"],
    },
    {
      title: "Technical Consultant",
      company: "ION",
      period: "Sep 2012 - Jan 2017",
      location: "Hyderabad Area, India",
      description:
        "Troubleshooting technical issues like service failures related to WallStreet Suite Product, understanding Active-MQ logs, and collecting thread dumps of particular processes.",
      skills: ["Technical Consulting", "Problem Solving", "Performance Tuning"],
    },
  ]

  return (
    <section id="experience" className="py-20 relative bg-slate-950/50">
      <div className="absolute inset-0 dotted-grid"></div>
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal
            text="Professional Experience"
            className="text-3xl font-bold mb-4 inline-block text-gradient"
            as="h2"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Over 12 years of experience building and scaling cloud infrastructure
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-blue-500/30 to-transparent"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 animate-on-scroll ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-slate-800 border-2 border-cyan-500 transform -translate-x-1/2 md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                    <div className="bg-slate-900/50 backdrop-blur-sm p-6 h-full">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <Badge variant="outline" className="bg-slate-800 text-cyan-400 border-cyan-900">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-cyan-400 mb-1">{exp.company}</p>
                      {exp.location && <p className="text-gray-500 text-sm mb-4">{exp.location}</p>}
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-slate-800 text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ShineBorder>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
