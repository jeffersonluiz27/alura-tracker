<template>
    <section>
        <strong :class="cor" >{{ tempoDecorrido }}</strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'CCronometro',
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0,
        },
        cor:{
            type: String,
        }
    },

    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19)
        }
    },
})
</script>

<style scoped>
.display {
    color: var(--texto-primario);
}

.mainDisplay{
    color: var(--texto-secundario);
}
</style>