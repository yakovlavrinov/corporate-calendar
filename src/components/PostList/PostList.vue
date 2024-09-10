<template>
    <div class="">
        <h3>Список пользователей</h3>
        <post-item v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Post } from '@/views/CounterView.vue'
import PostItem from '../PostItem/PostItem.vue'
export default defineComponent({
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array as PropType<Post[]>,
            required: true
        }
    }
})
</script>

<style scoped>
</style>
