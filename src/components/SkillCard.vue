<script setup>
import { useTilt } from '../composables/useTilt'

defineProps({
  name: String,
  logo: String
})

const { cardRef, handleMouseMove, resetTilt } = useTilt()

</script>

<template>
<div
  ref="cardRef"
  @mousemove="handleMouseMove"
  @mouseleave="resetTilt"
  style="transform-style: preserve-3d;"
  class="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center transition-all duration-300 shadow-lg"
>
    <img
        :src="logo"
        :alt="name"
        class="w-16 h-16 mx-auto mb-4"
    />
    <h3 class="text-lg font-semibold">
        {{ name }}
    </h3>
</div>
</template>
