<script setup>
import { useReveal } from '../composables/useReveal'

defineProps({
  name: String,
  title: String,
  description: String
})

const { isVisible, elementRef } = useReveal()
</script>

<template>
  <section
    id="accueil"
    ref="elementRef"
    :class="isVisible
      ? 'relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-24 overflow-hidden opacity-100 translate-y-0 transition-all duration-1000'
      : 'relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-24 overflow-hidden opacity-0 translate-y-10'"
  >
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

      <div class="space-y-6">
        <h1 class="text-5xl md:text-6xl font-bold">
          {{ name }}
        </h1>

        <h2 class="text-2xl text-emerald-400 font-semibold">
          {{ title }}
        </h2>

        <p class="text-gray-300 max-w-lg">
          {{ description }}
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a
            href="#services"
            class="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:opacity-90 transition duration-300"
          >
            Voir mes services
          </a>

          <a
            href="https://wa.me/212699945245?text=Bonjour%20Oussama%2C%20je%20veux%20discuter%20de%20mon%20projet."
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 rounded-full border border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-500 hover:text-black transition duration-300"
          >
            Contact WhatsApp
          </a>
        </div>
      </div>

      <div class="relative flex justify-center">
        <div class="absolute w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>

        <img
          src="../images/her.png"
          alt="Photo de profil"
          class="relative w-80 md:w-[420px] drop-shadow-2xl"
        />
      </div>

    </div>
  </section>
</template>
