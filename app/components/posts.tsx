import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="grid gap-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group rounded-2xl border border-border/70 p-4 transition hover:border-primary hover:bg-secondary/50"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-muted-foreground tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-lg font-semibold tracking-tight group-hover:text-primary">
                {post.metadata.title}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {post.metadata.summary ?? 'Read the full story'}
            </p>
          </Link>
        ))}
    </div>
  )
}
