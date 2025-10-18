"use client"

import { ThemeToggle } from '../components/ui/theme-toggle'
import { Card, CardBody, CardHeader } from '../components/ui/card'
import { StatCard } from '../components/dashboard/stat-card'
import { AreaChart } from '../components/dashboard/area-chart'
import { BarChart } from '../components/dashboard/bar-chart'
import { ActivityFeed } from '../components/dashboard/activity-feed'
import { motion } from 'framer-motion'
import { Sparkles, Users, TrendingUp, Activity } from 'lucide-react'

export default function Page() {
  const areaPoints = [120, 164, 180, 210, 240, 220, 280, 300, 360, 410, 460, 520]
  const barValues = [6, 9, 4, 7, 8, 10, 12]

  const feed = [
    { id: '1', icon: 'star', title: 'Pro plan upgraded by 3 teams', time: '2m ago', accent: 'yellow' },
    { id: '2', icon: 'user', title: '28 new users joined today', time: '34m ago', accent: 'blue' },
    { id: '3', icon: 'bell', title: 'System latency improved by 18%', time: '1h ago', accent: 'green' },
  ] as const

  return (
    <main className="px-4 md:px-8 py-6 max-w-7xl mx-auto">
      <header className="flex items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 animate-float">
            <Sparkles className="h-4 w-4" />
            Micro-interactions Dashboard
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Design-engineered insights</h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <StatCard label="Active Users" value={12450} delta={8.2} icon={<Users className="h-5 w-5 text-brand-500" />} />
        <StatCard label="Conversions" value={982} delta={-2.1} icon={<TrendingUp className="h-5 w-5 text-green-500" />} />
        <StatCard label="Sessions" value={40421} delta={3.6} icon={<Activity className="h-5 w-5 text-yellow-500" />} />
        <Card>
          <CardHeader subtitle="Tips" title="Try hovering and toggling theme" />
          <CardBody>
            <p className="text-sm text-gray-600 dark:text-gray-300">All widgets feature subtle micro-interactions, motion, and haptics-like feedback.</p>
          </CardBody>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <Card className="col-span-2">
          <CardHeader subtitle="Customers" title="Active users over time" />
          <CardBody>
            <AreaChart points={areaPoints} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader subtitle="Store" title="Daily conversions" />
          <CardBody>
            <BarChart values={barValues} />
          </CardBody>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <Card className="col-span-2">
          <CardHeader subtitle="Experiments" title="Feature impact" />
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[0.2, 0.35, 0.5].map((p, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-4 rounded-xl border border-gray-200/70 dark:border-gray-800/70">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Variant {String.fromCharCode(65 + i)}</div>
                  <div className="text-xl font-semibold">CTR {(p * 100).toFixed(1)}%</div>
                  <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-800 mt-3">
                    <motion.div className="h-1.5 rounded-full bg-brand-500" initial={{ width: 0 }} whileInView={{ width: `${p * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader subtitle="Recent" title="Activity feed" />
          <CardBody>
            <ActivityFeed items={feed as any} />
          </CardBody>
        </Card>
      </section>

      <footer className="mt-10 text-xs text-gray-500 dark:text-gray-400">
        Built with Next.js, Tailwind, and motion. Hover anything.
      </footer>
    </main>
  )
}
