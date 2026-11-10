import { useState } from "react"
import ContactButtons from "./ContactButtons"
import ContactForm from "./ContactForm"
import { ToastContainer } from "react-toastify"

export default function ContentContact() {
  const [isClicked, setIsClicked] = useState(true)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <article className="flex items-center">
        <section className="my-5 flex px-5">
          <div className="mr-5">
            <img
              src="/img/user.JPG"
              alt="foto de usuario @iangelmanuel"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="md:flex md:flex-col">
            <section className="flex flex-col justify-center md:flex-row md:items-center md:justify-start md:gap-1">
              <a
                href="/"
                className="hover:underline"
              >
                <h5 className="flex gap-x-0.5 font-bold">
                  Angel De La Torre
                  <svg
                    fill="cyan"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#00020d"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </h5>
              </a>
              <small className="text-zinc-500">
                <a
                  href="https://twitter.com/iangelmanuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @iangelmanuel
                </a>{" "}
                · sept 13, 2023
              </small>
            </section>
            <section className="mt-1 w-[270px] text-sm text-[14px] md:mt-0.5 md:w-[500px] lg:w-[450px]">
              <div className="mt-1">
                <h6 className="mb-1 text-sm font-bold text-sky-500">
                  ¿Deseas contactarte conmigo?
                </h6>
                <p>
                  ¡Puedes dejarme un comentario para poder comunicarnos lo mas
                  pronto posible!
                </p>
              </div>
            </section>
          </div>
        </section>
      </article>

      <article className="my-3 flex items-center justify-evenly pb-3">
        <ContactButtons
          isClicked={isClicked}
          handleClick={handleClick}
        />
      </article>

      <article className="w-full">{isClicked && <ContactForm />}</article>
      <ToastContainer />
    </>
  )
}
