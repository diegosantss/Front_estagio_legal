<template>
    <div>
        <nav class="option-nav">
            <ul>
                <li>
                    <p>Inicio de Estagio</p>
                    <div class="expansive-options">
                        <RouterLink to="/estagio/obrigatorio">Obrigatório</RouterLink>
                        <RouterLink to="/estagio/naoobrigatorio">Não Obrigatório</RouterLink>
                    </div>
                </li>
                <li>
                    <p>Fim de Estágio</p>
                    <div class="expansive-options">
                        <RouterLink to="/estagio/obrigatorio">Obrigatório</RouterLink>
                        <RouterLink to="/estagio/naoobrigatorio">Não Obrigatório</RouterLink>
                    </div>
                </li>
                <li>
                    <p>Acompanhar Processos</p>
                </li>
                <li>
                    <p>Configurações</p>
                </li>
        </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>

</script>

<style src="./style.scss" lang="scss" scoped>
</style>