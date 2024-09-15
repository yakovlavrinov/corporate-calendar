<template>
    <h3 class="zero-post" v-if="isLoading">Загрузка...</h3>
    <div v-else-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <transition-group name="post-list">
            <post-item
                v-for="post in posts"
                :key="post.id"
                :post="post"
                @remove="handleRemove(post)"
            />
        </transition-group>
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
        },
        isLoading: { type: Boolean }
    },
    methods: {
        handleRemove(post: Post) {
            this.$emit('remove', post)
        }
    }
})
</script>

<style scoped>
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all 1s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-move {
    transition: transform 1s ease;
}

.zero-post {
    color: red;
}
</style>
