<template>
    <div class="help">
        <div class="help__container">
        <div class="background-gredient"></div>
            <div class="help__accordione">
                <div class="help__item" v-for="(item, index) in items" :key="item">
                    <div class="help__icon-container">
                        <img src="@/assets/images/statics/help/toggle.svg" alt="Toggle" class="help__icon" ref="icons" @click="toggleAnswer(index)">
                    </div>
                    <div class="help__text-container">
                        <h2 class="help__title">{{ item.question }}</h2>
                        <transition name="help">
                            <p class="help__text" v-show="items[index].text">{{ item.answer }}</p>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="line-container">
                <img class="line" src="@/assets/images/statics/lines/path4.svg" alt="Line">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/pages/landing-help/help.scss';
</style>

<script>

export default {
    data: () => ({
        items: []
    }),

    methods: {
        toggleAnswer (index) {
            this.items[index].text = !this.items[index].text;

            if (this.items[index].text) {
                this.$refs.icons[index].style.transform = 'rotate(45deg)';
            }

            if (!this.items[index].text) {
                this.$refs.icons[index].style.transform = 'rotate(-90deg)';
            }
        },

        getLocalList () {
            const messages = this.$i18n.messages;
            const localMessages = messages[this.$route.params.lang];

            this.items = localMessages.Site.Help.HelpItems;
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
            this.toggleAnswer(0);
        })
    }
}

</script>