<template>
    <section class="tarifs">
        <HeaderTarifs />
        <main class="main">
            <HeaderTarifs />
            <TableTarifs />
        </main>
    </section>
</template>

<style lang="scss">
@import "@/assets/styles/tarifs/headerTarifs.scss";
@import "@/assets/styles/tarifs/contentTarifs.scss";
@import "@/assets/styles/tarifs/tableTarifs.scss";
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