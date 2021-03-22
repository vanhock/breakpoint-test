<template>
  <modal class="auth-modal">
    <div class="auth-modal__close" />
    <div class="auth-modal__content">
      <div class="auth-modal-avatar" />
      <form class="auth-modal-form">
        <v-input label="E-mail" required />
        <v-input label="Passport" required />
        <v-button>Login</v-button>
        <div class="auth-modal-form__links">
          <v-link href="#">Forgot passport?</v-link>
          <v-link href="#">User registration</v-link>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
import Modal from "src/ui/components/Modal";
import VInput from "src/ui/components/VInput";
import VButton from "src/ui/components/VButton";
import Link from "src/ui/components/VLink";
import VLink from "src/ui/components/VLink";
export default {
  name: "AuthModal",
  components: {VLink, Link, VButton, VInput, Modal },
};
</script>

<style lang="scss" scoped>
@import "src/ui/styles/vars";
.auth-modal {
  &__close {
    position: absolute;
    top: var(--indent-sm);
    right: var(--indent-sm);
    z-index: 1;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    @media (min-width: $tablet) {
      & > * {
        width: 50%;
      }
    }
  }
}
.auth-modal-avatar {
  background-color: var(--color-primary);
  border-radius: var(--rounded-lg) 0 0 var(--rounded-lg);
}
.auth-modal-form {
  background-color: var(--color-bg);
}
</style>
