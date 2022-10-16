<script>
import feather from "feather-icons";

export default {
  data: function () {
    return {
      technologies: [
        { logo: "/images/technologies/wp.png", name: "WordPress" },
        { logo: "/images/technologies/moodle.png", name: "Moodle" },
        { logo: "/images/technologies/html_css.png", name: "HTML & CSS" },
        { logo: "/images/technologies/js.png", name: "JavaScript" },
        { logo: "/images/technologies/vue.png", name: "Vue.js" },
        { logo: "/images/technologies/nuxt.png", name: "Nuxt.js" },
        { logo: "/images/technologies/woo.png", name: "WooCommerce" },
        { logo: "/images/technologies/python.png", name: "Python" },
        { logo: "/images/technologies/flask.png", name: "Flask" },
        { logo: "/images/technologies/ps.png", name: "Adobe Photoshop" },
        { logo: "/images/technologies/ai.png", name: "Adobe Illustrator" },
        { logo: "/images/technologies/pr.png", name: "Adobe Premiere Pro" },
        { logo: "/images/technologies/canva.png", name: "Canva" },
        { logo: "/images/technologies/django.png", name: "Django" },
        { logo: "/images/technologies/in.png", name: "Adobe InDesign" },
        { logo: "/images/technologies/php.png", name: "PHP" },
        { logo: "/images/technologies/drupal.png", name: "Drupal" },
      ],
    };
  },
  computed: {
    services: function () {
      return [
        {
          icon: "layout",
          title: this.$t("pages.services.servicesGrid.development.title"),
          descr: this.$t("pages.services.servicesGrid.development.descr"),
        },
        {
          icon: "monitor",
          title: this.$t("pages.services.servicesGrid.websites.title"),
          descr: this.$t("pages.services.servicesGrid.websites.descr"),
        },
        {
          icon: "file",
          title: this.$t("pages.services.servicesGrid.graphics.title"),
          descr: this.$t("pages.services.servicesGrid.graphics.descr"),
        },
      ];
    },
  },
  mounted: function () {
    feather.replace();
  },
};
</script>

<template>
  <div>
    <!-- Services grid -->
    <div class="mt-10 sm:mt-20">
      <p
        class="text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light heading-decoration"
      >
        {{ $t("pages.services.servicesGridTitle") }}
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:gap-10"
      >
        <div
          v-for="(service, index) in services"
          :key="`service-${index}`"
          class="rounded-xl shadow-lg mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
        >
          <i
            :data-feather="service.icon"
            class="mx-auto mt-7 text-gray-300 dark:text-gray-500"
            width="50"
            height="50"
          ></i>
          <div class="text-center px-4 pb-6 pt-4">
            <p
              class="text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
              {{ service.title }}
            </p>
            <span class="text-lg text-ternary-dark dark:text-ternary-light">{{
              service.descr
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Technologies list -->
    <div class="mt-14 sm:mt-20 text-center">
      <p
        class="text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light heading-decoration"
      >
        {{ $t("pages.services.toolsTitle") }}
      </p>
      <!-- About details -->
      <div class="text-left mt-4 sm:mt-6">
        <p class="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          {{ $t("pages.services.toolsDescr") }}
        </p>
      </div>
      <div class="text-center mt-10">
        <span
          v-for="(tech, index) in technologies"
          :key="`tech-${index}`"
          class="inline-block bg-my-blue dark:bg-my-blue-50 rounded-full px-4 py-2 text-sm text-white mr-3 mb-2 shadow-lg font-semibold"
          ><nuxt-img class="inline mr-1 mb-0.5 w-4 h-4" :src="tech.logo" />{{
            tech.name
          }}</span
        >
      </div>
    </div>
  </div>
</template>
