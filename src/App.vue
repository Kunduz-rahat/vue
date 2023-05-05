<template>
  <h1>Hello</h1>

  <post-form @create='createPost'/>
  <post-list :posts='posts' @remove="removePost"/>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from '@/components/PostList.vue';

export default {
  name: "App",
  components: { PostForm, PostList },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "Описание поста" },
        { id: 2, title: "Javascript 2", body: "Описание поста 2" },
        { id: 4, title: "Javascript 3", body: "Описание поста 3" },
        { id: 4, title: "Javascript 4", body: "Описание поста 4" },
      ],

    
    };
  },
  methods: {
    createPost(post) {
    this.posts.push(post)
    },
    removePost(post){
      this.posts = this.posts.filter(p=> p.id !== post.id)
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
