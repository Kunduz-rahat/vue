<template>
  <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  border: 2px solid teal;
  margin-top: 10px;
}
</style>
