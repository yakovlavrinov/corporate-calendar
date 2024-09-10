<template>
    <div>
        <h1>Страница с постами</h1>
        <my-button @click="showDialog">Создать пользователя</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <PostList :posts="posts" @remove="removePost" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostForm from '@/components/PostForm/PostForm.vue'
import PostList from '@/components/PostList/PostList.vue'

export interface Post {
    id: number
    title: string
    body: string
}

interface Data {
    posts: Post[]
}

export default defineComponent({
    components: {
        PostForm,
        PostList
    },
    data(): Data {
        return {
            posts: [
                { id: 1, title: 'JavaScript', body: 'Описание поста' },
                { id: 2, title: 'Python', body: 'Описание поста' },
                { id: 3, title: 'C#', body: 'Описание поста' }
            ],
            dialogVisible: false
        }
    },
    methods: {
        createPost(post: Post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post: Post) {
            this.posts = this.posts.filter((p) => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        }
    }
})
</script>

<style scoped></style>
