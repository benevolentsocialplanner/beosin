<template>
  <div class="banner-img">
    <div class="img-content">
      <template
        v-for="(i, index) in kytBannerRight"
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
        v-for="(i, index) in kytBannerRight"
        :key="index"
      >
        <span v-if="showContent === index">{{ i.info }}</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import banner1 from '~/assets/img/solutions/kyt/kyt-content-img-1.png'
import banner2 from '~/assets/img/solutions/kyt/kyt-content-img-2.png'
import banner3 from '~/assets/img/solutions/kyt/kyt-content-img-3.png'
import banner4 from '~/assets/img/solutions/kyt/kyt-content-img-4.png'

const props = defineProps<{
  showContent: number
}>()

const kytBannerRight = [
  {
    img: banner1,
    info:
      'Beosin KYT is an AML/CFT analysis platform designed to provide 24/7 real-time transaction monitoring to ensure robust compliance for your crytpo business. With its millisecond-level risk alert trigger system, Beosin KYT proactively identifies and mitigates potential threats. The platform’s comprehensive transaction risk assessment capabilities include in-depth counterparty analysis, address risk evaluation, and detailed insights into the percentage, amount, and hops associated with potential risk entities, such as money laundering, sanctioned parties, hackers, and scammers.'
  },
  {
    img: banner2,
    info:
      'We have a dedicated market intelligence team to collect and monitor wallet addresses in the Southeast Asia region. Database is updated in real time and synchorized with all major security events in the region.'
  },
  {
    img: banner3,
    info:
      'Our chain-support team updates address label library every day. The team can also update the library to support public / private chains on demand. On average, it will only take 3 days to support new EVM chains. '
  },
  {
    img: banner4,
    info:
      'Thanks to our background in smart contract auditing  services, we are able to analyze more than 120 swaps and cross-chain bridges to produce 100% accuracy in mapping cross-chain fund flows.'
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
