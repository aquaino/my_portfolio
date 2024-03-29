export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  colorMode: {
    classSuffix: "",
  },

  // Nuxt image
  image: {
    domains: ["scontent-mxp2-1.cdninstagram.com"],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Alan Quaino | %s",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
    "~/plugins/directives.js",
    "~/plugins/functions.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    ["@nuxtjs/moment", { defaultLocale: "it", locales: ["it"] }],
    "@nuxt/image",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/i18n",
      {
        strategy: "no_prefix",
        lazy: true,
        langDir: "lang/",
        locales: [
          {
            code: "it",
            name: "Italiano",
            file: "it.js",
          },
          {
            code: "en",
            name: "English",
            file: "en.js",
          },
        ],
        defaultLocale: "it",
        vueI18n: {
          fallbackLocale: "it",
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
