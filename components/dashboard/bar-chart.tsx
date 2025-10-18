"use client"

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import type { ChartOptions } from 'chart.js'

const BarImpl = dynamic(async () => {
  const mod = await import('react-chartjs-2')
  const ChartJS = await import('chart.js')
  const { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } = ChartJS
  Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)
  return mod.Bar
}, { ssr: false })

export function BarChart({ values }: { values: number[] }) {
  const data = useMemo(() => ({
    labels: values.map((_, i) => `D${i+1}`),
    datasets: [
      {
        label: 'Conversions',
        data: values,
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderRadius: 6,
      }
    ]
  }), [values])

  const options = useMemo<ChartOptions<'bar'>>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { intersect: true } },
    scales: {
      x: { grid: { display: false }, ticks: { display: false } },
      y: { grid: { color: 'rgba(148,163,184,0.12)' }, ticks: { display: false } }
    }
  }), [])

  return (
    <div className="h-36">
      <BarImpl data={data} options={options} />
    </div>
  )
}
