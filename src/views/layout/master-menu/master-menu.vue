<template>
    <div class="master-page">
        <component :is="sidebarMenu" ></component>
        <!-- <sidebarMenu></sidebarMenu> -->
        <div class="content">
            <headerLayout/>
            <estagioObrigatorio></estagioObrigatorio>
        </div>
        <bottombarNav/>
    </div>
</template>

<script lang="ts" setup>
    import bottombarNav from "../../../components/mobile/bottombar-nav.vue";
    import sidebarMenu from "../../../components/sidebar-menu/sidebar-menu.vue";
    import headerLayout from "../../../components/header-layout/header-layout.vue";
    import estagioObrigatorio from "../../estagio-obrigatorio/estagio-obrigatorio.vue";

    function isMobile(): boolean {
        return window.innerWidth < 768
    }
</script>

<style src="./style.scss" lang="scss" scoped>

</style>