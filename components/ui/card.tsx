"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function Card({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`rounded-2xl border border-gray-200/70 dark:border-gray-800/70 p-4 bg-white/70 dark:bg-gray-900/50 glass interactive-shadow ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ title, subtitle, action }: { title: ReactNode, subtitle?: string, action?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{subtitle}</h3>
        <div className="text-lg font-semibold tracking-tight">{title}</div>
      </div>
      {action}
    </div>
  )
}

export function CardBody({ children, className = '' }: { children: ReactNode, className?: string }) {
  return <div className={`mt-4 ${className}`}>{children}</div>
}
