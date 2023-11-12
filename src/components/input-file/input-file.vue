<template>
    <div class="upload-box">
        <p>Upload your Files</p>
        <form action="">
            <input class="file-input" type="file" name="file" ref="fileInput" hidden/>
            <div class="icon">
                <img src="" alt="">
            </div>
            <p>Browse File to Upload</p>
        </form>
        <section class="loading-area">
            <li class="row">
                <i class="mdi mdi-upload-file"></i>
            </li>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style src="./style.scss" lang="scss" scoped>

</style>