import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { defineConfig, createContentLoader, type SiteConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// TODO: use .env file for APP_URL
const hostname: string = 'https://muathye.ye'

export default withPwa(defineConfig({
    vite: {
        logLevel: 'info',
        define: {
            __DATE__: `'${new Date().toISOString()}'`,
        },
    },

    lang: 'en-US',
    title: 'Muath Alsowadi',
    description: 'Founder of @open-sale. Co-founder of @YemenOpenSource. Passionate and highly skilled senior full-stack web developer proficient in HTML, CSS, JavaScript, Vue.js, PHP, SQL, Laravel, and API development, with a strong commitment to leveraging technology to create innovative solutions and positively impact the world.',

    lastUpdated: true,
    cleanUrls: true,

    // base: '/vita-journal/',
    head: [
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
        ['link', { rel: 'mask-icon', href: '/masked-icon.svg' }],
        ['meta', { name: 'theme-color', content: '#ffc517' }],
        ['meta', { 'property': 'og:type', 'content': 'article' }],
        ['script', { 'async': '', 'src': 'https://www.googletagmanager.com/gtag/js?id=G-07LPKYQVLY' }],
        [
            'script',
            {},
            'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\', \'G-07LPKYQVLY\');'
        ]
    ],
    // locales: {
    //     root: {
    //         label: 'English',
    //         lang: 'en'
    //     },
    //     ar: {
    //         label: 'عربي',
    //         lang: 'ar', // optional, will be added  as `lang` attribute on `html` tag
    //         link: '/ar', // default /fr/ -- shows on navbar translations menu, can be external
    //         dir:'rtl'
    //         // other locale specific properties...
    //     }
    // },
    themeConfig: {
        // sidebar: [
        //     {
        //     //   text: '',
        //     //   items: []
        //       items: [
        //         { text: 'Introduction', link: '/introduction' },
        //         { text: 'Getting Started', link: '/getting-started' },
        //       ]
        //     }
        //   ],
        logo: '/images/muathye.svg',
        siteTitle: 'Muath Alsowadi',
        nav: [{
            text: 'Projects',
            link: '/projects',
            activeMatch: '/projects|/projects/'
        },
        {
            text: 'Articles',
            link: '/articles',
            activeMatch: '/articles|/articles/'
        },
        {
            text: 'Snippets',
            link: '/snippets',
            activeMatch: '/snippets|/snippets/'
        },
        {
            text: 'عربي (ar)',
            link: 'https://ar.muathye.com',
            target: '_blank'
        },
        ],
        // editLink: {
        //     pattern: 'https://github.com/muathye/portal/tree/father/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/muath-ye' },
            { icon: 'twitter', link: 'https://twitter.com/muathye' },
            { icon: 'instagram', link: 'https://instagram.com/muathye' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/muathye' },
            { icon: {svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" /></svg>'}, link: 'https://www.muathye.com/feed.rss' },
        ],
        footer: {
            message: '',
            copyright: 'Copyright © 2022-present | Muath Alsowadi'
        },
        // search: {
        //     // provider: 'algolia',
        //     // options: {
        //     //   appId: 'Q5BTX2HHV6',
        //     //   apiKey: 'e906337cfe577ab4a9570ea9637508ef',
        //     //   indexName: 'muathye'
        //     // }
        //     provider: 'local'
        // },
    },
    pwa: {
        mode: 'development',
        base: '/',
        scope: '/',
        registerType: 'autoUpdate',
        // injectRegister: 'inline',
        includeAssets: ['favicon.svg'],
        manifest: {
            name: 'Muath Alsowadi',
            short_name: 'Muath Alsowadi',
            theme_color: '#ffffff',
            icons: [
                {
                    src: 'pwa-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
            ],
        },
        workbox: {
            globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
        },
        devOptions: {
            enabled: true,
            navigateFallback: '/',
        },
    },

    // RSS
    buildEnd: async (config: SiteConfig) => {
        const feed = new Feed({
            title: 'Muath Alsowadi - Web designer and developer',
            description: 'Founder of @open-sale. Co-founder of @YemenOpenSource. Passionate and highly skilled senior full-stack web developer proficient in HTML, CSS, JavaScript, Vue.js, PHP, SQL, Laravel, and API development, with a strong commitment to leveraging technology to create innovative solutions and positively impact the world.',
            id: hostname,
            link: hostname,
            language: 'en',
            image: 'https://muathye.com/images/muathye.png',
            favicon: `${hostname}/favicon.ico`,
            copyright:
                'Copyright (c) 2022-present, Muath Alsowadi'
        })

        // You might need to adjust this if your Markdown files 
        // are located in a subfolder
        const articles = await createContentLoader('articles/*.md', {
            excerpt: true,
            render: true
        }).load()

        articles.sort(
            (a, b) =>
                +new Date(b.frontmatter.date as string) -
                +new Date(a.frontmatter.date as string)
        )

        for (const { url, excerpt, frontmatter, html } of articles) {
            feed.addItem({
                title: frontmatter.title,
                id: `${hostname}${url}`,
                link: `${hostname}${url}`,
                description: excerpt,
                content: html,
                author: [
                    {
                        name: 'Muath Alsowadi',
                        email: 'muath.ye@gmail.com',
                        link: 'https://muathye.com'
                    }
                ],
                date: frontmatter.date
            })
        }

        const snippets = await createContentLoader('snippets/*.md', {
            excerpt: true,
            render: true
        }).load()

        snippets.sort(
            (a, b) =>
                +new Date(b.frontmatter.date as string) -
                +new Date(a.frontmatter.date as string)
        )

        for (const { url, excerpt, frontmatter, html } of snippets) {
            feed.addItem({
                title: frontmatter.title,
                id: `${hostname}${url}`,
                link: `${hostname}${url}`,
                description: excerpt,
                content: html,
                author: [
                    {
                        name: 'Muath Alsowadi',
                        email: 'muath.ye@gmail.com',
                        link: 'https://muathye.com'
                    }
                ],
                date: frontmatter.date
            })
        }

        writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
    },
    // ./RSS
    }))