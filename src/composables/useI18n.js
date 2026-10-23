import { computed, reactive } from 'vue'
import { messages } from '../i18n/messages'

const state = reactive({
  locale: 'en'
})

function lookup(locale, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), messages[locale])
}

export function translate(key) {
  const value = lookup(state.locale, key)
  if (value !== undefined) {
    return value
  }

  const fallback = lookup('en', key)
  return fallback !== undefined ? fallback : key
}

export function translateFormat(key, vars = {}) {
  const value = translate(key)
  if (typeof value !== 'string') {
    return value
  }

  return Object.entries(vars).reduce(
    (text, [name, replacement]) => text.replaceAll(`{${name}}`, replacement),
    value
  )
}

export function getLocale() {
  return state.locale
}

export function setLocale(nextLocale) {
  if (nextLocale !== 'en' && nextLocale !== 'fr') {
    return
  }

  state.locale = nextLocale
  localStorage.setItem('locale', nextLocale)
  document.documentElement.lang = nextLocale
  window.dispatchEvent(new CustomEvent('portfolio-locale'))
}

export function initLocale() {
  const stored = localStorage.getItem('locale')
  if (stored === 'en' || stored === 'fr') {
    state.locale = stored
  }
  document.documentElement.lang = state.locale
}

export function localizeProject(project) {
  if (!project) {
    return project
  }

  const copy = lookup(state.locale, `projects.${project.id}`)
  if (!copy || typeof copy !== 'object') {
    return project
  }

  return {
    ...project,
    title: copy.title || project.title,
    summary: copy.summary || project.summary,
    description: copy.description || project.description,
    imageAlt: copy.imageAlt || project.imageAlt
  }
}

export function translateLinkLabel(label, variant = 'full') {
  const group = variant === 'short' ? 'linksShort' : 'links'
  const translated = lookup(state.locale, `${group}.${label}`)
  if (typeof translated === 'string') {
    return translated
  }

  if (variant === 'short') {
    const full = lookup(state.locale, `links.${label}`)
    return typeof full === 'string' ? full : label
  }

  return label
}

export function useI18n() {
  return {
    t: translate,
    tf: translateFormat,
    locale: computed(() => state.locale),
    setLocale,
    localizeProject,
    translateLinkLabel
  }
}
