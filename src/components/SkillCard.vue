<script setup>
defineProps({
  name: String,
  logo: String
})
</script>

<template>
<div class="skill-chip group flex min-h-14 items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/85 px-3 py-2.5 shadow-sm hover:border-emerald-500/35 hover:bg-slate-900 md:min-h-16 md:gap-3 md:rounded-2xl md:px-4 md:py-3">
  <div
    v-if="logo"
    class="skill-logo flex h-6 w-6 shrink-0 items-center justify-center md:h-8 md:w-8"
  >
    <img
      :src="logo"
      alt=""
      class="h-6 w-6 object-contain md:h-8 md:w-8"
    />
  </div>

  <div
    v-else
    class="skill-fallback flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold uppercase tracking-wide text-emerald-300 md:h-8 md:w-8"
    aria-hidden="true"
  >
    API
  </div>

  <p class="skill-name text-sm font-medium leading-tight text-white/95 md:text-base">
    {{ name }}
  </p>
</div>
</template>
