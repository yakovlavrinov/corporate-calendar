<template>
    <div>
        <form @submit.prevent action="">
            <h4>Создание поста</h4>
            <my-input v-model="post.title" type="text" placeholder="Название" />
            <my-input v-model="post.body" type="text" placeholder="Описание" />
            <my-button class="btn" @click="createPost">Создать</my-button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Post } from '@/views/CounterView.vue'

interface PostForm {
    title: string
    body: string
}
export default defineComponent({
    data(): { post: PostForm } {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            const newPost: Post = {
                ...this.post,
                id: Date.now()
            }

            this.$emit('create', newPost)

            this.post = {
                title: '',
                body: ''
            }
        }
    }
})
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
.input {
    width: 100%;
    border: 2px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
.btn {
    align-self: flex-end;
    margin-top: 15px;
}
</style>
