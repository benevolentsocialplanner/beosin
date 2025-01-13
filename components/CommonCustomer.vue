<template>
  <div class="common-customer">
    <h3 class="mark-title">
      <lang>Trusted by</lang>
    </h3>
    <div
      class="scroll-cus-box"
    >
      <div
        class="customer"
      >
        <template
          v-for="(item, index) in [...images]"
          :key="index"
        >
          <div class="customer-item">
            <img
              alt=""
              :src="item"
            >
          </div>
        </template>
        <img>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  images: string[]
}>()

const boxWidth = computed(() => {
  return Math.ceil(props.images.length / 2)
})
</script>

<style lang="scss">
.common-customer {
  width: 100%;
  margin-bottom: 0px;
  margin-top: 50px;
  overflow: hidden;
  .customer {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 50px;
  }
  .customer-item {
    display: flex;
    align-items: center;
    width: 176px;
    height: 80px;
    border-radius: 20px;
    border: 1px solid #2B3034;
    justify-content: center;
    img {
      height: 40px;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 450px) {
  .common-customer {
    .customer {
      gap:16px;
      .customer-item {
        width: 150px;
        height: 72px;
      }
    }
  }
}
</style>
