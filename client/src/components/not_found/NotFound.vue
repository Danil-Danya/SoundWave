<template>
    <div class="notfound__container">
        <h1 class="notfound__title">SoundWave</h1>
        <div class="notfound__content">
            <h2 class="notfound__num">4</h2>
            <img src="@/assets/images/statics/404/404.png" alt="Zero" class="notfound__image">
            <h2 class="notfound__num">4</h2>
        </div>
        <p class="notfound__text">страница не найдена</p>
        <router-link to="/site/download/ru" class="notfound__link">На главную</router-link>
        <div class="background-gredient"></div>
        <div class="line-container">
            <img src="@/assets/images/statics/lines/path1.svg" alt="Line" class="line">
        </div>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/pages/not_found/notfound.scss';
</style>