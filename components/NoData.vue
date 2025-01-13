<template>
  <div class="no-data-comp">
    <img src="~/assets/img/common/no-data.png">
    <div class="no-data-text">
      {{ text || 'No result found.' }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<style lang="scss">
.no-data-comp {
width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100px;
    height: auto;
  }
  .no-data-text {
    padding-top: 12px;
    font-weight: 400;
    font-size: 16px;
    color: #687083;
    line-height: 28px;
  }
}
</style>
