"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxEffect({ children, speed = 0.5, className = "", direction = "up" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [elementTop, setElementTop] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight)

      const handleResize = () => {
        setWindowHeight(window.innerHeight)
        if (ref.current) {
          setElementTop(ref.current.getBoundingClientRect().top + window.scrollY)
        }
      }

      const handleScroll = () => {
        if (ref.current) {
          const scrollPosition = window.scrollY
          const elementPosition = elementTop
          const distance = scrollPosition - elementPosition
          const windowScrollHeight = windowHeight

          // Calculate how far through the element we've scrolled (0 to 1)
          const scrollPercentage = Math.min(Math.max(distance / (ref.current.offsetHeight + windowScrollHeight), -1), 1)

          setOffset(scrollPercentage * speed * 100)
        }
      }

      // Set initial values
      if (ref.current) {
        setElementTop(ref.current.getBoundingClientRect().top + window.scrollY)
      }

      window.addEventListener("resize", handleResize)
      window.addEventListener("scroll", handleScroll)

      // Trigger initial calculation
      handleScroll()

      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [speed])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${offset}px)`
      case "down":
        return `translateY(${-offset}px)`
      case "left":
        return `translateX(${offset}px)`
      case "right":
        return `translateX(${-offset}px)`
      default:
        return `translateY(${offset}px)`
    }
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        transform: getTransform(),
        transition: "transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
