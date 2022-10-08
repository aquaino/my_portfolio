<script>
import feather from "feather-icons";

export default {
  data: function () {
    return {
      services: [
        {
          icon: "layout",
          title: "Sviluppo web",
          description:
            "Progettazione, sviluppo e messa in produzione di siti e applicazioni online",
        },
        {
          icon: "monitor",
          title: "Gestione siti",
          description:
            "Gestione, aggiornamento e manutenzione di siti web già esistenti",
        },
        {
          icon: "file",
          title: "Grafica 2D",
          description:
            "Design e creazione di loghi, locandine, banner e biglietti da visita",
        },
      ],

      technologies: [
        "Wordpress",
        "Moodle",
        "HTML & CSS",
        "JavaScript",
        "Vue.js",
        "Nuxt.js",
        "WooCommerce",
        "Python",
        "Flask",
        "Adobe Photoshop",
        "Adobe Illusstrator",
        "Adobe Premiere Pro",
        "Canva",
        "Django",
        "Adobe InDesign",
        "PHP",
        "Drupal",
      ],
    };
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
        Cosa mi piace fare
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
              service.description
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
        Con quali strumenti
      </p>
      <!-- About details -->
      <div class="text-left mt-4 sm:mt-6">
        <p
          class="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
        >
          Creo siti web con WordPress e WooCommerce, ma so sviluppare le mie
          applicazioni con framework frontend e backend come VueJS e Flask. Mi
          trovo a mio agio anche con strumenti di editing grafico e video, come
          Photoshop, Illustrator e Premiere.
        </p>
      </div>
      <div class="text-center mt-10">
        <span
          v-for="(tech, index) in technologies"
          :key="`tech-${index}`"
          class="inline-block bg-my-blue dark:bg-my-blue-50 rounded-full px-4 py-2 text-sm text-white mr-3 mb-2 shadow-lg font-semibold"
          >{{ tech }}</span
        >
      </div>
    </div>
  </div>
</template>
