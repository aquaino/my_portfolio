<script>
export default {
  props: { isOpen: Boolean },
  computed: {
    navItems: function () {
      return [
        { route: "/", text: this.$t("pages.index.title") },
        { route: "/services", text: this.$t("pages.services.title") },
        { route: "/projects", text: this.$t("pages.projects.title") },
        { route: "/contact", text: this.$t("pages.contact.title") },
      ];
    },
  },
};
</script>

<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <NuxtLink
      v-for="(navItem, index) in navItems"
      :key="`nav-${index}`"
      :to="navItem.route"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-primary-light dark:border-secondary-dark"
      >{{ navItem.text }}</NuxtLink
    >
  </div>
</template>
