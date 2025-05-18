"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<any[]>([])
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  const { theme } = useTheme()

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    initCanvas()
  }, [refresh, theme])

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = []
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)
    }
  }

  const circleParams = () => {
    const baseColor = theme === "dark" ? "150, 190, 255" : "100, 150, 220"
    const colorVariation = 30
    const r = Math.floor(Math.random() * colorVariation) - colorVariation / 2
    const g = Math.floor(Math.random() * colorVariation) - colorVariation / 2
    const b = Math.floor(Math.random() * colorVariation) - colorVariation / 2

    const baseR = Number.parseInt(baseColor.split(",")[0].trim())
    const baseG = Number.parseInt(baseColor.split(",")[1].trim())
    const baseB = Number.parseInt(baseColor.split(",")[2].trim())

    const color = `${Math.max(0, Math.min(255, baseR + r))}, ${Math.max(0, Math.min(255, baseG + g))}, ${Math.max(0, Math.min(255, baseB + b))}`

    return {
      x: Math.random() * canvasSize.current.w,
      y: Math.random() * canvasSize.current.h,
      translateX: 0,
      translateY: 0,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.3 + 0.1,
      targetAlpha: Math.random() * 0.3 + 0.1,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: Math.random() * 0.5 + 0.5,
      color,
    }
  }

  const drawParticles = () => {
    circles.current = []
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams())
    }
  }

  const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      circles.current.forEach((circle, i) => {
        // Handle the alpha value
        const edge = [
          circle.x + circle.translateX - circle.size, // distance from left edge
          canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
          circle.y + circle.translateY - circle.size, // distance from top edge
          canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
        ]
        const closestEdge = edge.reduce((a, b) => Math.min(a, b))
        const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1)
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha
          }
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge
        }

        circle.x += circle.dx
        circle.y += circle.dy

        // Bounce when hitting the edge
        if (circle.x < 0 || circle.x > canvasSize.current.w) {
          circle.dx *= -1
        }
        if (circle.y < 0 || circle.y > canvasSize.current.h) {
          circle.dy *= -1
        }

        // Check if the circle is completely outside the canvas
        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size
        ) {
          // Reset the circle
          circles.current[i] = circleParams()
          return
        }

        // Mouse interaction
        const translateX = remapValue(mousePosition.current.x - circle.x, 0, staticity, 0, canvasSize.current.w)
        const translateY = remapValue(mousePosition.current.y - circle.y, 0, staticity, 0, canvasSize.current.h)

        // Ease into the new position
        circle.translateX += (translateX - circle.translateX) / ease
        circle.translateY += (translateY - circle.translateY) / ease

        // Draw the circle
        context.current.translate(circle.translateX, circle.translateY)
        context.current.beginPath()
        context.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI)
        context.current.fillStyle = `rgba(${circle.color}, ${circle.alpha})`
        context.current.fill()
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0)
      })
    }
    window.requestAnimationFrame(animate)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      const { width, height, left, top } = rect
      const mouseX = event.clientX - left
      const mouseY = event.clientY - top
      const x = (mouseX / width) * canvasSize.current.w
      const y = (mouseY / height) * canvasSize.current.h
      mousePosition.current = { x, y }
    }
  }

  const handleMouseLeave = () => {
    mousePosition.current = { x: 0, y: 0 }
  }

  return (
    <div
      ref={canvasContainerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 ${className}`}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}
