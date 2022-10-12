<template>
  <section class="skills-section w-auto mb-10 bg-white">
    <SectionHeader headerText="Skills" />
    <div class="skills-container md:grid grid-cols-2 grid-rows-2 gap-x-6">
      <Skill :skill="skill" v-for="skill in skills" :key="skill.id" />
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import Skill from "@/components/Skill.vue";

const skills = [
  {
    id: 1,
    heading: "Frontend Web Development",
    info: "As a developer with well over a year of active development in front-end web development, I have built responsive and functional websites with modern technologies. I have learnt and become very conversant with front-end technologies such as HTML, CSS (and SCSS), JavaScript, VueJS, as well as JavaScript based libraries like SwiperJS and ChartJS.",
    skillLevel: 4,
  },
  {
    id: 2,
    heading: "Version Control Systems - Git",
    info: "A programmer isn't complete without his version control system and that is why I have firsthand knowledge of the Git version control system as well as using it in conjunction with Github. This places me well to work within a team",
    skillLevel: 3,
  },
  {
    id: 3,
    heading: "Backend Web Development",
    info: "Not only do I have an excellent knowledge of frontend web development, I also have a great understanding of the backend as well with primary focus on the NodeJS ecosystem. I am well-versed in using NodeJS via the Express framework to build scalable and functional backends for websites with the use of the MongoDB NoSQL Database.",
    skillLevel: 3,
  },
  {
    id: 4,
    heading: "Web Hosting",
    info: "Web pages are meant to be viewed and what better way to view than by hosting? I have firsthand knowledge with hosting webpages on multiple platforms like Netlify, GitHub, Heroku and Render.",
    skillLevel: 3,
  },
];
</script>

<style lang="scss" scoped></style>
