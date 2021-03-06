<template>
  <label :class="{ focused, invalid }" class="v-input">
    <span v-if="label" class="v-input__label">
      {{ label }}
    </span>
    <input
      ref="input"
      v-bind="options"
      v-model="currentValue"
      :type="type"
      :placeholder="placeholder"
      class="v-input__input"
      v-on="inputListeners"
    />
    <span v-if="invalid" class="v-input__validation">
      {{ currentValidationMessage }}
    </span>
    <warning-svg class="v-input__warning" v-if="invalid" />
  </label>
</template>

<script>
import WarningSvg from "../../incons/warning.svg"
export default {
  name: "VInput",
  components: {WarningSvg},
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    /**
     * @param default {{
     *   regex: string,
     *   message: string
     * }}
     */
    validationRule: {
      type: Object,
      default: null,
    },
    validationMessage: {
      type: String,
      default: "This field is required",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    componentName: 'VInput',
    currentValue: null,
    focused: false,
    valid: true,
    showValidation: false,
    currentValidationMessage: null,
  }),
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        ...{
          focus: (e) => {
            this.focused = true;
            this.$emit("focus", e);
          },
          blur: (e) => {
            this.focused = false;
            if (!this.showValidation) this.showValidation = true;
            this.$emit("blur", e);
          },
        },
      };
    },
    invalid() {
      return !this.valid && this.showValidation
    }
  },
  watch: {
    value(current) {
      this.currentValue = current;
    },
    currentValue() {
      this.setValid();
      this.$emit("input", this.currentValue);
    }
  },
  created() {
    this.currentValue = this.value;
    this.setValid();
    this.$emit("input", this.currentValue);
  },
  methods: {
    setFocus() {
      this.$refs.input.focus();
    },
    setValid() {
      if (!this.required) return (this.valid = true);
      if (!this.validateByValue()) {
        this.currentValidationMessage = this.validationMessage;
        return (this.valid = false);
      }
      if (!this.validateByRule()) {
        this.currentValidationMessage = this.validationRule.message;
        return (this.valid = false);
      }
      return (this.valid = true);
    },
    validateByValue() {
      return this.currentValue && this.currentValue.length > 0;
    },
    validateByRule() {
      if (!this.validationRule) return true;
      return this.validationRule.regex.test(this.currentValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars";
.v-input {
  position: relative;
  display: block;

  &__label {
    display: block;
    min-width: 70px;
    margin-bottom: var(--indent-xs);
    user-select: none;
    font-weight: bold;
    font-size: var(--text-xs);
    @media (max-width: $mobile) {
      min-width: auto;
    }
  }

  &__input {
    width: 100%;
    height: var(--input-height);
    padding: var(--indent-sm) var(--indent-md) var(--indent-sm) var(--indent-sm);
    border: 1px solid var(--color-border);
    background-color: var(--color-bg);
    border-radius: var(--rounded-lg);
    box-sizing: border-box;
    outline: none;
    font-size: var(--text-md);
    color: var(--color-font);

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active
    {
      -webkit-box-shadow: 0 0 0 30px var(--color-bg-second) inset !important;
      -webkit-text-fill-color: var(--color-font) !important;
    }

    &:focus {
      box-shadow: var(--input-focus-box-shadow);
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  &.invalid .v-input__input {
    border-color: var(--color-red)
  }

  &__validation {
    position: absolute;
    margin-top: calc(var(--input-height) + var(--indent-xs));
    left: 0;
    color: var(--color-red);
    font-size: var(--text-xs);
  }
  &__warning {
    position: absolute;
    height: 20px;
    right: 0;
    bottom: calc(var(--input-height) / 4);
    margin-right: var(--indent-xs);
    path {
      fill: var(--color-red);
    }
  }
}
</style>
