<script>
export default {
  methods: {
    changeLocale(code) {
      if (process.client) {
        localStorage.setItem("lang", code);
      }
      this.$router.replace(this.switchLocalePath(code));
    },
  },
  updated() {
    this.$i18n.setLocale(localStorage.getItem("lang"));
  },
};
</script>

<template>
  <div class="text-gray-600 dark:text-gray-300">
    <template v-for="(locale, index) in $i18n.locales"
      ><a
        :key="locale.code"
        @click="changeLocale(locale.code)"
        role="button"
        :class="
          $i18n.locale === locale.code
            ? 'text-gray-800 dark:text-gray-100 font-bold'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
        "
        >{{ locale.code }}
      </a>
      <span
        v-if="index != $i18n.locales.length - 1"
        :key="`${locale.code}-separator`"
      >
        |
      </span></template
    >
  </div>
</template>
