//  eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-vue eslint
// import globals from "globals";
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
// import tseslint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";
// import eslintConfigPrettier from "eslint-config-prettier";
export default createConfigForNuxt({
  features: {
    stylistic: {
      indent: 2, // 缩进
      quotes: 'single', // 强制使用一致的反勾号、双引号或单引号
      semi: false, // 禁用行尾使用分号
      commaDangle: 'never', // 禁止结尾逗号
      braceStyle: '1tbs'
    }
  }
})
