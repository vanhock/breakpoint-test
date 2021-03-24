<template>
  <h1 class="title"><slot></slot></h1>
</template>

<script>
export default {
  name: "VTitle"
}
</script>

<style lang="scss" scoped>
h1.title {
  margin: 0 0 var(--indent-lg);
  padding: 0;
  font-size: 27px;
  font-weight: bold;
  color: var(--title-color);
}
</style>