<template>
  <h1>Page of posts</h1>
  <my-button @click="showDialog">Создать пост</my-button>
  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </my-dialog>

  <post-list :posts="posts" @remove="removePost" />
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyDialog from "./components/UI/MyDialog.vue";
export default {
  name: "App",
  components: { PostForm, PostList, MyButton, MyDialog },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "Описание поста" },
        { id: 2, title: "Javascript 2", body: "Описание поста 2" },
        { id: 4, title: "Javascript 3", body: "Описание поста 3" },
        { id: 4, title: "Javascript 4", body: "Описание поста 4" },
      ],
       dialogVisible:false
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible=false
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
   showDialog(){
    this.dialogVisible = true
   }
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
</style>
