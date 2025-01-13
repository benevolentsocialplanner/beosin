<template>
  <header class="app-header">
    <div class="header-content">
      <div class="logo-container">
        <NuxtLink :to="localePath('/')">
          <img
            class="logo"
            src="~/assets/img/home/logo.png"
            alt="Logo"
          >
        </NuxtLink>
        <nav class="menu">
          <ul>
            <li :class="{ active: route.path.includes('/solutions') }">
              <el-popover
                v-model:visible="showPcPopover"
                placement="bottom"
                :show-arrow="false"
                popper-class="app-header-menu-pop"
              >
                <template #reference>
                  <span>
                    <lang>Solutions</lang>
                    <ElIconCaretBottom />
                  </span>
                </template>
                <div class="menu-list">
                  <div class="list-content">
                    <h4>Products</h4>
                    <a @click="popoverClickJump('/solutions/trace')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>Trace</lang>
                        </div>
                        <div class="btn-info">
                          <lang>Powerful and versatile toolkit for visualizing and analysing crypto currency crimes.</lang>
                        </div>
                      </div>
                    </a>
                    <a @click="popoverClickJump('/solutions/kyt')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>KYT</lang>
                        </div>
                        <div class="btn-info">
                          <lang>Real-time monitor interacting addresses and identify any suspicious transactions.</lang>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="info-line" />
                  <div class="list-content">
                    <h4>Services</h4>
                    <a @click="popoverClickJump('/solutions/smart-contract-audit')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>Smart Contract Audit</lang>
                        </div>
                        <div class="btn-info">
                          <lang>
                            Discovering Smart Contract and Chain Platform Vulnerabilities to Enhance Security.
                          </lang>
                        </div>
                      </div>
                    </a>
                    <a @click="popoverClickJump('/solutions/cryptocurrency-tracing')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>Cryptocurrency Tracing</lang>
                        </div>
                        <div class="btn-info">
                          <lang>Tailor-made investigation service for cryptocurrency stolen，blackmailed, hacked or transferred.</lang>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </el-popover>
            </li>
            <li :class="{ active: route.path === '/about' }">
              <a @click="popoverClickJump('/about')">
                <lang>About Us</lang>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="right">
        <el-popover
          v-model:visible="showMobilePopover"
          placement="bottom"
          :show-arrow="false"
          popper-class="mobile-header-menu-pop"
          :teleported="false"
          trigger="click"
        >
          <template #reference>
            <div class="menu-trigger">
              <ISelectItem />
            </div>
          </template>
          <div class="menu-list">
            <el-collapse>
              <el-collapse-item
                title="Solutions"
                name="1"
              >
                <template #title>
                  <div class="collapse-title">
                    <lang>Solutions</lang>
                  </div>
                </template>
                <div class="info-list">
                  <div class="list-content">
                    <h4>
                      <lang>Products</lang>
                    </h4>
                    <a @click="popoverClickJump('/solutions/trace')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>Trace</lang>
                        </div>
                        <div class="btn-info">
                          <lang>Powerful and versatile toolkit for visualizing and analysing crypto currency crimes.</lang>
                        </div>
                      </div>
                    </a>
                    <a @click="popoverClickJump('/solutions/kyt')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>KYT</lang>
                        </div>
                        <div class="btn-info">
                          <lang>Real-time monitor interacting addresses and identify any suspicious transactions.</lang>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="list-content">
                    <h4>
                      <lang>Services</lang>
                    </h4>
                    <a @click="popoverClickJump('/solutions/smart-contract-audit')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>Smart Contract Audit</lang>
                        </div>
                        <div class="btn-info">
                          <lang>
                            Discovering Smart Contract and Chain Platform Vulnerabilities to Enhance Security.
                          </lang>
                        </div>
                      </div>
                    </a>
                    <a @click="popoverClickJump('/solutions/cryptocurrency-tracing')">
                      <div class="list-btn">
                        <div class="btn-title">
                          <lang>Cryptocurrency Tracing</lang>
                        </div>
                        <div class="btn-info">
                          <lang>PerformTailor-made investigation service for cryptocurrency stolen，blackmailed, hacked or transferred.</lang>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
            <a @click="popoverClickJump('/about')">
              <div class="menu-item">
                <lang>About Us</lang>
              </div>
            </a>
            <!-- <el-collapse class="language-collapse">
              <el-collapse-item
                title="Solutions"
                name="1"
              >
                <template #title>
                  <div class="collapse-title">
                    Language
                  </div>
                </template>
                <div class="info-list">
                  <div class="list-content">
                    <template
                      v-for="i in language"
                      :key="i.value"
                    >
                      <div
                        class="list-btn"
                        @click="toggleLanguage(i.value)"
                      >
                        <div class="btn-title">
                          {{ i.name }}
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse> -->
          </div>
        </el-popover>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { showDemo } from '~/store/demo-control'

