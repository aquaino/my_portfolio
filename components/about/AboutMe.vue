<script>
export default {
  data: function () {
    return {
      informations: [
        {
          key: "Età",
          value: this.ccomputeAge(new Date(1996, 3, 14)),
          url: "",
        },
        { key: "Luogo", value: "Udine e dintorni", url: "" },
        {
          key: "Interessi",
          value: "Auto, Natura, Sport, Storia, Tecnologia, Viaggi",
          url: "",
        },
        {
          key: "Istruzione",
          value: "Liceo Scientifico",
          url: "",
        },
        {
          key: "Titolo di studio",
          value: "Laurea breve in Informatica",
          url: "",
        },
        { key: "email", value: "alanquaino@gmail.com", url: "" },
        { key: "Telefono", value: "346 270 9363", url: "" },
      ],
    };
  },

  methods: {
    // Dynamically compute age
    ccomputeAge(birthday) {
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
      class="text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light heading-decoration"
    >
      Qualche parola su di me
    </p>
    <!-- Details -->
    <div class="text-left mt-4 sm:mt-6">
      <p class="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
        Ciao, sono Alan Quaino! Lavoro come sviluppatore web in un'azienda che
        si occupa di ottimizzazione e gestione dei flussi logistici di
        magazzino. Sono un grande appassionato di auto, soprattutto di
        <i>youngtimer</i>, e nel tempo libero mi piace stare all'aperto e
        immergermi nella natura. Se vuoi saperne di più, consulta il mio
        <a
          class="font-medium italic"
          href="/CV Alan Quaino 20210811.pdf"
          target="_blank"
          >curriculum vitae</a
        > o i miei profili social.
      </p>
    </div>
    <!-- About me pills -->
    <div class="text-center mt-6">
      <span
        v-for="(info, index) in informations"
        :key="`info-${index}`"
        class="inline-block bg-my-blue dark:bg-my-blue-50 rounded-full px-4 py-2 text-sm text-white mr-3 mb-2 shadow-lg"
        ><span class="font-semibold">{{ info.key }}</span> -
        <span v-if="info.url"
          ><a :href="info.url">{{ info.value }}</a></span
        >
        <span v-else>{{ info.value }}</span></span
      >
    </div>
  </div>
</template>
