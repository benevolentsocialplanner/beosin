<template>
  <div class="about-us-main">
    <div class="introduce">
      <div class="introduce-text">
        <h3 class="">
          <lang>About Beosin</lang>
        </h3>
        <lang>
          Founded in 2018, Beosin is now a world-leading blockchain security and compliance solutions company with its formal verification technology and on-chain data intelligent analysis technology. We have discovered more than 45,000 security vulnerabilities, and accumulated over 2 billions of wallet address labels with special focus on Asian regions.
        </lang>
        <br>
        <lang>
          Beosin's business covers smart contract security audits, VASP compliance audits, exchange security and anti-money laundering solutions, stablecoin monitoring solutions, and all-in-one solutions for tracing and analysing crypto crimes.
        </lang>
      </div>
      <div class="banner-bg">
        <img
          alt=""
          class="bg-bottom"
          src="~/assets/img/about/banner-bg.png"
        >
        <img
          alt=""
          class="bg-top"
          src="~/assets/img/about/banner-p.png"
        >
      </div>
    </div>
    <div class="team-card-comp">
      <div class="team">
        <h3 class="mark-title">
          <lang>Our team</lang>
        </h3>
        <div class="team-introduce">
          <lang>
            Meet the professional team building the future of Beosin
          </lang>
        </div>
        <div class="team-body">
          <div class="ceo-team-card">
            <div class="ceo-card-left">
              <div class="content">
                {{ teamsCEO.content }}
              </div>
              <div class="card-bottom">
                <div class="name">
                  {{ teamsCEO.name }}
                </div>
                <div class="duty">
                  {{ teamsCEO.duty }}
                </div>
                <div class="img-bottom">
                  <template
                    v-for="c in teamsCEO.contact"
                    :key="c.url"
                  >
                    <a
                      :href="c.url"
                      target="_blank"
                    >
                      <component :is="c.icon" />
                    </a>
                  </template>
                </div>
              </div>
            </div>
            <div class="ceo-card-right">
              <img
                :src="teamsCEO.img"
                alt=""
              >
            </div>
          </div>
          <div
            class="team-cards"
          >
            <template
              v-for="i in teams"
              :key="i.name"
            >
              <div class="team-card">
                <div class="content">
                  {{ i.content }}
                </div>
                <div class="person-content">
                  <div class="member">
                    <img
                      v-if="i.img"
                      :src="i.img"
                      alt=""
                    >
                    <img
                      v-else
                      src="~/assets/img/about/unknown-img.png"
                    >
                  </div>
                  <div class="person-bottom">
                    <div class="name">
                      <span>{{ i.name }}</span>
                      <div class="img-bottom">
                        <template
                          v-for="c in i.contact"
                          :key="c.url"
                        >
                          <a
                            :href="c.url"
                            target="_blank"
                          >
                            <component :is="c.icon" />
                          </a>
                        </template>
                      </div>
                    </div>
                    <div class="duty">
                      {{ i.duty }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="global">
      <h3 class="mark-title">
        <lang>Global Impact</lang>
      </h3>
      <div class="global-text">
        <lang>
          Beosin has established long-term collaborative relationships with multiple universities and regulatory institutions globally.
        </lang>
      </div>
      <img
        alt=""
        src="~/assets/img/about/global.png"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import RegonLiu from '~/assets/img/about/regon-liu.png'
import JoeZhou from '~/assets/img/about/joe-zhou.png'
import BrandiFang from '~/assets/img/about/brandi-fang.png'
import AlexCheng from '~/assets/img/about/alex-cheng.png'
import OwenYue from '~/assets/img/about/owen-yue.png'
import StanleyGwee from '~/assets/img/about/stanley-gwee.png'
import AlvinLu from '~/assets/img/about/alvin-lu.png'
import AysunHerges from '~/assets/img/about/aysun-herges.png'
import HeejuKim from '~/assets/img/about/heeju-kim.png'
import CenkErkin from '~/assets/img/about/cenk-erkin.png'

const teamsCEO = {
  content: 'Joe Zhou held key positions in global financial institutions, government regulatory bodies, and blockchain technology companies, incuding the SFC, HKEX, OSL, Hashkey, and OKX.  With extensive experience in the field of Web3 complance, Joe Zhou is dedicated to leading Beosin towards significant innovation and continuous growth.',
  name: 'Joe Zhou',
  duty: 'CEO',
  img: JoeZhou,
  contact: [
    { icon: resolveComponent('ITwitter'), url: 'https://x.com/xyzorong' },
    { icon: resolveComponent('ILinkedin'), url: 'https://www.linkedin.com/in/xyzorong/' }
  ]
}

const teams = [
  {
    content: 'Cenk Erkin is a seasoned leader with extensive experience in blockchain and recognized for his strategic vision and ability to drive digital transformation. Previously, he served as the CEO of Kemer Partners and Eurasia Blockchain, where he led critical initiatives connecting global innovation with regional opportunities across MENA region.',
    name: 'Cenk Erkin',
    duty: 'CEO, MENA',
    img: CenkErkin,
    contact: []
  },
  {
    content: 'Owen Yue is an experienced cybersecurity and blockchain technologist. He is familiar with various blockchain ecosystem applications and technical architectures. He leads Beosin\'s technical team to build AML solutions for crypto businesses and investigation tool kit for law enforcement agencies to combat virtual currency crimes.',
    name: 'Owen Yue',
    duty: 'Head of Technology',
    img: OwenYue,
    contact: [
      { icon: resolveComponent('ITelegram'), url: 'https://t.me/owenduke' }
    ]
  },
  {
    content: 'Alvin Lu is a seasoned professional in Web3 security and compliance, bringing over 11 years of experience in business development and management across diverse, fast-paced startup environments. His expertise encompasses business development, sales team leadership, sales management, and strategic planning.',
    name: 'Alvin Lu',
    duty: 'Compliance Business Director',
    img: AlvinLu
  },
  {
    content: 'Dr. Aysun Herges brings over 20 years of experience in finance, complemented by deep expertise in blockchain technologies and digital asset risk management. With a Ph.D. in Applied/Numerical Mathematics, she combines a strong analytical foundation with a forward-thinking approach to Web3 innovation and compliance.',
    name: 'Dr. Aysun Herges',
    duty: 'BD Manager, MENA',
    img: AysunHerges,
    contact: []
  },
  {
    content: 'Stanley Gwee has a wealth of experience in blockchain compliance and digital asset security, At Beosin, Stanley\'s dedicated to driving institutional partnerships and developing innovative solutions that enhance security and compliance for our clients, with a strong background in regulatory frameworks.',
    name: 'Stanley Gwee',
    duty: 'Head of Sales, South East Asia',
    img: StanleyGwee,
    contact: [
      { icon: resolveComponent('ILinkedin'), url: 'https://www.linkedin.com/in/stanleygwee/' }
    ]
  },
  {
    content: 'Brandi Fang is an experienced sales leader with over ten years in sales management, including five years in the cryptocurrency industry. At Beosin, Brandi plays a key role in driving market growth and fostering strong, valuable partnerships by developing thoughtful strategies to teams in meeting ambitious targets with a data-driven approach.',
    name: 'Brandi Fang',
    duty: 'Head of Sales, North America',
    img: BrandiFang,
    contact: [
      { icon: resolveComponent('ITwitter'), url: 'https://x.com/BrandiFang' },
      { icon: resolveComponent('ILinkedin'), url: 'https://www.linkedin.com/in/brandi-fang-a5b5b6288' }
    ]
  },
  {
    content: 'Alex Cheng, former MLRO of a top exchange and AMLO of a listed company, adeptly navigates complex financial regulations with his strong background in AML regulatory frameworks, VASP licensing regimes, Travel Rules, and Stablecoins. Alex is skilled in AML policies, CRA, transaction monitoring, and suspicious activity reporting.',
    name: 'Alex Cheng',
    duty: 'Compliance Solution Director',
    img: AlexCheng,
    contact: [
      { icon: resolveComponent('ITelegram'), url: 'https://t.me/AlexCheng88988' }
    ]
  },
  {
    content: 'Regon Liu is highly experienced blockchain professional with a strong background in applying blockchain technology across various industries. His expertise in both the technical and strategic aspects of blockchain has made him a trusted architect of implementing blockchain solutions to drive efficiency and innovation.',
    name: 'Regon Liu',
    duty: 'Solution Architect',
    img: RegonLiu,
    contact: [
      { icon: resolveComponent('ITwitter'), url: 'https://x.com/regon_n' },
      { icon: resolveComponent('ITelegram'), url: 'https://t.me/Regon_Liu' }
    ]
  },
  {
    content: 'As the Marketing Manager, Heeju leverages her expertise to drive brand awareness and engagement for our innovative blockchain security solutions. With a focus on strategic marketing initiatives, she develops and implements campaigns that highlight our commitment to creating a more transparent financial ecosystem.',
    name: 'Heeju Kim',
    duty: 'Marketing Manager',
    img: HeejuKim,
    contact: []
  }
]
</script>

<style lang="scss">
.about-us-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;
  overflow-x: hidden;
  box-sizing: border-box;
  .introduce {
    max-width: 1230px;
    width: 100%;
    padding-top: 120px;
    position: relative;
    h3 {
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      color: var(--primary);
      margin-bottom: 20px;
    }
    .introduce-text {
      max-width: 806px;
      width: 60%;
      color: #D0D5DD;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      position: relative;
      z-index: 2;
    }
    .banner-bg {
      width: 560px;
      height: 560px;
      position: absolute;
      right: -95px;
      top: 0;
      z-index: 0;
      img {
        width: 100%;
        height: 100%;
      }
      .bg-bottom {
        position: absolute;
        z-index: 1;
      }
      .bg-top {
        position: absolute;
        z-index: -1;
        height: auto;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .team-card-comp {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
  }
  .team {
    width: 100%;
    max-width: 1230px;
    margin-top: 78px;
    margin-bottom: 120px;
    .team-body {
      position: relative;
      margin-top: 32px;
    }
    .team-introduce {
      margin-top: 4px;
      font-weight: 500;
      font-size: 20px;
      color: #D0D5DD;
      line-height: 32px;
      padding-left: 32px;
    }
    .ceo-team-card {
      width: 100%;
      min-height: 340px;
      background: linear-gradient(135deg, rgba(13, 227, 178, 0) 52%, var(--primary) 120%), #040F0E;
      border-radius: 24px;
      border: 1px solid #114D36;
      display: flex;
      padding: 40px 40px 0;
      margin-bottom: 36px;
      .ceo-card-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
        flex: 1;
        .content {
          font-weight: 300;
          font-size: 18px;
          color: #D0D5DD;
          line-height: 24px;
        }
        .card-bottom {
          position: relative;
          z-index: 2;
          padding-bottom: 32px;
          .name {
            font-weight: bold;
            font-size: 28px;
            color: #FFFFFF;
            line-height: 36px;
          }
          .duty {
            font-weight: 500;
            font-size: 20px;
            color: #D0D5DD;
            line-height: 24px;
            margin-bottom: 16px;
            text-shadow: 2px 2px 4px #000;
            width: 180px;
          }

        }
      }
      .ceo-card-right {
        width: 300px;
        height: 300px;
        flex: 0 0 auto;
        display: flex;
        align-items: flex-end;
        img {
          height: 300px;
          width: 300px;
        }
      }
    }
    .team-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 30px;
      row-gap: 52px;
      transition: all 0.5s;
      .team-card {
        padding: 32px 20px 40px 32px;
        background: #000000;
        border-radius: 8px;
        border: 1px solid #1C2023;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        gap: 16px;
        min-height: 400px;
        transition: all .3s;
        cursor: default;
        .content {
          position: relative;
          z-index: 2;
          font-weight: 400;
          font-size: 18px;
          color: #D0D5DD;
          line-height: 24px;
          cursor: default;
        }
        .person-content {
          display: flex;
          gap: 12px;
          .member {
            flex: 0 0 auto;
            width: auto;
            height: 64px;
            width: 64px;
            border-radius: 50%;
            overflow: hidden;
            background: var(--primary);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            img {
              height: 60px;
              width: 60px;
            }
          }
          .person-bottom {
            position: relative;
            z-index: 2;
            flex: 1;
            .name {
              font-weight: bold;
              font-size: 24px;
              color: #FFFFFF;
              line-height: 36px;
              display: flex;
              justify-content: space-between;
              gap: 16px;
            }
            .duty {
              font-weight: 400;
              font-size: 16px;
              color: #FFFFFF;
              line-height: 24px;
              text-shadow: 2px 2px 4px #000;
            }

          }

        }
      }
      .team-card:hover {
        background: #040F0E;
        border: 1px solid rgba(46,222,146,0.3);
      }
    }
    .img-bottom {
      display: flex;
      gap: 16px;
      .nuxt-icon {
        width: 24px;
        height: 24px;
        color: #8A96A3;
        transition: all 0.3s;
        cursor: pointer;
      }
      .nuxt-icon:hover {
        color: var(--primary);
      }
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
  .global {
    max-width: 1230px;
    width: 100%;
    margin-bottom: 162px;
    .global-text {
      padding-left: 32px;
      font-weight: 500;
      font-size: 20px;
      color: #D0D5DD;
      line-height: 32px;
    }

    img {
      width: 100%;
      margin-top: 48px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .about-us-main .team .team-cards .team-card {
    min-height: 300px;
  }
}

@media screen and (min-width: 801px) and (max-width: 1200px) {
  .about-us-main {
    padding-top: 36px;
    .introduce {
      padding-top: 36px;
      .banner-bg {
        width: 472px;
        height: 472px;
      }
    }
    .team .team-cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
  }
}

@media screen and (max-width: 800px) {
  .about-us-main {
    padding-top: 36px;
    .introduce {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 36px;
      .introduce-text {
        width: 100%;
      }
      .banner-bg {
        width: 100%;
        display: flex;
        justify-content: center;
        max-height: 720px;
        position: relative;
        height: auto;
        right: 0;
        img {
          height: auto
        }
        .bg-top {
          position: relative;
          transform: translateY(0);
        }
        .bg-bottom {
          height: 100%;
        }
      }

    }
    .team .ceo-team-card {
      flex-direction: column;
      position: relative;
      align-items: flex-end;
      .ceo-card-left .card-bottom {
        position: absolute;
        bottom: 32px;
        left: 40px;
      }
      .ceo-card-right img {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 260px;
        height: 260px;
      }
    }
    .team .team-cards {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
    }
    .global {
      margin-bottom: 0;
    }
  }
}
</style>
