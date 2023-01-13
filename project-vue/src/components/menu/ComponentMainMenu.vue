<template>
  <nav>
    <ul class="menu">
      <li v-for="item in menuItems" :key="item.menuItems">
        <router-link v-bind:to="item.url">{{ item.text }}</router-link>
      </li>
  </ul>
</nav>
 </template>
  
  <script>
  export default {
    name: 'ComponentMainMenu',
       props:{
        menuItems: {}
       }
  }
  </script>
  
  <style>
  @import "../../../public/src/css/main-menu.min.css";
  </style>