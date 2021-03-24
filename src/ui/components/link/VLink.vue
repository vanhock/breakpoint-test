<template>
  <a class="v-link"><slot></slot></a>
</template>

<script>
export default {
  name: "VLink"
}
</script>

<style lang="scss" scoped>
.v-link {
  color: var(--color-font);
}
</style>