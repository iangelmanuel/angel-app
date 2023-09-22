import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { nameValidation, emailValidation, phoneValidation, messageValidation } from '../validate/contactValidation'

export default function ContactForm () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = handleSubmit(({ name, email, phone, message }) => {
    console.log(name, email, phone, message)
    toast.success('Se envió tus datos correctamente', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
    reset()
  })

  return (
    <section className="flex md:gap-2 px-5 py-3">
      <div className="w-[70px] md:w-1/12 mt-1.5">
        <img
          src="/img/user-unknown.png"
          alt="logo de usuario desconocido"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      <form onSubmit={onSubmit} className="w-full space-y-2">
        <div>
          <label htmlFor="name" className="placeholder:text-zinc-800 text-sm font-bold ml-1.5">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Ej. Angel De La Torre"
            {...register('name', nameValidation)}
            className="w-full bg-[#00020d] border border-zinc-800 rounded-full p-2 mt-1"
          />
          {(errors.name !== null) && <span className="text-sm text-red-500">{errors.name?.message as string}</span>}
        </div>

        <div>
          <label htmlFor="email" className="placeholder:text-zinc-800 text-sm font-bold ml-1.5">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ej. email@email.com"
            {...register('email', emailValidation)}
            className="w-full bg-[#00020d] border border-zinc-800 rounded-full p-2 mt-1"
          />
          {(errors.email !== null) && <span className="text-sm text-red-500">{errors.email?.message as string}</span>}
        </div>

        <div>
          <label htmlFor="phone" className="placeholder:text-zinc-800 text-sm font-bold ml-1.5">Teléfono</label>
          <input
            type="phone"
            id="phone"
            placeholder="Ej. 0414-1234567"
            {...register('phone', phoneValidation)}
            className="w-full bg-[#00020d] border border-zinc-800 rounded-full p-2 mt-1"
          />
          {(errors.phone !== null) && <span className="text-sm text-red-500">{errors.phone?.message as string}</span>}
        </div>

        <div>
          <label htmlFor="phone" className="placeholder:text-zinc-800 text-sm font-bold ml-1.5">Mensaje</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Ej. Hola, me gustaría contactarme contigo..."
            {...register('message', messageValidation)}
            className="w-full bg-[#00020d] border border-zinc-800 rounded-2xl p-2 mt-1"
          ></textarea>
          {(errors.message !== null) && <span className="text-sm text-red-500">{errors.message?.message as string}</span>}
        </div>

        <div className="flex justify-end mt-1">
          <input
            type="submit"
            className="text-sm font-bold border-2 text-sky-500 border-sky-600 hover:bg-sky-600 hover:text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out"
          />
        </div>
      </form>
    </section>
  )
}
