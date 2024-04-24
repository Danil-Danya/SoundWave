<template>
    <section class="download">
        <HeaderDownload />
        <ContentDownload />
    </section>
</template>

<style lang="scss">
@import '@/assets/styles/layout/landing/header.scss';
@import '@/assets/styles/pages/landing-download/headerDownload.scss';
@import '@/assets/styles/pages/landing-download/contentDownload.scss';
</style>

<script>
import HeaderDownload from '@/components/dowmloads/HeaderDownloads.vue';
import ContentDownload from '@/components/dowmloads/ContentDownload.vue';

export default {
    components: {
        HeaderDownload,
        ContentDownload
    },

    mounted () {
        document.title = 'Download - SoundWave';
    }
}
</script>