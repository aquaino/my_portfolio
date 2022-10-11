<script>
import feather from "feather-icons";

export default {
  data: () => {
    return {
      isOpen: false,
    };
  },

  methods: {
    themeSwitcher() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },

  computed: {
    menuIcon: function () {
      var icon = this.isOpen ? "x" : "menu";
      return feather.icons[icon].toSvg({ height: 26, width: 26 });
    },
    colorModeIcon: function () {
      var icon = this.$colorMode.value == "light" ? "moon" : "sun";
      return feather.icons[icon].toSvg({ height: 24, width: 24 });
    },
  },
};
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto" v-click-outside="closeMenu">
    <!-- Header -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <div>
          <NuxtLink to="/">
            <img
              v-if="this.$colorMode.value == 'light'"
              src="~/static/logo-dark.svg"
              alt="Color Logo"
              class="w-16 md:w-20"
            />
            <img
              v-else
              src="~/static/logo-light.svg"
              class="w-16 md:w-20"
              alt="Light Logo"
            />
          </NuxtLink>
        </div>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden flex items-center">
          <!-- Lang switcher -->
          <LangSwitcher class="mr-2" />
          <!-- Small screen dark/mode icon -->
          <div @click.stop="themeSwitcher" role="button" class="mr-2">
            <div
              v-html="colorModeIcon"
              class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
            ></div>
          </div>
          <!-- Open/close menu icon -->
          <div @click.stop="toggleMenu" role="button">
            <div
              v-html="menuIcon"
              class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
            ></div>
          </div>
        </div>
      </div>

      <!-- Header links -->
      <AppNavigation :isOpen="isOpen" />

      <!-- Header right section buttons -->
      <div class="hidden sm:flex">
        <!-- Lang switcher -->
        <LangSwitcher class="mr-2" />
        <!-- Light/dark mode icon -->
        <div
          @click.stop="themeSwitcher"
          role="button"
          v-html="colorModeIcon"
          class="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        ></div>
      </div>
    </div>
  </nav>
</template>
