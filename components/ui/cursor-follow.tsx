"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CursorFollowProps {
  children: React.ReactNode
  className?: string
  size?: number
  color?: string
  blur?: number
  opacity?: number
  delay?: number
}

export function CursorFollow({
  children,
  className = "",
  size = 400,
  color = "rgba(14, 165, 233, 0.15)",
  blur = 100,
  opacity = 0.5,
  delay = 0.1,
}: CursorFollowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="fixed pointer-events-none z-0"
        animate={{
          x: position.x - size / 2,
          y: position.y - size / 2,
          opacity: isVisible ? opacity : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.5,
          damping: 30,
          stiffness: 200,
          delay,
        }}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          filter: `blur(${blur}px)`,
        }}
      />
      {children}
    </div>
  )
}
