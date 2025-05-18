"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { TextReveal } from "@/components/ui/text-reveal"
import { ParallaxEffect } from "@/components/ui/parallax-effect"
import { motion } from "framer-motion"
import { Award, Rocket, Users, TrendingUp, Shield } from "lucide-react"

export function AboutSection() {
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

  const highlights = [
    {
      icon: <Rocket className="h-5 w-5 text-cyan-400" />,
      title: "Rapid Prototyping & POCs",
      description:
        "Designing and implementing client-specific architectures with a focus on speed, precision, and innovation.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-cyan-400" />,
      title: "Cost Optimization",
      description:
        "Successfully integrated AWS Cost Explorer, reducing monthly expenses by 15% through proactive monitoring and resource optimization.",
    },
    {
      icon: <Shield className="h-5 w-5 text-cyan-400" />,
      title: "Security & Compliance",
      description:
        "Ensuring adherence to best practices by reviewing daily security scan reports, addressing non-compliance issues, and enhancing overall security posture.",
    },
    {
      icon: <Users className="h-5 w-5 text-cyan-400" />,
      title: "Client Collaboration",
      description:
        "Partnering with clients to deliver engaging demos, communicate technical solutions effectively, and provide value-driven results.",
    },
  ]

  const certifications = [
    "AWS Solutions Architect Associate",
    "AWS Certified Developer",
    "AWS Data Analytics Specialist",
    "Generative AI Essentials Practitioner",
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 dotted-grid"></div>
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal text="About Me" className="text-3xl font-bold mb-4 inline-block text-gradient" as="h2" />
          <p className="text-gray-400 max-w-3xl mx-auto">
            Currently part of a rapid prototyping team, focusing on delivering Proof of Concept (POC) implementations
            tailored to client-specific requirements within strict 4-week timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ParallaxEffect speed={0.2} direction="left">
            <div className="animate-on-scroll">
              <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-900/50 backdrop-blur-sm p-8 h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-gradient">My Approach</h3>
                  <p className="text-gray-400 mb-6">
                    With over 12+ years of experience in designing and implementing cutting-edge cloud solutions, I
                    specialize in leveraging AWS services to deliver innovative, scalable, and cost-effective
                    architectures.
                  </p>
                  <p className="text-gray-400 mb-6">
                    My role involves collaborating closely with clients to analyze their existing architectures, gather
                    requirements, and design tailored solutions that align with their business objectives.
                  </p>
                  <p className="text-gray-400">
                    Whether it's designing robust architectures, optimizing resource utilization, or delivering engaging
                    demos, I thrive on creating value and driving success for businesses through the power of AWS.
                  </p>
                </div>
              </ShineBorder>
            </div>
          </ParallaxEffect>

          <ParallaxEffect speed={0.2} direction="right">
            <div className="animate-on-scroll animate-delay-200">
              <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                <div className="bg-slate-900/50 backdrop-blur-sm p-8 h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-gradient">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1">
                          <Award className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="font-medium">{cert}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ShineBorder>
            </div>
          </ParallaxEffect>
        </div>

        <div className="animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Key Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-900/50 backdrop-blur-sm p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-800 p-3 rounded-lg">{highlight.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                        <p className="text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                </ShineBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
