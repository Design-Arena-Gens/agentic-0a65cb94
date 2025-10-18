import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '../components/theme-provider'

export const metadata: Metadata = {
  title: 'Micro-interactions Dashboard',
  description: 'Design-engineered dashboard with delightful micro-interactions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
