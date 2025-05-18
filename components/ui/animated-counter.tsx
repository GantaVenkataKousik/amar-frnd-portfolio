"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
  formatter?: (value: number) => string
  delay?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2000,
  className = "",
  formatter = (value) => Math.round(value).toString(),
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!inView) return

    // Add delay before starting animation
    const delayTimeout = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(delayTimeout)
  }, [inView, delay])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = from + (to - from) * easeOutQuart(progress)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration, hasStarted])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  return (
    <span ref={ref} className={className}>
      {formatter(count)}
    </span>
  )
}
