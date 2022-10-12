<template>
  <section class="experience-section w-auto mb-10 bg-white">
    <SectionHeader headerText="Professional Experience" />
    <div
      class="experience-container grid grid-cols-[30%_70%] mb-5"
      v-for="job in jobs"
      :key="job.id"
    >
      <JobFunctions :job="job" />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import JobFunctions from "@/components/JobFunctions.vue";

const jobs = [
  {
    id: 1,
    companyName: "GreenifyAfrica",
    positionName: "Project Manager",
    jobDuration: "07/2022 – 09/2022",
    jobLocation: "Lagos, Nigeria",
    functionsList: [
      {
        id: 1,
        info: "As Project Manager I was part a team of like-minded Genz programmers that built a recycling middleman platform to facilitate easy recycling across Nigeria.",
      },
      {
        id: 2,
        info: "Furthermore, I took part in recruiting and assigning roles to members of the team as we built our product.",
      },
      {
        id: 3,
        info: "As Project Manager, also oversaw the decision-making process of how our product would be developed. This included, but not limited to programming language and framework we used, the UI/UX aspect of our product, hosting as well as leading the discussion on possible monetisation of our product.",
      },
      {
        id: 4,
        info: "I also acted as the team's Quality Assurance Tester as we developed the project.",
      },
    ],
  },
  {
    id: 2,
    companyName: "Techboox.com",
    positionName: "Staff Writer and Editor",
    jobDuration: "02/2022 – 04/2022",
    jobLocation: "Lagos, Nigeria",
    functionsList: [
      {
        id: 1,
        info: "As a writer at Techboox.com, wrote engaging and informative blog posts about developments in the tech industry.",
      },
      {
        id: 2,
        info: "As my interests and that of the blog spanned a wide variety of topics I continually kept up-to-date with developments in and around the tech scene, from the latest and greatest developments to the backstage stories.",
      },
      {
        id: 3,
        info: "While at Techboox, I also served as an Editor and as such, made reviews and necessary changes to past posts to make them more engaging and inline with the blog's overall goal.",
      },
      {
        id: 4,
        info: "I also began a process of rebranding that positioned the blog to more effectively reach its target audience.",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
