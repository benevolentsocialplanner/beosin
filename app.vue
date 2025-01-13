<template>
  <Html class="dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import updateLocale from 'dayjs/plugin/updateLocale'
import 'dayjs/locale/zh-hk'
import 'dayjs/locale/ko'

dayjs.extend(LocalizedFormat)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

const { locale } = useI18n()
dayjs.locale(locale.value === 'zh' ? 'zh-hk' : locale.value)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}-Beosin` : 'Beosin'
  }
})
</script>

<style>
@import '~/assets/style/index.scss';
</style>
