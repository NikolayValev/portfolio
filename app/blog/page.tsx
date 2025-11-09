import { BlogPosts } from 'app/components/posts'
import type { Metadata } from 'next'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Product engineering notes on shipping calm software.',
}

export default function Page() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Writing
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Journal</h1>
        <p className="text-muted-foreground">
          Field notes on operating cadences, design systems, and resilient UI engineering.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Latest posts</CardTitle>
          <CardDescription>Long-form breakdowns, not notifications.</CardDescription>
        </CardHeader>
        <CardContent>
          <BlogPosts />
        </CardContent>
      </Card>
    </section>
  )
}
