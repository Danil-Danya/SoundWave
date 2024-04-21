<template>
    <notFound />
</template>

<script>
import notFound from "../components/not_found/NotFound.vue";

export default {
    components: {
        notFound
    },

    mounted () {
        document.title = 'SoundWave - not a found';
    }
}

</script>