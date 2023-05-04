<template>
<div class="post">
  <div>Title of post : {{ post.title }}</div>
  <div>Description of post :{{ post.body }}</div>
</div>

</template>

<script>
export default {
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
}</style>
