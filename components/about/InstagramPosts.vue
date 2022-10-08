<script>
import axios from "axios";
import feather from "feather-icons";

export default {
  data: function () {
    return {
      username: process.env.NUXT_ENV_IG_USERNAME,
      token: process.env.NUXT_ENV_IG_WS_TOKEN,
      limit: 12,
      posts: null,
    };
  },

  methods: {
    async getIgPosts() {
      await axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&limit=${this.limit}&access_token=${this.token}`
        )
        .then((response) => {
          this.posts = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    openIgProfile() {
      window.open(`https://www.instagram.com/${this.username}`, "_blank");
    },
  },

  mounted: async function () {
    feather.replace();
    await this.getIgPosts();
  },

  updated: function () {
    feather.replace();
  },
};
</script>

<template>
  <div class="block mt-14 sm:mt-20">
    <!-- Instagram posts grid -->
    <div v-if="posts">
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6 mt-6"
      >
        <a
          v-for="post in posts"
          :key="post.id"
          :href="post.permalink"
          target="__blank"
        >
          <div
            class="relative bg-cover bg-center rounded-xl shadow-lg hover:shadow-xl"
            :style="`background-image: url('${post.media_url}'); padding-bottom: 100%;`"
          >
            <i
              v-if="post.media_type === 'CAROUSEL_ALBUM'"
              data-feather="copy"
              class="absolute top-3 left-3"
              width="24"
              height="24"
              color="white"
            ></i>
          </div>
        </a>
      </div>
      <div class="mt-8 text-center">
        <AppButton text="Altro" @buttonClicked="openIgProfile" />
      </div>
    </div>
    <!-- Loader -->
    <AppLoader v-else />
  </div>
</template>
