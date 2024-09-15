<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..."/>
        <div class="app__btns">
            <my-button class="btn_add_post" @click="showDialog"
                >Создать пост</my-button
            >
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-button @click="fetchPost">Получить посты</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <PostList :isLoading="isLoading" :posts="sortedAndSearchedPosts" @remove="removePost" />
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

export interface SortOption {
    value: string
    name: string
}

interface Data {
    posts: Post[]
    dialogVisible: boolean
    isLoading: boolean
    selectedSort: string
    searchQuery: string
    sortOptions: SortOption[]
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
            isLoading: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержимому' }
            ]
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
                await new Promise((resolve) => setTimeout(resolve, 1000))
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
    },

    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1:Post, post2:Post)=> {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
        }
    },


    watch: {
      
    }
})
</script>

<style scoped>
.btn_add_post {
    margin: 15px 0;
}
.app__btns {
    display: flex;
    justify-content: space-between;
}
</style>
