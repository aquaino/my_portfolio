<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: function () {
    return {
      showModal: true,
    };
  },
  methods: {
    openImage(url) {
      window.open(url, "_blank");
    },
  },
  computed: {
    project() {
      return this.$store.getters.getProjectById(this.$route.params.id);
    },
    customers() {
      return this.$store.state.customers;
    },
  },
  head: function () {
    return {
      title: this.$t(`pages.projects.${this.project.id}.title`),
    };
  },
  mounted: function () {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div>
      <!-- Project heading and meta info -->
      <div>
        <p
          class="text-left flex items-center text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          {{ $t(`pages.projects.${project.id}.title`) }}
          <!-- New project badge -->
          <span
            v-if="project.highlight"
            class="font-semibold bg-my-blue dark:bg-my-blue-50 rounded-full px-2 py-1 text-xs text-white shadow-lg ml-2 mt-1"
            >NEW</span
          >
        </p>
        <div class="flex flex-wrap">
          <div class="flex items-center mb-4 mr-4">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ $moment(project.date, "YYYY/MM/DD").format("LL") }}</span
            >
          </div>
          <div class="flex items-center mb-4 mr-4">
            <i
              data-feather="folder"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ $translateCategories(project.categories) }}</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="(projectImage, index) in project.projectImages"
          :key="`image-${index}`"
        >
          <nuxt-img
            :src="projectImage.img"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            @click="openImage(projectImage.img)"
          />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p
              class="text-2xl text-secondary-dark dark:text-secondary-light mb-2"
            >
              {{ $t("pages.project.client") }}
            </p>
            <ul class="leading-loose">
              <li class="text-ternary-dark dark:text-ternary-light">
                <span
                  >{{ $t("pages.project.name") }}:
                  {{ customers[project.customer].name || "-" }}</span
                >
              </li>
              <li class="text-ternary-dark dark:text-ternary-light">
                <span
                  >{{ $t("pages.project.sector") }}:
                  {{
                    customers[project.customer].sector
                      ? $t(
                          `store.sectors.${customers[project.customer].sector}`
                        )
                      : "-"
                  }}</span
                >
              </li>
              <li class="text-ternary-dark dark:text-ternary-light">
                <span>{{ $t("pages.project.website") }}: </span>
                <a
                  v-if="customers[project.customer].website"
                  :href="customers[project.customer].website"
                  target="_blank"
                  class="whitespace-nowrap"
                  >{{
                    customers[project.customer].website.includes("https")
                      ? customers[project.customer].website.slice(8)
                      : customers[project.customer].website.slice(7)
                  }}</a
                >
                <span v-else>-</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full sm:w-2/3">
          <!-- Single project objectives -->
          <div class="mb-7">
            <p class="text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {{ $t("pages.project.target") }}
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              {{ $t(`pages.projects.${project.id}.targetDetails`) }}
            </p>
          </div>
          <!-- Single project technologies -->
          <div class="mb-7">
            <p class="text-2xl text-ternary-dark dark:text-ternary-light mb-2">
              {{ $t("pages.project.technologies") }}
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              {{ project.technologies.join(", ") }}
            </p>
          </div>
          <div class="mb-7">
            <p class="text-primary-dark dark:text-primary-light text-2xl mb-2">
              {{ $t("pages.project.activities") }}
            </p>
            <p class="mb-5 text-ternary-dark dark:text-ternary-light">
              {{ $t(`pages.projects.${project.id}.description`) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Project related projects -->
      <ProjectRelatedProjects
        :projectCategories="project.categories"
        :projectId="project.id"
      />
    </div>
  </div>
</template>
