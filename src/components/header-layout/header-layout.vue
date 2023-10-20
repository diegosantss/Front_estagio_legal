<template>
    <v-app-bar class="border-b">
      <v-app-bar-title></v-app-bar-title>

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
              <v-list-item>
                <v-btn flat to="/" prepend-icon="mdi-account-outline" style="text-transform: capitalize; width: 100%; display: flex; justify-content: flex-start;">Meu perfil</v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn flat to="/" prepend-icon="mdi-logout" style="text-transform: capitalize; width: 100%; display: flex; justify-content: flex-start;">Sair</v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>
</template>

<script lang="ts" setup>

</script>

<style src="./style.scss" lang="scss" scoped>
    
</style>