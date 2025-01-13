<template>
  <ElTooltip
    v-if="tip"
    :content="`${tip}`"
    placement="top"
  >
    <slot />
  </ElTooltip>
  <slot v-else />
</template>

<script lang="ts" setup>
const props = defineProps<{
  tip?: string | number
}>()
</script>
