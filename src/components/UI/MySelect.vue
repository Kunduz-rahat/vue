<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Сортировка по</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },

};
</script>

<style scoped>
select{
    border: 2px solid teal;
    padding: 10px;
}
</style>
