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
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      Copyright &copy; {{ copyrightDate }}
      <a
        :key="socialProfiles[0].id"
        :href="socialProfiles[0].url"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ author }}</a
      >
      | Made from
      <a
        href="https://github.com/realstoman/nuxtjs-tailwindcss-portfolio"
        target="__blank"
        class="
          font-general-medium
          text-secondary-dark
          dark:text-secondary-light
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ starterTheme }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
