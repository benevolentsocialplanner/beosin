<script setup lang="ts">
import { showDemo } from '~/store/demo-control'

const customer = import.meta.glob('~/assets/img/customer/home/*.png', {
  as: 'url'
})
const images = ref<string[]>([])
for (const key in customer) {
  customer[key]().then((res) => {
    images.value.push(res)
  })
}
const lg = useLang()
const localePath = useLocalePath()

useSeoMeta({
  title: lg('Home'),
  ogTitle: lg('Home'),
  description:
  'BEOSIN, Web 3 security and compliance Founded in 2018, Beosin\'s business covers smart contract/blockchain security audits, VASP compliance audits, AML solutions and crypto crimes investigation services.'
})
</script>

<template>
  <div class="home-content">
    <div class="banner-bg" />
    <div class="banner-container">
      <div class="banner">
        <div class="text">
          <h4><lang>since 2018</lang></h4>
          <h1>
            Securing a more
            <span style="color: var(--primary);">
              transparent
            </span>
            blockchain finance ecosystem
          </h1>
        </div>
        <div class="video-box">
          <video
            class="video-background"
            preload="auto"
            loop
            playsinline
            autoplay
            src="~/assets/video/home/banner-video.mp4"
            tabindex="-1"
            muted="true"
          />
        </div>
      </div>

      <div class="product-cards c-box">
        <div class="card-body security">
          <!-- 安全卡片 -->
          <NuxtLinkLocale
            to="/solutions/smart-contract-audit"
          >
            <div class="card">
              <div class="card-header">
                <div class="icon">
                  <img
                    alt=""
                    src="~/assets/img/home/home-security-logo.png"
                  >
                </div>
                <div class="label">
                  <h3><lang>Security</lang></h3>
                  <p><lang>For Developer</lang></p>
                </div>
              </div>
              <div class="card-content">
                <h2><lang>Security Audit</lang></h2>
                <p>
                  <lang>
                    Discover vulnerabilities in smart contracts and chain platforms to
                    improve security.
                  </lang>
                </p>
                <div class="explore-more">
                  <lang>Explore More</lang>
                </div>
              </div>
              <div class="card-logo">
                <img
                  alt=""
                  src="~/assets/img/home/audit-logo-big.png"
                >
              </div>
            </div>
          </NuxtLinkLocale>
        </div>
        <div class="card-body investigation">
          <!-- 调查卡片 -->
          <NuxtLinkLocale
            to="/solutions/trace"
            class="explore-more"
          >
            <div class="card">
              <div class="card-header">
                <div class="icon">
                  <img
                    alt=""
                    src="~/assets/img/home/home-investigation-logo.png"
                  >
                </div>
                <div class="label">
                  <h3><lang>Investigation</lang></h3>
                  <p>
                    <lang>For Law Enforcement & Professional</lang>
                  </p>
                </div>
              </div>
              <div class="card-content">
                <h2><lang>Trace</lang></h2>
                <p>
                  <lang>Powerful and versatile toolkit for visualizing and analysing crypto currency crimes.</lang>
                </p>

                <div class="explore-more">
                  <lang>Explore More</lang>
                </div>
              </div>
              <div class="card-logo">
                <img
                  alt=""
                  src="~/assets/img/home/trace-logo-big.png"
                >
              </div>
            </div>
          </NuxtLinkLocale>
        </div>
        <div class="card-body compliance">
          <!-- 合规卡片 -->
          <NuxtLinkLocale
            to="/solutions/kyt"
          >
            <div class="card">
              <div class="card-header">
                <div class="icon">
                  <img
                    alt=""
                    src="~/assets/img/home/home-compliance-logo.png"
                  >
                </div>
                <div class="label">
                  <h3><lang>Compliance</lang></h3>
                  <p>
                    <lang>For Crypto Businesses such as Exchange, OTC, Custodian, Dex, Wallet</lang>
                  </p>
                </div>
              </div>
              <div class="card-content">
                <h2><lang>KYT</lang></h2>
                <p>
                  <lang>Real-time monitor interacting addresses and identify any suspicious transactions.</lang>
                </p>

                <div class="explore-more">
                  <lang>Explore More</lang>
                </div>
              </div>
              <div class="card-logo">
                <img
                  alt=""
                  src="~/assets/img/home/kyt-logo-big.png"
                >
              </div>
            </div>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
    <!-- 关于部分 -->
    <div class="about-section c-box">
      <h1><lang>About Beosin</lang></h1>
      <p>
        <lang>
          Founded in 2018, Beosin is now a world-leading blockchain security and compliance solutions company with its formal verification technology and on-chain data intelligent analysis technology. We have discovered more than 45,000 security vulnerabilities, and accumulated over 2 billions of wallet address labels with special focus on Asian regions.
        </lang>
        <br>
        <br>
        <lang>
          Beosin's business covers smart contract security audits, VASP compliance audits, exchange security and anti-money laundering solutions, stablecoin monitoring solutions, and all-in-one solutions for tracing and analysing crypto crimes.
        </lang>
      </p>

      <div class="stats">
        <div class="stat-item">
          <div class="icon">
            <i-experience />
          </div>
          <div class="stat-text">
            <h3><span class="accent">20</span>+</h3>
            <p><lang>Years of cybersecurity experience</lang></p>
          </div>
        </div>
        <div class="stat-item">
          <div class="icon">
            <i-crypto />
          </div>
          <div class="stat-text">
            <h3><span class="accent">2&nbsp;<lang>Billion</lang></span>+</h3>
            <p><lang>Labeled crypto addresses</lang></p>
          </div>
        </div>
        <div class="stat-item">
          <div class="icon">
            <i-code />
          </div>
          <div class="stat-text">
            <h3><span class="accent">85,000</span>+</h3>
            <p><lang>Identified code vulnerabilities</lang></p>
          </div>
        </div>
        <div class="stat-item">
          <div class="icon">
            <i-contracts />
          </div>
          <div class="stat-text">
            <h3><span class="accent">4,500</span>+</h3>
            <p><lang>Smart contracts and blockchains</lang></p>
          </div>
        </div>
      </div>
    </div>

    <div class="qualification-section c-box">
      <h2 class="title">
        <lang>Qualifications and Accreditations</lang>
      </h2>
      <p class="desc">
        <lang>
          Beosin has obtained significant certifications in SOC 2 and ISO 27001,
          providing top-notch security and compliance services to the Web3
          ecosystem
        </lang>
      </p>

      <div class="cert-list">
        <!-- SOC2 认证 -->
        <div class="cert-item soc2">
          <div class="cert-icon">
            <img
              src="~/assets/img/home/soc2.png"
              alt=""
            >
          </div>
          <div class="cert-content">
            <h3><lang>SOC 2 Certification</lang></h3>
            <p>
              <lang>
                SOC 2 is an internationally recognized security and compliance
                framework
              </lang>
            </p>
          </div>
        </div>

        <!-- ISO27001 认证 -->
        <div class="cert-item iso">
          <div class="cert-icon">
            <img
              src="~/assets/img/home/iso.png"
              alt=""
            >
          </div>
          <div class="cert-content">
            <h3><lang>ISO 27001</lang></h3>
            <p>
              <lang>
                ISO 27001 is an internationally recognized standard for
                information security management systems
              </lang>
            </p>
          </div>
        </div>
      </div>
      <CommonCustomer :images="images" />
      <!-- 客户部分 -->
      <!-- <div class="customer-section">
        <h3 class="mark-title">
          <lang>Trusted by</lang>
        </h3>
        <p class="customer-desc">
          <span style="color: var(--primary);">
            1000+
          </span>
          <lang>leading Web3 enterprises</lang>
        </p>
        <div class="customer-logos">
          <img
            src="~/assets/img/home/customers.png"
            alt=""
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  position: relative;
}
.c-box {
  max-width: 1230px;
  width: 100%;
}
.banner-container {
  padding: 72px 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  * {
    max-width: 1230px;
  }
}
.banner-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 1000px;
  user-select: none;
  pointer-events: none;
  background: url("@/assets/img/home/banner-bg.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position:  center top;
  z-index: 1000;
}
.banner {
  width: 100%;
  margin-bottom: 140px;
  position: relative;
  .text {
    z-index: 2;
    margin-top: 108px;
    position: relative;
    width: 50%;
  }
  h4 {
    font-weight: bold;
    line-height: 20px;
    font-size: 14px;
    color: var(--txt-2);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  h1 {
    color: var(--txt-1);
    font-size: 48px;
    line-height: 60px;
    max-width: 553px;
    width: 100%;
  }

  .banner-btn {
    height: 44px;
    border-radius: 50px;
    background: var(--primary);
    color: var(--txt-3);
    font-size: 16px;
    font-weight: 500;
    padding: 0 27px;
    outline: none;
    font-weight: 600;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 56px;
    transition: all .3s;
  }
  .banner-btn:hover {
    background-color: #24B275;
    border-color: #24B275;
  }
  .video-box {
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    right: 0;
    z-index: 0;
    max-width: 700px;
    width: 60%;
    user-select: none;
    pointer-events: none;
    video {
      width: 100%;
    }
  }
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  .card-body {
    position: relative;
    &.security .card {
      background-image: url('~/assets/img/home/audit-bg.png');
      background-size: 100% 100%;
    }

    &.investigation .card {
      background-image: url('~/assets/img/home/trace-bg.png');
      background-size: 100% 100%;
      .card-header h3 {
        color: #2B95FF;
      }
    }

    &.compliance .card {
      background-image: url('~/assets/img/home/kyt-bg.png');
      background-size: 100% 100%;
      .card-header h3 {
        color: var(--primary);
      }
    }
  }
  .card {
    padding: 25px 32px 30px 30px;
    border-radius: 28px;
    color: white;
    position: relative;
    overflow: hidden;
    height: 345px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-header {
    display: flex;
    gap: 12px;
    margin-bottom: 2rem;
    height: 74px;
    z-index: 2;
    .icon {
      width: 48px;
      height: 48px;
      flex: 0 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .label {
      h3 {
        font-size: 24px;
        margin: 0;
      }

      p {
        margin: 0;
        font-size: 16px;
        opacity: 0.8;
      }
    }
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    z-index: 2;
    h2 {
      font-size: 28px;
      color: var(--txt-1);
      margin-bottom: 12px;
    }

    p {
      font-size: 18px;
      opacity: 0.8;
      color: var(--txt-2);
      padding-right: 8px;
      transition: all 0.3s;
    }

    .explore-more {
      margin-top: auto;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: max-content;
      color: var(--txt-2);
      transition: all 0.3s;
      &:after {
        content: "→";
        transition: transform 0.3s;
      }
    }
  }

  .card:hover .card-content {
    p {
      color: var(--txt-1);
    }
    .explore-more {
      color: var(--txt-1);
      &:after {
        transform: translateX(5px);
      }
    }
  }

  .card-logo {
    width: 200px;
    height: 200px;
    position: absolute;
    z-index: 1;
    right: -40px;
    bottom: -52px;
    transition: all .3s;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card:hover {
    .card-logo {
      right: 12px;
      bottom: 12px;
    }
  }
  .card-body:hover {
    &.security::before {
      box-shadow: 0px 0px 24px 4px #687083;
    }

    &.investigation::before {
      box-shadow: 0px 0px 24px 4px #254FE2;
    }

    &.compliance::before {
      box-shadow: 0px 0px 24px 4px #35936A;
    }
  }
  .card-body::before {
    content: '';
    position: absolute;
    bottom: -22px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 0px;
    background: #ffffff00;
    box-shadow: 0px 0px 24px 4px #ffffff00;
    transition: all .3s;
  }
}

.about-section {
  margin-top: 42px;
  color: white;

  h1 {
    font-size: 40px;
    margin-bottom: 9px;
    color: var(--txt-1);
  }

  p {
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 32px;
    color: #D0D5DD;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    gap: 20px 16px;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 12px;

    .icon {
      width: 44px;
      height: 44px;
      background: #15181e;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      svg {
        font-size: 24px;
      }
    }

    h3 {
      font-size: 1.5rem;
      margin: 0;
      color: #2ede92;
    }
    .accent {
      color: #fff !important;
    }
    .stat-text {
      flex: 1;
    }
    p {
      margin: 0;
      font-size: 12px;
      line-height: 16px;
      font-size: 0.9rem;
      color: var(--gray-3);
    }
  }
}

.qualification-section {
  margin-top: 120px;

  .title {
    font-size: 40px;
    font-weight: 600;
    color: var(--gray-1);
    text-align: left;
    margin-bottom: 9px;
  }

  .desc {
    font-size: 20px;
    line-height: 24px;
    color: #D0D5DD;
    text-align: left;
    margin-bottom: 40px;
  }

  .cert-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .cert-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    height: 160px;
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 24px;
    &.soc2 {
      background: url("~/assets/img/home/soc2-bg.png") no-repeat;
      background-size: auto 100%;
      background-position: right top;
      background-color: #00100D;
    }

    &.iso {
      background: url("~/assets/img/home/iso-bg.png") no-repeat;
      background-size: auto 100%;
      background-position: right top;
    }

    .cert-icon {
      flex-shrink: 0;
      img {
        width: 80px;
        height: 80px;
        display: block;
      }
    }

    .cert-content {
      h3 {
        font-size: 24px;
        color: var(--gray-1);
        margin-bottom: 10px;
        line-height: 28px;
      }

      p {
        font-size: 16px;
        color: var(--gray-3);
        margin: 0;
        line-height: 16px;
      }
    }
  }

  .customer-section {
    margin-top: 100px;
    text-align: left;

    .customer-desc {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 50px;
      padding-left: 32px;

      strong {
        color: #00ff88;
      }
    }

    .customer-logos {
      padding: 0 32px;
    }
  }
}

.partner-section {
  .partner-header {
    margin-bottom: 20px;
    .partner-title {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 9px;
    }
  }

  .partner-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 28px;
    .partner-item {
      height: 188px;
      // background: url("~/assets/img/partner-bg.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      .partner-icon {
        width: 235px;
        object-fit: contain;
        margin: 0 auto;
      }
      .join-content {
        display: flex;
        align-items: center;
        padding: 0 40px 0 60px;
        span {
          color: #64bbfd;
          font-size: 16px;
        }
        a {
          cursor: pointer;
          display: block;
          margin-left: 60px;
          button {
            background: #64bbfd;
            padding: 0 40px;
            height: 46px;
            display: inline-flex;
            align-items: center;
            cursor: pointer;
            border-radius: 30px;
            outline: none;
            border: none;
            flex-wrap: nowrap;
            white-space: nowrap;
            font-size: 16px;
            font-weight: 600;
            color: #020816;
            .arrow {
              color: #020816;
              font-size: 26px;
              margin-left: 5px;
              line-height: 14px;
            }
          }
        }
      }
    }
  }
}
</style>

