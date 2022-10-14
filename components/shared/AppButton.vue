<script>
export default {
  props: {
    submit: Boolean,
    text: String,
  },
  computed: {
    type: function () {
      return this.submit ? "submit" : "button";
    },
  },
};
</script>

<template>
  <button
    :type="type"
    class="px-5 py-1.5 text-white font-medium tracking-wider bg-my-blue hover:bg-my-blue-50 focus:ring-1 focus:ring-my-blue rounded-md duration-500"
    @click="$emit('buttonClicked')"
  >
    {{ text }}
  </button>
</template>
