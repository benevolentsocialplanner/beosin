<template>
  <div class="body">
    <AppHeader />
    <!-- 增加滚动条层级，放到最外层会出现有多个滚动条样式问题 -->
    <div id="body_scroll_content">
      <slot />
      <AppFooter />
    </div>
    <ScheduleDemo
      v-if="showDemoForm"
      :type="defaultType"
      @close="demoFormClose"
    />
  </div>
</template>

<script setup lang="ts">
import { showDemoForm, demoFormClose, defaultType } from '~/store/demo-control'

const route = useRoute()
watch(() => route.path, () => {
  const el = document.getElementById('body_scroll_content')
  console.log(el)
  if (!el) return
  el.scrollTop = 0
})
</script>

<style scoped lang="scss">
.body {
  min-height: 100vh;
  #body_scroll_content {
    overflow: auto;
    height: calc(100vh);
    & > * {
      padding-top: 72px;
    }
  }
}
</style>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  .body {
    width: 100vw;
    &.home {
      background: unset;
    }
  }

  .container {
    min-width: auto;
    width: 100%;
    padding: 0;
  }
}
</style>
