"use client"

import { ReactNode } from 'react'
import { Card, CardBody, CardHeader } from '../ui/card'
import { AnimatedNumber } from '../ui/animated-number'

export function StatCard({
  label,
  value,
  delta,
  icon,
}: {
  label: string
  value: number
  delta: number
  icon?: ReactNode
}) {
  const isUp = delta >= 0
  return (
    <Card>
      <CardHeader
        subtitle={label}
        title={
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${isUp ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'}`}>{isUp ? '▲' : '▼'} {Math.abs(delta)}%</span>
          </div>
        }
        action={icon}
      />
      <CardBody>
        <div className="text-3xl font-bold tracking-tight">
          <AnimatedNumber value={value} />
        </div>
      </CardBody>
    </Card>
  )
}
