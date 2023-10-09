<template>
    <div class="table-menu">
        show
    </div>
    <div class="data-table">
        <table class="table-container">
            <thead class="header-table">         
                <tr>
                    <td v-for="(column,i) in columns" :key="i">
                        <span>{{ column }}</span>
                    </td>
                </tr>
            </thead>
            <tbody class="body-table">
                <tr v-for="(register,i) in registers" :key="i">
                    <td v-for="(key,j) in register" :key="j">
                        <div v-if="key==='concluído'">
                            <v-chip color="green">
                                {{ key }}
                            </v-chip>
                        </div>
                        <div v-else-if="key==='em andamento'">
                            <v-chip color="orange">
                                {{ key }}
                            </v-chip>
                        </div>
                        <div v-else-if="key==='recusado'">
                            <v-chip color="red">
                                {{ key }}
                            </v-chip>
                        </div>
                        <div v-else-if="key === register.link">
                            <v-icon icon="mdi-file" style="color: #078640;"></v-icon>
                        </div>
                        <div v-else>
                            <span>{{ key }}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="pageable-table">
        <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"
        ></v-pagination>
    </div>
</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue';
    const itemsPerPage = ref(50);
    const page = ref(1);
    const columns = reactive([
        'Aluno',
        'Matricula',
        'Data Inicio',
        'Data Fim',
        'Movimentação',
        'Status',
        'Curso',
        'Link'
    ]);
    const registers = reactive([
        {
            aluno: 'Rafael',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        },
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'em andamento',
            curso: 'TADS',
            link:'redirect',
        },
        {
            aluno: 'Rafael',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'recusado',
            curso: 'TADS',
            link:'redirect',
        },
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        },
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        },  
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        },
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        },
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        {
            aluno: 'Diego',
            matricula: 20190796872,
            dataInicio: '10/09/2019',
            dataFim: '10/09/2019',
            movimentacao: 'Inicio de Estágio',
            status:'concluído',
            curso: 'TADS',
            link:'redirect',
        }, 
        ]);
</script>

<style lang="scss" scoped>
.data-table {
    border-radius: 4px;
    width: 100%;
    max-height: 450px;
    overflow: auto;
    position: relative;
}

.table-container {
  overflow-y: auto;
  border-collapse: collapse;
  width: 100%;
}

.header-table {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1;
}


.footer-table {
    position: sticky;
    bottom: 0;
    background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #e0e0e0; 
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}


td {
  padding: 10px;
  /* border: 1px solid #ddd; */
}

.body-table{
    height: 500px;
}
</style>