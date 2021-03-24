<template>
  <input
    :checked="value"
    type="checkbox"
    class="mode-toggle"
    @change="$emit('input', $event.target.checked)"
  />
</template>

<script>
export default {
  name: 'ModeToggle',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.mode-toggle {
  --size: 1.2rem;
  appearance: none;
  outline: none;
  border: 0;
  cursor: pointer;
  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.23) calc(var(--size) * -0.2) 0;
  border-radius: 100%;
  color: #fff;
  transition: all 0.7s;
  &:checked {
    --ray-size: calc(var(--size) * -0.43);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);
    transform: scale(0.85);
    color: #face41;
    box-shadow: inset 0 0 0 var(--size), calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
      var(--offset-orthogonal) 0 0 var(--ray-size),
      0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
      0 var(--offset-orthogonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
      var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
      var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
  }
}
</style>
