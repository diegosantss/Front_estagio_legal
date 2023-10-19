<template>
  <div class="teste">
    <v-carousel :show-arrows="false"
    cycle
    height="300"
    hide-delimiter-background
    hide-delimiters
    
  >
  <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
  </div>  
</template>

<script lang="ts" setup>
  const items = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
    ]
</script>

<style src="./style.scss" lang="scss" scoped>
</style>