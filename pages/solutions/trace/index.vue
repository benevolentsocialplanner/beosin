<template>
  <div class="solutions-trace">
    <div class="content-body">
      <div class="trace-content">
        <div class="content-cards">
          <template
            v-for="(i, index) in contentData"
            :key="index"
          >
            <div
              class="content-card"
              :class="{ active: showContent === index, main: index === 0 }"
              @mouseenter="showContent = index"
            >
              <img
                alt=""
                :src="i.img"
              >
              <div class="card-info">
                <h3 v-if="i.title">
                  <lang>{{ i.title }}</lang>
                </h3>
                <lang>{{ i.text }}</lang>
                <span
                  v-if="i.primary"
                  style="color: #2B95FF;"
                >
                      &nbsp;
                  <lang>{{ i.primary }}</lang>
                </span>
              </div>
            </div>
          </template>
        </div>
        <div class="content-img">
          <BannerImg :show-content="showContent" />
        </div>
      </div>
      <div class="trace-content-column">
        <div class="content-img">
          <BannerImg :show-content="showContent">
            <div class="content-cards">
              <div
                class="change-icon"
                @click="changeShowContent('-')"
              >
                <ElIconArrowLeft />
              </div>
              <div
                class="content-card active"
              >
                <img
                  alt=""
                  :src="activeData.img"
                >
                <div class="card-info">
                  <h3 v-if="activeData.title">
                    {{ activeData.title }}
                  </h3>
                  {{ activeData.text }}
                  <span
                    v-if="activeData.primary"
                    style="color: #2B95FF;"
                  >
                          &nbsp;
                    {{ activeData.primary }}
                  </span>
                </div>
              </div>
              <div
                class="change-icon"
                @click="changeShowContent('+')"
              >
                <ElIconArrowRight />
              </div>
            </div>
          </BannerImg>
        </div>
      </div>
    </div>
    <div class="trace-info">
      <div class="info-content">
        <div>
          <h4>
            <lang>
              Unlimited hops tracing, through 120+ cross-chain bridges and even Tornando Cash
            </lang>
          </h4>
          <p>
            <lang>
              Thanks to our background in smart contract auditing  services, we are able to analyze more than 120 swaps and cross-chai bridges to trace transactions across multiple chains, ensuring no connection is missed. We use AI big data to develop proprietary algorithm to enhance compliance monitoring capabilities and identify potential risks from mixers.
            </lang>
          </p>
        </div>
        <div class="info-img">
          <img
            alt=""
            src="~/assets/img/solutions/trace/info-img-1.png"
          >
        </div>
      </div>
      <div class="info-content contrary">
        <div>
          <h4>
            <lang>Continuously real-time monitoring of suspicious wallets</lang>
          </h4>
          <p>
            <lang>
              7*24 Monitoring transactions and balances of suspicious or critical addresses to alert users Instantly in multiple channels when funds are moving abnormally.
            </lang>
          </p>
        </div>
        <div class="info-img">
          <img
            alt=""
            src="~/assets/img/solutions/trace/info-img-2.png"
          >
        </div>
      </div>
      <div class="info-content">
        <div>
          <h4>
            <lang>
              One-Click forensics report for easy reporting
            </lang>
          </h4>
          <p>
            <lang>
              A forensics report is a crucial document that summarizes the findings and analysis of a digital forensic investigation. Using our built-in template, users can generate comprehensive reports quickly for law enforcement or legal purposes.
            </lang>
          </p>
        </div>
        <div class="info-img">
          <img
            alt=""
            src="~/assets/img/solutions/trace/info-img-3.png"
          >
        </div>
      </div>
    </div>
    <!-- <div class="trace-customer">
      <h3 class="mark-title">
        <lang>Trusted by</lang>
      </h3>
      <div class="customer-text">
        <span style="color: var(--primary);">
          1000+
        </span>
        <lang>leading Web3 enterprises</lang>
      </div>
      <img
        alt=""
        src="~/assets/img/solutions/kyt/kyt-customer.png"
      >
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import BannerImg from './components/banner-img.vue'
import imgStar from '~/assets/img/solutions/kyt/kyt-content-star.png'
import imgVscode from '~/assets/img/solutions/kyt/kyt-content-vscode.png'
import imgCopy from '~/assets/img/solutions/kyt/kyt-content-copy.png'
import mainLogo from '~/assets/img/solutions/trace/trace-logo.png'

const showContent = ref(0)
const contentData = [
  { text: 'Beosin TRACE is your AI companion for crypto tracing.', title: 'TRACE', primary: '', img: mainLogo },
  { text: 'One-Click AI analysis to generate holistic map of all relevant transactional parties', primary: '', img: imgVscode },
  { text: 'One-Click to filter out noises and focus on the most important fund flows', primary: '', img: imgCopy },
  { text: 'One-Click to trace through heterogeneous chains, such as TON, SOLANA, APTOS & SUI', primary: '', img: imgStar }
]

const changeShowContent = (type: '+' | '-') => {
  if (type === '+') {
    showContent.value = showContent.value >= contentData.length - 1 ? 0 : showContent.value + 1
  } else {
    showContent.value = showContent.value <= 0 ? contentData.length - 1 : showContent.value - 1
  }
}

