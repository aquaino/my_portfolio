<template>
  <div
    class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <!-- App header -->
    <AppHeader />
    <!-- Page content -->
    <Nuxt />
    <!-- App footer -->
    <AppFooter />

    <!-- Scroll to top button -->
    <div
      class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4"
    >
      <BackToTop />
    </div>
  </div>
</template>

<script>
export default {
  transition: "default",
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>
