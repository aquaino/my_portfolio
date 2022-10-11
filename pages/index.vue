<script>
export default {
  head: function () {
    return {
      title: this.$t("pages.index.title"),
    };
  },
  scrollToTop: true,
};
</script>

<template>
  <div class="container mx-auto">
    <AboutMe />
    <InstagramPosts />
  </div>
</template>
