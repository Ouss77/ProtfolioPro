import { ref } from 'vue'

export function useTilt() {
  const cardRef = ref(null)

  const handleMouseMove = (e) => {
    const card = cardRef.value
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -15
    const rotateY = ((x - centerX) / centerX) * 15

    // Glow position
    const glowX = (x / rect.width) * 100
    const glowY = (y / rect.height) * 100

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `

    card.style.background = `
      radial-gradient(
        circle at ${glowX}% ${glowY}%,
        rgba(16,185,129,0.25),
        transparent 60%
      )
    `
  }

  const resetTilt = () => {
    const card = cardRef.value
    if (!card) return

    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'

    card.style.background = ''
  }

  return { cardRef, handleMouseMove, resetTilt }
}
