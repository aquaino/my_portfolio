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
        level: "danger",
        text: "Un ennesimo test",
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
          this.feedback.text = this.$t("pages.contact.feedbackSuccess");

          this.form = { name: null, email: null, subject: null, message: null };
        })
        .catch((error) => {
          console.log(error);
          this.feedback.level = "danger";
          this.feedback.text = this.$t("pages.contact.feedbackError");
        });
    },
  },
};
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2 lg:w-2/3">
    <div
      class="m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p class="text-primary-dark dark:text-primary-light text-2xl mb-4">
        {{ $t("pages.contact.contactFormTitle") }}
      </p>
      <p class="text-primary-dark dark:text-primary-light mb-8">
        {{ $t("pages.contact.contactFormDescr") }}
      </p>
      <form class="space-y-7">
        <div>
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required
            :placeholder="$t('pages.contact.namePlaceholder')"
            v-model="form.name"
          />
        </div>
        <div class="mt-6">
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="email"
            name="email"
            type="email"
            required
            :placeholder="$t('pages.contact.emailPlaceholder')"
            v-model="form.email"
          />
        </div>
        <div class="mt-6">
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="subject"
            name="subject"
            type="text"
            required
            :placeholder="$t('pages.contact.subjectPlaceholder')"
            v-model="form.subject"
          />
        </div>

        <div class="mt-6">
          <textarea
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="message"
            name="message"
            cols="14"
            rows="6"
            required
            :placeholder="$t('pages.contact.messagePlaceholder')"
            v-model="form.message"
          ></textarea>
        </div>

        <AppButton
          :text="$t('pages.contact.sendButton')"
          @buttonClicked="sendEmail"
        />
      </form>
    </div>
    <!-- Feedback alert -->
    <div
      v-if="feedback.level"
      class="px-4 py-3 mx-4 mt-6 rounded-xl"
      :class="
        this.feedback.level === 'success'
          ? 'bg-green-200 dark:bg-green-700 text-green-700 dark:text-green-200'
          : 'bg-red-200 dark:bg-red-800 text-red-700 dark:text-red-200'
      "
      role="alert"
    >
      {{ feedback.text }}
    </div>
  </div>
</template>
