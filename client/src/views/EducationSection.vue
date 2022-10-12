<template>
  <section class="experience-section w-auto mb-10 bg-white">
    <SectionHeader headerText="Education" />
    <div
      class="education-container grid grid-cols-[30%_70%] mb-5"
      v-for="education in educations"
      :key="education.id"
    >
      <Education :education="education" />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import Education from "@/components/Education.vue";

const educations = [
  {
    id: 1,
    schoolName: "Brigham Young University - Idaho",
    degreeName: "Bachelor's of Science - Applied Science",
    educationDuration: "04/2022 – present",
    educationLocation: "Rexburg, USA",
  },
];

</script>

<style lang="scss" scoped></style>
