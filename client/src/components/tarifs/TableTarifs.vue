<template>
    <div class="table__content">
      <h2 class="table__content-title">{{ $t('Site.Tarifs.Table.ContentTitle') }}</h2>
       <!--сделать p-->
      <div class="table__content-table">
        <div class="table__content-row table__content-header">
          <div class="table__content-cell">{{ $t('Site.Tarifs.Table.ContentCellPlan') }}</div>
          <div class="table__content-cell">{{ $t('Site.Tarifs.Table.ContentCellTarif') }}</div>
          <div class="table__content-cell">{{ $t('Site.Tarifs.Table.ContentCellPrice') }}</div>
          <div class="table__content-cell">{{ $t('Site.Tarifs.Table.ContentCellSales') }}</div>
        </div>
  
        <div class="table__content-row" v-for="(tariff, index) in tariffs" :key="index">
          <div class="table__content-cell">{{ tariff.name }}</div>
          <div class="table__content-cell">{{ tariff.duration }}</div>
          <div class="table__content-cell">{{ tariff.price }}</div>
          <div class="table__content-cell">{{ tariff.sale }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Умид, поле дата ты можешь использовать стрелочной функцией
  // data: () => ({})

  export default {
    data: () => ({
      tariffs: [],
    }),

    methods: {
      getLocalList () {
        const messages = this.$i18n.messages;
        const localMessages = messages[this.$route.params.lang];

        this.tariffs = localMessages.Site.Tarifs.Table.ContentTarifs;
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
    },
  };
  </script>