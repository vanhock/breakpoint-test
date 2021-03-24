<template>
  <div class="modal">
    <slot></slot>
    <div class="modal__overlay" @click="handleClose" />
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    handleClose() {
      this.$emit("close")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/vars";
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-overlay);
    z-index: 10;
  }
}
</style>