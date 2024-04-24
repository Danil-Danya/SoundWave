<template>
    <footer class="footer__app">
        <div class="footer__app-container">
            <div class="footer__content">
                <div class="footer__author">
                    <div class="footer__img-container">
                        <img src="@/assets/images/statics/footer/author.png" alt="Author" class="footer__img">
                    </div>
                    <div class="footer__author-initial">
                        <h2 class="footer__author-song">Song Name</h2>
                        <p class="footer__author-name">Artist</p>
                        <img src="" alt="" class="footer__author-like">
                    </div>
                </div>
                <div class="footer__player">
                    <div class="footer__player-buttons">
                        <img src="@/assets/images/statics/footer/icons/random.svg" alt="Icon" class="footer__icon footer-random">
                        <div class="footer__player-switcher">
                            <img src="@/assets/images/statics/footer/icons/prev.svg" alt="Icon" class="footer__icon footer__prev">
                            <div class="footer__switcher-border" @click="switchPlayAndPause">
                                <img src="@/assets/images/statics/footer/icons/pause.svg" alt="Icon" class="footer__icon footer__switch" v-if="!pause">
                                <img src="@/assets/images/statics/footer/icons/play.svg" alt="Icon" class="footer__icon footer__switch" v-else>
                            </div>
                            <img src="@/assets/images/statics/footer/icons/next.svg" alt="Icon" class="footer__icon footer__next">
                        </div>
                        <img src="@/assets/images/statics/footer/icons/repeat.svg" alt="Icon" class="footer__icon footer-repeat">
                    </div>
                    <div class="footer__progersbar">

                    </div>
                </div>
                <div class="footer__settgings">
                    <div class="footer__settings-icons-container">
                        <img :src="icon" alt="Icon" class="footer__settings-icons" v-for="icon in icons" :key="icon">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@import '@/assets/styles/layout/user/footer.scss';
</style>

<script>
export default {
    data: () => ({
        pause: true,
        icons: [
            require('@/assets/images/statics/footer/icons/queue.svg'),
            require('@/assets/images/statics/footer/icons/volume.svg'),
        ],
    }),

    methods: {
        switchPlayAndPause () {
            this.pause = !this.pause;
        }
    }
}
</script>
