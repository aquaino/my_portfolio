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
  <div
    class="container mx-auto flex flex-col-reverse md:flex-row md:py-8 md:mt-10"
  >
    <!-- Contact form -->
    <ContactForm />
    <!-- Contact details -->
    <ContactDetails />
  </div>
</template>
