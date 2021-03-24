<template>
  <div class="placeholder">
    <slot></slot>
    <div v-if="title" class="placeholder__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "Placeholder",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  user-focus: none;
  &__title {
    margin-top: var(--indent-sm);
    color: var(--color-font-white);
    text-transform: uppercase;
    font-size: var(--text-md);
    font-weight: bold;
  }
}
</style>
