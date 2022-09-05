<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <div class="has-text-centered">
        
      <button class="button" @click="alterarTema">
      <div v-html="iconeBotao"></div>
      <div class="buttonText">{{textoBotao}}</div>
      </button>
      
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <RouterLink to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  computed: {
    /* textoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Dark ON';
      }
      return 'Dark OFF';
    }, */
    iconeBotao() {
      if (this.modoEscuroAtivo) {
        return '<i class="fas fa-moon"></i>';
      }
      return '<i class="fas fa-sun"></i>';
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoTemaAlterado", this.modoEscuroAtivo);
    },
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: flex-start;
}

.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #faf0ca;
}

.link.router-link-active {
  color: #faf0ca;
}

.button{
 background-color: transparent;
 border: none;
 box-sizing: border-box;
 color: #fff;
 flex-direction: column;
}

.button:focus {
  box-shadow: none;
}

.buttonText{
    margin-left: 8px;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
