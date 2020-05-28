<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true },
    selected: { default: false },
  },
  data() {
    return "";
  },
};
</script>

<style></style>
