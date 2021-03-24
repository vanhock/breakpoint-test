<template>
  <div class="login-buttons">
    <v-button class="login-buttons__button" @click="$emit('openModal')">Login</v-button>
    <v-button class="login-buttons__button" disabled>Success</v-button>
    <v-button class="login-buttons__button" disabled>Fail</v-button>
  </div>
</template>

<script>
import VButton from "src/ui/components/button/VButton";
export default {
  name: "LoginButtons",
  components: {VButton}
}
</script>

<style lang="scss" scoped>
.login-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: var(--indent-sm);
  }
  &__button {
    &[disabled] {
      opacity: 1;
    }
  }
}
</style>