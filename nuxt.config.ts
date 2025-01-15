// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    '@element-plus/nuxt',
    'nuxt-svgo',
    '@nuxt/eslint'
    // '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  site: {
    url: 'https://beosin.com',
    name: 'Beosin',
    description: ''
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL || 'https://beosin.com'
    }
  },
  routeRules: {
    '/api/**': {
      proxy: 'https://beosin.com/api/**'
    }
  },
  devServer: {
    host: '/',
    port: 3000
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'firebase',
    output: {
      publicDir: './deploy/client',
      dir: './deploy'
    },
    devProxy: {
      '^/api': {
        target: 'https://beosin.com',
        changeOrigin: true
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/style/mixin.scss" as *;
          `
        }
      }
    }
  },
  elementPlus: {
    themes: ['dark'],
    components: []
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2, // 缩进
        quotes: 'single', // 强制使用一致的反勾号、双引号或单引号
        semi: false, // 禁用行尾使用分号
        commaDangle: 'never' // 禁止结尾逗号
      }
    }
  },
  googleFonts: {
    families: {
      'Bai Jamjuree': [400, 500, 600]
    }
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'zh',
        name: '中文'
      },
      {
        code: 'ko',
        name: '한국어'
      }
    ],
    defaultLocale: 'en',
    // detectBrowserLanguage: {
    //   useCookie: false,
    //   fallbackLocale: 'en',
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root' // recommended
    // },
    // 暂时不做多语言切换
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
  // colorMode: {
  //   fallback: 'dark', // fallback value if not system preference found
  //   classSuffix: '',
  // },
  svgo: {
    componentPrefix: 'i'
  }
})
