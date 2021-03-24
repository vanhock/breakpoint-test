<template>
  <div class="login">
    <v-title>Welcome!</v-title>
    <login-buttons @openModal="toggleModal" />
    <auth-modal v-if="showModal" @close="toggleModal" />
  </div>
</template>

<script>
import LoginButtons from "src/components/login/components/LoginButtons";
import AuthModal from "src/components/login/components/AuthModal";
import VTitle from "src/ui/components/typography/title/VTitle";
export default {
name: "Login",
  components: {VTitle, AuthModal, LoginButtons},
  data: () => ({
    showModal: false
  }),
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--indent-lg);
  background-color: var(--color-bg);
}
</style>