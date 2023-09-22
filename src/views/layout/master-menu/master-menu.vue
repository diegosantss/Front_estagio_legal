<template>
    
    <div v-if="isSmallScreen">
      <v-bottom-navigation>
        <bottombarNav></bottombarNav>
      </v-bottom-navigation>
    </div>
    
    <div v-else>
      <v-navigation-drawer :width="200">
        <sidebarMenu></sidebarMenu>
      </v-navigation-drawer>
    </div>

      <v-app-bar class="border-b">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>Meu app</v-app-bar-title>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img
                cover
                src="https://thumbs.dreamstime.com/z/nerd-portrait-young-cheerful-businessman-smiling-36201399.jpg"></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Meu perfil</v-list-item-title>
              </v-list-item>

              <v-list-item prepend-icon="mdi-heart-outline">
                <v-list-item-title>Favoritos</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>
    
    <v-main>
      <!-- <headerLayout/> -->
      <div style="margin: 2%;">
        <router-view></router-view>
      </div>

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
    </v-main>

    
      
    
</template>

<script lang="ts" setup>
    import bottombarNav from "../../../components/mobile/bottombar-nav.vue";
    import sidebarMenu from "../../../components/sidebar-menu/sidebar-menu.vue";
    import headerLayout from "../../../components/header-layout/header-layout.vue";
    import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';

    const isDrawerOpen = ref(false)

    const isSmallScreen = ref(false);

    const icons = reactive([
    'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
    ]);

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