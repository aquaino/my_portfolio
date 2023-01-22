<script>
export default {
  head: function () {
    return {
      title: this.$t("pages.contact.title"),
    };
  },
  scrollToTop: true,
};
</script>

<template>
  <div class="container mx-auto">
    <ContactDetails />
  </div>
</template>
