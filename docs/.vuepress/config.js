// .vuepress/config.js
module.exports = {
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    },
    ,
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ],
  port: 3030,
  base: '/bazovichki_db_labs/',
  theme: 'cool',
  // dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
    ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}],
  ],
  themeConfig: {
    // logo: './myAvatar.png',
    sidebar: [
    {
      title: 'Вступ',
      path:"/intro/"
    },
    {
      title: 'Розроблення загальних вимог до системи',
        path:"/requirements/",
        children:[
          '/requirements/state-of-the-art',
          '/requirements/stakeholders-needs',
        ]
    },

    {
      title: 'Розроблення вимог до функціональности системи',
      path:"/use cases/"
    },

    {
      title: 'Проектування інформаційного забезпечення',
      path:"/design/"
    },

    {
      title: 'Реалізація інформаційного та програмного забезпечення',
      path:"/software/"
    },

    {
      title: 'Тестування працездатності системи',
      path:"/test/"
    },
    {
      title: 'Висновки',
      path:"/conclusion/"
    }

  ],
    sidebarDepth: 2,
    displayAllHeaders: true, // Default: false


    nav: [
      { text: 'Початок', link: '/' },
    ],

    lastUpdated: 'Останнє оновлення', // string | boolean
      // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://github.com/Crosshell/bazovichki_db_labs',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Github',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'boldak/dis-edu',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    // editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Ви можете покращити цю сторінку'

  },
  title: 'Система аналізу медіа-контенту',
  description: 'Лабораторні роботи з дисципліни "Організація баз даних"',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img'
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  }
}