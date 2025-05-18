"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { ThreeDCard } from "@/components/ui/3d-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      description:
        "Led the migration of a large enterprise's infrastructure to AWS, resulting in 40% cost reduction and improved scalability.",
      image: "/cloud-migration-architecture.png",
      technologies: ["AWS", "Terraform", "CloudFormation", "EC2", "RDS", "S3"],
      link: "#",
    },
    {
      title: "Rapid POC Development",
      description:
        "Designed and implemented a client-specific POC for a financial services application within a 4-week timeline.",
      image: "/rapid-poc-development.png",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch", "IAM"],
      link: "#",
    },
    {
      title: "Data Analytics Pipeline",
      description:
        "Implemented a comprehensive data analytics solution using AWS Glue, S3, and Athena for a retail client.",
      image: "/data-analytics-pipeline.png",
      technologies: ["AWS Glue", "S3", "Athena", "QuickSight", "Lambda"],
      link: "#",
    },
    {
      title: "Cost Optimization Initiative",
      description:
        "Successfully integrated AWS Cost Explorer and implemented resource optimization strategies, reducing monthly expenses by 15%.",
      image: "/cost-optimization-initiative.png",
      technologies: ["AWS Cost Explorer", "EC2", "Reserved Instances", "Savings Plans", "Budgets"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 dotted-grid"></div>
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal text="Featured Projects" className="text-3xl font-bold mb-4 inline-block text-gradient" as="h2" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing some of my most impactful work in cloud architecture and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ThreeDCard className="h-full">
                <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-900/50 backdrop-blur-sm h-full">
                    <div className="relative h-48 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 flex items-center justify-center">
                        <Cloud className="w-16 h-16 text-cyan-500/50" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-slate-800 text-cyan-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="gap-2 border-slate-700 hover:border-cyan-600/50">
                          <ExternalLink className="h-4 w-4" />
                          Case Study
                        </Button>
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

function Cloud(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}
