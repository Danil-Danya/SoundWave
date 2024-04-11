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
            <router-link to="/site/download/ru">
              <img src="@/assets/images/statics/landing/telegram.svg" alt="Logo" class="landing__footer-img">
            </router-link>
            <router-link to="/site/download/ru">
              <img src="@/assets/images/statics/landing/instagram.svg" alt="Logo" class="landing__footer-img">
            </router-link>
            <router-link to="/site/download/ru">
              <img src="@/assets/images/statics/landing/twitter.svg" alt="Logo" class="landing__footer-img">
            </router-link>
            <canvas class="landing__footer-line"></canvas>
            <p class="landing__footer-license">Лицензия пренадлежит компании SoundWave, зарегистрированной в 2024 году</p>
          </div>
        </div>
      </div>
    </footer>
</template>

<style lang="scss">
    @import '@/assets/styles/layout/landing/navbar.scss';
</style>
<script>
export default {
  data: () => ({
    links: [
      {
        name:'Кампания',
        links:[
          {
            path:'/site/autors',
            text:'Авторы'
          },
          {
            path:'/site/services',
            text:'Справка'
          },
          {
            path:'/site/policy',
            text:'Соглашение'
          }
        ]
      },
      {
        name:'Тарифы',
        links:[
          {
            path:'/site/family',
            text:'Для семьи'
          },
          {
            path:'/site/forme',
            text:'Для меня'
          },
          {
            path:'/site/gift',
            text:'Подарочный'
          },
        ]
      },
      {
        name:'Авторизация',
        links:[
          {
            path:'/site/signin',
            text:'Войти'
          },
          {
            path:'/site/signup',
            text:'Регистрация'
          },
        ]
      }
    ]
  }),
}
</script>