<template>
  <div class="tarifs__content" ref="trigger">
    <h2 class="tarifs__content-title">
      {{ $t('Site.Tarifs.ContentTitle') }}
    </h2>
    <p class="tarifs__content-text" v-for="text in items" :key="text" ref="items">
      {{ text }}
    </p>
    <router-link class="tarifs__content-button" to="">{{ $t('Site.Tarifs.ContentButton') }}</router-link>
  </div>
</template>

<script>
import { animationLanding } from '@/scripts/greensock.js';

export default {
    data() {
        return {
            items: [],
        };
    },

    methods: {
        getLocalList () {
            const messages = this.$i18n.messages;
            const localMessages = messages[this.$route.params.lang];

            this.items = localMessages.Site.Tarifs.ContentText;
        },
        animate () {
            const items = this.$refs.items;
            const trigger = this.$refs.trigger;

            const itemClass = items[0].className;

            animationLanding.animateTarifsItem(`.${itemClass}`, trigger);
        }
    },

    watch: {
        '$route.params.lang': {
            deep: true,
            handler () {
                this.getLocalList();
            }
        }
    },

    mounted () {
      this.getLocalList();
      
        this.$nextTick(() => {
          this.animate();
        })
    },

    activated() {
        this.animate();
    }
};
</script>
