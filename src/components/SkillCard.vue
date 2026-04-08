<script setup>
defineProps({
  name: String,
  logo: String
})
</script>

<template>
<div class="skill-chip group flex items-center gap-2 md:gap-3 rounded-xl md:rounded-2xl border border-slate-800 bg-slate-900/85 px-2.5 md:px-4 py-2 md:py-3 min-h-[46px] md:min-h-[64px] shadow-sm transition duration-300 hover:border-emerald-500/35 hover:bg-slate-900">
  <div
    v-if="logo"
    class="skill-logo flex h-5 w-5 md:h-8 md:w-8 shrink-0 items-center justify-center"
  >
    <img
      :src="logo"
      :alt="name"
      class="h-5 w-5 md:h-8 md:w-8 object-contain"
    />
  </div>

  <div
    v-else
    class="skill-fallback flex h-5 w-5 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[8px] md:text-[10px] font-bold uppercase tracking-wide text-emerald-300"
  >
    API
  </div>

  <h3 class="skill-name text-[12px] md:text-lg font-medium leading-tight text-white/95 whitespace-nowrap">
    {{ name }}
  </h3>
</div>
</template>
