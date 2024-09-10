<template>
    <div v-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="handleRemove(post)"
        />
    </div>
    <h3 class="zero-post" v-else>Список постов пуст</h3>
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
    },
    methods: {
        handleRemove(post: Post) {
            this.$emit('remove', post)
        }
    }
})
</script>

<style scoped>
.zero-post{
    color: red;
}
</style>
