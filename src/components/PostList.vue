<template>
  <div  >
    <post-item :post='post' :key="post.id" v-for="post in posts"/>
  </div>
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
