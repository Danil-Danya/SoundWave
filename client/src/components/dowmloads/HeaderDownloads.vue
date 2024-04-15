<template>
    <header class="header">
        <div class="header__container">
            <div class="header__left">
                <h1 class="header__title" ref="title">SoundWave</h1>
                <p class="header__text" ref="text">Слушайте музыку бесплатносо своими любимыми авторами</p>
            </div>
            <div class="header__right">
                <div class="header__image-container" ref="image">
                    <img src="@/assets/images/statics/landing/header/headphones.png" alt="Headphones" class="header__image">
                </div>
            </div>
            <div class="line-container">
                <img class="line" src="@/assets/images/statics/lines/path1.svg" alt="">
            </div>
            <div class="header__bg background-gredient"></div>
        </div>
    </header>
</template>

<script>
import { animationLanding } from '@/scripts/greensock.js';

export default {
    methods: {
        animate () {
            const title = this.$refs.title;
            const text = this.$refs.text;
            const image = this.$refs.image;

            animationLanding.animateHeader(title, text, image);
        }
    },

    mounted () {
        this.$nextTick(() => {
            this.animate()
        })
    },

    activated() {
        this.animate();
    }
}
</script>