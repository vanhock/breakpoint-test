<template>
  <button :class="{ loading }" class="v-button" @click="$emit('click', $event)">
    <slot></slot>
    <span class="v-button__preloader" v-if="loading">
      <preloader width="45px" viewBox="0 0 122 30" />
    </span>
  </button>
</template>

<script>
import Preloader from "src/assets/svg/three-dots-loader.svg"
export default {
  name: "VButton",
  components: {Preloader},
  props: {
    loading: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.v-button {
  position: relative;
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
  &.loading {
    color: var(--color-primary);
    pointer-events: none;
  }
  &__preloader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
    border-radius: var(--rounded);
  }
}
</style>
