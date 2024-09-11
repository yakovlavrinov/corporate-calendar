<template>
    <div>
        <h1>Страница с постами</h1>
        <my-button @click="fetchPost">Получить посты</my-button>
        <my-button class="btn_add_post" @click="showDialog"
            >Создать пост</my-button
        >
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <PostList :isLoading="isLoading" :posts="posts" @remove="removePost" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostForm from '@/components/PostForm/PostForm.vue'
import PostList from '@/components/PostList/PostList.vue'
import axios from 'axios'

export interface Post {
    id: number
    title: string
    body: string
}

interface Data {
    posts: Post[]
    dialogVisible: boolean
    isLoading: boolean
}

export default defineComponent({
    components: {
        PostForm,
        PostList
    },
    data(): Data {
        return {
            posts: [],
            dialogVisible: false,
            isLoading: false
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
        },
        async fetchPost() {
            try {
                this.isLoading = true
                await new Promise(resolve => setTimeout(resolve, 1000))
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts?_limit=10'
                )
                this.posts = response.data
            } catch (e) {
                alert('Error error error')
            } finally {
                this.isLoading = false
            }
        }
    },
    mounted() {
        this.fetchPost()
    }
})
</script>

<style scoped>
.btn_add_post {
    margin: 15px 0;
}
</style>
