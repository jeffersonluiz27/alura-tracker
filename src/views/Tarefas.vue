<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaVazia">
      Você não está muito produtivo hoje :(
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from '../components/Box.vue';

export default defineComponent({
  name: "VTarefas",
  components: { Formulario, Tarefa, Box },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
  }
});

</script>

