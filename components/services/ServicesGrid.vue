<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data: function () {
    return {
      services: [
        {
          id: uuidv4(),
          icon: "layout",
          title: "Sviluppo web",
          description:
            "Progettazione, sviluppo e messa in produzione di siti e applicazioni online",
        },
        {
          id: uuidv4(),
          icon: "globe",
          title: "Gestione siti",
          description:
            "Gestione, aggiornamento e manutenzione di siti Web già esistenti",
        },
        {
          id: uuidv4(),
          icon: "edit-2",
          title: "Grafica 2D",
          description:
            "Design e creazione di loghi, locandine, banner e biglietti da visita",
        },
      ],

      technologies: [
        {
          id: uuidv4(),
          key: "Wordpress",
          value: 10,
        },
        {
          id: uuidv4(),
          key: "Moodle",
          value: 10,
        },
        {
          id: uuidv4(),
          key: "HTML & CSS",
          value: 10,
        },
        {
          id: uuidv4(),
          key: "JavaScript",
          value: 9,
        },
        {
          id: uuidv4(),
          key: "VueJS",
          value: 9,
        },
        {
          id: uuidv4(),
          key: "WooCommerce",
          value: 8,
        },
        {
          id: uuidv4(),
          key: "Python",
          value: 8,
        },
        {
          id: uuidv4(),
          key: "Flask",
          value: 8,
        },
        {
          id: uuidv4(),
          key: "Adobe Photoshop",
          value: 8,
        },
        {
          id: uuidv4(),
          key: "Adobe Illusstrator",
          value: 8,
        },
        {
          id: uuidv4(),
          key: "Adobe Premiere Pro",
          value: 8,
        },
        {
          id: uuidv4(),
          key: "Canva",
          value: 8,
        },
        {
          id: uuidv4(),
          key: "Django",
          value: 7,
        },
        {
          id: uuidv4(),
          key: "Adobe InDesign",
          value: 7,
        },
        {
          id: uuidv4(),
          key: "PHP",
          value: 6,
        },
        {
          id: uuidv4(),
          key: "Drupal",
          value: 6,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <!-- Services grid -->
    <div class="mt-10 sm:mt-20">
      <p
        class="font-general-medium text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light heading-decoration"
      >
        Cosa mi piace fare
      </p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:gap-10"
      >
        <div
          v-for="service in services"
          :key="service.id"
          class="rounded-xl shadow-lg mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          aria-label="Single service"
        >
          <i
            :data-feather="service.icon"
            class="mx-auto mt-7 text-gray-500 dark:text-gray-200"
            width="40"
            height="40"
          ></i>
          <div class="text-center px-4 pb-6 pt-4">
            <p
              class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
            >
              {{ service.title }}
            </p>
            <span
              class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
              >{{ service.description }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Technologies list -->
    <div class="mt-10 sm:mt-20 text-center">
      <p
        class="font-general-medium text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light heading-decoration"
      >
        Cosa utilizzo
      </p>
      <!-- About details -->
      <div class="text-left mt-4 sm:mt-6">
        <p
          class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
        >
          Creo siti web con WordPress e WooCommerce, ma so sviluppare le mie
          applicazioni con framework frontend e backend come VueJS e Flask. Mi
          trovo a mio agio anche con strumenti di editing grafico e video, come
          Photoshop, Illustrator e Premiere.
        </p>
      </div>
      <div class="text-center mt-6">
        <span
          v-for="tech in technologies"
          :key="tech.id"
          class="inline-block bg-my-blue dark:bg-my-blue-50 rounded-full px-4 py-2 text-sm text-white mr-3 mb-2"
          ><span class="font-semibold">{{ tech.key }}</span> -
          <span v-if="tech.url"
            ><a :href="tech.url">{{ tech.value }}</a></span
          >
          <span v-else>{{ tech.value }}/10</span></span
        >
      </div>
    </div>
  </div>
</template>
