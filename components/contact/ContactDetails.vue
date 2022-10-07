<script>
import { mapState } from "vuex";
import feather from "feather-icons";

export default {
  computed: {
    ...mapState(["contacts", "socialProfiles"]),
  },
  mounted: function () {
    feather.replace();
  },
};
</script>

<template>
  <!-- Contact details -->
  <div class="w-full md:w-1/2 lg:w-1/3">
    <div class="text-left max-w-xl px-6">
      <h2 class="text-2xl text-primary-dark dark:text-primary-light mt-8 mb-8">
        Contattami
      </h2>

      <!-- Contacts -->
      <ul>
        <li
          class="flex"
          v-for="(contact, index) in contacts"
          :key="`contact-${index}`"
        >
          <i
            :data-feather="contact.icon"
            class="w-5 text-my-red dark:text-my-red-50 mr-4 mt-1"
          ></i>
          <a
            v-if="contact.url != ''"
            :href="contact.url"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
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
      <ul>
        <li
          class="flex"
          v-for="(profile, index) in socialProfiles"
          :key="`social-${index}`"
        >
          <i
            :data-feather="profile.icon"
            class="w-5 text-my-red dark:text-my-red-50 mr-4 mt-1"
          ></i>
          <a
            :href="profile.url"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline cursor-pointer"
          >
            {{ profile.profile_name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
