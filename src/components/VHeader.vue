<template>
  <header><slot></slot></header>
</template>

<script>
export default {
  name: "VHeader",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  padding: var(--indent-sm) var(--indent-md);
  background-color: var(--color-primary);
}
</style>
