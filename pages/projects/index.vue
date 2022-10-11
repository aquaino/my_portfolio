<script>
export default {
  scrollToTop: true,
  head: function () {
    return {
      title: this.$t("pages.projects.title"),
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <ProjectsGrid />
  </div>
</template>
