<script setup>
// import { RouterView } from "vue-router";
import StandardView from "@/views/StandardView.vue";
import AdvancedView from "@/views/AdvancedView.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const advancedView = computed(() => store.state.advancedView);

const changeView = () => {
  store.dispatch("changeView");
};

const arrowIconHTML =
  "<i class='fa-solid fa-arrow-left'></i><i class='fa-solid fa-arrow-right'></i>";
// 
// const arrowIconHTML =
//   "<i class='fa-solid fa-arrow-right></i><i class='fa-solid fa-arrow-left></i>'";
</script>

<template>
  <StandardView />
  <!-- eslint-disable vue/no-multiple-template-root -->
  <AdvancedView v-if="advancedView" />
  <button
    @click="changeView"
    class="bg-fuchsia-900 text-white fixed"
    v-html="advancedView ? arrowIconHTML : 'Advanced View'"
  ></button>
</template>

<style scoped>
button {
  padding: 0.5em 1em;
  right: 0;
  bottom: 20%;
  transform: translate(-50%, -50%);
  z-index: 15;
  min-width: 30px;
}
</style>
