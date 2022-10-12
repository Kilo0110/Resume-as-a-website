<template>
  <li>
    {{ props.jobFunction.info }}
  </li>
</template>

<script setup>
const props = defineProps({
  jobFunction: Object,
});
</script>

<style lang="scss" scoped></style>
