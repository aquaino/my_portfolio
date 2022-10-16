<script>
import { mapState } from "vuex";
import feather from "feather-icons";

export default {
  data: () => {
    return {
      selectedProject: "",
      searchProject: "",
    };
  },
  computed: {
    ...mapState(["projects"]),
    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        return item.categories.includes(this.selectedProject);
      });
    },
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted: function () {
    feather.replace();
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <!-- Projects grid header -->
    <div class="text-center">
      <p
        class="text-xl sm:text-4xl font-medium mb-3 text-ternary-dark dark:text-ternary-light heading-decoration"
      >
        {{ $t("pages.projects.projectsGridTitle") }}
      </p>
      <p class="text-md sm:text-lg text-gray-500 dark:text-ternary-light">
        {{ $t("pages.projects.projectsGridDescr") }}
      </p>
    </div>

    <div class="mt-6">
      <div
        class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <!-- Search -->
        <div class="flex justify-between gap-2">
          <input
            v-model="searchProject"
            class="pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required=""
            :placeholder="$t('pages.projects.searchPlaceholder')"
          />
        </div>
        <!-- Filter -->
        <ProjectsFilter @change="selectedProject = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <transition-group
      name="scale"
      mode="out-in"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6"
    >
      <NuxtLink
        v-for="project in filteredProjects"
        :key="project.id"
        :to="`/projects/${project.id}`"
      >
        <div
          class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark h-full"
        >
          <nuxt-img
            :src="project.img"
            :alt="$t(`pages.projects.${project.id}.title`)"
            class="rounded-t-xl border-none"
          />
          <div class="text-center px-4 py-6">
            <p
              class="text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-1"
            >
              {{ $t(`pages.projects.${project.id}.title`) }}
            </p>
            <span class="text-sm text-ternary-dark dark:text-ternary-light">{{
              $translateCategories(project.categories)
            }}</span>
          </div>
        </div>
      </NuxtLink>
    </transition-group>
  </div>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
