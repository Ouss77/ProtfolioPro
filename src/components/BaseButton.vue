<script setup>
defineProps({
  label: String,
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <button
    class="px-6 py-3 rounded-lg font-semibold transition"
    :class="variant === 'primary'
      ? 'bg-green-400 text-black'
      : 'border border-green-400 text-green-400'"
  >
    {{ label }}
  </button>
</template>
