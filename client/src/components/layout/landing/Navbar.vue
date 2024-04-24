<template>
    <div class="landing__navbar" ref="navbar">
      <div class="landing__navbar-container">
        <div class="landing__navbar-content">
          <div class="landing__navbar-logo">
            <router-link to="/site/download/ru" class="landing__navbar-logolink">
              <img src="@/assets/images/statics/landing/logo.svg" alt="Logo" class="landing__navbar-img">
              <h2 class="landing__navbar-logotext">SoundWave</h2>
            </router-link>
          </div>
          <nav class="landing__navbar-navigation">
            <ul class="landing__navbar-ul">
              <li v-for="link in linksLanding" :key="link">
                <router-link :to="link.path" class="landing__navbar-link">
                  <p class="landing__navbar-text">{{ link.text }}</p>
                </router-link>
              </li>
              <span class="landing__navbar-vline"></span>
              <li v-for="link in linksAuth" :key="link">
                <router-link :to="link.path" class="landing__navbar-link">
                  <p class="landing__navbar-text">{{ link.text }}</p>
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="landing__navbar-mobile">
            <div class="landing__navbar-button-container">
              <div class="landing__navbar-button" @click.prevent.stop="toggleBurgerMenu" ref="button">
                <span class="landing__navbar-button-line" v-for="line in 3" :key="line" ref="line"></span>
              </div>
            </div>
            <transition name="lendingNavbar">
              <nav class="landing__navbar-mobile-container" v-show="mobileBar">
                <ul class="landing__navbar-mobile-ul">
                  <li v-for="link in linksLanding" :key="link" @click="toggleBurgerMenu">
                    <router-link :to="link.path" class="landing__navbar-link">
                      <p class="landing__navbar-text">{{ link.text }}</p>
                    </router-link>
                  </li>
                  <li v-for="link in linksAuth" :key="link" @click="toggleBurgerMenu">
                    <router-link :to="link.path" class="landing__navbar-link">
                      <p class="landing__navbar-text">{{ link.text }}</p>
                    </router-link>
                  </li>
                </ul>
              </nav>
            </transition>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/layout/landing/navbar.scss';
</style>

<script>
export default {
  data: () => ({
    linksLanding: [],
    linksAuth: [],
    mobileBar: false
  }),
  methods: {
    changeLangInLinks () {
      const currentLang = this.$route.params.lang;

      this.linksLanding.forEach(link => {
        const basePath = link.path.replace(`/${currentLang}`, '');
        const newLink = `${basePath}/${currentLang}`;

        link.path = newLink;
     });
    },

    getLocalList () {
      const messages = this.$i18n.messages;
      const localMessages = messages[this.$route.params.lang];

      this.linksLanding = localMessages.Site.Navbar.NavbarLanding;
      this.linksAuth = localMessages.Site.Navbar.LinksAuth;

      console.log(this.linksLanding);
    },

    toggleBurgerMenu () {
      const line = this.$refs.line;

      this.mobileBar = !this.mobileBar;

      if (this.mobileBar) {
        document.body.style.overflow = 'hidden';

        line.forEach(item => {
          item.style.position = 'absolute';
        });

        line[0].style.transform = 'rotate(45deg)';
        line[1].style.transform = 'rotate(-45deg)';
        line[2].style.display = 'none';
      }
      else {
        document.body.style.overflow = '';

        line.forEach(item => {
          item.style.position = 'relative';
        });

        line[0].style.transform = 'rotate(0)';
        line[1].style.transform = 'rotate(0)';
        line[2].style.display = 'block';
      }
    },
  },

  watch: {
    '$route.params.lang': {
      deep: true,
      handler () {
        this.getLocalList();
        this.changeLangInLinks();
      }
    }
  },

  mounted () {
    this.getLocalList();
    this.changeLangInLinks();
  }
}
</script>