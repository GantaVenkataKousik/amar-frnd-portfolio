"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export function TextReveal({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
  as: Component = "div",
}: TextRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  // Split the text into words and characters
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <Component className={className}>
      <motion.div ref={ref} style={{ overflow: "hidden" }} variants={container} initial="hidden" animate={controls}>
        {words.map((word, index) => (
          <motion.span key={index} className="inline-block mr-1" variants={child}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  )
}
