<script>
import axios from "axios";

export default {
    data: function () {
        return {
            username: process.env.NUXT_ENV_IG_USERNAME,
            token: process.env.NUXT_ENV_IG_WS_TOKEN,
            limit: 12,
            posts: null,
        };
    },
    async mounted() {
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
};
</script>

<template>
    <div class="block mt-10 sm:mt-20">
        <!-- Instagram posts grid -->
        <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 mt-6 sm:gap-10"
        >
            <a
                v-for="post in posts"
                :key="post.id"
                :href="post.permalink"
                target="__blank"
            >
                <div
                    class="relative bg-cover bg-center rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 h-56 w-56"
                    :style="`background-image: url('${post.media_url}')`"
                >
                    <svg
                        v-if="post.media_type === 'CAROUSEL_ALBUM'"
                        class="absolute top-3 left-3 w-4"
                        aria-hidden="true"
                        aria-label="Carosello"
                        data-fa-proƒcessed=""
                        data-prefix="far"
                        data-icon="clone"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="white"
                            d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"
                        ></path>
                    </svg>
                </div>
            </a>
        </div>
        <div class="mt-8 text-center">
            <button
                class="px-4 py-2.5 text-white tracking-wider bg-my-blue hover:bg-my-blue-50 focus:ring-1 focus:ring-my-blue rounded-lg duration-500"
                onclick="window.open(`https://www.instagram.com/${username}`, '_blank')"
                aria-label="Altre immagini"
            >
                Altro
            </button>
        </div>
    </div>
</template>
