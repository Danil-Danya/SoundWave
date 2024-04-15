<template>
    <div class="table__content">
      <h2 class="table__content-title">Узнай наши тарифы и цены</h2>
       <!--сделать p-->
      <div class="table__content-table">
        <div class="table__content-row table__content-header">
          <div class="table__content-cell">Тарифный план</div>
          <div class="table__content-cell">Описание тарифного плана</div>
          <div class="table__content-cell">Цена</div>
          <div class="table__content-cell">Скидки</div>
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
  export default {
    data() {
      return {
        tariffs: [
          {
            name: "Личный тариф",
            duration: "4517 Washington Ave. Manchester, Kentucky 394...",
            price: "25000 UZS",
            sale: "Нет акций",
          },
          {
            name: "Тариф для семьи",
            price: "50000 UZS",
            duration: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
            sale: "10%",
          },
          {
            name: "Подарочный тариф",
            price: "24000 UZS",
            duration: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
            sale: "Нет акций",
          },
        ],
      };
    },
  };
  </script>