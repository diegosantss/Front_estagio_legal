<template>
    <div class="table-menu">
            <div class="show-items">
                <span>show</span>
                <div>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="#078640" v-bind="props">
                                {{ showItems }}
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in showOptions" :key="index" :value="index">
                                <v-list-item-title @click="defineShowItems(Number(item))">{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </div>
            <div class="input-search">
                <v-text-field label="Search" single-line hide-details v-model="inputSearch"></v-text-field>
                <v-btn append-icon="mdi-magnify" color="#078640" @click="findByQuery"></v-btn>
            </div>
            <div class="btn-filtros">
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent width="1024">
                        <template v-slot:activator="{ props }">
                            <v-btn color="#078640" v-bind="props" class="btn-teste">
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
                                            <v-text-field label="Nome do aluno" v-model="filtros.nameAluno"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Nome Concedente" v-model="filtros.nomeConcedente"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Matrícula do Aluno" v-model="filtros.matriculaAluno"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="8" md="6">
                                            <v-text-field 
                                                label="Data Inicio" type="date"
                                                hint="Data de Inicio de estágio no contrato" persistent-hint
                                                v-model="filtros.dataInicioEstagio"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="8" md="6">
                                            <v-text-field 
                                                label="Data Final" type="date"
                                                hint="Data de Fim de estágio no contrato" persistent-hint
                                                v-model="filtros.dataFimestagio"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-select 
                                                :items="['Obrigatório', 'Não Obrigatório']"
                                                label="Tipo Estágio"
                                                v-model="filtros.tipoEstagio"
                                                required
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <v-autocomplete
                                                :items="['TADS', 'Tec.Desenvolvimento de Sistemas', 'Turísmo', 'Pescador', 'Administração', 'Pedagogia', 'Lic.Letras', 'Tec.Mineração', 'Tec.Eventos']"
                                                label="Curso"
                                                v-model="filtros.cursoAluno"
                                            ></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                    <v-btn color="#078640" @click="limparFiltros">Limpar Filtros</v-btn>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="#078640" variant="text" @click="dialog = false">
                                    Cancelar
                                </v-btn>
                                <v-btn color="#078640" variant="text" @click="findProcess">
                                    Aplicar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { ref, reactive, onMounted, watch } from 'vue';
    import  axios from 'axios';
    import {useDataTableStore} from '../../stores/processDataTable.store';
    import  {storeToRefs} from 'pinia';

    const store = useDataTableStore();
    const  {atualizarFiltros, atualizarInternshipProcessRegisters} = store
    const {showItems,page,filtros} = storeToRefs(store);

    const showOptions:string[] = ['10', '25', '50', '100'];

    enum TypeRequest{
        FindByQuery,
        FindByFilter
    }
    
    const inputSearch = ref('');
    const dialog = ref(false);
    const lasttypeRequest = ref<TypeRequest>(TypeRequest.FindByFilter);

    const internshipProcess = reactive([]);

    onMounted(async () => {
        await findProcess();
    });

    watch(page, () => {
        if(lasttypeRequest.value === TypeRequest.FindByFilter){
            console.log('mudei pra filter')
            findProcess()
        }else if(lasttypeRequest.value === TypeRequest.FindByQuery){
            console.log('mudei pra  query')
            findByQuery()
        }
    });

    async function findProcess(){
        dialog.value = false;
        const response = await axios.get('http://localhost:3001/processo/estagio/filter',{
            params:{
                'user[name]':filtros.value.nameAluno,
                'user[registration]':filtros.value.matriculaAluno,
                startDateProcess:filtros.value.dataInicioEstagio,
                endDateProcess:filtros.value.dataFimestagio,
                page:page.value,
                pageSize: showItems.value
            }
        })

        console.log(response.data);
        atualizarInternshipProcessRegisters(response.data);
        inputSearch.value = '';
        lasttypeRequest.value = TypeRequest.FindByFilter;
        
    }

    function limparFiltros(){
        atualizarFiltros({
            nameAluno: null,
            nomeConcedente: null,
            matriculaAluno: null,
            dataInicioEstagio: null,
            dataFimestagio: null,
            tipoEstagio: null,
            cursoAluno: null,
        });
    }

    async function findByQuery(){
        const response = await axios.get('http://localhost:3001/processo/estagio/findBy',{
            params:{
                query: inputSearch.value,
                page: page.value,
                pageSize: showItems.value
            }
        })

        atualizarInternshipProcessRegisters(response.data);
        lasttypeRequest.value = TypeRequest.FindByQuery;
    }

    const defineShowItems = (value: number) => {
        showItems.value = value;
        findProcess();
    };

    
</script>

<style lang="scss" scoped>

span{
    margin-right: 10px;
}

.table-menu{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
}

.input-search{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.show-items{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
}

.btn-filtros{
    width: 10%;
}

@media screen and (max-width: 768px) {
    .table-menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .input-search{
        width: 60%;
    }

    .show-items{
        flex-direction: column;
        align-items: center;
    }
}


</style>