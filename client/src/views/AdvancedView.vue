<template>
  <div class="modal-container fixed flex justify-center items-center gap-10">
    <button @click="moveToPreviousComponent">
      <i class="fa-solid fa-arrow-left text-white text-5xl"></i>
    </button>
    <component :is="sections[componentIndex]" :class="{ active: true }" />
    <button @click="moveToNextComponent">
      <i class="fa-solid fa-arrow-right text-white text-5xl"></i>
    </button>
  </div>
</template>

<script setup>
import ResumeHeader from "@/views/ResumeHeader.vue";
import ProfessionalSummary from "@/views/ProfessionalSummary.vue";
import SkillsSection from "@/views/SkillsSection.vue";
import ExperienceSection from "@/views/ExperienceSection.vue";
import EducationSection from "@/views/EducationSection.vue";

import { ref } from "vue";

const sections = [
  ResumeHeader,
  ProfessionalSummary,
  SkillsSection,
  ExperienceSection,
  EducationSection,
];

let componentIndex = ref(0);

const moveToPreviousComponent = () => {
  componentIndex.value = componentIndex.value - 1;
  if (componentIndex.value < 0) {
    componentIndex.value = sections.length - 1;
  }
};

const moveToNextComponent = () => {
  componentIndex.value = componentIndex.value + 1;
  if (componentIndex.value > sections.length - 1) {
    componentIndex.value = 0;
  }
};

console.log(sections[0]);
</script>

<style lang="scss" scoped>
.modal-container {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  min-width: 80%;
  aspect-ratio: 1;
  background: rgba(#000, 0.4);
}

.active {
  padding: 1em;
  max-width: 70%;
  margin-bottom: 0;
}
</style>
