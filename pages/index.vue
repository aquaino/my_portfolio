<script>
import feather from "feather-icons";

export default {
  head: function () {
    return {
      title: "Chi sono",
    };
  },
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
