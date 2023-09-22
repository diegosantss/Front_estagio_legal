<template>
  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="value"
      active
      color="teal"
      class="bottom-navigation"
    >
    
      <v-btn>
        <v-icon>mdi-home</v-icon>

        <span class="span-button">home</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-heart</v-icon>

        <span class="span-button">Inicio de Estágio</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-map-marker</v-icon>

        <span class="span-button">Fim de Estágio</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-history</v-icon>

        <span class="span-button">Acompanhar</span>
        <span class="span-button">Processos</span>
      </v-btn>

    </v-bottom-navigation>
  </v-layout>
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
 .span-button{
  font-size: 0.6rem;
 }
</style>