<template>
  <modal class="auth-modal" @close="$emit('close')">
    <div class="auth-modal__wrapper">
      <div class="auth-modal__close" @click="$emit('close')" />
      <div class="auth-modal__content">
        <div class="auth-modal-avatar" />
        <div class="auth-modal-form">
          <v-form @submit="handleSubmit" @change="setFormValid">
            <v-input
              class="auth-modal-form__input"
              name="email"
              label="E-mail"
              placeholder="example@gmail.com"
              required
            />
            <v-input
              class="auth-modal-form__input"
              name="password"
              label="Password"
              placeholder="password"
              type="password"
              required
            />
            <v-button-wide
              class="auth-modal-form__submit"
              :disabled="!isFormValid"
              >Login</v-button-wide
            >
          </v-form>
          <div class="auth-modal-links">
            <v-link class="auth-modal-links__link" href="#"
              >Forgot passport?</v-link
            >
            <v-link class="auth-modal-links__link" href="#"
              >User registration</v-link
            >
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "src/ui/components/modal/Modal";
import VInput from "src/ui/components/input/VInput";
import VButton from "src/ui/components/button/VButton";
import Link from "src/ui/components/link/VLink";
import VLink from "src/ui/components/link/VLink";
import VButtonWide from "src/ui/components/button/VButtonWide";
import VForm from "src/ui/components/form/VForm";
export default {
  name: "AuthModal",
  components: { VForm, VButtonWide, VLink, Link, VButton, VInput, Modal },
  data: () => ({
    isFormValid: false,
  }),
  methods: {
    handleSubmit(data) {
      console.log("form data", data);
    },
    setFormValid(data) {
      this.isFormValid =
        data && Object.values(data).every((item) => item && item.valid);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../ui/styles/vars";
.auth-modal {
  &__close {
    position: absolute;
    top: var(--indent-sm);
    right: var(--indent-sm);
    z-index: 1;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: var(--modal-min-height);
    min-width: var(--modal-min-width);
    border-radius: var(--rounded-lg);
    background-color: var(--color-bg);
    z-index: 11;
    @media (max-width: $mobile) {
      height: auto;
      min-width: 100%;
      margin: var(--indent-sm);
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    border-radius: var(--rounded-lg);
    & > * {
      height: 100%;
    }
    @media (min-width: $tablet) {
      & > * {
        width: 50%;
        height: auto;
      }
    }
  }
}
.auth-modal-avatar {
  background-color: var(--color-primary);
  border-radius: var(--rounded-lg) 0 0 var(--rounded-lg);
}
.auth-modal-form {
  padding: var(--indent-md);
  border-radius: 0 var(--rounded-lg) var(--rounded-lg) 0;
  background-color: var(--color-bg);
  &__input {
    &:not(:last-child) {
      margin-bottom: var(--indent-md);
    }
  }
  &__submit {
    margin-top: var(--indent-sm);
  }
}
.auth-modal-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--indent-md);
  &__link {
    margin: 0 var(--indent-xs);
  }
}
</style>
