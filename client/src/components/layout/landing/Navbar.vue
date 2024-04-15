<template>
    <div class="landing__navbar">
      <div class="landing__navbar-container">
        <div class="landing__navbar-content">
          <div class="landing__navbar-logo">
            <router-link to="/site/download/ru" class="landing__navbar-logolink">
              <img src="@/assets/images/statics/landing/logo.svg" alt="Logo" class="landing__navbar-img">
              <h2 class="landing__navbar-logotext">SoundWave</h2>
            </router-link>
          </div>
          <div class="landing__navbar-navigation">
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
     linksLanding: [
        {
          path:'/site/download/ru',
          text:'Скачать'
        },
        {
          path:'/services',
          text:'Справка'
        },
        {
          path:'/site/plans/ru',
          text:'Тарифы'
        },
      ],
      linksAuth:[
        {
          path:'/signup',
          text:'Регистрация'
        },
        {
          path:'/signin',
          text:'Войти'
        },
      ]
    }),
}
</script>