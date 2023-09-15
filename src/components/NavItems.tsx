export default function NavItems() {
  const actualPage = window.location.pathname
  return (
    <>
      <li className={
          `${actualPage === '/'
            ? 'border-b-4 border-sky-500'
            : 'text-gray-500'
          }`
        }
      >
        <a href="/" className="font-bold">
          Sobre mi
        </a>
      </li>


      <li className={
          `${actualPage ==='/projects'
            ? 'border-b-4 border-sky-500'
            : 'text-gray-500'
          }`
        }
      >
        <a href="/projects" className="font-bold">
          Proyectos
        </a>
      </li>


      <li 
        className={
          `${actualPage ==='/contact'
            ? 'border-b-4 border-sky-500'
            : 'text-gray-500'
          }`
        }
      >
        <a href="/contact" className="font-bold">
          Contacto
        </a>
      </li>
    </>
  )
}
