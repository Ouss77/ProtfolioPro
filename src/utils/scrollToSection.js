export function scrollToSection(id, event) {
  if (event) {
    event.preventDefault()
  }

  const target = document.getElementById(id)
  if (!target) {
    return
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start'
  })

  const nextUrl = `${window.location.pathname}${window.location.search}#${id}`
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (currentUrl !== nextUrl) {
    history.pushState(null, '', `#${id}`)
  }
}
