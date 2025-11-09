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
  { label: 'Years shipping', value: '8+' },
  { label: 'Products launched', value: '24' },
  { label: 'Teams partnered', value: '12' },
]

const projects = [
  {
    title: 'SignalFlow',
    description:
      'Realtime incident room that keeps infrastructure, product, and support teams aligned with a shared timeline.',
    stack: ['Next.js', 'Edge Functions', 'tRPC'],
    href: 'https://github.com/ikolay',
  },
  {
    title: 'Atlas Playbooks',
    description:
      'Opinionated automation layer for customer success teams, stitching together HubSpot, Linear, and custom APIs.',
    stack: ['Remix', 'Prisma', 'Postgres'],
    href: 'https://github.com/ikolay',
  },
  {
    title: 'Studio Brief',
    description:
      'A brand system builder that exports Figma-ready tokens straight from shadcn/ui primitives.',
    stack: ['Next.js', 'Shadcn/UI', 'Tailwind'],
    href: 'https://github.com/ikolay',
  },
]

const experience = [
  {
    role: 'Lead Product Engineer',
    company: 'Northwind Studio',
    period: '2022 — Present',
    summary:
      'Partnered with founders to translate napkin sketches into validated SaaS products with accessible design systems.',
    highlights: [
      'Scaled a shadcn/ui component library across 4 venture-backed products.',
      'Cut design-to-dev handoff time by 38% with composable Storybook docs.',
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Contoso Cloud',
    period: '2019 — 2022',
    summary:
      'Led the experience pillar for a multi-tenant analytics suite serving 30k DAUs.',
    highlights: [
      'Introduced feature flags + progressive rollouts with zero downtime.',
      'Brought CLS to <0.1 by auditing the design system + shipping skeleton states.',
    ],
  },
]

const channels = [
  {
    label: 'Email',
    href: 'mailto:hello@ikolay.dev',
    icon: Mail,
    handle: 'hello@ikolay.dev',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ikolay',
    icon: Github,
    handle: '@ikolay',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ikolay',
    icon: Linkedin,
    handle: '/in/ikolay',
  },
]

const pillars = [
  {
    title: 'Systems thinking',
    description:
      'Map complex flows, align teams on outcomes, then carve shippable slices that ladder up to the vision.',
  },
  {
    title: 'Design fluency',
    description:
      'Prototype directly with shadcn/ui to keep pixels, states, and semantics in sync with product intent.',
  },
  {
    title: 'Operational calm',
    description:
      'Establish rituals, release trains, and quality bars so the team can ship fast without breaking trust.',
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
              Q2 availability
            </Badge>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Crafting calm, resilient web products with shadcn/ui
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                I help product teams go from shared intent to production-grade experiences. Together we ship
                accessible, system-driven interfaces without sacrificing velocity.
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
                <a href="mailto:hello@ikolay.dev" className="flex items-center gap-2">
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
                Partnering with early-stage teams to ship multi-tenant dashboards & design systems.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['Design systems', 'DX tooling', 'Realtime apps'].map((item) => (
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
              <p>• Async-first collaborator with overlap in CET ↔ PST.</p>
              <p>• Fan of small squads, crisp briefs, and living docs.</p>
              <p>• Measure value through activation, not just velocity.</p>
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
              Notes on product engineering, systems, and humane tooling.
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
              I join as an embedded lead, fractional IC, or advisor depending on the stage you&rsquo;re at.
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
