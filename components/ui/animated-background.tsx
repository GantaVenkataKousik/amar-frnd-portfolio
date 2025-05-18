"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
  speed?: number
  colors?: string[]
  blur?: number
}

export function AnimatedBackground({
  children,
  className = "",
  speed = 20,
  colors = ["#0ea5e9", "#2563eb", "#0891b2"],
  blur = 100,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient blobs
    const blobs = Array.from({ length: colors.length }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 300 + 100,
      dx: (Math.random() - 0.5) * speed,
      dy: (Math.random() - 0.5) * speed,
      color: colors[i],
    }))

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw each blob
      blobs.forEach((blob) => {
        // Move blob
        blob.x += blob.dx
        blob.y += blob.dy

        // Bounce off edges
        if (blob.x < -blob.radius || blob.x > canvas.width + blob.radius) {
          blob.dx *= -1
        }
        if (blob.y < -blob.radius || blob.y > canvas.height + blob.radius) {
          blob.dy *= -1
        }

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)
        gradient.addColorStop(0, `${blob.color}40`) // 25% opacity
        gradient.addColorStop(1, `${blob.color}00`) // 0% opacity

        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [colors, speed])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ filter: `blur(${blur}px)` }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
