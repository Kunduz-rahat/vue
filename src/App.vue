<template>
  <h1>Hello</h1>
  <form @submit.prevent='onSubmit'>
    <input
      type="text"
      v-bind:value="title"
      placeholder="Название поста"
      @input="title = $event.target.value"
    />
    <input
      type="text"
      v-bind:value="body"
      placeholder="Описание поста"
      @input="body = $event.target.value"
    />
    <button class="btn" @click="createPost">Создать пост</button>
  </form>

  <div class="post" :key="post.id" v-for="post in posts">
    <div>Title of post : {{ post.title }}</div>
    <div>Description of post :{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "Описание поста" },
        { id: 2, title: "Javascript 2", body: "Описание поста 2" },
        { id: 4, title: "Javascript 3", body: "Описание поста 3" },
        { id: 4, title: "Javascript 4", body: "Описание поста 4" },
      ],
      // post: { title: "", body: "" },
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = { title: "", body: "", id: Date.now() };
      this.posts.push(newPost)
    },
    
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
}
.post {
  border: 2px solid teal;
  padding: 10px;
  margin-top: 10px;
}
form {
  display: flex;
  flex-direction: column;
}
.btn {
  border: 2px solid teal;
  color: teal;
  padding: 10px;
  background-color: transparent;
  margin-top: 10px;
  align-self: flex-end;
}
input {
  width: 100%;
  padding: 10px;
  border: 2px solid teal;
  margin-top: 10px;
}
</style>
