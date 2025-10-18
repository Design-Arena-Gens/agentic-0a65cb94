"use client"

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import type { ChartOptions } from 'chart.js'

const Area = dynamic(async () => {
  const mod = await import('react-chartjs-2')
  const ChartJS = await import('chart.js')
  const { Chart, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } = ChartJS
  Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)
  return mod.Line
}, { ssr: false })

export function AreaChart({ points }: { points: number[] }) {
  const data = useMemo(() => ({
    labels: points.map((_, i) => `W${i + 1}`),
    datasets: [
      {
        label: 'Active Users',
        data: points,
        borderColor: 'rgba(99, 102, 241, 1)',
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        tension: 0.35,
        fill: true,
        pointRadius: 0,
      }
    ]
  }), [points])

  const options = useMemo<ChartOptions<'line'>>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { intersect: false, mode: 'index' }
    },
    scales: {
      x: { grid: { display: false }, ticks: { display: false } },
      y: { grid: { color: 'rgba(148,163,184,0.12)' }, ticks: { display: false } }
    }
  }), [])

  return (
    <div className="h-36">
      <Area data={data} options={options} />
    </div>
  )
}