const route = useRoute()
const router = useRouter()
const showMobilePopover = ref(false)
const popoverClickJump = (path: string) => {
  router.push(path)
  showPcPopover.value = false
  showMobilePopover.value = false
}
const showPcPopover = ref(false)
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const language = [
  { name: 'English', value: 'en' },
  { name: '繁體中文', value: 'zh' },
  { name: '한국어', value: 'cn' }
]
const toggleLanguage = (v: string) => {
  dayjs.locale(v === 'zh' ? 'zh-hk' : v)
  setLocale(v)
}

const submitReport = () => {
  showDemo()
}
</script>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;
  position: absolute;
  top: 0; /* 设置 top 属性 */
  z-index: 3000; /* 确保 z-index 高于其他元素 */
  background: rgba(0, 0, 0, 0.6);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  width: 100%;
  padding: 0 24px;
  .menu-trigger {
    display: none;
  }
  .header-content {
    max-width: 1230px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    a {
      height: 48px;
      line-height: 48px;
    }
  }
  .logo-container {
    display: flex;
    align-items: center;
    .logo {
      height: 48px;
      margin-right: 80px;
    }
  }

  .menu {
    height: 100%;
    ul {
      display: flex;
      list-style-type: none;
      align-items: center;
      height: 100%;
      gap: 60px;
      font-size: 20px;
      li {
        height: 100%;
        text-align: center;
        color: var(--txt-2);
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: 500;
        &:hover {
          color: var(--txt-1);
        }
        svg {
          width: 12px;
          height: 12px;
          margin-left: 5px;
        }
      }
      li.active {
        color: var(--txt-1);
      }
    }
    .el-tooltip__trigger {
      line-height: 48px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    button {
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .demo {
      height: 48px;
      line-height: 48px;
      padding: 0 20px;
      background: var(--bg-1);
      color: var(--txt-3);
      font-size: 16px;
      font-weight: 600;
      border-radius: 24px;
      flex-shrink: 0;
    }

    .language-switch {
      margin-right: 20px;
      min-width: 120px;
      color: var(--txt-1);
      .el-select__wrapper {
        border-radius: 24px;
        height: 48px;
        font-size: 16px;
        padding: 0 16px;
      }
      &:hover {
        color: #64bbfd;
      }

      :deep() {
        .el-select__wrapper {
          height: 48px;
          border-radius: 24px;
          padding: 4px 20px;
        }
      }
    }
  }

  .backdrop {
    width: 100%;
    position: absolute; /* 一定要用绝对定位 */
    height: 100%;
    backdrop-filter: blur(30px); /* 模糊半径 */
    z-index: -1;
    top: 0;
  }
}

.app-header-menu-pop {
  padding: 8px 0 !important;
  width: 100% !important;
  border: none !important;
  background-color: var(--bg-2) !important;
  left: 0 !important;
  right: 0 !important;
  top: 72px !important;
  min-height: 322px;
  box-shadow: 0px 16px 24px 0px rgba(46, 222, 146, 0.1) !important;

  .menu-list {
    margin: 0 auto;
    width: 100%;
    max-width: 1230px;
    display: flex;
    padding: 32px 20px 0;
    .list-content {
      h4 {
        padding-left: 20px;
        font-weight: 500;
        font-size: 20px;
        color: var(--primary);
        line-height: 24px;
        margin-bottom: 40px;
      }
      .list-btn {
        min-height: 80px;
        width: 420px;
        padding: 16px 20px;
        border-radius: 8px;
        transition: all 0.3s;
        cursor: pointer;
        .btn-title {
          font-size: 24px;
          color: #ffffff;
          line-height: 32px;
          font-weight: bold;
          height: 32px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          position: relative;
        }
        .btn-title::before {
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          width: 8px;
          height: 32px;
          border-radius: 4px;
          background: #2b3034;
          transition: all 0.3s;
        }
        .btn-info {
          font-weight: 400;
          font-size: 14px;
          color: #d0d5dd;
          line-height: 24px;
          padding-left: 20px;
        }
      }
      .list-btn:hover {
        background-color: rgba(28,32,35,0.5);
        .btn-title::before {
          background-color: var(--primary);
        }
      }
      .list-btn {
        margin-bottom: 32px;
      }
    }
  }
  .info-line {
    width: 1px;
    height: 256px;
    background-color: #1C2023;
    margin: 64px 50px 0;
  }
}
.mobile-header-menu-pop {
  display: none;
  top: 72px !important;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .app-header {
    .logo-container .menu {
      display: none;
    }
    .language-switch {
      display: none;
    }
    .menu-trigger {
      display: block;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      .nuxt-icon {
        width: 24px;
        height: 24px;
      }
    }
    .info-list {
      padding: 8px 24px;
      .list-content {
        h4 {
          font-weight: 500;
          font-size: 20px;
          color: var(--primary);
          line-height: 24px;
          margin-bottom: 8px;
        }
      }
      .list-btn {
        min-height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-top: 16px;
        cursor: pointer;
        .btn-title {
          font-size: 24px;
          color: #ffffff;
          line-height: 32px;
          font-weight: bold;
          height: 32px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          position: relative;
        }
        .btn-title::before {
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          width: 8px;
          height: 32px;
          border-radius: 4px;
          background: #2b3034;
          transition: all 0.3s;
        }
        .btn-info {
          font-weight: 400;
          font-size: 14px;
          color: #d0d5dd;
          line-height: 24px;
          padding-left: 20px;
        }
      }
      .list-btn:hover {
        .btn-title::before {
          background: var(--primary);
        }
      }
    }
    .menu-item {
      height: 72px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 20px;
      color: #8a96a3;
      line-height: 32px;
      cursor: pointer;
    }
    .el-collapse,
    .el-collapse-item__wrap {
      border: none !important;
    }
    .el-collapse-item__header {
      border: none !important;
      height: 72px;
      .collapse-title {
        padding: 20px 24px !important;
        font-weight: 500;
        font-size: 20px;
        color: #8a96a3;
        line-height: 32px;
      }
      &.is-active {
        background: rgba(28, 32, 35, 0.5);
        .el-collapse-item__arrow {
          color: var(--primary);
        }
      }
    }
    .el-collapse-item__arrow {
      margin-right: 24px;
    }
    .mobile-header-menu-pop {
      padding: 8px 0 !important;
      width: 100% !important;
      max-height: calc(100vh - 72px);
      overflow: auto;
      border: none !important;
      background-color: var(--bg-2) !important;
      left: 0 !important;
      right: 0 !important;
      box-shadow: 0px 16px 24px 0px rgba(46, 222, 146, 0.1) !important;
      display: block;
    }
  }
}
@media screen and (max-width: 750px)  {
  .app-header .actions .demo {
    padding: 0 10px;
  }
}
</style>
