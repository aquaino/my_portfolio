<script>
import axios from "axios";
import qs from "querystring";

export default {
  data: function () {
    return {
      form: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
      feedback: {
        level: null,
        text: null,
      },
    };
  },

  methods: {
    async sendEmail() {
      // 1. Get access token
      var access_token;
      await axios({
        method: "post",
        url: "https://oauth2.googleapis.com/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify({
          grant_type: "refresh_token",
          client_secret: process.env.NUXT_ENV_GMAIL_CLIENT_SECRET,
          client_id: process.env.NUXT_ENV_GMAIL_CLIENT_ID,
          refresh_token: process.env.NUXT_ENV_GMAIL_API_REFRESH_TOKEN,
        }),
      })
        .then((response) => {
          access_token = response.data.access_token;
        })
        .catch((error) => {
          console.log(error);
        });

      // 2. Prepare and send message
      await axios({
        method: "post",
        url: "https://www.googleapis.com/gmail/v1/users/alanquaino@gmail.com/messages/send",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          // Base 64 encoding
          raw: btoa(
            `From: alanquaino@gmail.com\nTo: alanquaino@gmail.com\nSubject: Nuovo contatto da alanquaino.netlify.app\n\nNome: ${this.form.name}\nEmail: ${this.form.email}\nOggetto: ${this.form.subject}\n\nMessaggio:\n${this.form.message}\n`
          ),
        }),
      })
        .then(() => {
          this.feedback.level = "success";
          this.feedback.text =
            "Grazie per avermi contattato! Risponderò al più presto.";

          this.form = { name: null, email: null, subject: null, message: null };
        })
        .catch((error) => {
          console.log(error);
          this.feedback.level = "danger";
          this.feedback.text = "Si è verificato un errore. Riprova più tardi.";
        });
    },
  },
};
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2 lg:w-2/3">
    <div
      class="leading-loose m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p class="text-primary-dark dark:text-primary-light text-2xl mb-4">
        Scrivimi
      </p>
      <p class="text-primary-dark dark:text-primary-light mb-8">
        Qualche idea? Scrivimi una email compilando il form sottostante.
      </p>
      <form @submit.prevent="sendEmail()" class="space-y-7">
        <div class="">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Il tuo nome</label
          > -->
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required
            placeholder="Il tuo nome"
            aria-label="Nome"
            v-model="form.name"
          />
        </div>
        <div class="mt-6">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >La tua e-mail</label
          > -->
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="email"
            name="email"
            type="email"
            required
            placeholder="La tua email"
            aria-label="Email"
            v-model="form.email"
          />
        </div>
        <div class="mt-6">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Oggetto</label
          > -->
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="La tua richiesta"
            aria-label="Oggetto"
            v-model="form.subject"
          />
        </div>

        <div class="mt-6">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Messaggio</label
          > -->
          <textarea
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Messaggio"
            required
            placeholder="Il tuo messaggio"
            v-model="form.message"
          ></textarea>
        </div>

        <button
          class="mt-6 px-4 py-2.5 text-white tracking-wider bg-my-blue hover:bg-my-blue-50 focus:ring-1 focus:ring-my-blue rounded-lg duration-500"
          type="submit"
          aria-label="Invia"
        >
          Invia
        </button>
      </form>
    </div>
    <!-- Feedback alert -->
    <div
      v-if="feedback.level"
      class="px-4 py-3 mx-4 mt-6 rounded-xl"
      :class="
        this.feedback.level === 'success'
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      "
      role="alert"
    >
      {{ feedback.text }}
    </div>
  </div>
</template>
