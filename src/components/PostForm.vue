<template>
  <form @submit.prevent="onSubmit">
    <my-input type="text" v-model="post.title" placeholder="Название поста" />
    <my-input type="text" v-model="post.body" placeholder="Описание поста" />
    <my-button @click="createPost" style="margin-top:10px">Создать пост</my-button>
  </form>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import MyInput from './UI/MyInput.vue';

export default {
  components: {
    MyButton,
    MyInput,
  },
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


</style>
