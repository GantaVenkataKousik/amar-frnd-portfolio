"use client"

import { useEffect, useRef } from "react"
import { TextReveal } from "@/components/ui/text-reveal"
import { motion } from "framer-motion"
import Image from "next/image"

export function ToolsSection() {
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

  const toolCategories = [
    {
      name: "AWS Services",
      tools: [
        { name: "EC2", icon: "/tools/aws-ec2.png" },
        { name: "S3", icon: "/tools/aws-s3.png" },
        { name: "Lambda", icon: "/tools/aws-lambda.png" },
        { name: "DynamoDB", icon: "/tools/aws-dynamodb.png" },
        { name: "CloudFormation", icon: "/tools/aws-cloudformation.png" },
        { name: "ECS", icon: "/tools/aws-ecs.png" },
        { name: "API Gateway", icon: "/tools/aws-api-gateway.png" },
        { name: "RDS", icon: "/tools/aws-rds.png" },
      ],
    },
    {
      name: "DevOps Tools",
      tools: [
        { name: "Terraform", icon: "/tools/terraform.png" },
        { name: "Docker", icon: "/tools/docker.png" },
        { name: "Kubernetes", icon: "/tools/kubernetes.png" },
        { name: "Jenkins", icon: "/tools/jenkins.png" },
        { name: "GitHub Actions", icon: "/tools/github-actions.png" },
        { name: "Ansible", icon: "/tools/ansible.png" },
        { name: "CircleCI", icon: "/tools/circleci.png" },
        { name: "Prometheus", icon: "/tools/prometheus.png" },
      ],
    },
    {
      name: "Programming",
      tools: [
        { name: "Python", icon: "/tools/python.png" },
        { name: "JavaScript", icon: "/tools/javascript.png" },
        { name: "Go", icon: "/tools/go.png" },
        { name: "Bash", icon: "/tools/bash.png" },
        { name: "TypeScript", icon: "/tools/typescript.png" },
        { name: "Node.js", icon: "/tools/nodejs.png" },
        { name: "Java", icon: "/tools/java.png" },
        { name: "Ruby", icon: "/tools/ruby.png" },
      ],
    },
  ]

  return (
    <section id="tools" className="py-20 relative bg-slate-950/50">
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal
            text="Tools & Technologies"
            className="text-3xl font-bold mb-4 inline-block text-gradient"
            as="h2"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            The technologies and tools I use to build scalable and reliable cloud solutions
          </p>
        </div>

        <div className="space-y-16">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-on-scroll"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-8 text-center text-cyan-400">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-slate-800 rounded-lg p-3 flex items-center justify-center mb-2 border border-slate-700">
                      <Image
                        src={tool.icon || "/placeholder.svg"}
                        alt={tool.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-400">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
