<template>
  <h1>Page of posts</h1>
  <my-button @click="showDialog">Создать пост</my-button>
  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </my-dialog>

  <post-list :posts="posts" @remove="removePost" />
</template>

<script>
import axios from 'axios'
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyDialog from "./components/UI/MyDialog.vue";
export default {
  name: "App",
  components: { PostForm, PostList, MyButton, MyDialog },
  data() {
    return {
      posts: [],
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
   }, 
   async fetchPosts (){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
       this.posts = res.data
   }
  },
  mounted(){
    this.fetchPosts()
  }
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