<style scoped lang="scss">
@media screen and (min-width: 751px) and (max-width: 1024px) {
  .banner-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1000px;
    user-select: none;
    pointer-events: none;
    background: url("@/assets/img/home/banner-bg.png");
    background-repeat: no-repeat;
    background-size: 1024px auto;
    background-position:  center top;
    z-index: 1000;
  }
  .banner {
    margin-bottom: 54px;
    .text {
      margin-top: 0;
    }
  }
  .product-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 24px;
  }
  .qualification-section .cert-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<style scoped lang="scss">
@media screen and (max-width: 750px) {
  .banner-container {
    padding-top: 36px;
  }

  .banner-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1000px;
    user-select: none;
    pointer-events: none;
    background: url("@/assets/img/home/banner-bg.png");
    background-repeat: no-repeat;
    background-size: 750px auto;
    background-position:  center top;
    z-index: 1000;
  }
  .banner {
    margin-bottom: 88px;
    display: flex;
    flex-direction: column-reverse;
    .text {
      margin-top: -60px;
      width: 100%;
    }
    h4 {
      margin-bottom: 36px;
    }
    h1 {
      max-width: 100%;
      font-size: 40px;
      line-height: 48px;
    }
    .banner-btn {
      margin-top: 40px
    }
    .video-box {
      position: relative;
      top: 0;
      transform: translatey(0%);
      right: 0;
      z-index: 0;
      width: 100%;
      user-select: none;
      pointer-events: none;
      video {
        width: 100%;
      }
    }
  }
  .product-cards {
    grid-template-columns: repeat(1, 1fr);
    gap: 48px;
  }
  .about-section {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }
  .qualification-section{
    .title {
      font-size: 32px;
      line-height: 40px;
    }
    .cert-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
