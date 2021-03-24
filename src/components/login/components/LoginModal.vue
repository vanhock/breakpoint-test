<template>
  <auth-modal class="login-modal" @close="$emit('close')">
    <v-form @submit="login" @change="setFormValid">
      <v-input
        class="login-modal__input"
        name="email"
        label="E-mail"
        placeholder="example@gmail.com"
        required
        :validation-rule="validationEmail"
        :disabled="fetching"
      />
      <v-input
        class="login-modal__input"
        name="password"
        label="Password"
        placeholder="password"
        type="password"
        required
        :validation-rule="validationPassword"
        :disabled="fetching"
      />
      <v-button-wide class="login-modal__submit" :disabled="!isFormValid" :loading="fetching">
        Login
      </v-button-wide>
    </v-form>
    <div class="login-modal-links" :disabled="fetching">
      <v-link class="login-modal-links__link" href="#">
        Forgot passport?
      </v-link>
      <div class="login-modal-links__separator">•</div>
      <v-link class="login-modal-links__link" href="#">
        User registration
      </v-link>
    </div>
    <placeholder v-if="succeed" class="login-success" title="Success!">
      <check-svg />
    </placeholder>
  </auth-modal>
</template>

<script>
import AuthModal from "src/components/AuthModal";
import VForm from "src/ui/components/form/VForm";
import VInput from "src/ui/components/input/VInput";
import VButtonWide from "src/ui/components/button/VButtonWide";
import VLink from "src/ui/components/link/VLink";
import {wait} from "src/helpers";
import Placeholder from "src/ui/components/placeholder/Placeholder";
import CheckSvg from "src/assets/svg/check.svg";

export default {
  name: "LoginModal",
  components: {Placeholder, VLink, VButtonWide, VInput, VForm, AuthModal, CheckSvg },
  data: () => ({
    isFormValid: false,
    fetching: false,
    succeed: false,
    validationEmail: {
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Not valid E-mail address'
    },
    validationPassword: {
      regex: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
      message: 'Wrong password'
    }
  }),
  methods: {
    setFormValid(data) {
      this.isFormValid =
          data && Object.values(data).every((item) => item && item.valid);
    },
    async login(data) {
      const values = Object.values(data);
      const loginData = values.find(v => v.name === 'email');
      const passwordData = values.find(v => v.name === 'password');

      if (!loginData || !passwordData) return this.$emit('fail', null);

      let users = null;
      try {
        this.fetching = true;
        const response = await fetch("users.json");
        await wait(1500); // simulate real response
        users = await response.json();
        this.fetching = false;
      } catch (e) {
        this.$emit('fail', loginData);
        this.fetching = false;
      }

      for (let user of users) {
        const {email, password} = user;
        if (loginData.value === email && passwordData.value === password) {
          this.$emit('success', loginData);
          this.succeed = true;
          return;
        }
      }
      this.$emit('fail', loginData);
    }
  },
};
</script>

<style lang="scss" scoped>
.login-modal {
  &__input {
    &:not(:last-child) {
      margin-bottom: var(--indent-md);
    }
  }
  &__submit {
    margin-top: var(--indent-sm);
  }
  &-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--indent-md);
    &__separator {
      margin: 0 var(--indent-sm);
      color: var(--color-primary);
      text-decoration: none;
      font-weight: bold;
    }
  }
}
.login-success {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--rounded-lg);
  z-index: 12;
  background-color: var(--color-green);
  path {
    fill: var(--color-font-white);
  }
}
</style>
