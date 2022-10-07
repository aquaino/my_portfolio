<script>
export default {
  data: function () {
    return {
      navItems: [
        { route: "/", text: "Chi sono" },
        { route: "/services", text: "Servizi" },
        { route: "/projects", text: "Progetti" },
        { route: "/contact", text: "Contatti" },
      ],
    };
  },
  props: { isOpen: Boolean },
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

<style scoped>
#nav .nuxt-link-exact-active {
  @apply text-my-blue;
}
</style>
