<template>
  <div class="attr-real-name v-dialog">
    <div class="v-dialog-body">
      <el-icon
        class="right el-icon-close"
        @click="emit('close')"
      >
        <ElIconClose />
      </el-icon>
      <div class="header v-dialog-header">
        <slot name="header" />
      </div>
      <div class="content v-dialog-content">
        <slot name="body" />
      </div>
      <div class="v-dialog-footer">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>
.v-dialog {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 4000;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  .v-dialog-body {
    width: 584px;
    max-height: 70vh;
    border-radius: 20px;
    border: 1px solid #2B3034;
    background: radial-gradient(ellipse 150% 100% at 50% 0%, var(--primary)-50%, #000000 30%);
    flex: 0 0 auto;
    display: flex;
    margin-top: 15vh;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    position: relative;
    .el-icon-close {
      cursor: pointer;
      position: absolute;
      right: 16px;
      font-size: 18px;
      top: 16px;
      color: var(--primary);
    }
  }
  .v-dialog-header {
    min-height: 50px;
    flex: 0 0 auto;
    padding: 32px 32px 16px;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    background: linear-gradient(300deg, #FFFFFF 75%, var(--primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .v-dialog-content {
    padding: 0 32px 24px;
    overflow: auto;
    height: auto;
    flex: 1;
  }
  .v-dialog-footer {
    padding: 0 32px 32px;
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
