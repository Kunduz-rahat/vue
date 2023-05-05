<template>
<div class="post">
  <div>
  <div>Title of post : {{ post.title }}</div>
  <div>Description of post :{{ post.body }}</div>
  </div>
<div>
  <my-button @click="$emit('remove', post)">Удалить</my-button>
</div>
</div>

</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid teal;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}</style>
