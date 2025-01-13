<!-- eslint-disable vue/multi-word-component-names -->
<template>
  {{ text }}
</template>

<script lang="ts" setup>
const lg = useLang();
const props = defineProps<{ params?: { [key: string]: string } }>();
const slots: any = useSlots();
const originText = slots.default()[0].children;
const text = computed(() => lg(originText, props.params));
</script>
