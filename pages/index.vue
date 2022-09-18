<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
    <AboutMe />
    <InstagramPosts />
  </div>
</template>

<style scoped></style>
