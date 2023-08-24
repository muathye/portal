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
    description: 'Founder of @open-sale. On a mission to improve programming quality..',

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
        siteTitle: false,
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
            // add global icon instead of text string
            // text:'تغيير اللغة',
            items: [
                {
                    text: 'عربي (ar)',
                    link: 'https://ar.muathye.com'
                },
                {
                    text: 'English (en)',
                    link: 'https://muathye.com'
                },
            ]
        }
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
            // You can also add custom icons by passing SVG as string:
            // {
            //     icon: {
            //         svg: '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve"><style type="text/css">.st0{fill:#FCCA40;}.st1{fill:#5E84C1;}.st2{fill:#1FA25E;}.st3{fill:#DE5046;}.st4{fill:#DE5045;}.st5{fill:#DE5146;}.st6{fill:#20A25F;}.st7{fill:#5F84C0;}.st8{fill:#DE5144;}</style><g><g><path class="st0" d="M523.6,295.1c-16.2-5.6-32.2-5.9-48,1.4c-11.4,5.3-18.8,14.8-22.9,25.8c-4.3,11.6-6.3,24.1-8.7,36.3c-0.8,4.3-2.2,6.9-6.6,7.1c-3.7,0.2-7.8,1-10.9-0.4c-3.3-1.4-7.8-5-7.9-7.8c-0.7-17.6-1-35.2,0-52.8c1.3-23.2,10.1-44,23-63.2c0.8-0.4,1.7-0.7,2.2-1.3c13.2-16.6,31.7-22.8,51.6-26.3c10.9,0.9,21.8,1.8,32.6,2.8c14.5,6.4,28.9,12.9,43.4,19.3c19.8,12.8,36.9,28.5,52.2,46.3c12.7,14.9,21.7,31.4,24.9,51.3c3,18,2.7,35.5-0.7,53.2c-2.8,14.8-13.1,24.9-29.1,28.4c-17.6,3.8-35.1,7.6-52.7,11.5c-1.8,0.4-3.4,1.4-5.1,2.1c-15,3.3-29.9,6.6-44.9,9.9c-5.5,1.5-11,2.5-16.3,4.5c-18.9,6.9-35.2,17.4-43.2,36.9c-3.5,8.4-7.8,17.1-1.5,26.4c16.8,24.6,33.4,49.5,50.1,74.1c1,1.4,3,2.1,4.5,3.2c3.7,6.2,7,12.6,11.1,18.5c9.1,13.1,18.5,26,27.8,39c2.8,4.6,5.5,9.3,8.3,13.9c7.4,12.6,14.7,25.2,22,37.8c6.8,11.8,13.7,23.7,20.2,35.7c4.3,8,8.1,16.3,12.1,24.5c1,4.2,2.1,8.3,2.9,12.6c2.7,13.7,5.3,27.5,7.9,41.2c-1.1,2.8-2.3,5.6-3.4,8.3c-1.2,0.9-2.5,1.8-3.7,2.7l0,0c-2.2,0.4-4.5,0.5-6.5,1.3c-4.7,2.1-7.9,0.4-10-3.8c-4.9-9.8-9.5-19.8-14.3-29.7c-7.1-12.3-13.9-24.7-21.4-36.7c-6.1-9.8-13-19.2-19.5-28.8c-0.2-1.1-0.2-2.4-0.8-3.3c-12-16.9-24.1-33.8-36.2-50.7c-11.8-16.6-23.9-33-35.5-49.8c-15.6-22.5-31.5-44.8-45.9-68.1C413.5,530.2,411.2,509,409,488c-2.6-24.8,0.7-48.6,12.4-71c8.5-16.3,23-25.7,39.2-31.8c19.2-7.2,39.3-12.2,59-18.1c15.1-3.3,30.1-6.6,45.2-9.9c3-0.8,6-1.5,9-2.5c11.6-3.6,13.6-9.5,6.1-19.4c-4.2-5.5-8.8-10.8-13.2-16.2c-2.9-2.2-5.8-4.4-8.7-6.5C547.7,305.2,536.9,297.8,523.6,295.1z"/><path class="st1" d="M622,807c-2.6-13.7-5.2-27.5-7.9-41.2c-0.8-4.2-1.9-8.4-2.9-12.5c0-25.4-7.2-49.1-17.6-72c-11-24.1-26.3-45.5-42.3-66.4c1-26.5,2-52.9,3.2-79.4c0.2-4.4,1.6-8.8,2.5-13.1c42.4,49.2,75.7,103.4,90.2,167.4c9.2,40.4,1.5,78.2-20.4,113.2C625.8,804.6,623.7,805.6,622,807z"/><path class="st2" d="M495.4,214c-19.9,3.4-38.4,9.7-51.6,26.3c-0.5,0.6-1.5,0.9-2.2,1.3c-6.5-11.9-18.9-10.4-29.5-12.2c-10.3-1.7-20.3-1.3-27.9,8.6c-4.2,5.4-9.2,4.1-12.4-2.2c-6.1-12.1-8.4-25.1-7.4-38.6c0.2-2.6,1.3-5.4,2.6-7.8c19.3-36.3,67.1-58.6,107.5-50.6c25.2,5,34.1,19,30.4,45.4C503.4,194.4,498.7,204.1,495.4,214z"/><path class="st3" d="M506.4,666.4c12.1,16.9,24.2,33.8,36.2,50.7c0.6,0.9,0.5,2.2,0.8,3.3c-0.9,9.4-1.8,18.7-2.6,28.1c-1.1,13.9-2.1,27.8-3.2,41.8c-0.9,3.9-1.9,7.8-2.5,11.8c-0.6,4.3-0.7,8.6-1.2,12.9c-1.2,10.2-2.5,20.4-3.7,30.7c-5.8,33.8-11.4,67.7-17.5,101.5c-2,11-5.3,21.8-7.8,32.7c-1.4,5.8-5.4,6.8-10.5,6.3c-5.3-0.5-8.5-3.5-8.8-8.8c-0.3-4.1-0.2-8.3,0.2-12.4c3-33.6,6-67.1,9-100.7c0.6-6.4,1-12.8,1.4-19.2c1-20.2,1.9-40.4,2.9-60.6c1.4-22.4,2.9-44.9,4.3-67.3C504.4,700.2,505.4,683.3,506.4,666.4z"/><path class="st4" d="M557.1,522.2c-0.9,4.4-2.3,8.7-2.5,13.1c-1.2,26.5-2.2,52.9-3.2,79.4c-0.9,8.9-1.8,17.7-2.8,26.6c-9.3-13-18.7-25.9-27.8-39c-4.1-5.9-7.4-12.3-11.1-18.5c2.1-48.4,4.2-96.7,6.4-145.1c15-3.3,29.9-6.6,44.9-9.9c-1.5,28.9-2.9,57.7-4.3,86.6C556.6,517.7,556.9,520,557.1,522.2z"/><path class="st1" d="M499.1,784.4c-1,20.2-1.9,40.4-2.9,60.6c-14.3-3.9-29.1-6.7-42.8-12.1c-26.8-10.5-44.3-30-48.7-59.1c-2.9-18.8-0.1-37.5,5.9-55.6c3.5-10.6,7.6-21,11.6-31.9c6.5,2,11.9,3.7,17.9,5.5c-1,5.8-2.4,11.3-3,16.8c-3.9,36.2,10.9,55.8,42.5,69.2C485.8,780.6,492.5,782.3,499.1,784.4z"/><path class="st5" d="M571.4,236.1c-14.5-6.4-28.9-12.9-43.4-19.3c2.1-22.6,3.3-45.3,6.5-67.8c3.7-26,13.6-50.3,23.6-74.5c4.1-9.9,8.5-19.8,13.6-29.3c1.5-2.9,5.5-4.6,8.3-6.9c0.8,3.6,2.5,7.2,2.4,10.8c-0.9,18.1-2.3,36.2-3.4,54.3C576.4,147.7,573.9,191.9,571.4,236.1z"/><path class="st6" d="M616.6,537.6c-3.4-1.6-8.2-2.9-11.8-5.7c-11-8.5-18.4-19.7-22.7-32.8c-2.7-8.4-1.8-16.9,4.5-23.1c7.9-7.8,16.3-15.5,25.7-21.3c10.3-6.4,19.8-5.1,27.8,4.3s14.6,20.3,20.4,31.3c3.9,7.4,1.6,16-4.4,21.6c-9.2,8.4-19.5,15.6-29.6,23C624.3,536.4,621,536.4,616.6,537.6z"/><path class="st7" d="M530.2,845.6c1.2-10.2,2.5-20.4,3.7-30.7c0.5-4.3,0.6-8.6,1.2-12.9c0.6-4,1.7-7.8,2.5-11.8c15.5-1.4,31.1-2.9,46.6-4.3c4.7,9.9,9.4,19.8,14.3,29.7c2.1,4.1,5.2,5.9,10,3.8c2-0.9,4.3-0.9,6.5-1.3c-4.2,8.3-8.5,17-18.9,18.5C574.2,839.8,552.2,842.6,530.2,845.6z"/><path class="st8" d="M523.6,295.1c13.2,2.7,24.1,10.1,34.8,17.8c2.9,2.1,5.8,4.3,8.7,6.5c-0.6,12.7-1.3,25.3-1.9,38c-15.1,3.3-30.1,6.6-45.2,9.9C521.2,343.2,522.4,319.1,523.6,295.1z"/><path class="st7" d="M615,818.1c1.2-0.9,2.5-1.8,3.7-2.7C617.4,816.2,616.2,817.2,615,818.1z"/></g></g></svg>'
            //     },
            //     link: '...'
            // }
        ],
        footer: {
            message: '',
            copyright: 'Copyright © 2022-present <?xml version="1.0" encoding="utf-8"?><svg width="32" style="display: inline-block;filter: grayscale(1);" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve"><style type="text/css">.st0{fill:#FCCA40;}.st1{fill:#5E84C1;}.st2{fill:#1FA25E;}.st3{fill:#DE5046;}.st4{fill:#DE5045;}.st5{fill:#DE5146;}.st6{fill:#20A25F;}.st7{fill:#5F84C0;}.st8{fill:#DE5144;}</style><g><g><path class="st0" d="M523.6,295.1c-16.2-5.6-32.2-5.9-48,1.4c-11.4,5.3-18.8,14.8-22.9,25.8c-4.3,11.6-6.3,24.1-8.7,36.3c-0.8,4.3-2.2,6.9-6.6,7.1c-3.7,0.2-7.8,1-10.9-0.4c-3.3-1.4-7.8-5-7.9-7.8c-0.7-17.6-1-35.2,0-52.8c1.3-23.2,10.1-44,23-63.2c0.8-0.4,1.7-0.7,2.2-1.3c13.2-16.6,31.7-22.8,51.6-26.3c10.9,0.9,21.8,1.8,32.6,2.8c14.5,6.4,28.9,12.9,43.4,19.3c19.8,12.8,36.9,28.5,52.2,46.3c12.7,14.9,21.7,31.4,24.9,51.3c3,18,2.7,35.5-0.7,53.2c-2.8,14.8-13.1,24.9-29.1,28.4c-17.6,3.8-35.1,7.6-52.7,11.5c-1.8,0.4-3.4,1.4-5.1,2.1c-15,3.3-29.9,6.6-44.9,9.9c-5.5,1.5-11,2.5-16.3,4.5c-18.9,6.9-35.2,17.4-43.2,36.9c-3.5,8.4-7.8,17.1-1.5,26.4c16.8,24.6,33.4,49.5,50.1,74.1c1,1.4,3,2.1,4.5,3.2c3.7,6.2,7,12.6,11.1,18.5c9.1,13.1,18.5,26,27.8,39c2.8,4.6,5.5,9.3,8.3,13.9c7.4,12.6,14.7,25.2,22,37.8c6.8,11.8,13.7,23.7,20.2,35.7c4.3,8,8.1,16.3,12.1,24.5c1,4.2,2.1,8.3,2.9,12.6c2.7,13.7,5.3,27.5,7.9,41.2c-1.1,2.8-2.3,5.6-3.4,8.3c-1.2,0.9-2.5,1.8-3.7,2.7l0,0c-2.2,0.4-4.5,0.5-6.5,1.3c-4.7,2.1-7.9,0.4-10-3.8c-4.9-9.8-9.5-19.8-14.3-29.7c-7.1-12.3-13.9-24.7-21.4-36.7c-6.1-9.8-13-19.2-19.5-28.8c-0.2-1.1-0.2-2.4-0.8-3.3c-12-16.9-24.1-33.8-36.2-50.7c-11.8-16.6-23.9-33-35.5-49.8c-15.6-22.5-31.5-44.8-45.9-68.1C413.5,530.2,411.2,509,409,488c-2.6-24.8,0.7-48.6,12.4-71c8.5-16.3,23-25.7,39.2-31.8c19.2-7.2,39.3-12.2,59-18.1c15.1-3.3,30.1-6.6,45.2-9.9c3-0.8,6-1.5,9-2.5c11.6-3.6,13.6-9.5,6.1-19.4c-4.2-5.5-8.8-10.8-13.2-16.2c-2.9-2.2-5.8-4.4-8.7-6.5C547.7,305.2,536.9,297.8,523.6,295.1z"/><path class="st1" d="M622,807c-2.6-13.7-5.2-27.5-7.9-41.2c-0.8-4.2-1.9-8.4-2.9-12.5c0-25.4-7.2-49.1-17.6-72c-11-24.1-26.3-45.5-42.3-66.4c1-26.5,2-52.9,3.2-79.4c0.2-4.4,1.6-8.8,2.5-13.1c42.4,49.2,75.7,103.4,90.2,167.4c9.2,40.4,1.5,78.2-20.4,113.2C625.8,804.6,623.7,805.6,622,807z"/><path class="st2" d="M495.4,214c-19.9,3.4-38.4,9.7-51.6,26.3c-0.5,0.6-1.5,0.9-2.2,1.3c-6.5-11.9-18.9-10.4-29.5-12.2c-10.3-1.7-20.3-1.3-27.9,8.6c-4.2,5.4-9.2,4.1-12.4-2.2c-6.1-12.1-8.4-25.1-7.4-38.6c0.2-2.6,1.3-5.4,2.6-7.8c19.3-36.3,67.1-58.6,107.5-50.6c25.2,5,34.1,19,30.4,45.4C503.4,194.4,498.7,204.1,495.4,214z"/><path class="st3" d="M506.4,666.4c12.1,16.9,24.2,33.8,36.2,50.7c0.6,0.9,0.5,2.2,0.8,3.3c-0.9,9.4-1.8,18.7-2.6,28.1c-1.1,13.9-2.1,27.8-3.2,41.8c-0.9,3.9-1.9,7.8-2.5,11.8c-0.6,4.3-0.7,8.6-1.2,12.9c-1.2,10.2-2.5,20.4-3.7,30.7c-5.8,33.8-11.4,67.7-17.5,101.5c-2,11-5.3,21.8-7.8,32.7c-1.4,5.8-5.4,6.8-10.5,6.3c-5.3-0.5-8.5-3.5-8.8-8.8c-0.3-4.1-0.2-8.3,0.2-12.4c3-33.6,6-67.1,9-100.7c0.6-6.4,1-12.8,1.4-19.2c1-20.2,1.9-40.4,2.9-60.6c1.4-22.4,2.9-44.9,4.3-67.3C504.4,700.2,505.4,683.3,506.4,666.4z"/><path class="st4" d="M557.1,522.2c-0.9,4.4-2.3,8.7-2.5,13.1c-1.2,26.5-2.2,52.9-3.2,79.4c-0.9,8.9-1.8,17.7-2.8,26.6c-9.3-13-18.7-25.9-27.8-39c-4.1-5.9-7.4-12.3-11.1-18.5c2.1-48.4,4.2-96.7,6.4-145.1c15-3.3,29.9-6.6,44.9-9.9c-1.5,28.9-2.9,57.7-4.3,86.6C556.6,517.7,556.9,520,557.1,522.2z"/><path class="st1" d="M499.1,784.4c-1,20.2-1.9,40.4-2.9,60.6c-14.3-3.9-29.1-6.7-42.8-12.1c-26.8-10.5-44.3-30-48.7-59.1c-2.9-18.8-0.1-37.5,5.9-55.6c3.5-10.6,7.6-21,11.6-31.9c6.5,2,11.9,3.7,17.9,5.5c-1,5.8-2.4,11.3-3,16.8c-3.9,36.2,10.9,55.8,42.5,69.2C485.8,780.6,492.5,782.3,499.1,784.4z"/><path class="st5" d="M571.4,236.1c-14.5-6.4-28.9-12.9-43.4-19.3c2.1-22.6,3.3-45.3,6.5-67.8c3.7-26,13.6-50.3,23.6-74.5c4.1-9.9,8.5-19.8,13.6-29.3c1.5-2.9,5.5-4.6,8.3-6.9c0.8,3.6,2.5,7.2,2.4,10.8c-0.9,18.1-2.3,36.2-3.4,54.3C576.4,147.7,573.9,191.9,571.4,236.1z"/><path class="st6" d="M616.6,537.6c-3.4-1.6-8.2-2.9-11.8-5.7c-11-8.5-18.4-19.7-22.7-32.8c-2.7-8.4-1.8-16.9,4.5-23.1c7.9-7.8,16.3-15.5,25.7-21.3c10.3-6.4,19.8-5.1,27.8,4.3s14.6,20.3,20.4,31.3c3.9,7.4,1.6,16-4.4,21.6c-9.2,8.4-19.5,15.6-29.6,23C624.3,536.4,621,536.4,616.6,537.6z"/><path class="st7" d="M530.2,845.6c1.2-10.2,2.5-20.4,3.7-30.7c0.5-4.3,0.6-8.6,1.2-12.9c0.6-4,1.7-7.8,2.5-11.8c15.5-1.4,31.1-2.9,46.6-4.3c4.7,9.9,9.4,19.8,14.3,29.7c2.1,4.1,5.2,5.9,10,3.8c2-0.9,4.3-0.9,6.5-1.3c-4.2,8.3-8.5,17-18.9,18.5C574.2,839.8,552.2,842.6,530.2,845.6z"/><path class="st8" d="M523.6,295.1c13.2,2.7,24.1,10.1,34.8,17.8c2.9,2.1,5.8,4.3,8.7,6.5c-0.6,12.7-1.3,25.3-1.9,38c-15.1,3.3-30.1,6.6-45.2,9.9C521.2,343.2,522.4,319.1,523.6,295.1z"/><path class="st7" d="M615,818.1c1.2-0.9,2.5-1.8,3.7-2.7C617.4,816.2,616.2,817.2,615,818.1z"/></g></g></svg> Muath Alsowadi'
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
            description: 'Passionate and highly skilled senior full-stack web developer proficient in HTML, CSS, JavaScript, Vue.js, PHP, SQL, Laravel, and API development, with a strong commitment to leveraging technology to create innovative solutions and positively impact the world.',
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
        const posts = await createContentLoader('*.md', {
            excerpt: true,
            render: true
        }).load()

        posts.sort(
            (a, b) =>
                +new Date(b.frontmatter.date as string) -
                +new Date(a.frontmatter.date as string)
        )

        for (const { url, excerpt, frontmatter, html } of posts) {
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