<script>
import feather from "feather-icons";

export default {
  head: function () {
    return {
      title: "Servizi",
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
  <div>
    <ServicesGrid class="container mx-auto" />
  </div>
</template>

<style scoped></style>
