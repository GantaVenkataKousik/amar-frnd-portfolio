"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface FloatingIcon {
  icon: string
  size: number
  position: { x: number; y: number }
  animation: {
    y: number
    duration: number
    delay: number
  }
}

interface FloatingIconsProps {
  icons: FloatingIcon[]
  className?: string
}

export function FloatingIcons({ icons, className = "" }: FloatingIconsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${icon.position.x}%`,
            top: `${icon.position.y}%`,
            width: icon.size,
            height: icon.size,
          }}
          animate={{
            y: [0, icon.animation.y, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            y: {
              duration: icon.animation.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: icon.animation.delay,
            },
            opacity: {
              duration: icon.animation.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: icon.animation.delay,
            },
          }}
        >
          <Image
            src={icon.icon || "/placeholder.svg"}
            alt="Floating Icon"
            width={icon.size}
            height={icon.size}
            className="w-full h-full object-contain opacity-20"
          />
        </motion.div>
      ))}
    </div>
  )
}
