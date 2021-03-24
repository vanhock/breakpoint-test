<template>
  <div class="login-buttons">
    <v-button class="login-buttons__button" @click="$emit('openModal')">
      Login
    </v-button>
    <v-button class="login-buttons__button login-buttons__button--success" disabled>
      <thumbs-up-svg viewBox="0 0 30 24" /> {{ succeed }}
    </v-button>
    <v-button class="login-buttons__button login-buttons__button--fail" disabled>
      <thumbs-down-svg viewBox="0 0 30 24" /> {{ failed }}
    </v-button>
  </div>
</template>

<script>
import VButton from "src/ui/components/button/VButton";
import ThumbsUpSvg from "src/assets/svg/thumbs-up.svg";
import ThumbsDownSvg from "src/assets/svg/thumbs-down.svg";

export default {
  name: "LoginButtons",
  components: { VButton, ThumbsUpSvg, ThumbsDownSvg },
  props: {
    succeed: {
      type: Number,
      default: 0,
    },
    failed: {
      type: Number,
      default: 0,
    },
  },
};
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
    border-radius: var(--rounded-lg);
    &[disabled] {
      opacity: 1;
    }
    path {
      stroke: var(--color-font-white);
    }
    &--success {
      background-color: var(--color-green);
    }
    &--fail {
      background-color: var(--color-red);
    }
  }
}
</style>
