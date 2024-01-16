<template>
    <div class="info-processo-container">
        <h1 class="title1">Processo De Estágio</h1>
        <v-container>
            <h3>Informações do Processo:</h3>
            <br>
            <v-row>
                <v-col>
                    <div>
                        <h4>Data de Inicio do Processo:</h4>
                        <p>{{ internshipProcess?.startDateProcess }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <h4>Data Fim do Processo:</h4>
                        <p>{{ internshipProcess?.endDateProcess }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <h4>Movimentação:</h4>
                        <p>{{ internshipProcess?.movement }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <h4>Status:</h4>
                        <p>{{ internshipProcess?.status }}</p>
                    </div>
                </v-col>
            </v-row>
            
            <br>
            <h3>Informações do Aluno:</h3>
            <br>
            <v-row>
                <v-col>
                    <div>
                        <h4>Nome:</h4>
                        <p>{{ internshipProcess?.user.name }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <h4>Matrícula:</h4>
                        <p>{{ internshipProcess?.user.registration }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <h4>Email:</h4>
                        <p>{{ internshipProcess?.user.email }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <h4>Curso:</h4>
                        <p>{{ internshipProcess?.user.courseStudy }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <h4>Telefone:</h4>
                        <p>{{ internshipProcess?.user.telefone }}</p>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
    import type { InternshipProcess } from '@/api/internshipProcess.interface';
import axiosInstance from '@/interceptors/axios-interceptor';
    import  axios from 'axios';
    import { ref } from 'vue';
    import  {onMounted}  from 'vue';
    import { useRouter } from 'vue-router';
    

    const router = useRouter();
    const internshipProcessID = router.currentRoute.value.params?.id;
    const internshipProcess = ref<InternshipProcess>();

    onMounted(async () => {
        findinternshipProcessById()
    });

    async function findinternshipProcessById(){
        const response = await axiosInstance.get(`processo/estagio/${internshipProcessID}`)

        internshipProcess.value = response.data;
    }
</script>

<style lang="scss" scoped>
    .title1 {
        text-align: left;
        color: #858796;
        font-size: 1.5rem;
        margin-bottom: 1%;
    }

    .info-processo-container{
        margin: 2%;
    }

</style>