import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, select, textarea, [data-cursor="pointer"]')
        )
        setIsHovering(isClickable)
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Primary sharp cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-brand-orange mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovering ? 10 : 5),
          y: mousePosition.y - (isHovering ? 10 : 5),
          width: isHovering ? 20 : 10,
          height: isHovering ? 20 : 10,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      {/* Ambient trailing glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-brand-orange/40 bg-brand-orange/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovering ? 28 : 20),
          y: mousePosition.y - (isHovering ? 28 : 20),
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.3 }}
      />
    </>
  )
}
