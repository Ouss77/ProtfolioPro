import { ref, onMounted } from 'vue'

export function useReveal(threshold = 0.2) {
  const isVisible = ref(false)
  const elementRef = ref(null)

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true
        }
      },
      { threshold }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  return { isVisible, elementRef }
}
