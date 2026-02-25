<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useReveal } from '../composables/useReveal'

const name = ref('')
const email = ref('')
const message = ref('')

const { isVisible, elementRef } = useReveal(0.3)

const handleSubmit = async () => {
  try {
    await emailjs.send(
      'service_cthxgkq',
      'template_kxzy4yd',
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value
      },
      'Zqr76foxjzXe1e-k2'
    )

    alert("Message envoyé avec succès ✅")

    name.value = ''
    email.value = ''
    message.value = ''

  } catch (error) {
    alert("Erreur lors de l'envoi ❌")
    console.error(error)
  }
}
</script>

<template>
  <section
    id="contact"
    ref="elementRef"
    :class="isVisible
      ? 'py-32 bg-slate-950 text-white opacity-100 translate-y-0 transition-all duration-1000'
      : 'py-32 bg-slate-950 text-white opacity-0 translate-y-10'"
  >
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-20">
        <p class="text-emerald-400 uppercase tracking-widest text-sm mb-3">
          Contact
        </p>
        <h2 class="text-5xl font-bold mb-6">
          Contact
        </h2>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Discutons de votre projet et construisons quelque chose d’exceptionnel.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-20">

        <!-- LEFT -->
        <div>
          <h3 class="text-2xl font-semibold mb-8 text-emerald-400">
            Travaillons ensemble
          </h3>

          <p class="text-gray-400 mb-6">
            Disponible pour missions freelance, collaboration ou opportunités CDI.
          </p>

          <div class="space-y-4 text-gray-300">
            <p>Email : contact@email.com</p>
            <p>Téléphone : +33 6 00 00 00 00</p>
          </div>
        </div>

        <!-- RIGHT FORM -->
        <form
          @submit.prevent="handleSubmit"
          class="bg-slate-900 border border-slate-800 p-10 rounded-3xl space-y-6"
        >

          <div>
            <input
              v-model="name"
              type="text"
              placeholder="Votre nom"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <input
              v-model="email"
              type="email"
              placeholder="Votre email"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <textarea
              v-model="message"
              rows="5"
              placeholder="Votre message"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-emerald-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-emerald-500 text-black font-semibold py-3 rounded-lg hover:bg-emerald-400 transition duration-300"
          >
            Envoyer le message
          </button>

        </form>

      </div>

    </div>
  </section>
</template>
