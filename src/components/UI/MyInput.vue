<template>
    <input class="input" :value="modelValue" @input="updateInput" type="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
    name: 'my-input',
    props: {
        modelValue: [String, Number] as PropType<string | number>
    },
    methods: {
        updateInput(event: Event) {
            const input = event.target as HTMLInputElement
            this.$emit('update:modelValue', input.value)
        }
    }
})
</script>
<style scoped>
.input {
    width: 100%;
    border: 2px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>
