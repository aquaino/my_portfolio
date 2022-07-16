<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data: function () {
    return {
      informations: [
        {
          id: uuidv4(),
          key: "Età",
          value: this.calculateAge(new Date(1996, 3, 14)),
          url: "",
        },
        { id: uuidv4(), key: "Luogo", value: "Udine e dintorni", url: "" },
        {
          id: uuidv4(),
          key: "Interessi",
          value: "Auto, Natura, Sport, Storia, Tecnologia, Viaggi",
          url: "",
        },
        {
          id: uuidv4(),
          key: "Istruzione",
          value: "Liceo Scientifico",
          url: "",
        },
        {
          id: uuidv4(),
          key: "Titolo di studio",
          value: "Laurea breve in Informatica",
          url: "",
        },
        { id: uuidv4(), key: "email", value: "alanquaino@gmail.com", url: "" },
        { id: uuidv4(), key: "Telefono", value: "346 270 9363", url: "" },
      ],
    };
  },

  methods: {
    // Dynamically compute age
    calculateAge(birthday) {
      var diff = (new Date().getTime() - birthday.getTime()) / 1000;
      diff /= 60 * 60 * 24;
      return Math.abs(Math.round(diff / 365.25));
    },
  },
};
</script>

<template>
  <div class="block mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light heading-decoration"
    >
      Qualche parola su di me
    </p>
    <!-- About details -->
    <div class="text-left mt-4 sm:mt-6">
      <p
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        Ciao, sono Alan Quaino! Lavoro come sviluppatore Web in un'azienda che
        si occupa di ottimizzazione e gestione dei flussi logistici di
        magazzino. Sono un grande appassionato di auto, soprattutto di
        <i>youngtimer</i>, e nel tempo libero mi piace stare all'aperto e
        immergermi nella natura.
      </p>
    </div>
    <div class="text-center mt-6">
      <span
        v-for="info in informations"
        :key="info.id"
        class="inline-block bg-my-blue dark:bg-my-blue-50 rounded-full px-4 py-2 text-sm text-white mr-3 mb-2"
        ><span class="font-semibold">{{ info.key }}</span> -
        <span v-if="info.url"
          ><a :href="info.url">{{ info.value }}</a></span
        >
        <span v-else>{{ info.value }}</span></span
      >
    </div>
  </div>
</template>
