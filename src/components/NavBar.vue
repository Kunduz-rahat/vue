<template>
  <div class="header">
    <div>VUE 3</div>
    <div>
      <router-link to="/posts" style="margin-right:10px">Посты</router-link>
      <router-link to="/users">Пользователи</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 4px 4px teal;
    padding: 15px;
    margin-bottom: 20px;
}
</style>
