<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="skill">
    <header class="skill-header flex justify-between py-4">
      <h2 class="skill-heading font-bold">{{ props.skill.heading }}</h2>
      <ul class="skill-level-container flex gap-2" ref="level">
        <li class="skill-level-indicator w-4 h-4 rounded-full"></li>
        <li class="skill-level-indicator w-4 h-4 rounded-full"></li>
        <li class="skill-level-indicator w-4 h-4 rounded-full"></li>
        <li class="skill-level-indicator w-4 h-4 rounded-full"></li>
        <li class="skill-level-indicator w-4 h-4 rounded-full"></li>
      </ul>
    </header>
    <p class="skill-info italic">{{ props.skill.info }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  skill: {
    heading: String,
    info: String,
    skillLevel: Number
  },
});
const level = ref(null);

onMounted(() => {
  let skillLevelIndicator = level.value.querySelectorAll(
    ".skill-level-indicator"
  );
  skillLevelIndicator.forEach((indicator, index) => {
    if (index + 1 <= props.skill.skillLevel) {
      indicator.classList.add("bg-neutral-700");
    } else {
      indicator.classList.add("bg-neutral-300");
    }
  });
});
</script>

<style lang="scss" scoped></style>
