<template>
    <div>
      <div class="icon-container" @click="toggleDropdown">
        <img src="" alt="Иконка" class="icon">
      </div>
      <ul v-if="showDropdown" class="dropdown">
        <li v-for="(link, index) in links" :key="index" @click="selectLink(link)">
          {{ link.text }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDropdown: false,
        links: [
          { path: '/path1', text: 'Akkaunt' },
          { path: '/path2', text: 'Maxfiy va shaxsiy' },
          { path: '/path3', text: 'SoundWave haqida' },
          { path: '/path4', text: 'Akkauntdan chiqish' }
        ]
      };
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      selectLink(link) {
        console.log("Выбранная опция:", link);
        // Ваш код для обработки выбранной опции
      }
    }
  };
  </script>
  
  <style scoped>
  .icon-container {
    cursor: pointer;
    position: relative; /* Добавим это для позиционирования выпадающего списка */
  }
  
  .dropdown {
    display: none;
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0;
    margin: 0;
    list-style-type: none;
    z-index: 1;
    top: 100%; /* Показываем список под иконкой */
    left: 0; /* Выравниваем список по левому краю иконки */
  }
  
  .dropdown li {
    padding: 8px 16px;
  }
  
  .dropdown li:hover {
    background-color: #f9f9f9;
  }
  
  .show {
    display: block;
  }
  </style>
  