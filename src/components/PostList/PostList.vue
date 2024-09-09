<template>
    <div class="post" v-for="post in posts" :key="post.id">
        <div><strong>Название: </strong>{{ post.title }}</div>
        <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Post } from '@/views/CounterView.vue'
export default defineComponent({
    props: {
        posts: {
            type: Array as PropType<Post[]>,
            required: true
        }
    }
})
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
</style>
