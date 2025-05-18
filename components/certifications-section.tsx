"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { ThreeDCard } from "@/components/ui/3d-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Award, Calendar } from "lucide-react"

export function CertificationsSection() {
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

  const certifications = [
    {
      title: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      validUntil: "2025",
      credentialId: "AWS-SAA-12345",
      image: "/aws-certified-solutions-architect-associate.png",
      skills: ["Architecture Design", "Cost Optimization", "Security", "Scalability", "High Availability"],
    },
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      validUntil: "2025",
      credentialId: "AWS-DEV-67890",
      image: "/aws-certified-developer.png",
      skills: ["Lambda", "API Gateway", "DynamoDB", "CloudFormation", "CI/CD"],
    },
    {
      title: "AWS Data Analytics Specialist",
      issuer: "Amazon Web Services",
      date: "2023",
      validUntil: "2026",
      credentialId: "AWS-DAS-54321",
      image: "/aws-data-analytics-specialist.png",
      skills: ["Data Lakes", "ETL", "Analytics", "Big Data", "Data Pipelines"],
    },
    {
      title: "Generative AI Essentials Practitioner",
      issuer: "AI Certification Board",
      date: "2023",
      validUntil: "2026",
      credentialId: "GAIP-09876",
      image: "/generative-ai-essentials.png",
      skills: ["AI/ML", "LLMs", "Prompt Engineering", "AI Integration", "GenAI Applications"],
    },
  ]

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/50">
      <div className="absolute inset-0 dotted-grid"></div>
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal
            text="Certifications & Achievements"
            className="text-3xl font-bold mb-4 inline-block text-gradient"
            as="h2"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating my expertise in AWS and cloud technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-16 animate-on-scroll">
          <div className="flex flex-col items-center px-8 py-6 md:border-r border-slate-800">
            <AnimatedCounter
              to={12}
              className="text-4xl font-bold text-gradient"
              formatter={(value) => `${Math.round(value)}+`}
            />
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="flex flex-col items-center px-8 py-6 md:border-r border-slate-800">
            <AnimatedCounter
              to={3}
              className="text-4xl font-bold text-gradient"
              formatter={(value) => `${Math.round(value)}`}
              delay={200}
            />
            <p className="text-gray-400 mt-2">AWS Certifications</p>
          </div>
          <div className="flex flex-col items-center px-8 py-6 md:border-r border-slate-800">
            <AnimatedCounter
              to={40}
              className="text-4xl font-bold text-gradient"
              formatter={(value) => `${Math.round(value)}+`}
              delay={400}
            />
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center px-8 py-6">
            <AnimatedCounter
              to={15}
              className="text-4xl font-bold text-gradient"
              formatter={(value) => `${Math.round(value)}+`}
              delay={600}
            />
            <p className="text-gray-400 mt-2">POCs Delivered</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ThreeDCard className="h-full">
                <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-900/50 backdrop-blur-sm p-6 h-full flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <div className="w-24 h-24 bg-slate-800 rounded-lg p-3 flex items-center justify-center">
                        <Award className="h-16 w-16 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center">{cert.title}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Award className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm text-gray-400">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      <span className="text-sm text-gray-400">
                        {cert.date} - {cert.validUntil}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {cert.skills.slice(0, 3).map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-slate-800 text-cyan-400">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </ShineBorder>
              </ThreeDCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
