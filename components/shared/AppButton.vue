<script>
export default {
  props: {
    type: String,
    text: String,
  },
};
</script>

<template>
  <button
    :type="type"
    class="px-5 py-1.5 text-white tracking-wider bg-my-blue hover:bg-my-blue-50 focus:ring-1 focus:ring-my-blue rounded-md duration-500"
  >
    {{ text }}
  </button>
</template>
