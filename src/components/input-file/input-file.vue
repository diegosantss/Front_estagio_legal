<template>
    <div class="upload-box">
        <p>Upload your Files</p>
        <form>
            <input class="file-input" type="file" name="file" ref="files" @change="uploadFile" multiple hidden />
                <div class="icon" @click="openFileInput">
                    <img src="../../assets/cloud-uploading.png" />
                 </div>
    <p>Browse File to Upload</p>
  </form>
        <section class="loading-area">
            <li class="row">
                <i class="mdi mdi-file-document"></i>
                <div class="content">
                    <div class="details">
                        <span class="name">Auto-avaliação - Aluno</span>
                        <span class="percent">25%</span>
                    </div>
                    <div class="loading-bar">
                        <div class="loading"></div>

                    </div>

                </div>
            </li>
        </section>
        
        <section class="uploaded-area">
            <li class="row">
               <div class="content upload">
                    <i class="mdi mdi-file-document"></i>
                    <div class="details">
                        <span class="name">Avaliação - Supervisor</span>
                        <span class="size">100%</span>
                    </div>
               </div> 
               <i class="mdi mdi-check-bold"></i>
            </li>
        </section>
        <section class="loading-area">
            <li class="row">
                <i class="mdi mdi-file-document"></i>
                <div class="content">
                    <div class="details">
                        <span class="name">Avaliação - Orientador</span>
                        <span class="percent">75%</span>
                    </div>
                    <div class="loading-bar">
                        <div class="loading"></div>

                    </div>

                </div>
            </li>
        </section>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'


const files = ref();
const uploadFiles = [];
const openFileInput = () => {
  files.value.click();
};
    const showProgress = false;
    const selectedFiles: any[] = [];
      function uploadFile (){
        selectedFiles.push(files.value.files);
        console.log('Arquivos selecionados:', selectedFiles);

        // if(!file) return;
        // const fileName = (file.name.length >= 12) ? file.name.substring(0, 13) + '... .' + file.name.split('.')[1] : file.name;
        // const formData = new FormData();
        // formData.append("file", file);
        // this.files.push({name: fileName, loading: 0});
        // this.showProgress = true;      
       }

</script>

<style src="./style.scss" lang="scss" scoped>

</style>