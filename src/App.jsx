import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef(null)

  // Custom cursor tracking
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top  = `${e.clientY}px`
    }

    const addHover = () => cursor.classList.add('hovering')
    const removeHover = () => cursor.classList.remove('hovering')

    window.addEventListener('mousemove', move, { passive: true })

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      {/* Custom cursor — hidden on touch devices */}
      <div ref={cursorRef} className="cursor" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
