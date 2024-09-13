<template>
    <select v-modal="modelValue">
        <option disabled @change="changeOption">Выберете из списка</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event: Event){
            const select = event.target as HTMLSelectElement
            this.$emit('update:modelValue', select.value)
        }
    }
})
</script>
<style scoped></style>
