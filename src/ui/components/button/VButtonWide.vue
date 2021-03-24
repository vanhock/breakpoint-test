<template>
  <v-button class="v-button-wide" v-bind="$props" v-on="buttonListeners">
    <slot></slot>
  </v-button>
</template>

<script>
import VButton from "src/ui/components/button/VButton";
export default {
name: "VButtonWide",
  components: {VButton},
  extends: VButton,
  computed: {
    buttonListeners() {
      return this.$listeners;
    }
  }
}
</script>

<style lang="scss" scoped>
.v-button-wide {
  width: 100%;
  height: var(--button-wide-height);
}
</style>