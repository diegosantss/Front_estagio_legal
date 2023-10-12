<template>
    <div class="teste">
        <div class="table-menu">
            <div class="show items">
                show
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="#078640" v-bind="props">
                            10
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) in showOptions" :key="index" :value="index">
                            <v-list-item-title>{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div>
                <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details class="input-search"></v-text-field>
            </div>
            <div>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent width="1024">
                        <template v-slot:activator="{ props }">
                            <v-btn color="#078640" v-bind="props">
                                Filtros
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Filtros</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Nome do aluno"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Nome Concedente"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Matrícula do Aluno"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="8" md="6">
                                            <v-text-field 
                                                label="Data Inicio" type="date"
                                                hint="Data de Inicio de estágio no contrato" persistent-hint
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="8" md="6">
                                            <v-text-field 
                                                label="Data Final" type="date"
                                                hint="Data de Fim de estágio no contrato" persistent-hint
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-select :items="['Obrigatório', 'Não Obrigatório']" label="Tipo Estágio"
                                                required></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                                :items="['TADS', 'Tec.Desenvolvimento de Sistemas', 'Turísmo', 'Pescador', 'Administração', 'Pedagogia', 'Lic.Letras', 'Tec.Mineração', 'Tec.Eventos']"
                                                label="Curso"></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="#078640" variant="text" @click="dialog = false">
                                    Cancelar
                                </v-btn>
                                <v-btn color="#078640" variant="text" @click="dialog = false">
                                    Aplicar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </div>
        </div>
        <div class="data-table">
            <table class="table-container">
                <thead class="header-table">
                    <tr>
                        <td v-for="(column, i) in columns" :key="i">
                            <span>{{ column }}</span>
                        </td>
                    </tr>
                </thead>
                <tbody class="body-table">
                    <tr v-for="(register, i) in registers" :key="i">
                        <td v-for="(key, j) in register" :key="j">
                            <div v-if="key === 'concluído'">
                                <v-chip color="green">
                                    {{ key }}
                                </v-chip>
                            </div>
                            <div v-else-if="key === 'em andamento'">
                                <v-chip color="orange">
                                    {{ key }}
                                </v-chip>
                            </div>
                            <div v-else-if="key === 'recusado'">
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
        <div class="text-center">
            <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const showOptions = ['10', '25', '50', '100'];
const dialog = ref(false);
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
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'em andamento',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Rafael',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'recusado',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
    {
        aluno: 'Diego',
        matricula: 20190796872,
        dataInicio: '10/09/2019',
        dataFim: '10/09/2019',
        movimentacao: 'Inicio de Estágio',
        status: 'concluído',
        curso: 'TADS',
        link: 'redirect',
    },
]);
</script>

<style lang="scss" scoped>
.teste{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.input-search{
    width: 600px;
}

.data-table {
    border-radius: 4px;
    width: 100%;
    max-height: 550px;
    overflow: auto;
    position: relative;
}

.table-container {
    
    border-collapse: collapse;
    width: 100%;
}

.header-table {
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 1;
}

tr:nth-child(odd) {
    background-color: #e0e0e0;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}


td {
    padding: 10px;
}


.table-menu{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
}

@media screen and (max-width: 768px) {
  .table-menu{
    display: flex;
    flex-direction: column;
  }

  .input-search{
    width: 200px;
}
}
</style>