const activeData = computed(() => {
  return contentData[showContent.value]
})
// const platform = import.meta.glob('~/assets/img/solutions/platform/*.png', {
//   as: 'url'
// })
// const images = ref<string[]>([])
// for (const key in platform) {
//   platform[key]().then((res) => {
//     images.value.push(res)
//   })
// }
</script>

<style lang="scss">
.solutions-trace {
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  .content-body {
    width: 100%;
    background: url("@/assets/img/solutions/trace/trace-bg.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position:  center bottom;
    box-sizing: border-box;
    height: 728px;
    padding: 98px 24px 0;
  }
  .trace-content {
    width: 100%;
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .content-cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .content-card {
      width: 100%;
      min-height: 100px;
      box-shadow: 0 0 0 1px #2B3034 inset;
      box-sizing: border-box;
      display: flex;
      border-radius: 12px;
      padding: 24px;
      gap: 16px;
      cursor: default;
      transition: all 0.3s;
      background: radial-gradient(ellipse 150% 170% at 50% 100%, #00000000 -50%, #000000 30%);
      img {
        width: 50px;
        height: 50px;
        flex: 0 0 auto;
      }
      .card-info {
        flex: 1;
        font-weight: 500;
        font-size: 20px;
        color: #fff;
        line-height: 24px;
        width: 490px;
        text-transform: none;
        text-transform: none;
        background: linear-gradient(253.8265207752deg, #FFFFFF 75%, #2B95FF 105%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        h3 {
          font-weight: bold;
          font-size: 32px;
          line-height: 36px;
          color: #707070;
          line-height: 56px;
          text-transform: none;
          background: linear-gradient(253.8265207752deg, #FFFFFF 75%, #2B95FF 105%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .content-card.main {
      .card-info {
        background: none;
        color: #fff;
        font-size: 16px;
        -webkit-background-clip: border-box; /* 覆盖为默认值或其他合适的值 */
        -webkit-text-fill-color: unset; /* 设置你想要的纯色，例如黑色 */
      }
    }
    .content-card.active,
    .content-card:hover {
      background-color: #0079C3;
      box-shadow: 0 0 0 1px rgba(67, 161, 255,0.6) inset;
    }
  }
  .content-img {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    margin-left: 60px;
    img {
      max-width: 598px;
      width: 100%;
      height: auto;
      animation-name: scaleDraw;
      /*关键帧名称*/
      animation-timing-function: ease;
      /*动画的速度曲线*/
      animation-iteration-count: 1;
      /*动画播放的次数*/
      animation-duration: 0.3s;
    }
    .img-bottom {
      width: 100%;
      margin-top: 24px;
      font-weight: 400;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 24px;
    }
  }
  .trace-content-column {
    display: none;
  }
  .trace-info {
    display: flex;
    flex-direction: column;
    max-width: 1230px;
    width: 100%;
    padding: 100px 24px 0;
    gap: 120px;
    .info-content {
      display: flex;
      gap: 28px;
      align-items: center;
      h4 {
        font-size: 32px;
        color: #2B95FF;
        line-height: 40px;
        margin-bottom: 24px;
        text-transform: none;
        background: linear-gradient(253.8265207752deg, #FFFFFF 75%, #2B95FF 105%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        font-weight: 600;
        font-size: 16px;
        color: #D0D5DD;
        line-height: 24px;
      }
      img {
        width: 100%;
        max-width: 520px;
        height: auto;
      }
    }
    .info-content.contrary {
      flex-direction: row-reverse;
    }
  }
  .trace-customer {
    max-width: 1230px;
    width: 100%;
    padding: 0 24px;
    margin-bottom: 120px;
    .customer-text {
      font-weight: 500;
      font-size: 20px;
      color: #D0D5DD;
      line-height: 32px;
      margin-top: 8px;
    }
    img {
      padding-left: 16px;
      padding-right: 50px;
      margin-top: 56px;
    }
  }
}
@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(0.5);
    /*开始为原始大小*/
  }
  100% {
    transform: scale(1);
    /*放大1.1倍*/
  }
}
@media screen and (min-width: 1025px) {
  .solutions-trace {
    .trace-info {
      .info-content {
        img {
          width: 520px;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px)  {
  .solutions-trace {
    .content-body {
      background-size: 1024px auto;
      background-position: center bottom;
      box-sizing: border-box;
      height: 908px;
      padding-top: 52px;
      .content-img {
        margin-left: 0;
      }
      .content-cards {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .content-card {
          max-width: 550px;
          .card-info {
            width: auto;
          }
        }
        .change-icon {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          background: #000000;
          border: 1px solid #2B3034;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .trace-content {
      display: none;
    }
    .trace-content-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .content-img  {
      align-items: center;
    }
    .trace-info {
      .info-content {
        flex-direction: column;
        align-items: flex-start;
      }
      .info-content.contrary {
        flex-direction: column;
      }
      .info-img {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media screen and (max-width: 750px)  {
  .solutions-trace {
    .content-body {
      .content-cards {
        gap: 8px;
        .content-card {
          img {
            display: none;
          }
        }
      }
    }
  }
}
</style>
