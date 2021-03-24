<template>
  <form class="v-form" @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "VForm",
  props: {
    /**
     * Watch only for specific components.
     * for watching component need to specify a data property - 'componentName'
     */
    watchers: {
      type: Array,
      default: () => ["VInput"],
    },
  },
  data: () => ({
    children: {},
  }),
  mounted() {
    this.$children.forEach((child, index) => {
      if (
        !child.hasOwnProperty("componentName") ||
        !this.watchers.includes(child.componentName)
      ) {
        return;
      }

      this.setChildData({ child, index });
      this.$emit("change", this.children);
      child.$on("input", () => {
        this.setChildData({ child, index });
        this.$emit("change", this.children);
      });
    });
  },
  methods: {
    setChildData({ child, index }) {
      this.$set(this.children, index, {
        valid: child.valid,
        value: child.currentValue,
        label: child.label,
        name: child.name
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$emit('submit', this.children)
    }
  },
};
</script>

<style scoped></style>
