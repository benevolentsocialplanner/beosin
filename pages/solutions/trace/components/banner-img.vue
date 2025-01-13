<template>
  <div class="banner-img">
    <div class="img-content">
      <template
        v-for="(i, index) in traceBannerRight"
        :key="index"
      >
        <img
          v-show="showContent === index"
          alt=""
          :src="i.img"
        >
      </template>
    </div>
    <slot />
    <div class="img-bottom">
      <template
        v-for="(i, index) in traceBannerRight"
        :key="index"
      >
        <span v-if="showContent === index">{{ i.info }}</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import banner1 from '~/assets/img/solutions/trace/trace-content-img-1.png'
import banner2 from '~/assets/img/solutions/trace/trace-content-img-2.png'
import banner3 from '~/assets/img/solutions/trace/trace-content-img-3.png'
import banner4 from '~/assets/img/solutions/trace/trace-content-img-4.png'

const props = defineProps<{
  showContent: number
}>()

const traceBannerRight = [
  {
    img: banner1,
    info:
      'Beosin TRACE is a crypto crime investigation solution that can trace and visualize the fund flow in an intellgent and intuitive manner. Equiped with AI and big data analysis, it has been widely used by law enforcement, government agencies, professional investigation companies and  law firms to produce digital evidences in initiatives aimed at combating the illicit use of virtual assets.'
  },
  {
    img: banner2,
    info:
      'With just one input of wallet address, our AI engine can identify trading patterns and connections, categorize the addresses/transactions with the Similar Entities or Activities. and visualize  Money Laundering Paths'
  },
  {
    img: banner3,
    info:
      'We understand how difficult it is to identify real leads out of hundreds of transactions from one single address.  Let our AI proprietaty fund tracing model help indentify the most important leads for you to trace in a clear and intuitive way.'
  },
  {
    img: banner4,
    info:
      'Our dedicated chain-support team has built and maintained all nodes in-house to maintain stability and security of our on-chain data. We provide full-node transaction data for heterogeneous chains such as Aptos, Solana, TON, and SUI to ensure comprehensive transaction traceability.'
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
