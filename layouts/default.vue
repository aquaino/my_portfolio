<template>
  <div
    class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <!-- App header -->
    <AppHeader />

    <!-- Render contents with transition -->
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>

    <!-- App footer -->
    <AppFooter />

    <!-- Go back to top when scrolled down -->
    <div
      class="
        flex
        space-x-2
        mr-8
        mb-6
        right-0
        bottom-0
        z-50
        fixed
        items-center
        sm:space-x-4
      "
    >
      <BackToTop />
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
import AppHeader from "../components/shared/AppHeader.vue";
import AppFooter from "../components/shared/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  mounted() {
    feather.replace();
  },
  components: { AppFooter, BackToTop, AppHeader },
};
</script>
