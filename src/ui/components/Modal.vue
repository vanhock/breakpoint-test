<template>
  <div class="modal">
    <div class="modal__content">
      <slot></slot>
    </div>
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
@import "../styles/vars";
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  &__content {
    position: relative;
    min-height: var(--modal-min-height);
    min-width: var(--modal-min-width);
    border-radius: var(--rounded-lg);
    background-color: var(--color-bg);
    z-index: 11;
    @media (max-width: $mobile) {
      margin: var(--indent-sm);
    }
  }
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-overlay);
    z-index: 10;
  }
}
</style>