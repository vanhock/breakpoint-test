<template>
  <div id="app">
    <login />
  </div>
</template>

<script>
import Login from "src/components/login/Login";
export default {
  name: "App",
  components: {Login}
};
</script>

<style lang="scss">
@import "ui/styles/vars";
html,
body {
  min-height: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  font-size: var(--text-sm);
}

body {
  background-color: var(--color-bg-second);
}

#app {
  height: 100%;
  min-height: 100%;
  border-bottom: var(--indent-md) solid transparent;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-font);
}

a {
  color: var(--color-font);
}

button {
  border: 0;
  appearance: none;
  outline-color: #ccc;
  box-sizing: border-box;
  user-select: none;

  &:active {
    outline: none;
  }
}

.buttons {
  display: flex;
  justify-content: center;
  margin: 0 auto;

  & > * {
    margin: 0 var(--indent-sm);
  }
}

[disabled] {
  pointer-events: none;
  opacity: 0.5;
}
</style>
