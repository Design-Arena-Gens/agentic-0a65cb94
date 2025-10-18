"use client"

import { motion } from 'framer-motion'
import { Bell, Star, UserPlus } from 'lucide-react'

type Item = { id: string, icon: 'bell'|'star'|'user', title: string, time: string, accent: string }

const iconMap = {
  bell: Bell,
  star: Star,
  user: UserPlus,
}

export function ActivityFeed({ items }: { items: readonly Item[] | Item[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, idx) => {
        const Icon = iconMap[item.icon]
        return (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="flex items-center gap-3"
          >
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-${item.accent}-100 dark:bg-${item.accent}-900/40 text-${item.accent}-600 dark:text-${item.accent}-300`}> 
              <Icon className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <div className="text-sm font-medium leading-tight">{item.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.time}</div>
            </div>
          </motion.li>
        )
      })}
    </ul>
  )
}
