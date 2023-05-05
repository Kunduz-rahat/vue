<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
name:'my-button'
};
</script>

<style scoped>
.btn {
  border: 2px solid teal;
  color: teal;
  padding: 10px;
  background-color: transparent;

  align-self: flex-end;
}</style>
