<script>
import { mapState } from "vuex";

export default {
  props: {
    select: {
      type: String,
      default: "projects",
    },
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>

<template>
  <select
    @change="$emit('change', $event.target.value)"
    :name="select"
    :id="select"
    class="px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
  >
    <option value class="text-sm sm:text-md">
      {{ $t("pages.projects.filterAll") }}
    </option>
    <option
      v-for="category in categories"
      :key="category"
      :value="category"
      class="sm:text-md"
    >
      {{ $t(`store.categories.${category}`) }}
    </option>
  </select>
</template>
