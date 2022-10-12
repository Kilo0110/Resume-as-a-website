<template>
  <div class="experience__date-container">
    <p>{{ props.job.jobDuration }}</p>
    <p>{{ props.job.jobLocation }}</p>
  </div>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="experience__info-container">
    <h2 class="font-bold">{{ props.job.positionName }}</h2>
    <h3 class="italic">{{ props.job.companyName }}</h3>
    <ul
      class="list-disc"
      v-for="jobFunction in props.job.functionsList"
      :key="jobFunction.id"
    >
      <JobFunction :jobFunction="jobFunction" />
    </ul>
  </div>
</template>

<script setup>
import JobFunction from "@/components/JobFunction.vue";

const props = defineProps({
  job: Object,
});
</script>

<style lang="scss" scoped></style>
