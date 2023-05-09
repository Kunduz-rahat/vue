<template>
  <h1>Page of posts</h1>
  <div class="btns">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-select v-model="selectedSort" :options="sortOptions" />
  </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </my-dialog>

  <post-list :posts="sortPosts" @remove="removePost" />
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import MySelect from "./components/UI/MySelect.vue";
export default {
  name: "App",
  components: { PostForm, PostList, MyButton, MyDialog, MySelect },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = res.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed:{
    sortPosts(){
      return [...this.posts].sort((a, b)=> a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    }
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
.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
