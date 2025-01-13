<template>
  <div class="solutions-kyt">
    <div class="content-body">
      <div class="kyt-content">
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
                  style="color: var(--primary);"
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
      <div class="kyt-content-column">
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
                    style="color: var(--primary);"
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
    <div class="kyt-info">
      <div class="info-content">
        <div>
          <h4>
            <lang>
              Full-node transaction data for heterogeneous chains such as Aptos, Solana, TON and SUI
            </lang>
          </h4>
          <p>
            <lang>
              Our dedicated chain-support team has built and maintained all nodes in-house to maintain stability and security of our on-chain data. We provide full-node transaction data for heterogeneous chains such as Aptos, Solana, TON, and SUI to ensure comprehensive transaction traceability.
            </lang>
          </p>
        </div>
        <div class="info-img">
          <img
            alt=""
            src="~/assets/img/solutions/kyt/info-img-1.png"
          >
        </div>
      </div>
      <div class="info-content contrary">
        <div>
          <h4>
            <lang>One-Click Risk Assessment Report</lang>
          </h4>
          <p>
            <lang>
              Our built-in Risk Assessment Report template has all the info needed for further assessment and reporting. Compliance officers can conveniently use this function to produce a report with full transaction data and risky addresses to submit to MLRO.
            </lang>
          </p>
        </div>
        <div class="info-img">
          <img
            alt=""
            src="~/assets/img/solutions/kyt/info-img-2.png"
          >
        </div>
      </div>
      <div class="info-content">
        <div>
          <h4>
            <lang>
              Proprietary AI analytic big data models to detect mixers
            </lang>
          </h4>
          <p>
            <lang>
              A cryptocurrency mixer is a service that mixes potentially identifiable or "tainted" cryptocurrency funds with others, so as to obscure the trail back to the fund's original source. We use AI big data to develop proprietary algorithm to enhance compliance monitoring capabilities and identify potential risks from mixers.
            </lang>
          </p>
        </div>
        <div class="info-img">
          <img
            alt=""
            src="~/assets/img/solutions/kyt/info-img-3.png"
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
    </div>
    <div class="kyt-customer">
      <CommonCustomer :images="images" />
    </div>
    <!-- <div class="kyt-customer">
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
import mainLogo from '~/assets/img/solutions/kyt/kyt-logo.png'

const showContent = ref(0)
const contentData = [
  { text: 'Beosin KYT makes AML/CFT compliance easier, clearer and sharper for crypto businesses. ', title: 'Beosin KYT', primary: '', img: mainLogo },
  { text: 'Over 2B global address labels , with largest South East Asia database of 22M labels ', primary: '', img: imgVscode },
  { text: 'Quick response to update address labels and support new chains', primary: '', img: imgCopy },
  { text: 'Analysis of 120+ cross-chain and swap protocols, with 100% accuracy in mapping cross-chain fund flows.', primary: '', img: imgStar }
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
const customer = import.meta.glob('~/assets/img/customer/kyt/*.png', {
  as: 'url'
})
const images = ref<string[]>([])
for (const key in customer) {
  customer[key]().then((res) => {
    images.value.push(res)
  })
}
</script>

<style lang="scss">
.solutions-kyt {
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  .content-body {
    width: 100%;
    background: url("@/assets/img/solutions/kyt/kyt-content-bg.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position:  center bottom;
    box-sizing: border-box;
    height: 728px;
    padding: 98px 24px 0;
  }
  .kyt-content {
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
        background: linear-gradient(253.8265207752deg, #FFFFFF 75%, var(--primary) 105%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        h3 {
          font-weight: bold;
          font-size: 32px;
          line-height: 36px;
          color: #707070;
          line-height: 56px;
          text-transform: none;
          background: linear-gradient(253.8265207752deg, #FFFFFF 75%, var(--primary) 105%);
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
        line-height: 20px;
        -webkit-background-clip: border-box; /* 覆盖为默认值或其他合适的值 */
        -webkit-text-fill-color: unset; /* 设置你想要的纯色，例如黑色 */
      }
    }
    .content-card.active,
    .content-card:hover {
      background-color: #00C379;
      box-shadow: 0 0 0 1px rgba(46,222,146,0.4) inset;
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
  .kyt-content-column {
      display: none;
  }
  .kyt-info {
    display: flex;
    flex-direction: column;
    max-width: 1230px;
    width: 100%;
    padding: 100px 24px 120px;
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
        background: linear-gradient(253.8265207752deg, #FFFFFF 75%, var(--primary) 105%);
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
  .kyt-customer {
    max-width: 1230px;
    width: 100%;
    padding: 0 24px;
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
  .solutions-kyt {
    .kyt-info {
      .info-content {
        img {
          width: 520px;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px)  {
  .solutions-kyt {

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
    .kyt-content {
      display: none;
    }
    .kyt-content-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .content-img  {
      align-items: center;
    }
    .kyt-info {
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
  .solutions-kyt {
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
