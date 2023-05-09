<template>
  <div class="dialog" @click.stop="hideDialog" v-if="show">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.dialog__content {
  padding: 20px;
  border-radius: 12px;
  margin: auto;
  background-color: #fff;
}
</style>
