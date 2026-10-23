<script setup>
import { computed, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useReveal } from '../composables/useReveal'
import { useI18n } from '../composables/useI18n'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cthxgkq'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kxzy4yd'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Zqr76foxjzXe1e-k2'

const name = ref('')
const email = ref('')
const message = ref('')
const submitting = ref(false)
const status = ref('')
const statusMessage = ref('')
const errors = ref({ name: '', email: '', message: '' })

const { isVisible, elementRef } = useReveal(0.12)
const { t } = useI18n()

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const formReady = computed(() => Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY))

function validate() {
  const nextErrors = { name: '', email: '', message: '' }
  const trimmedName = name.value.trim()
  const trimmedEmail = email.value.trim()
  const trimmedMessage = message.value.trim()

  if (!trimmedName) {
    nextErrors.name = t('contact.nameRequired')
  }

  if (!trimmedEmail) {
    nextErrors.email = t('contact.emailRequired')
  } else if (!emailPattern.test(trimmedEmail)) {
    nextErrors.email = t('contact.emailInvalid')
  }

  if (!trimmedMessage) {
    nextErrors.message = t('contact.messageRequired')
  }

  errors.value = nextErrors
  return !nextErrors.name && !nextErrors.email && !nextErrors.message
}

const handleSubmit = async () => {
  status.value = ''
  statusMessage.value = ''

  if (submitting.value) {
    return
  }

  if (!validate()) {
    status.value = 'error'
    statusMessage.value = t('contact.checkFields')
    return
  }

  if (!formReady.value) {
    status.value = 'error'
    statusMessage.value = t('contact.notConfigured')
    return
  }

  submitting.value = true

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: name.value.trim(),
        from_email: email.value.trim(),
        message: message.value.trim()
      },
      PUBLIC_KEY
    )

    status.value = 'success'
    statusMessage.value = t('contact.sent')
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    status.value = 'error'
    statusMessage.value = t('contact.failed')
    console.error(error)
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    ref="elementRef"
    class="band-a px-4 py-16 text-white sm:px-6 md:py-24 lg:py-32"
  >
    <div class="reveal mx-auto max-w-7xl" :class="isVisible ? 'is-in' : ''">
      <div class="mb-12 text-center md:mb-16">
        <p class="mb-3 text-sm uppercase tracking-widest text-emerald-300">
          {{ t('contact.kicker') }}
        </p>
        <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {{ t('contact.title') }}
        </h2>
        <p class="mx-auto max-w-2xl text-slate-200">
          {{ t('contact.intro') }}
        </p>
      </div>

      <div class="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h3 class="mb-4 text-2xl font-semibold text-emerald-300">
            {{ t('contact.together') }}
          </h3>

          <p class="mb-6 leading-relaxed text-slate-200">
            {{ t('contact.available') }}
          </p>

          <ul class="space-y-3 text-slate-100">
            <li>
              <a class="underline-offset-4 hover:text-emerald-300 hover:underline" href="mailto:oussamasassour@gmail.com">
                oussamasassour@gmail.com
              </a>
            </li>
            <li>
              <a class="underline-offset-4 hover:text-emerald-300 hover:underline" href="tel:+212699945245">
                +212 699 945 245
              </a>
            </li>
            <li>
              <a
                class="underline-offset-4 hover:text-emerald-300 hover:underline"
                href="https://github.com/Ouss77"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a class="underline-offset-4 hover:text-emerald-300 hover:underline" href="/CV-OUSSAMA-SASS.pdf" download="CV-OUSSAMA-SASS.pdf">
                {{ t('actions.cv') }}
              </a>
            </li>
          </ul>
        </div>

        <form
          class="surface-card relative space-y-5 rounded-3xl p-5 sm:p-8 md:p-10"
          novalidate
          @submit.prevent="handleSubmit"
        >
          <div>
            <label for="contact-name" class="contact-label mb-2 block text-sm font-medium">
              {{ t('contact.name') }}
            </label>
            <input
              id="contact-name"
              v-model="name"
              type="text"
              name="name"
              autocomplete="name"
              required
              :aria-invalid="Boolean(errors.name)"
              :aria-describedby="errors.name ? 'contact-name-error' : undefined"
              class="field-input w-full rounded-lg border px-4 py-3 text-base focus:border-emerald-400 focus:outline-none"
            />
            <p v-if="errors.name" id="contact-name-error" class="form-error mt-2 text-sm text-red-300">
              {{ errors.name }}
            </p>
          </div>

          <div>
            <label for="contact-email" class="contact-label mb-2 block text-sm font-medium">
              {{ t('contact.email') }}
            </label>
            <input
              id="contact-email"
              v-model="email"
              type="email"
              name="email"
              autocomplete="email"
              inputmode="email"
              required
              :aria-invalid="Boolean(errors.email)"
              :aria-describedby="errors.email ? 'contact-email-error' : undefined"
              class="field-input w-full rounded-lg border px-4 py-3 text-base focus:border-emerald-400 focus:outline-none"
            />
            <p v-if="errors.email" id="contact-email-error" class="form-error mt-2 text-sm text-red-300">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label for="contact-message" class="contact-label mb-2 block text-sm font-medium">
              {{ t('contact.message') }}
            </label>
            <textarea
              id="contact-message"
              v-model="message"
              name="message"
              rows="5"
              required
              :aria-invalid="Boolean(errors.message)"
              :aria-describedby="errors.message ? 'contact-message-error' : undefined"
              class="field-input w-full rounded-lg border px-4 py-3 text-base focus:border-emerald-400 focus:outline-none"
            ></textarea>
            <p v-if="errors.message" id="contact-message-error" class="form-error mt-2 text-sm text-red-300">
              {{ errors.message }}
            </p>
          </div>

          <button
            type="submit"
            class="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-emerald-500 py-3 font-semibold text-black hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="submitting"
            :aria-busy="submitting"
          >
            {{ submitting ? t('contact.sending') : t('contact.send') }}
          </button>

          <p
            v-if="statusMessage"
            role="status"
            aria-live="polite"
            class="text-sm leading-relaxed"
            :class="status === 'success' ? 'form-success text-emerald-300' : 'form-error text-red-300'"
          >
            {{ statusMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
