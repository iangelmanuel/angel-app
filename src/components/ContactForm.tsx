import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import {
  nameValidation,
  emailValidation,
  phoneValidation,
  messageValidation
} from "../validate/contactValidation"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = handleSubmit(({ name, email, phone, message }) => {
    console.log(name, email, phone, message)
    toast.success("Se envió tus datos correctamente", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    })
    reset()
  })

  return (
    <section className="flex px-5 py-3 md:gap-2">
      <div className="mt-1.5 w-[70px] md:w-1/12">
        <img
          src="/img/user-unknown.png"
          alt="logo de usuario desconocido"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full space-y-2"
      >
        <div>
          <label
            htmlFor="name"
            className="ml-1.5 text-sm font-bold placeholder:text-zinc-800"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej. Angel De La Torre"
            {...register("name", nameValidation)}
            className="mt-1 w-full rounded-full border border-zinc-800 bg-[#00020d] p-2"
          />
          {errors.name !== null && (
            <span className="text-sm text-red-500">
              {errors.name?.message as string}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="ml-1.5 text-sm font-bold placeholder:text-zinc-800"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ej. email@email.com"
            {...register("email", emailValidation)}
            className="mt-1 w-full rounded-full border border-zinc-800 bg-[#00020d] p-2"
          />
          {errors.email !== null && (
            <span className="text-sm text-red-500">
              {errors.email?.message as string}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="ml-1.5 text-sm font-bold placeholder:text-zinc-800"
          >
            Teléfono
          </label>
          <input
            type="phone"
            id="phone"
            placeholder="Ej. 0414-1234567"
            {...register("phone", phoneValidation)}
            className="mt-1 w-full rounded-full border border-zinc-800 bg-[#00020d] p-2"
          />
          {errors.phone !== null && (
            <span className="text-sm text-red-500">
              {errors.phone?.message as string}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="ml-1.5 text-sm font-bold placeholder:text-zinc-800"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Ej. Hola, me gustaría contactarme contigo..."
            {...register("message", messageValidation)}
            className="mt-1 w-full rounded-2xl border border-zinc-800 bg-[#00020d] p-2"
          ></textarea>
          {errors.message !== null && (
            <span className="text-sm text-red-500">
              {errors.message?.message as string}
            </span>
          )}
        </div>

        <div className="mt-1 flex justify-end">
          <input
            type="submit"
            className="rounded-full border-2 border-sky-600 px-4 py-2 text-sm font-bold text-sky-500 transition-all duration-300 ease-in-out hover:bg-sky-600 hover:text-white"
          />
        </div>
      </form>
    </section>
  )
}
