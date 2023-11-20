<template>
    <v-footer
    class="text-center d-flex flex-column"
    color="#f3f3f5"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0">
        Desenvolvido por Rafael e Diego os brabos do IF
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>IFPA</strong>
      </div>
    </v-footer>
</template>

<script setup lang="ts">
    const icons = [
    'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
    ];
</script>

<style src="./style.scss" lang="scss" scoped>

</style>