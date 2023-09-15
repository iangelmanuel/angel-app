import { useState } from 'react'
import ContactButtons from './ContactButtons'
import ContactForm from './ContactForm'
import { ToastContainer } from 'react-toastify';

export default function ContentContact () {
  const [ isClicked, setIsClicked ] = useState(true)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <article className="flex items-center border-t border-zinc-900">
        <section className="flex px-5 my-5">
          <div className="mr-5">
            <img
              src="/img/user.JPG"
              alt="foto de usuario @iangelmanuel"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="md:flex md:flex-col">
            <section className="flex flex-col md:flex-row md:gap-1 justify-center md:justify-start md:items-center">
              <h5 className="flex gap-x-0.5 font-bold">
                Angel De La Torre
                <svg
                  fill="cyan"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#00020d"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </h5>
              <small className="text-zinc-500">
                <a
                  href="https://twitter.com/iangelmanuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >@iangelmanuel</a> · Sept 13, 2023
              </small>
            </section>
            <section className="text-sm mt-1 md:mt-0.5 w-[270px] md:w-[500px] lg:w-[450px] text-[14px]">
              <div className="mt-1">
                <h6 className="text-sm text-sky-500 font-bold mb-1">¿Deseas contactarte conmigo?</h6>
                <p>¡Puedes dejarme un comentario para poder comunicarnos lo mas pronto posible!</p>
              </div>
            </section>
          </div>
        </section>
      </article>
      <article className="flex justify-evenly items-center my-3 pb-3">
        <ContactButtons
          isClicked={isClicked}
          handleClick={handleClick}
        />
      </article>

      <article className="w-[350px] mx-auto">
        {isClicked && (
          <ContactForm />
        )}
      </article>
      <ToastContainer />
    </>
  )
}
