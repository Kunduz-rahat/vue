<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="post.title" placeholder="Название поста" />
    <input type="text" v-model="post.body" placeholder="Описание поста" />
    <button class="btn" @click="createPost">Создать пост</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
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
