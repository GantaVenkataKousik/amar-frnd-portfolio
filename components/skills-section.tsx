"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { TextReveal } from "@/components/ui/text-reveal"
import { Progress } from "@/components/ui/progress"
import { Cloud, Server, Database, GitBranch, Shield, BarChart, Users } from "lucide-react"

export function SkillsSection() {
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

  const skillCategories = [
    {
      title: "AWS Services",
      icon: <Cloud className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "EC2 & ECS", level: 95 },
        { name: "Lambda & Serverless", level: 90 },
        { name: "S3 & Storage Solutions", level: 95 },
        { name: "VPC & Networking", level: 90 },
        { name: "CloudFormation", level: 85 },
      ],
    },
    {
      title: "Infrastructure",
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Linux/Unix", level: 85 },
        { name: "Networking", level: 80 },
      ],
    },
    {
      title: "DevOps",
      icon: <GitBranch className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "CI/CD Pipelines", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "GitHub Actions", level: 80 },
        { name: "Monitoring & Logging", level: 85 },
        { name: "Automation", level: 90 },
      ],
    },
    {
      title: "Data Engineering",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "AWS Glue", level: 90 },
        { name: "Big Data", level: 85 },
        { name: "ETL Processes", level: 90 },
        { name: "Data Analytics", level: 85 },
        { name: "Data Pipelines", level: 80 },
      ],
    },
    {
      title: "Security",
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "IAM & Security Groups", level: 90 },
        { name: "Compliance", level: 85 },
        { name: "Security Best Practices", level: 90 },
        { name: "Security Scanning", level: 85 },
        { name: "Threat Detection", level: 80 },
      ],
    },
    {
      title: "Cost Management",
      icon: <BarChart className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "AWS Cost Explorer", level: 95 },
        { name: "Resource Optimization", level: 90 },
        { name: "Budgeting", level: 85 },
        { name: "Cost Analysis", level: 90 },
        { name: "Reserved Instances", level: 85 },
      ],
    },
    {
      title: "Client Engagement",
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      skills: [
        { name: "Technical Presentations", level: 90 },
        { name: "Solution Demonstrations", level: 95 },
        { name: "Requirement Gathering", level: 90 },
        { name: "Client Communication", level: 85 },
        { name: "POC Development", level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal
            text="Technical Expertise"
            className="text-3xl font-bold mb-4 inline-block text-gradient"
            as="h2"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set developed over 12+ years in cloud architecture and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                <div className="skill-card h-full">
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-sm text-cyan-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-slate-800">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </Progress>
                      </div>
                    ))}
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
