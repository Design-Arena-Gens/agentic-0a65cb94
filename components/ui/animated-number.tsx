"use client"

import { useEffect, useRef, useState } from 'react'
import { animate, useMotionValue } from 'framer-motion'

export function AnimatedNumber({ value, duration = 0.8 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const motionValue = useMotionValue(0)
  const [prev, setPrev] = useState(0)

  useEffect(() => {
    const controls = animate(prev, value, {
      duration,
      onUpdate: latest => motionValue.set(latest)
    })
    setPrev(value)
    return () => controls.stop()
  }, [value, duration])

  useEffect(() => motionValue.on('change', latest => {
    if (ref.current) ref.current.textContent = Math.round(latest).toLocaleString()
  }), [])

  return <span ref={ref}>{Math.round(prev).toLocaleString()}</span>
}
