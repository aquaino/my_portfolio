<script>
export default {
  props: ["isOpen"],
};
</script>

<template>
  <!-- App header navigation links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="font-general-regular mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <NuxtLink
      to="/"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-primary-light dark:border-secondary-dark"
      aria-label="Home"
      >Chi sono</NuxtLink
    >
    <NuxtLink
      to="/services"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="Servizi"
      >Servizi</NuxtLink
    >
    <NuxtLink
      to="/projects"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="Progetti"
      >Progetti</NuxtLink
    >
    <NuxtLink
      to="/contact"
      class="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
      aria-label="Contatti"
      >Contatti</NuxtLink
    >
  </div>
</template>

<style>
#nav .nuxt-link-exact-active {
  @apply text-my-blue;
  font-weight: bold;
}
</style>
