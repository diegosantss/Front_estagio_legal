<template>
    
    <div v-if="isSmallScreen">
      <v-bottom-navigation>
        <bottombarNav></bottombarNav>
      </v-bottom-navigation>
    </div>
    
    <div v-else>
      <sidebarMenu></sidebarMenu>
    </div>

    <headerLayout/>
    
    <v-main>
      
      <div id="app-content">
        <router-view></router-view>
      </div>

      
      <footerLayout/>
    </v-main>

</template>

<script lang="ts" setup>
    import bottombarNav from "../../../components/mobile/bottombar-nav.vue";
    import sidebarMenu from "../../../components/sidebar-menu/sidebar-menu.vue";
    import headerLayout from "../../../components/header-layout/header-layout.vue";
    import footerLayout from "../../../components/footer-layout/footer-layout.vue";
    import { ref, onMounted, onBeforeUnmount } from 'vue';


    const isSmallScreen = ref(false);

    const checkScreenSize = () => {
      isSmallScreen.value = window.innerWidth <= 768; 
    };

    onMounted(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkScreenSize);
    });
</script>

<style src="./style.scss" lang="scss" scoped>

</style>