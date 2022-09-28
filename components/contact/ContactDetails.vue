<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["contacts", "socialProfiles"]),
  },
};
</script>

<template>
  <!-- Contact details -->
  <div class="w-full md:w-1/2 lg:w-1/3">
    <div class="text-left max-w-xl px-6">
      <h2
        class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-8 mb-8"
      >
        Contattami
      </h2>

      <!-- Contacts -->
      <ul class="font-general-regular">
        <li class="flex" v-for="contact in contacts" :key="contact.id">
          <i
            :data-feather="contact.icon"
            class="w-5 text-my-red dark:text-my-red-50 mr-4"
          ></i>
          <a
            v-if="contact.url != ''"
            :href="contact.url"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
            aria-label="Website and Phone"
          >
            {{ contact.name }}
          </a>
          <span
            v-else
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
          >
            {{ contact.name }}
          </span>
        </li>
      </ul>
      <!-- Social profiles -->
      <ul class="font-general-regular">
        <li class="flex" v-for="profile in socialProfiles" :key="profile.id">
          <i
            :data-feather="profile.icon"
            class="w-5 text-my-red dark:text-my-red-50 mr-4"
          ></i>
          <a
            :href="profile.url"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
            aria-label="Website and Phone"
          >
            {{ profile.profile_name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
