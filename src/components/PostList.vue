<template>
  <div v-if="posts.length > 0" >
    <h2>Список постов</h2>
    <post-item :post='post' :key="post.id" v-for="post in posts" @remove="$emit('remove', post)"/>
  </div>
  <h2>Список постов пуст</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  components:{
    PostItem
  },
    props:{
        posts:{
            type:Array,
            required:true
        }
    }
};
</script>

<style scoped>

</style>
