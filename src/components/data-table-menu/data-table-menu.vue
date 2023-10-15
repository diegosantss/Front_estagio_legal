<template>
    <div class="table-menu">
            <div class="show-items">
                <span>show</span>
                <div class="dropdown-show-itens">
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
            </div>
            <div class="input-search">
                <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
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
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    const showOptions = ['10', '25', '50', '100'];
    const dialog = ref(false);
</script>

<style lang="scss" scoped>

.table-menu{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
}

.input-search{
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