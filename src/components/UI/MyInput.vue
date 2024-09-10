<template>
    <input class="input" :value="modelValue" @input="updateInput" type="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
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
