import Link from 'next/link'
import { Github, Linkedin, Rss } from 'lucide-react'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/NikolayValev', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikolayvalev/', icon: Linkedin },
  { label: 'RSS', href: '/rss', icon: Rss },
]

export default function Footer() {
  return (
    <footer className="rounded-3xl border border-border/70 bg-card/70 p-6 text-sm text-muted-foreground">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p>Built with Next.js, shadcn/ui, and a bias for outcomes.</p>
          <p>© {new Date().getFullYear()} Nikolay. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-1 rounded-full border border-transparent px-3 py-1 font-medium text-foreground transition hover:border-border hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
