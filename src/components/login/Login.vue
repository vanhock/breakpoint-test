<template>
  <div class="login">
    <v-title>Welcome!</v-title>
    <login-buttons
      :failed="failed"
      :succeed="succeed"
      @openModal="toggleModal"
    />
    <login-modal
      v-if="showModal"
      @close="toggleModal"
      @success="handleSuccess"
      @fail="handleFail"
    />
  </div>
</template>

<script>
import LoginButtons from "src/components/login/components/LoginButtons";
import AuthModal from "src/components/AuthModal";
import VTitle from "src/ui/components/typography/title/VTitle";
import LoginModal from "src/components/login/components/LoginModal";
export default {
  name: "Login",
  components: { LoginModal, VTitle, AuthModal, LoginButtons },
  data: () => ({
    showModal: false,
    succeed: 0,
    failed: 0,
    closedManually: false,
  }),
  created() {
    this.restoreLoginHistory()
  },
  methods: {
    restoreLoginHistory() {
      const succeedHistory = localStorage.getItem("succeed_history");
      const failedHistory = localStorage.getItem("failed_history");
      if (succeedHistory) this.succeed = parseInt(succeedHistory);
      if (failedHistory) this.failed =  parseInt(failedHistory);
    },
    toggleModal() {
      this.showModal = !this.showModal;
      this.closedManually = !this.showModal;
    },
    handleSuccess() {
      this.succeed++;
      localStorage.setItem("succeed_history", this.succeed);
      setTimeout(() => {
        if (this.showModal && !this.closedManually) this.showModal = false;
      }, 3000);
    },
    handleFail() {
      this.failed++;
      localStorage.setItem("failed_history", this.failed);
    },
  },
};
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
