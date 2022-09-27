<script>
import feather from "feather-icons";
export default {
  scrollToTop: true,
  data: function () {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ project.date }}</span
            >
          </div>
          <div class="flex items-center mr-10">
            <i
              data-feather="folder"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ project.categories.join(", ") }}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.projectImages"
          :key="projectImage.id"
        >
          <img
            :src="projectImage.img"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            @click="toggleModal()"
          />
          <!-- Image modal -->
          <div
            class="fixed top-0 left-0 z-80 w-screen h-screen bg-my-blue flex justify-center items-center"
            v-show="showModal"
          >
            <a
              class="fixed text-white cursor-pointer z-90 top-6 right-8 text-5xl"
              @click="toggleModal()"
              ><i data-feather="x"></i
            ></a>
            <img
              class="max-w-[800px] max-h-[600px] object-cover rounded-xl"
              :src="projectImage.img"
            />
          </div>
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p
              class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
            >
              Cliente
            </p>
            <ul class="leading-loose">
              <li
                class="font-general-regular text-ternary-dark dark:text-ternary-light"
              >
                <span>Nome: {{ customers[project.customer].name || "-" }}</span>
              </li>
              <li
                class="font-general-regular text-ternary-dark dark:text-ternary-light"
              >
                <span
                  >Settore:
                  {{ customers[project.customer].sector || "-" }}</span
                >
              </li>
              <li
                class="font-general-regular text-ternary-dark dark:text-ternary-light"
              >
                <span
                  >Sito web:
                  {{ customers[project.customer].website || "-" }}</span
                >
              </li>
              <li
                class="font-general-regular text-ternary-dark dark:text-ternary-light"
              >
                <span
                  >Telefono:
                  {{ customers[project.customer].phone || "-" }}</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full sm:w-2/3 text-left">
          <!-- Single project objectives -->
          <div class="mb-7">
            <p
              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              {{ project.objectivesTitle }}
            </p>
            <p
              class="font-general-regular text-primary-dark dark:text-ternary-light"
            >
              {{ project.objectivesDetails }}
            </p>
          </div>
          <!-- Single project technologies -->
          <div class="mb-7">
            <p
              class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
            >
              {{ project.techTitle }}
            </p>
            <p
              class="font-general-regular text-primary-dark dark:text-ternary-light"
            >
              {{ project.technologies.join(", ") }}
            </p>
          </div>
          <div class="mb-7">
            <p
              class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-2"
            >
              {{ project.detailsTitle }}
            </p>
            <p
              class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Project related projects -->
      <ProjectRelatedProjects />
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
