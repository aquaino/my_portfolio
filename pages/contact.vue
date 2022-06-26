<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Udine e dintorni",
          icon: "map-pin",
          url: "",
        },
        {
          id: 2,
          name: "alanquaino@gmail.com",
          icon: "mail",
          url: "mailto:alanquaino@gmail.com",
        },
        {
          id: 3,
          name: "346 270 9363",
          icon: "phone",
          url: "tel:+393462709363",
        },
      ],
    };
  },
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
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
