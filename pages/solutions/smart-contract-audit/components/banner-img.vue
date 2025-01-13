<template>
  <div class="content-img">
    <template
      v-for="(i, index) in smartContractBannerRight"
      :key="index"
    >
      <img
        v-show="showContent === index"
        alt=""
        :src="i.img"
      >
    </template>
    <slot />
    <div class="img-bottom">
      <template
        v-for="(i, index) in smartContractBannerRight"
        :key="index"
      >
        <span v-if="showContent === index">{{ i.info }}</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import banner1 from '~/assets/img/solutions/contract-audit/配图08.png'
import banner2 from '~/assets/img/solutions/contract-audit/配图10.png'
import banner3 from '~/assets/img/solutions/contract-audit/配图09.png'
import banner4 from '~/assets/img/solutions/contract-audit/配图11.png'

const props = defineProps<{
  showContent: number
}>()

const smartContractBannerRight = [
  {
    img: banner1,
    info:
      'Our security audits are for smart contracts and blockchain protocols'
  },
  {
    img: banner2,
    info:
      'The audits are conducted using formal verification, fuzzing, and manual reviews'
  },
  {
    img: banner3,
    info: 'The reports contain fix recommendations for every issue identified by experts'
  },
  {
    img: banner4,
    info:
      'The auditing fee is cost-effective with add-on services: financing, marketing, listing, etc. for our audit customers.'
  }
]
</script>

<style scoped lang="scss">
.banner-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  .img-content {
  }
}
</style>
