<template >
    <select v-modal="modelValue">
        <option disabled value="">Выберете из списка</option>
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
            type:Array,
            default: ()=> []
        }
    }
})
</script>
<style scoped>
    
</style>