import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'
import dotenv from 'dotenv';
dotenv.config();

// TODO: use .env file for APP_URL
const baseUrl = process.env.APP_URL ?? ''

export async function GenerateRSS(config: SiteConfig) {
  const feed = new Feed({
    title: 'Muath Alsowadi - Web designer and developer',
    description: 'Founder of @open-sale. Co-founder of @YemenOpenSource. Passionate and highly skilled senior full-stack web developer proficient in HTML, CSS, JavaScript, Vue.js, PHP, SQL, Laravel, and API development, with a strong commitment to leveraging technology to create innovative solutions and positively impact the world.',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: 'https://muathye.com/images/muathye.png',
    favicon: `${baseUrl}/favicon.ico`,
    copyright:
        'Copyright (c) 2022-present, Muath Alsowadi'
  })

  const articles = await createContentLoader('articles/*.md', {
    excerpt: true,
    render: true
  }).load()

  const snippets = await createContentLoader('snippets/*.md', {
    excerpt: true,
    render: true
  }).load()

  articles.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  snippets.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of [...articles, ...snippets]) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined
        }
      ],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}