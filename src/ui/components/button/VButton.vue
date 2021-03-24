<template>
  <button :class="{ loading }" class="v-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    loading: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.v-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--button-height);
  padding: 0 var(--indent-sm);
  box-sizing: border-box;
  border-radius: var(--rounded);
  background-color: var(--color-primary);
  color: var(--color-font-white);
  font-weight: bold;
  cursor: pointer;
}
</style>
