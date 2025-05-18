"use client"

import { useEffect, useRef } from "react"
import { TextReveal } from "@/components/ui/text-reveal"
import { ParallaxEffect } from "@/components/ui/parallax-effect"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { Cloud, Code, Database, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesSection() {
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

  const services = [
    {
      title: "Rapid Prototyping & POCs",
      description:
        "Delivering client-specific Proof of Concept implementations within strict 4-week timelines, focusing on innovation and precision.",
      icon: <Rocket className="h-10 w-10 text-cyan-400" />,
      delay: 0,
    },
    {
      title: "AWS Architecture Design",
      description:
        "Designing scalable, secure, and cost-effective cloud architectures tailored to specific business requirements.",
      icon: <Cloud className="h-10 w-10 text-cyan-400" />,
      delay: 0.1,
    },
    {
      title: "Cost Optimization",
      description:
        "Implementing AWS Cost Explorer and resource optimization strategies to reduce monthly cloud expenses by up to 15%.",
      icon: <TrendingUp className="h-10 w-10 text-cyan-400" />,
      delay: 0.2,
    },
    {
      title: "Security & Compliance",
      description:
        "Ensuring adherence to best practices by reviewing security scan reports and addressing non-compliance issues.",
      icon: <Shield className="h-10 w-10 text-cyan-400" />,
      delay: 0.3,
    },
    {
      title: "Client Collaboration",
      description:
        "Partnering with clients to deliver engaging demos, communicate technical solutions, and provide value-driven results.",
      icon: <Users className="h-10 w-10 text-cyan-400" />,
      delay: 0.4,
    },
    {
      title: "Data Engineering",
      description:
        "Designing and implementing data solutions using AWS services like Glue, optimizing data pipelines and workflows.",
      icon: <Database className="h-10 w-10 text-cyan-400" />,
      delay: 0.5,
    },
    {
      title: "DevOps Implementation",
      description: "Establishing efficient CI/CD pipelines and automation workflows to accelerate software delivery.",
      icon: <Code className="h-10 w-10 text-cyan-400" />,
      delay: 0.6,
    },
    {
      title: "Technical Presentations",
      description:
        "Delivering clear and engaging technical presentations to stakeholders, explaining complex solutions effectively.",
      icon: <PresentationChart className="h-10 w-10 text-cyan-400" />,
      delay: 0.7,
    },
  ]

  return (
    <section id="services" className="py-20 relative bg-slate-950/50">
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal text="Services I Offer" className="text-3xl font-bold mb-4 inline-block text-gradient" as="h2" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive cloud solutions to help your business leverage the full potential of AWS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ParallaxEffect key={index} speed={0.2} direction="up" className="h-full">
              <motion.div
                className="animate-on-scroll h-full"
                style={{ animationDelay: `${index * 100}ms` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
              >
                <AnimatedGradientBorder
                  className="h-full rounded-xl"
                  containerClassName="h-full"
                  colors={["#0ea5e9", "#2563eb", "#0891b2", "#0ea5e9"]}
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm p-6 h-full rounded-xl flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-slate-800/50 border border-slate-700">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </AnimatedGradientBorder>
              </motion.div>
            </ParallaxEffect>
          ))}
        </div>
      </div>
    </section>
  )
}

// Additional icons needed for the services section
function Rocket(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function TrendingUp(props: any) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

function Users(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function PresentationChart(props: any) {
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
      <path d="M3 3h18" />
      <path d="M13 17H7l-4 4" />
      <path d="M13 7v10" />
      <path d="M18 9l-5-2" />
      <path d="M18 13l-5 2" />
    </svg>
  )
}
