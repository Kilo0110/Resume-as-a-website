<script setup>
// import { RouterView } from "vue-router";
import ResumeHeader from "@/views/ResumeHeader.vue";
import ProfessionalSummary from "@/views/ProfessionalSummary.vue";
import SkillsSection from "@/views/SkillsSection.vue";
import ExperienceSection from "@/views/ExperienceSection.vue";
import EducationSection from "@/views/EducationSection.vue";
</script>

<template>
  <div>
    <ResumeHeader />
    <main class="px-6 md:px-10 lg:px-16 py-10">
      <ProfessionalSummary />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </main>
  </div>
</template>

<style scoped></style>
