import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

import { BlogPosts } from 'app/components/posts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const stats = [
  { label: 'Years of professional experience', value: '3+' },
  { label: 'Years of building products', value: '8+' },
  { label: 'Teams partnered', value: '10+' },
]

const projects = [
  {
    title: 'StrategemAlgo',
    description:
      'Trading-indicator SaaS: subscription, client portal, and automated signal publishing. Built for clarity and low friction.',
    stack: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
    href: 'https://www.strategemalgo.com/',
  },
  {
    title: 'BondViz',
    description:
      'Treasury curve + bond PV toolkit with continuous compounding, PCA factors, and interactive charts.',
    stack: ['Python', 'Pandas', 'Streamlit'],
    href: 'https://github.com/NikolayValev', // repo umbrella
  },
  {
    title: 'Collections',
    description:
      'Minimalist mood-board and ranking app with user collections, image galleries, and Supabase storage.',
    stack: ['Next.js', 'Supabase', 'Tailwind'],
    href: 'https://github.com/NikolayValev',
  },
]

const experience = [
  {
    role: 'Associate Software Developer',
    company: 'Medscape',
    period: '2022 — Present',
    summary:
      'Frontend engineer on Medscape’s web ecosystem (Vue 2/3, Pinia, SSR). Shipping high-impact UI at scale.',
    highlights: [
      'Built and maintained a 100+ component Vue library used across Medscape sub-domains; cut integration time by ~25%.',
      'Implemented mobile infinite-scroll article flows and micro-frontend routes; improved read-through and ad viewability.',
      'Performance pass on key templates: ~80% faster vs legacy, materially reducing bounce on mobile.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Superfan',
    period: '2022',
    summary:
      'Contributed React/TypeScript features and API integrations for a production web app.',
    highlights: [
      'Integrated REST endpoints and hardened client state flows for reliability under load.',
      'Debugged and shipped custom components with crisp props, docs, and Storybook usage.',
      'Partnered with PM/design to deliver small, testable slices on a weekly cadence.',
    ],
  },
  {
    role: 'Network/IT Technician',
    company: 'Ramapo College of New Jersey',
    period: '2018 — 2022',
    summary:
      'Kept campus networks healthy; automated repetitive tasks; supported staff and students.',
    highlights: [
      'Authored PHP scripts against Infoblox WAPI to manage network devices.',
      'Installed and configured APs, switches, UPS, and related hardware.',
      'Maintained site code paths in JavaScript/PHP with incremental cleanups.',
    ],
  },
]

const channels = [
  {
    label: 'Email',
    href: 'mailto:nikolaivalev@gmail.com',
    icon: Mail,
    handle: 'nikolaivalev@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/NikolayValev',
    icon: Github,
    handle: '@NikolayValev',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nikolayvalev/',
    icon: Linkedin,
    handle: '/in/nikolayvalev',
  },
]

const pillars = [
  {
    title: 'Performance & reliability',
    description:
      'Ship fast by default: lean bundles, stable FPS, predictable layouts, and boring uptime.',
  },
  {
    title: 'Pragmatic UX',
    description:
      'Designs that respect constraints. Clear hierarchies, accessible states, and purposeful motion.',
  },
  {
    title: 'Data discipline',
    description:
      'Decisions tied to metrics: LCP/CLS/TBT, activation, retention, and revenue-aware telemetry.',
  },
]

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card className="relative overflow-hidden border-0 bg-slate-900 text-white shadow-subtle">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/70 to-slate-800 opacity-90" />
          <CardContent className="relative flex flex-col gap-6 p-6 pt-6 md:p-10 md:pt-10">
            <Badge className="w-fit border-white/20 bg-white/10 text-xs uppercase tracking-[0.4em]">
              Q4 availability
            </Badge>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Building fast, resilient web products in Vue &amp; Next.js
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                I turn fuzzy product intent into production interfaces. Systems, accessibility, and
                performance first—without slowing velocity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#projects">See featured work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <a href="mailto:nikolaivalev@gmail.com" className="flex items-center gap-2">
                  Book intro call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Sparkles className="h-4 w-4 text-primary" />
                Current focus
              </CardTitle>
              <CardDescription>
                Shipping dashboards, design systems, and data tools for product teams.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['Design systems', 'Trading analytics', 'Vue → Next migrations'].map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Snapshots</CardTitle>
              <CardDescription>Signals that guide how I work with teams.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Brooklyn-based, async-first, overlap with CET ↔ PST when needed.</p>
              <p>• Small squads, crisp briefs, living docs over slides.</p>
              <p>• Value measured by activation and retention, not ticket velocity.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-dashed">
            <CardContent className="p-6">
              <p className="text-sm uppercase text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-semibold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section id="projects" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Featured work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Selected projects</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild variant="ghost" className="px-0 text-sm text-primary">
                  <Link href={project.href} target="_blank" rel="noreferrer">
                    View case study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-6 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Experience
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">How I lead delivery</h2>
          </div>
          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.company} className="space-y-2 rounded-2xl border border-border/60 p-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <h3 className="text-lg font-semibold">
                    {item.role} · {item.company}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
        <Card className="flex flex-col gap-4 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Principles
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">How I think</h2>
          </div>
          <div className="space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-dashed border-border/70 p-4">
                <h3 className="text-base font-semibold">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Latest writing</CardTitle>
            <CardDescription>
              Notes on product engineering, performance, and humane tooling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BlogPosts />
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="px-0 text-sm">
              <Link href="/blog">
                Read the journal
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Let&rsquo;s build together</CardTitle>
            <CardDescription>
              I join as an embedded lead, fractional IC, or advisor depending on your stage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {channels.map(({ label, href, icon: Icon, handle }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-between rounded-2xl border border-border/70 p-4 transition hover:border-primary hover:bg-secondary/40"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="rounded-full bg-secondary px-3 py-1 text-sm font-medium"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-muted-foreground">{handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
