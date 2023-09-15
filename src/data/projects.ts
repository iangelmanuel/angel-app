import type { IProject } from '../types/main.d.ts'

export const projects: IProject[] = [
  {
    title: 'iBlue Wave',
    date: 'Sept 10, 2023',
    description: 'Tienda de articulos de buceos, ofreciendo los mejores precios y con los mejores profesionales que te darán instrucciones.',
    technologies: [
      { name: 'MongoDB' },
      { name: 'Next JS' },
      { name: 'Next Auth' },
      { name: 'TypeScript' },
      { name: 'NextUI' },
      { name: 'Tailwindcss' }
    ],
    github: 'https://github.com/iAngelManuel/ibluewave',
    demo: 'https://ibluewave.vercel.app',
    image: '/img/ibluewave-project.png'
  },
  {
    title: 'Fresquilla',
    date: 'Ago 23, 2023',
    description: 'Es un excelente emprendimiento donde encontraras las fresas con la mejor calidad y precio en Colombia.',
    technologies: [
      { name: 'Node JS' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'Vite' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwindcss' }
    ],
    github: 'https://github.com/iAngelManuel/fresquilla-app',
    demo: 'https://fresquilla.vercel.app',
    image: '/img/fresquilla-project.png'
  }
]
