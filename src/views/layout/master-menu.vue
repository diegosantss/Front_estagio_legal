<template>
    <div class="master-page">
        <component :is="sidebarMenu" ></component>
        <!-- <sidebarMenu></sidebarMenu> -->
        <div class="content">
            <headerLayout/>
            <estagioObrigatorio></estagioObrigatorio>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import sidebarMenu from "../../components/sidebar-menu.vue";
    import headerLayout from "../../components/header-layout.vue";
    import estagioObrigatorio from "../estagio-obrigatorio.vue";

    function isMobile(): boolean {
        return window.innerWidth < 768
    }
</script>

<style lang="scss" scoped>
    .master-page{
        display: flex;
        width: 100%; 
        height: 100vh;
        overflow-y: auto;
    }

    .content{
        height: 100vh;
        width: 100%;
        flex-grow: 1;
        display: flex; 
        flex-direction: column; 
        overflow-y: auto;
    }
</style>