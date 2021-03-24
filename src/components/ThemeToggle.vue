<template>
  <label class="theme-toggle">
    <ModeToggle :value="active" @input="handleToggle" />
  </label>
</template>

<script>
import ModeToggle from 'src/ui/components/mode-toggle/ModeToggle';
export default {
  name: 'ThemeToggle',
  components: { ModeToggle },
  data: () => ({
    theme: 'default'
  }),
  computed: {
    active() {
      return this.theme === 'default';
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem("app_current_theme");
    if (savedTheme !== undefined) {
      this.handleToggle(savedTheme === 'true');
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.handleToggle(false);
    }
  },
  methods: {
    handleToggle(value) {
      const theme = value ? 'default' : 'dark';
      this.$emit('change', theme);
      this.theme = theme;
      localStorage.setItem("app_current_theme", value);
    }
  }
};
</script>

<style lang="scss" scoped>
  .theme-toggle {
    margin-left: auto;
  }
</style>
