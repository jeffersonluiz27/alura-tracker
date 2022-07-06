<template>
    <button class="button" :disabled="onDisabled">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: 'BotaoPadrao',

    props: {
        onDisabled: {
            type: Boolean,
        },
        icone: {
            type: String,
        },
        texto: {
            type: String,
        },

    },
})
</script>