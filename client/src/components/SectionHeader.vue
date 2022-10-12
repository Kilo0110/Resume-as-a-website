<template>
  <h1
    class="summary-header bg-gray-200 text-fuchsia-900 text-center font-bold py-0.5"
  >
    {{ props.headerText }}
  </h1>
</template>

<script setup>
const props = defineProps({
  headerText: {
    type: String,
  },
})
</script>

<style lang="scss" scoped></style>
