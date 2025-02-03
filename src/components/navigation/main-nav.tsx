'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Users, Sparkles, MessageSquare } from 'lucide-react'

const navigation = [
  { name: 'Workshops', href: '/workshops', icon: BookOpen },
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Why Us', href: '/why-us', icon: Sparkles },
  { name: 'Contact', href: '/contact', icon: MessageSquare },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-2">
      {navigation.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`group flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-secondary/10 hover:scale-105 ${
              isActive
                ? 'bg-secondary/10 text-secondary'
                : 'text-secondary/60 hover:text-secondary'
            }`}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
} 