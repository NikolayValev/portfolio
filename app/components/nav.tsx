import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/blog', label: 'Journal' },
]

export function Navbar() {
  return (
    <header className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-subtle backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Portfolio
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">Ikolay</h1>
          <p className="text-sm text-muted-foreground">
            Product-focused engineer building resilient web experiences.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-background/60 p-1 text-sm font-medium shadow-inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'rounded-full px-4 text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="mailto:hello@ikolay.dev"
            className={cn(buttonVariants({ size: 'sm' }), 'rounded-full font-semibold')}
          >
            Let&rsquo;s talk
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
