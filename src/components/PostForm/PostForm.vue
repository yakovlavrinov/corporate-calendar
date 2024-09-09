<template>
    <div>
        <form @submit.prevent action="">
            <h4>Создание поста</h4>
            <input
                v-model="post.title"
                class="input"
                type="text"
                placeholder="Название"
            />
            <input
                v-model="post.body"
                class="input"
                type="text"
                placeholder="Описание"
            />
            <button class="btn" @click="createPost">Создать</button>
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
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
}
</style>
