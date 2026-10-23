import { onMounted, ref } from 'vue'

export function useReveal(threshold = 0.2) {
  const isVisible = ref(false)
  const elementRef = ref(null)

  onMounted(() => {
    const node = elementRef.value
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!node || reduceMotion || typeof IntersectionObserver === 'undefined') {
      isVisible.value = true
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
  })

  return { isVisible, elementRef }
}
