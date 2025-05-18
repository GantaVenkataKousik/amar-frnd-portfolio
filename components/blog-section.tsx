"use client"

import { useEffect, useRef } from "react"
import { ShineBorder } from "@/components/ui/shine-border"
import { TextReveal } from "@/components/ui/text-reveal"
import { ThreeDCard } from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogSection() {
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

  const blogPosts = [
    {
      title: "Building Resilient Microservices on AWS",
      excerpt:
        "Learn how to design and implement resilient microservices architectures using AWS services like ECS, Lambda, and API Gateway.",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "/blog-microservices.png",
      categories: ["Architecture", "Microservices", "AWS"],
      link: "#",
    },
    {
      title: "Cost Optimization Strategies for AWS Infrastructure",
      excerpt:
        "Discover practical strategies to optimize your AWS costs without compromising performance or reliability.",
      date: "April 3, 2023",
      readTime: "6 min read",
      image: "/blog-cost-optimization.png",
      categories: ["Cost Optimization", "AWS", "Best Practices"],
      link: "#",
    },
    {
      title: "Implementing Zero-Trust Security in AWS",
      excerpt: "A comprehensive guide to implementing zero-trust security principles in your AWS environment.",
      date: "March 12, 2023",
      readTime: "10 min read",
      image: "/blog-security.png",
      categories: ["Security", "AWS", "Zero-Trust"],
      link: "#",
    },
  ]

  return (
    <section id="blog" className="py-20 relative bg-slate-950/50">
      <div className="absolute inset-0 dotted-grid"></div>
      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <TextReveal
            text="Latest Articles & Insights"
            className="text-3xl font-bold mb-4 inline-block text-gradient"
            as="h2"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and experiences from my journey in cloud architecture and AWS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ThreeDCard className="h-full">
                <ShineBorder className="h-full" borderClassName="border border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-900/50 backdrop-blur-sm h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {post.categories.map((category, i) => (
                          <Badge key={i} variant="secondary" className="bg-slate-800/80 backdrop-blur-sm text-cyan-400">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                      <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                      <Link href={post.link} className="mt-auto">
                        <Button variant="ghost" className="p-0 h-auto text-cyan-400 hover:text-cyan-300">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ShineBorder>
              </ThreeDCard>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button
            variant="outline"
            className="border-slate-700 hover:border-cyan-600/50 hover:bg-slate-800/50 text-cyan-400"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
