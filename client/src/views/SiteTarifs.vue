<template>
    <section class="tarifs">
        <HeaderTarifs />
        <main class="main">
            <ContentTarifs />
            <TableTarifs />
        </main>
    </section>
</template>

<style lang="scss">
@import "@/assets/styles/layout/landing/header.scss";

@import "@/assets/styles/pages/landing-tarifs/headerTarifs.scss";
@import "@/assets/styles/pages/landing-tarifs/contentTarifs.scss";
@import "@/assets/styles/pages/landing-tarifs/tableTarifs.scss";
</style>

<script>
import ContentTarifs from "../components/tarifs/ContentTarifs.vue";
import HeaderTarifs from "../components/tarifs/HeaderTarifs.vue";
import TableTarifs from "../components/tarifs/TableTarifs.vue";

export default {
    components:{
        ContentTarifs,
        HeaderTarifs,
        TableTarifs
    },

    mounted () {
        document.title = 'SoundWave - tarifs info';
    }
};
</script>