<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["contacts"]),
    informations: function () {
      return [
        {
          key: this.$t("pages.index.infoPills.age.key"),
          value: this.computeAge(new Date(1996, 3, 14)),
        },
        {
          key: this.$t("pages.index.infoPills.place.key"),
          value: this.$t("store.contacts.place"),
        },
        {
          key: this.$t("pages.index.infoPills.interests.key"),
          value: this.$t("pages.index.infoPills.interests.value"),
        },
        {
          key: this.$t("pages.index.infoPills.education.key"),
          value: this.$t("pages.index.infoPills.education.value"),
        },
        {
          key: this.$t("pages.index.infoPills.qualification.key"),
          value: this.$t("pages.index.infoPills.qualification.value"),
        },
        {
          key: this.$t("pages.index.infoPills.email.key"),
          value: this.contacts.email.value,
        },
        {
          key: this.$t("pages.index.infoPills.phone.key"),
          value: this.contacts.phone.value,
        },
      ];
    },
  },

  methods: {
    // Dynamically compute age
    computeAge(birthday) {
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
      {{ $t("pages.index.aboutMeTitle") }}
    </p>
    <!-- Details -->
    <div class="text-left mt-4 sm:mt-6">
      <p
        class="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
        v-html="$t('pages.index.aboutMeDescr')"
      ></p>
    </div>
    <!-- About me pills -->
    <div class="text-center mt-10">
      <span
        v-for="(info, index) in informations"
        :key="`info-${index}`"
        class="inline-block bg-my-blue dark:bg-my-blue-50 rounded-full px-4 py-2 text-sm text-white mr-3 mb-2 shadow-lg"
        ><span class="font-semibold">{{ info.key }}</span> •
        <span>{{ info.value }}</span></span
      >
    </div>
  </div>
</template>
