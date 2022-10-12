<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="experience__date-container">
    <p>{{ props.education.educationDuration }}</p>
    <p>{{ props.education.educationLocation }}</p>
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="experience__info-container">
    <h2 class="font-bold">{{ props.education.degreeName }}</h2>
    <h3 class="italic">{{ props.education.schoolName }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  education: Object,
});
</script>

<style lang="scss" scoped></style>
