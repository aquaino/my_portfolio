<script>
export default {
  head: function () {
    return {
      title: this.$t("pages.services.title"),
    };
  },
  scrollToTop: true,
};
</script>

<template>
  <div>
    <ServicesGrid class="container mx-auto" />
  </div>
</template>
