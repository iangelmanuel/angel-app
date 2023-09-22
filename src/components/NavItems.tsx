import { useState, useEffect } from 'react'

export default function NavItems() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const actualPage = window.location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const storedPosition = sessionStorage.getItem('scrollPosition')
    if (storedPosition) {
      window.scrollTo(0, parseInt(storedPosition))
    }
  }, [])

  const handleLinkClick = () => {
    sessionStorage.setItem('scrollPosition', scrollPosition.toString())
  }

  return (
    <>
      <li
        className={
          `${actualPage === '/'
            ? 'border-b-4 border-sky-500'
            : 'text-zinc-400'
          }`
        }
        onClick={handleLinkClick}
      >
        <a href="/" className="font-bold">
          Sobre mi
        </a>
      </li>

      <li
        className={
          `${actualPage === '/projects'
            ? 'border-b-4 border-sky-500'
            : 'text-zinc-400'
          }`
        }
        onClick={handleLinkClick}
      >
        <a href="/projects" className="font-bold">
          Proyectos
        </a>
      </li>

      <li 
        className={
          `${actualPage === '/contact'
            ? 'border-b-4 border-sky-500'
            : 'text-zinc-400'
          }`
        }
        onClick={handleLinkClick}
      >
        <a href="/contact" className="font-bold">
          Contacto
        </a>
      </li>
    </>
  )
}
