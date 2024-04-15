<template>
    <div class="download__content">
        <div class="download__content-container">
            <h2 class="download__content-title">Скачивайте музыку на любое ваше устройство</h2>
            <div class="download__content-content" ref="trigger">
                <div class="download__content-item" v-for="item in items" :key="item" ref="items">
                    <h3 class="download__content-item-title">{{item.title}}</h3>
                    <router-link to="" class="download__content-link">Скачать</router-link>
                    <img :src="item.image" alt="Sysytem" 
                     :class="item.type === 'mobile' ?
                     'download__content-img-mobile' : ''" 
                     class="download__content-img"
                    >
                </div>
            </div>
            <div class="line-container">
                <img class="download__content-line line" src="@/assets/images/statics/lines/path2.svg" alt="">
            </div>
            <div class="download__content-bg background-gredient"></div>
        </div>
    </div>
</template>

<script>
import { animationLanding } from '@/scripts/greensock.js';

export default {
    data: () => ({
        items: [
            {
                title: 'IOS',
                link: '/server-api/download/?system=ios&data=lastest',
                image: require('@/assets/images/statics/landing/ios.png'),
                type: 'mobile'
            },
            {
                title: 'ANDROID',
                link: '/server-api/download/?system=ios&data=lastest',
                image: require('@/assets/images/statics/landing/android.png'),
                type: 'mobile'
            },
            {
                title: 'WINDOWS',
                link: '/server-api/download/?system=ios&data=lastest',
                image: require('@/assets/images/statics/landing/windows.png')
            },
            {
                title: 'MAC',
                link: '/server-api/download/?system=ios&data=lastest',
                image: require('@/assets/images/statics/landing/mac.png')
            },
        ]
    }),

    methods: {
        animate () {
            const items = this.$refs.items;
            const trigger = this.$refs.trigger;

            const itemClass = items[0].className;

            console.log(itemClass);
            animationLanding.animateDownloadItem(`.${itemClass}`, trigger);
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