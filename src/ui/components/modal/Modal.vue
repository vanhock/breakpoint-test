<template>
  <div class="modal" @keydown.esc="handleClose">
    <slot></slot>
    <div class="modal__overlay" @click="handleClose" />
  </div>
</template>

<script>
export default {
  name: "Modal",
  created() {
    /**
     * Close on esc
     */
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleKeydown(e) {
      if (e.key === "Escape") {
        this.handleClose();
      }
    },
  },
};
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
