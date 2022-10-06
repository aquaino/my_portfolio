<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      limit: 4,
      relatedProjects: null,
    };
  },

  props: {
    projectCategories: Array,
    projectId: String,
  },

  computed: {
    ...mapState(["projects"]),
  },

  methods: {
    getRelatedProjects() {
      var count = 0;
      return this.projects.filter((item) => {
        // Limit to max 4 related projects
        if (
          count < this.limit &&
          item.categories.includes(this.projectCategories[0]) &&
          item.id !== this.projectId
        ) {
          count++;
          return true;
        } else {
          return false;
        }
      }, count);
    },
  },

  mounted() {
    this.relatedProjects = this.getRelatedProjects();
  },
};
</script>

<template>
  <div
    class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
  >
    <p
      class="text-primary-dark dark:text-primary-light text-3xl font-bold mb-14 sm:mb-16 text-left"
    >
      Progetti correlati
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
      <NuxtLink
        v-for="item in relatedProjects"
        :key="item.id"
        :to="`/projects/${item.id}`"
      >
        <div class="cursor-pointer rounded-xl hover:shadow-xl p-3">
          <img :src="item.img" :alt="item.title" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
