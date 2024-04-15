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
import ContentTarifs from "../components/Tarifs/ContentTarifs.vue";
import HeaderTarifs from "../components/Tarifs/HeaderTarifs.vue";
import TableTarifs from "../components/Tarifs/TableTarifs.vue";

export default {
    components:{
        ContentTarifs,
        HeaderTarifs,
        TableTarifs
    }
};
</script>