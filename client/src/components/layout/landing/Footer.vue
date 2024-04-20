<template>
    <footer class="landing__footer">
      <div class="landind__footer-container">
        <div class="landing__footer-content">
          <div class="landing__footer-column" v-for="link in links" :key="link">
            <h3 class="landing__footer-title">{{ link.name }}</h3>
            <div class="landing__footer-item" v-for="link in link.links" :key="link">
              <router-link :to="link.path" >{{ link.text }}</router-link>
            </div>
          </div>
          <div class="landing__footer-media">
            <a href="https://t.me/soundwaveapp">
              <img src="@/assets/images/statics/landing/telegram.svg" alt="Logo" class="landing__footer-img">
            </a>
            <a href="https://www.instagram.com/soundwave__app/">
              <img src="@/assets/images/statics/landing/instagram.svg" alt="Logo" class="landing__footer-img">
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FSoundWaveApp1">
              <img src="@/assets/images/statics/landing/twitter.svg" alt="Logo" class="landing__footer-img">
            </a>
            <span class="landing__footer-line"></span>
            <p class="landing__footer-license">{{this.$t('Site.Footer.FooterLicense')}}</p>
            <div class="landing__footer-local">
              <div class="landing__local-now" @click="showLangList">
                <img :src="locales[0].image" alt="Flag" class="landing__local-img" v-if="locales[0].lang === $route.params.lang">
                <img :src="locales[1].image" alt="Flag" class="landing__local-img" v-if="locales[1].lang === $route.params.lang">
                <img :src="locales[2].image" alt="Flag" class="landing__local-img" v-if="locales[2].lang === $route.params.lang">
              </div>
              <transition name="local">
                <div class="landing__footer-local-list" v-show="local">
                  <ul class="landing__local-list-ul">
                    <li class="landing__local-list-item" v-for="local in locales" :key="local">
                      <router-link :to="`${$route.path.replace($route.params.lang, '')}${local.lang}`" @click="showLangList" class="landing__local-list-link">
                        <img :src="local.image" alt="Flag" class="landing__local-img">
                        <p class="landing__local-text">{{ local.text }}</p>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<style lang="scss">
    @import '@/assets/styles/layout/landing/navbar.scss';

    .landing__footer-local {
      position: relative;

      &-list {
        position: absolute;
        top: -150px;
        left: 0;
        background: rgb(44, 44, 45);
        width: 200px;
        border-radius: 10px;
        min-height: 1px;
        transition: height 0.3s;
      }
    }

    .landing__local {
      &-now {
        cursor: pointer;
        margin-top: 10px;
      }
      &-list {
        &-link {
          padding: 10px;
          display: flex;
          gap: 15px;
          font-family: $mm;
          transition: all 300ms;
          cursor: pointer;

          &:hover {
            background: rgb(36, 36, 36);
            border-radius: 10px;
          }
        }
      }
    }

    .local-enter-active,
    .local-leave-active {
      transition: all 0.5s ease;
    }

    .local-enter-from,
    .local-leave-to {
      opacity: 0;
      height: 0;
    }
      
</style>

<script>
export default {
  data: () => ({
    links: [],
    locales: [
      {
        lang: 'ru',
        text: 'Русский',
        image: require('@/assets/images/statics/locales/russia.svg')
      },
      {
        lang: 'uz',
        text: 'Uzbek',
        image: require('@/assets/images/statics/locales/uzbek.svg')
      },
      {
        lang: 'eng',
        text: 'English',
        image: require('@/assets/images/statics/locales/britania.svg')
      },
    ],
    local: false
  }),

  methods: {
    showLangList () {
      this.local = !this.local;
    },
    
    getLocalList () {
      const messages = this.$i18n.messages;
      const localMessages = messages[this.$route.params.lang];

      this.links = localMessages.Site.Footer.FooterLinks;

      this.$i18n.locale = this.$route.params.lang;
    }
  },

  watch: {
    '$route.params.lang': {
      deep: true,
      handler () {
        this.getLocalList();
      }
    }
  },

  mounted () {
    this.getLocalList();
  }
}
</script>