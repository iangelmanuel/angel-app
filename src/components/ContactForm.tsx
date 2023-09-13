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
    <section className="px-5 py-3">
      <form onSubmit={onSubmit} className="space-y-2">
        <div>
          <label htmlFor="name" className="placeholder:text-zinc-800 text-sm font-bold ml-1.5">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Ej. Angel De La Torre"
            {...register('name', nameValidation)}
            className="w-full bg-[#00020d] border border-zinc-800 rounded-xl p-2 mt-1"
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
            className="w-full bg-[#00020d] border border-zinc-800 rounded-xl p-2 mt-1"
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
            className="w-full bg-[#00020d] border border-zinc-800 rounded-xl p-2 mt-1"
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
            className="w-full bg-[#00020d] border border-zinc-800 rounded-xl p-2 mt-1"
          ></textarea>
          {(errors.message !== null) && <span className="text-sm text-red-500">{errors.message?.message as string}</span>}
        </div>
        <div className="mt-1">
          <input
            type="submit"
            className="w-full bg-sky-500 text-white font-bold rounded-xl p-2 mt-1 cursor-pointer hover:bg-sky-600 transition-all"
          />
        </div>
      </form>
    </section>
  )
}
