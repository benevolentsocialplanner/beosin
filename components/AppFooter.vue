<template>
  <footer class="app-footer">
    <div class="footer-content">
      <!-- Logo部分 -->
      <div class="footer-logo">
        <div class="logo">
          <img
            src="~/assets/img/home/logo.png"
            alt="logo"
          >
        </div>
      </div>

      <!-- 导航链接部分 -->
      <div class="footer-nav">
        <!-- Solution列 -->
        <div
          class="nav-column solution-nav"
          style="flex: 2"
        >
          <h3 class="nav-title">
            <lang>Solutions</lang>
          </h3>
          <div class="solution-content">
            <div>
              <h4>PRODUCTS</h4>
              <ul>
                <NuxtLink :to="localePath('/solutions/kyt')">
                  <li><lang>KYT</lang></li>
                </NuxtLink>
                <NuxtLink :to="localePath('/solutions/trace')">
                  <li><lang>Trace</lang></li>
                </NuxtLink>
              </ul>
            </div>
            <div>
              <h4>SERVICES</h4>
              <ul>
                <li>
                  <NuxtLinkLocale to="/solutions/smart-contract-audit">
                    <lang>Smart Contract Audit</lang>
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/solutions/cryptocurrency-tracing">
                    <lang>Cryptocurrency Tracing</lang>
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 认证图标 -->
        <div class="nav-column">
          <h3 class="nav-title">
            <lang>Certification</lang>
          </h3>
          <div class="certification">
            <div class="cert-icon soc">
              <img
                src="~/assets/img/home/soc2.png"
                alt=""
              >
            </div>

            <div class="cert-icon iso">
              <img
                src="~/assets/img/home/iso.png"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright">
        <lang>©2025 by Beosin. All Rights Reserved.</lang>
      </div>
      <div>
  <!-- KVKK Button -->
  <button @click="showKvkk = true" class="kvkk-link">
    <lang>KVKK</lang>
  </button>
</div>

<!-- KVKK Overlay -->
<div v-if="showKvkk" class="kvkk-overlay">
  <button @click="showKvkk = false" class="close-kvkk">X</button>
</div>
      <div class="social-links">
        <template
          v-for="i in socialLinkData"
          :key="i.url"
        >
          <VTooltip :tip="i.name">
            <a
              :href="i.url"
              class="social-link"
              target="_blank"
            >
              <component :is="i.comp" />
            </a>
          </VTooltip>
        </template>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { tabDataMap } from '~/store/common'

const localePath = useLocalePath()
const socialLinkData = [
  { comp: resolveComponent('ITwitter'), name: 'X: @Beosin_com', url: 'https://x.com/Beosin_com' },
  { comp: resolveComponent('ITwitter'), name: 'X: @BeosinAlert', url: 'https://x.com/BeosinAlert' },
  { comp: resolveComponent('ITelegram'), name: 'Telegram', url: 'https://t.me/beosin' },
  { comp: resolveComponent('ILinkedin'), name: 'Linkedin', url: 'https://www.linkedin.com/company/beosin' },
  { comp: resolveComponent('IDiscord'), name: 'Discord', url: 'https://discord.com/invite/B4QJxhStV4' },
  { comp: resolveComponent('IInstagram'), name: 'Instagram', url: 'https://www.instagram.com/beosin_com' },
  { comp: resolveComponent('IYoutube'), name: 'Youtube', url: 'https://www.youtube.com/channel/UC63nqQ3t5FIx7bPxLbg3UjQ' }
]
</script>

<style lang="scss">
.app-footer {
  margin-top: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 30px;
  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1230px;
    width: 100%;
    gap: 48px;
  }

  .footer-logo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .logo {
      width: 193px;
      height: 60px;
      margin-bottom: auto;
    }
  }

  .footer-nav {
    display: grid;
    flex: 1;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }

  .nav-column {
    .nav-title {
      color: var(--primary);
      margin-bottom: 8px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
    }
    .no-title-ul {
      padding-top: 28px;
    }
    .solution-content {
      display: flex;
      gap: 20%;
      h4 {
        font-weight: 500;
        font-size: 12px;
        color: #687083;
        line-height: 20px;
        margin-bottom: 8px;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: rgba(255, 255, 255, 0.8);
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 12px;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .certification {
    display: flex;
    justify-content: flex-start;
    margin-top: auto;
    gap: 12px;
    padding-top: 28px;
    .cert-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1230px;
    width: 100%;
    border-top: 1px solid #2B3034;
    padding-top: 12px;
    .social-links {
      display: flex;
      gap: 15px;
      .social-link {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
        position: relative;
        cursor: pointer;
        transition: all 0.3s;
        .nuxt-icon {
          width: 14px;
          height: 14px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .social-link:hover {
        background-color: var(--primary);
      }
    }

    .copyright {
      font-weight: 400;
      font-size: 16px;
      color: #8a96a3;
      line-height: 24px;
    }
  }
}
/* 由于底部一排内容过多，所以没有从1024px适配 */
@media screen and (max-width: 1200px) and (min-width: 751px) {
  .app-footer {
    padding: 80px 24px 48px;
    .footer-content {
      flex-direction: column;
    }
    .nav-column .solution-content {
      gap: 30%;
    }
    .footer-nav {
      grid-template-columns: 2fr 1fr;
      gap: 24px;
    }
  }
}
@media screen and (max-width: 750px) {
  .app-footer {
    padding: 80px 24px 48px;
    .footer-content {
      flex-direction: column;
    }
    .nav-column {
      .no-title-ul {
        padding-top: 12px;
      }
    }
    .nav-column.solution-nav {
      grid-column: 1 / 3;
      .solution-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }
    }
    .footer-nav {
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .certification {
      padding-top: 12px;
    }
    .footer-bottom {
      flex-direction: column;
      gap: 12px;
      align-items: flex-start;
    }
  }
}
</style>

<style scoped lang="scss"></style>
