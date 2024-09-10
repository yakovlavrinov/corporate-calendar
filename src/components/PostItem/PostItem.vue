<template>
    <div class="post">
        <div>
            <div><strong>Название: </strong>{{ post.title }}</div>
            <div><strong>Описание: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button @click="removePost">Удалить</my-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        removePost() {
            this.$emit('remove', this.post) 
        }
    }
})
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
