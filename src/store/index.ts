import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { uuid } from "vue-uuid";
import { createStore, Store } from "vuex";

interface Estado {
  projetos:IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state:{
    projetos: [
      {
        id: uuid.v4(),
        nome: 'TypeScript'
      },
      {
        id: uuid.v4(),
        nome: 'Vue'
      },
      {
        id: uuid.v4(),
        nome: 'Vuex'
      }
    ]
  }
})