<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      author: "Alan Quaino",
      starterTheme: "Nuxt.js & Tailwind CSS Portfolio",
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
  },
};
</script>

<template>
  <div class="justify-center items-center text-center">
    <div
      class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      Copyright &copy; {{ copyrightDate }}
      <a
        :key="socialProfiles[0].id"
        :href="socialProfiles[0].url"
        target="__blank"
        class="font-general-medium hover:underline hover:text-my-blue dark:hover:text-my-blue-50 duration-500"
        >{{ author }}</a
      >
    </div>
    <div
      class="font-general-regular text-xs text-gray-400 dark:text-gray-500 mt-2"
    >
      Sviluppato con
      <a
        href="https://github.com/realstoman/nuxtjs-tailwindcss-portfolio"
        target="__blank"
        class="font-general-medium text-gray-500 dark:text-gray-400 hover:underline hover:text-my-blue dark:hover:text-my-blue-50 duration-500"
        >{{ starterTheme }}</a
      >
    </div>
    <div
      class="font-general-regular text-xs text-ternary-dark dark:text-ternary-light mt-2"
    >
      Questo sito non fa uso di cookie e non raccoglie dati sensibili di alcun
      tipo
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
