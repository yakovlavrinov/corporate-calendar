<template>
    <select class v-modal="modelValue" @change="changeOption">
        <option disabled>Выберете из списка</option>
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
import type { SortOption } from '@/views/CounterView.vue'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array as PropType<SortOption[]>,
            default: () => []
        }
    },
    methods: {
        changeOption(event: Event) {
            const select = event.target as HTMLSelectElement
            this.$emit('update:modelValue', select.value)
        }
    }
})
</script>
<style scoped>
select {
    height: 40px;
}
</style>
