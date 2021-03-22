<template>
  <label :class="{ focused, invalid: !isValid }" class="v-input">
    <span v-if="label" class="v-input__label">
      {{ label }}
    </span>
    <input
      ref="input"
      v-bind="options"
      :value="currentValue"
      :type="type"
      :placeholder="placeholder"
      class="v-input__input"
      v-on="inputListeners"
    />
    <span class="v-input_validation" v-if="validationRule">
      {{ validationMessage }}
    </span>
  </label>
</template>

<script>
export default {
  name: "VInput",
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
      default: 'This field is required',
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    currentValue: null,
    focused: false,
    showValidation: false,
    currentValidationMessage: null
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
    isValid() {
      if (!this.required) return true;
      if (!this.validateByValue()) {
        this.currentValidationMessage = this.validationMessage;
        return false;
      }
      if (!this.validateByRule()) {
        this.currentValidationMessage = this.validationRule.message
        return false
      }
      return true
    }
  },
  watch: {
    value(current) {
      this.currentValue = current;
    },
  },
  created() {
    this.currentValue = this.value;
  },
  methods: {
    setFocus() {
      this.$refs.input.focus();
    },
    validateByValue() {
      return this.currentValue && this.currentValue.length > 0
    },
    validateByRule() {
      if (!this.validationRule) return true;
      return this.currentValue.match(this.validationRule.regex)
    }
  },
};
</script>

<style lang="scss" scoped>
.v-input {
  &.focused {
    box-shadow: var(--input-focus-box-shadow);
  }

  &__label {
    min-width: 70px;
    margin-bottom: var(--indent-sm);
    user-select: none;
    font-weight: bold;

    @media (max-width: $mobile) {
      min-width: auto;
      font-size: var(--text-xs);
    }
  }

  &__input {
    width: 100%;
    height: var(--input-height);
    padding: var(--indent-sm);
    border: 1px solid var(--color-border);
    background-color: var(--color-bg);
    border-radius: var(--rounded-lg);
    box-sizing: border-box;
    outline: none;
    font-size: var(--text-md);
    color: var(--color-font);

    &[type="number"] {
      -moz-appearance: textfield;
    }

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    @media (max-width: $mobile) {
      padding: 0;
    }
  }
  &__validation {
    position: absolute;
    color: var(--color-red);
    font-size: var(--text-xs);
  }
}
</style>
