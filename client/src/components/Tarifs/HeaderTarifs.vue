<template>
   <header class="header">
        <div class="header__container">
            <div class="header__content">
                <h1 class="header__title" ref="title">Получи музыку по выгодному тарифу</h1>
                <p class="header__text" ref="text">Слушай музыку без ограничений и рекламы.</p>
            </div>
            <div class="line-container">
                <img class="line" src="@/assets/images/statics/lines/path1.svg" alt="">
            </div>
            <div class="background-gredient"></div>
        </div>
   </header>
</template>

<script>
import { animationLanding } from '@/scripts/greensock.js';

export default {
    mounted () {
        const title = this.$refs.title;
        const text = this.$refs.text;

        animationLanding.animateHeader(title, text);
    }
}
</script>