<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["aboutHeading", "aboutMe"]),
  },
};
</script>

<template>
  <div class="block mt-10 sm:mt-20">
    <p
      class="
        font-general-medium
        text-2xl text-center
        sm:text-3xl
        text-primary-dark
        dark:text-primary-light
      "
    >
      {{ aboutHeading }}
    </p>
    <!-- About details -->
    <div class="text-left mt-6 sm:mt-8">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
        v-html="bio.bio"
      >
      </p>
    </div>
  </div>
</template>
