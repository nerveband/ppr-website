import Link from 'next/link'
import { MainNav } from './navigation/main-nav'
import { BookOpen } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-md bg-primary/10 p-1.5">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold text-secondary">
            Principal Powered Reading
          </span>
        </Link>
        <MainNav />
      </div>
    </header>
  )
} 