<template>
    <nav class="navbar__app">
      <div class="navbar__app-container">
        <div class="navbar__content">
          <div class="navbar__search">
            <img src="@/assets/images/statics/navbar/icon/search.svg" alt="Icon" class="navbar__search-icon">
            <input type="text" placeholder="Sanatkorlar, qo'shiqlar yoki podkastlar" class="navbar__search-bar">
          </div>
          <div class="navbar__user">
            <img src="@/assets/images/statics/navbar/avatar.png" alt="Avatar" class="navbar__user-avatar">
            <p class="navbar__user-name">{{user ? user.username : 'Войти'}}</p>
            <img src="@/assets/images/statics/navbar/icon/dropdown.svg" alt="Arrow" class="navbar__settings">
          </div>
        </div>
      </div>
    </nav>
</template>

<style lang="scss">
  @import '@/assets/styles/layout/user/navbar.scss'; 
</style>

<script>
  export default {
  data: () => ({
    links: [
        {
            path: "",
            text: "Akkaunt"
        },
        {
            path: "",
            text: "Maxfiy va shaxsiy"
        },
        {
            path: "",
            text: "SoundWave haqida"
        },
        {   path: "",
            text: "Akkauntdan chiqish"
        }
    ],
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user : ''
  }),
  async mounted () {
    const user = localStorage.getItem('user');
  }
}
</script>