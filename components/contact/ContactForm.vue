<script>
import Button from "../reusable/Button.vue";
export default {
  components: { Button },
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-2/3">
    <div
      class="
        leading-loose
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-4
        "
      >
        Scrivimi
      </p>
      <p
        class="
          font-general-regular
          text-primary-dark
          dark:text-primary-light
          mb-8
        "
      >Qualche idea? Scrivimi una email compilando il form sottostante!</p>
      <form
        @submit="
          (e) => {
            e.preventDefault;
          }
        "
        class="font-general-regular space-y-7"
      >
        <div class="">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Il tuo nome</label
          > -->
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            name="name"
            type="text"
            required
            placeholder="Il tuo nome"
            aria-label="Name"
          />
        </div>
        <div class="mt-6">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >La tua e-mail</label
          > -->
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="email"
            name="email"
            type="text"
            required
            placeholder="La tua email"
            aria-label="Email"
          />
        </div>
        <div class="mt-6">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Oggetto</label
          > -->
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="La tua richiesta"
            aria-label="Subject"
          />
        </div>

        <div class="mt-6">
          <!-- <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Messaggio</label
          > -->
          <textarea
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
            required
            placeholder="Il tuo messaggio"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="Invia"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-my-blue
              hover:bg-my-blue-50
              focus:ring-1 focus:ring-my-blue
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="Invia"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
