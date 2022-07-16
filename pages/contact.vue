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
  <div
    class="container mx-auto flex flex-col-reverse md:flex-row md:py-8 md:mt-10"
  >
    <!-- Contact form -->
    <ContactForm />
    <!-- Contact details -->
    <ContactDetails />
  </div>
</template>
