<template>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
      >
        

        

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>

        <v-divider></v-divider>

          <template v-slot:append >
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
              style="position: absolute; bottom: 5%; right: 40%;"
            ></v-btn>
          </template>
        
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const drawer = ref(true);
  const rail = ref(true);
    // import { reactive } from 'vue';
    // const options = reactive([
    //   {name:'Inicio Estagio',icon: 'mdi-plus-outline', router: '/estagio/naoobrigatorio'},
    //   {name:'Fim Estagio',icon: 'mdi-delete', router: '/estagio/naoobrigatorio'}
    // ]);
</script>

<style src="./style.scss" lang="scss" scoped>
</style>