<template>
  <modal class="auth-modal" @close="$emit('close')">
    <div class="auth-modal__wrapper">
      <button class="auth-modal__close" @click="$emit('close')" />
      <div class="auth-modal__content">
        <div class="auth-modal-avatar">
          <profile-svg viewBox="0 0 46 46" />
        </div>
        <div class="auth-modal-form">
          <slot></slot>
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
import ProfileSvg from "src/assets/svg/profile.svg";
export default {
  name: "AuthModal",
  components: {
    VForm,
    VButtonWide,
    VLink,
    Link,
    VButton,
    VInput,
    Modal,
    ProfileSvg,
  },
};
</script>

<style lang="scss" scoped>
@import "../ui/styles/vars";
.auth-modal {
  &__close {
    position: absolute;
    top: var(--indent-xs);
    right: var(--indent-xs);
    z-index: 1;
    background-color: transparent;
    cursor: pointer;
    &:before {
      content: "\d7";
      color: var(--color-primary);
      font-size: 27px;
      @media (max-width: $mobile) {
        color: var(--color-font-white);
      }
    }
    &:hover {
      opacity: .8;
    }
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
      min-width: calc(100% - var(--indent-md));
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
    @media (max-width: $mobile) {
      flex-direction: column;
    }
    @media (min-width: $mobile) {
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
  @media (max-width: $mobile) {
    border-radius: var(--rounded-lg) var(--rounded-lg) 0 0;
  }
}
.auth-modal-form {
  padding: var(--indent-md);
  border-radius: 0 var(--rounded-lg) var(--rounded-lg) 0;
  background-color: var(--color-bg);
  @media (max-width: $mobile) {
    border-radius: 0 0 var(--rounded-lg) var(--rounded-lg);
  }
}
.auth-modal-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: $mobile) {
    height: 190px;
  }
  svg {
    width: 155px;
    height: 155px;
    @media (max-width: $mobile) {
      width: 130px;
      height: 130px;
    }
  }
  path {
    fill: var(--color-bg);
  }
}
</style>
