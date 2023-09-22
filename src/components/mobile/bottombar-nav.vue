<template>
  
    <v-bottom-navigation
      v-model="value"
      active
      color="teal"
      class="bottom-navigation"
    >
      <v-btn>
        <v-icon>mdi-history</v-icon>

        Recents
      </v-btn>

      <v-btn>
        <v-icon>mdi-heart</v-icon>

        Favorites
      </v-btn>

      <v-btn>
        <v-icon>mdi-map-marker</v-icon>

        <span>Nearby</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-map-marker</v-icon>

        <span>Nearby</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-map-marker</v-icon>

        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
  
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const value = ref(1);

const sheet = ref(false); 
const tiles = reactive([
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
]);

</script>

<style lang="scss" scoped>
</style>