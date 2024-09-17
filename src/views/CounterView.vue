<template>
    <div>
        <h1>Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..." />
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
        <PostList
            :isLoading="isLoading"
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
        />
        <div ref="observer" class="observer"></div>
        <!-- <div class="page__wrapper">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page"
                :class="{ 'current-page': page === pageNumber }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div> -->
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
    page: number
    limit: number
    totalPages: number
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
            page: 1,
            limit: 10,
            totalPages: 0,
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

        // changePage(pageNumber: number){
        //     this.page=pageNumber
        // },
        async fetchPost() {
            try {
                this.isLoading = true
                // await new Promise((resolve) => setTimeout(resolve, 1000))
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    }
                )
                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                )
                this.posts =[...this.posts, ...response.data]
            } catch (e) {
                alert('Error error error')
            } finally {
                this.isLoading = false
            }
        },
        async loadMorePosts() {
            this.page += 1
            try {
               
                // await new Promise((resolve) => setTimeout(resolve, 1000))
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    }
                )
                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                )
                this.posts =[...this.posts, ...response.data]
            } catch (e) {
                alert('Error error error')
            }
        }
    },
    mounted() {
        this.fetchPost()
        console.log(this.$refs.observer)
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }

        const callback = (entries, obserer)=> {
            if(entries[0].isIntersecting && this.page < this.totalPages){
                this.loadMorePosts()
            }

        }

        const observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.observer)
    },

    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1: Post, post2: Post) => {
                return post1[this.selectedSort]?.localeCompare(
                    post2[this.selectedSort]
                )
            })
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            )
        }
    },

    watch: {
        // page(){
        //     this.fetchPost()
        // }
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

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}
.observer{
    height: 30px;
    background: green;

}
</style>
