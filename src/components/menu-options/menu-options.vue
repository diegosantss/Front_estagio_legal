<template>
    <div>
        <nav>
          <ul>
            <li v-for="({name, icon, router}, i) in options" :key="i">
              <v-icon class="icone">{{icon}}</v-icon>
              <router-link :to="router">{{ name }}</router-link>
            </li>
          </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue';
    const options = reactive([
      {name:'Inicio Estagio',icon: 'mdi-plus-outline', router: '/estagio/naoobrigatorio'},
      {name:'Fim Estagio',icon: 'mdi-delete', router: '/estagio/naoobrigatorio'}
    ]);
</script>

<style src="./style.scss" lang="scss" scoped>
</style>