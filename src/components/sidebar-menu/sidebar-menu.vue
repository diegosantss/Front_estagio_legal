<template>
    <v-navigation-drawer
        class="sidebar"
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        
      <div class="header-sidebar">
        <img src="../../assets/Logo-IFPA.png" class="logo-ifpa" alt="">
      </div>
      
      
      
      <v-divider></v-divider>
      
      <v-list density="compact" nav>
          
        <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/home"></v-list-item>
        <v-list-item prepend-icon="mdi-file" title="Inicio de Estágio" value="inicioEstagio" to="/inicio/estagio"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar" title="Fim de Estágio" value="fimEstagio"></v-list-item>
          <v-list-item prepend-icon="mdi-update" title="Acompanhar Processos" value="acompanharProcessos" to="/acompanhar/processos"></v-list-item>
      </v-list>
        <template v-slot:append>
          <div class="footer-sidebar">
            <v-btn
              class="expand-control-btn"
              variant="text"
              :icon=setaMenu
              @click.stop="rail = !rail"
            ></v-btn>
          </div>
        </template>
      </v-navigation-drawer>
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue';
    const drawer = ref(true);
    const rail = ref(true);
    const setaMenu = ref('mdi-chevron-right');

    watch(rail,()=>{
      if(rail.value === false){
        setaMenu.value = 'mdi-chevron-left';
      }else{
        setaMenu.value = 'mdi-chevron-right';
      }
    });
</script>

<style src="./style.scss" lang="scss" scoped>
</style>