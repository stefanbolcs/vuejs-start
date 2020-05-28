<template>
  <input placeholder="Enter your coupon code" @blur="onCouponApplied" />
</template>
<script>
export default {
  methods: {
    onCouponApplied() {
      this.$emit("applied");
    },
  },
};
</script>
