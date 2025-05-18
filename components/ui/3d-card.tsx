"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface ThreeDCardProps {
  children: React.ReactNode
  className?: string
  glareOpacity?: number
  rotationIntensity?: number
  borderRadius?: number
  glareColor?: string
}

export function ThreeDCard({
  children,
  className = "",
  glareOpacity = 0.2,
  rotationIntensity = 10,
  borderRadius = 16,
  glareColor = "120, 180, 255",
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const posX = e.clientX - centerX
      const posY = e.clientY - centerY

      // Calculate rotation based on mouse position
      const rotateXValue = (posY / (rect.height / 2)) * -rotationIntensity
      const rotateYValue = (posX / (rect.width / 2)) * rotationIntensity

      setRotateX(rotateXValue)
      setRotateY(rotateYValue)

      // Calculate mouse position for glare effect (0 to 1)
      const mouseXValue = (e.clientX - rect.left) / rect.width
      const mouseYValue = (e.clientY - rect.top) / rect.height

      setMouseX(mouseXValue)
      setMouseY(mouseYValue)
    }

    const handleMouseLeave = () => {
      // Reset to flat position
      setRotateX(0)
      setRotateY(0)
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [rotationIntensity])

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    >
      {children}

      {/* Glare effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: `${borderRadius}px`,
          background: `radial-gradient(
            circle at ${mouseX * 100}% ${mouseY * 100}%,
            rgba(${glareColor}, ${glareOpacity}) 0%,
            rgba(${glareColor}, 0) 60%
          )`,
          mixBlendMode: "soft-light",
        }}
      />
    </motion.div>
  )
}
