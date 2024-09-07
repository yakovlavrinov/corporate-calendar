<template>
  <div>
    <form action="">
        <h4>Создание поста</h4>
        <input type="text" placeholder="Название">
        <input type="text" placeholder="Описание">
        <button>Создать</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id" >
        <div><strong>Название: </strong>{{ post.title }}</div>
        <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Описание поста'},
        {id: 2, title: 'Python', body: 'Описание поста'},
        {id: 3, title: 'C#', body: 'Описание поста'}
      ]
    }
  },
  methods: {
    
  }
})
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
