<template >
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'my-button'
})
</script>

<style>
    .btn {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
}
</style>