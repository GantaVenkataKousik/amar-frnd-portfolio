"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  borderWidth?: number
  duration?: number
  colors?: string[]
}

export function AnimatedGradientBorder({
  children,
  className = "",
  containerClassName = "",
  borderWidth = 2,
  duration = 8,
  colors = ["#0ea5e9", "#2563eb", "#0891b2", "#0ea5e9"],
}: AnimatedGradientBorderProps) {
  const borderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const border = borderRef.current
    if (!border) return

    // Create gradient string
    const gradientColors = colors.join(", ")
    const gradient = `linear-gradient(90deg, ${gradientColors})`

    // Set initial styles
    border.style.borderImage = gradient
    border.style.borderImageSlice = "1"
    border.style.animation = `gradientBorder ${duration}s linear infinite`

    // Create keyframes for animation
    const styleSheet = document.styleSheets[0]
    const keyframes = `
      @keyframes gradientBorder {
        0% {
          border-image: linear-gradient(0deg, ${gradientColors}) 1;
        }
        25% {
          border-image: linear-gradient(90deg, ${gradientColors}) 1;
        }
        50% {
          border-image: linear-gradient(180deg, ${gradientColors}) 1;
        }
        75% {
          border-image: linear-gradient(270deg, ${gradientColors}) 1;
        }
        100% {
          border-image: linear-gradient(360deg, ${gradientColors}) 1;
        }
      }
    `

    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    } catch (err) {
      console.error("Failed to insert keyframes:", err)
    }
  }, [colors, duration])

  return (
    <div className={`relative ${containerClassName}`}>
      <div ref={borderRef} className={`relative border-solid ${className}`} style={{ borderWidth: `${borderWidth}px` }}>
        {children}
      </div>
    </div>
  )
}
