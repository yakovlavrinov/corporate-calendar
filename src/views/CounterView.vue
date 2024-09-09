<template>
    <div>
        <post-form @create="createPost" />
        <PostList :posts="posts"  />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostForm from '@/components/PostForm/PostForm.vue'
import PostList from '@/components/PostList/PostList.vue'

export interface Post {
  id: number,
  title: string,
  body: string,
}

interface Data {
  posts: Post[],
  title: string,
  body: string,
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
            title: '',
            body: ''
        }
    },
    methods: {
        createPost(post: Post) {
           this.posts.push(post)
        }
    }
})
</script>

<style scoped></style>
