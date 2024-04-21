<template>
    <help />
</template>

<script>
import help from '@/components/help/Help.vue';

export default {
    mounted () {
        document.title = 'SoundWave - getting help';
    },

    components: {
        help
    }
}

</script>