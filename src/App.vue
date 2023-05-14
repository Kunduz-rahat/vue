<template>
  <h1>Page of posts</h1>
  <my-input placeholder="Seach ..." v-model="searchQuery" />
  <div class="btns">
    <my-button @click="showDialog">Создать пост</my-button>
    <my-select v-model="selectedSort" :options="sortOptions" />
  </div>

  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </my-dialog>

  <post-list :posts="sortAndSearchPosts" @remove="removePost" />

  <div class="pages">
    <span
      class="page"
      :key="pageNumber"
      @click="changePage(pageNumber)"
      v-for="pageNumber in totalPages"
      :class="{ current_page: page === pageNumber }"
      >{{ pageNumber }}</span
    >
  </div>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyDialog from "./components/UI/MyDialog.vue";
import MySelect from "./components/UI/MySelect.vue";
import MyInput from "./components/UI/MyInput.vue";
export default {
  name: "App",
  components: { PostForm, PostList, MyButton, MyDialog, MySelect, MyInput },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      loading: false,
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
      changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchPosts()
    },
    async fetchPosts() {
      try {
        this.loading = true;
        const res = await axios("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);

        this.posts = res.data;
        console.log(res);
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortAndSearchPosts() {
      return this.sortPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLocaleLowerCase())
      );
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
.btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.page {
  border: 2px solid teal;
  padding: 10px;
}
.current_page {
  border: 2px solid red;
}
</style>
