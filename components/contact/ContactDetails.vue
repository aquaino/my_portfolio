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
  <div class="mt-10 sm:mt-20">
    <p
      class="text-2xl text-center sm:text-3xl text-primary-dark dark:text-primary-light heading-decoration mb-10"
    >
      {{ $t("pages.contact.contactsTitle") }}
    </p>

    <div class="flex justify-center mt-14">
      <!-- Contacts -->
      <ul>
        <li
          class="flex"
          v-for="(item, index) in Object.entries(this.contacts)"
          :key="`contact-${index}`"
        >
          <i
            :data-feather="item[1].icon"
            class="w-5 text-my-red dark:text-my-red-50 mr-4 mt-0.5"
          ></i>
          <a
            v-if="item[1].url != ''"
            :href="item[1].url"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
          >
            {{ item[1].value }}
          </a>
          <span
            v-else-if="$t(`store.contacts.${item[0]}`)"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
          >
            {{ $t(`store.contacts.${item[0]}`) }}
          </span>
          <span
            v-else
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
          >
            {{ item[1].value }}
          </span>
        </li>
        <!-- Social profiles -->
        <!-- Mobile (unordered list) -->
        <li
          class="flex sm:hidden"
          v-for="(profile, index) in socialProfiles"
          :key="`social-${index}`"
        >
          <i
            :data-feather="profile.icon"
            class="w-5 text-my-red dark:text-my-red-50 mr-4 mt-0.5"
          ></i>
          <a
            :href="profile.url"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
          >
            {{ profile.profile_name }}
          </a>
        </li>
      </ul>
      <!-- From tablet (two columns/lists) -->
      <ul class="hidden sm:block ml-14">
        <li
          class="flex"
          v-for="(profile, index) in socialProfiles"
          :key="`social-${index}`"
        >
          <i
            :data-feather="profile.icon"
            class="w-5 text-my-red dark:text-my-red-50 mr-4 mt-0.5"
          ></i>
          <a
            :href="profile.url"
            class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
          >
            {{ profile.profile_name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
