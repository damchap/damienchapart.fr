// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
    modules: [
        "@nuxt/image-edge",
        "@nuxtjs/tailwindcss",
        "~/modules/sitemap",
        "@nuxtjs/robots",
        "nuxt-icon",
        '@nuxtjs/color-mode',
        '@nuxt/content'
    ],
    content: {
      // https://content.nuxtjs.org/api/configuration
    },
    colorMode: {
      classSuffix: ''
    },
    bodyAttrs: {
      class: ''
    },
      robots: {
        UserAgent: "*",
        BlankLine: true,
      },
      sitemap: {
        hostname: `https://dev.damienchapart.fr/sitemap.xml`,
      },
      
      webVitals: {
        // provider: '', // auto detectd
        debug: false,
        disabled: false,
      },
      image: {
        // Options
      },

      app: {
        head: {
          htmlAttrs: {
            lang: "fr",
          },
          charset: "utf-16",
          viewport: "width=device-width, initial-scale=1",
          title: "Damien chapart",
          meta: [
            // <meta name="description" content="My amazing site">
            {
              name: "description",
              content:
                "bienvenue sur mon portfolio, je suis Chapart Damien developpeur et apprentie.",
            },
            {
              name: "keywords",
              content: "webmarketing, référencement, site web, brest, agence web",
            },
            { name: "author", content: "Agence webmarketing" },
            { name: "robots", content: "index, follow" },
            // <meta name="twitter:card" content="summary">
            { name: "twitter:card", content: "summary" },
            { name: "twitter:site", content: "@agence_web" },
            { name: "twitter:title", content: "portfolio Damien Chapart" },
            {
              name: "twitter:description",
              content:
                "bienvenue sur mon portfolio, je suis Chapart Damien developpeur et apprentie.",
            },
            {
              name: "twitter:image",
              content:
                "https://agence-webmarketing.fr/images/mokup-Cuissine Teisseire.png",
            },
            // <meta property="og:title" content="My amazing site">
            { property: "og:title", content: "portfolio Damien Chapart" },
            {
              property: "og:description",
              content:
              "bienvenue sur mon portfolio, je suis Chapart Damien developpeur et apprentie.",
            },
            {
              property: "og:image",
              content:
                "https://agence-webmarketing.fr/images/mokup-Cuissine Teisseire.png",
            },
            { property: "og:url", content: "https://damienchapart.fr" },
            { property: "og:site_name", content: "Agence webmarketing" },
            { property: "og:type", content: "website" },
            { property: "og:locale", content: "fr_FR" },
            // meta pwa
            { name: "apple-mobile-web-app-capable", content: "yes" },
            { name: "apple-mobile-web-app-status-bar-style", content: "white" },
            { name: "apple-mobile-web-app-title", content: "Agence webmarketing" },
            { name: "application-name", content: "Agence webmarketing" },
            { name: "msapplication-TileColor", content: "#ffffff" },
            { name: "msapplication-TileImage", content: "/favicon.ico" },
            { name: "msapplication-config", content: "/favicon.ico" },
            { name: "theme-color", content: "#ffffff" },
          ],
        },
      },
    router: {
        linkActiveClass: 'font-extrabold' // tailwind class with custom color
    },
    build: {
        transpile: ['gsap'],
    },
    css: [
        '@/assets/css/main.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    
    
})
