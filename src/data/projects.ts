import type { IProject } from '../types/main.d.ts'

export const projects: IProject[] = [
  {
    title: 'iBlue Wave',
    date: 'Septiembre, 10, 2023',
    description: 'Esta aplicación web permite a los usuarios crear y compartir recetas relacionadas con las fresas.',
    technologies: [
      { name: 'Next 13', image: 'nextjs' },
      { name: 'Next Auth', image: 'nextauth' },
      { name: 'TypeScript', image: 'typescript' },
      { name: 'Tailwindcss', image: 'tailwindcss' }
    ],
    github: 'https://github.com/iAngelManuel/fresquilla-app',
    demo: 'https://fresquilla.vercel.app',
    image: '/img/ibluewave-project.png'
  },
  {
    title: 'Fresquilla',
    date: 'Agosto, 23, 2023',
    description: 'Esta aplicación web permite a los usuarios crear y compartir recetas relacionadas con las fresas.',
    technologies: [
      { name: 'Node JS', image: 'nodejs' },
      { name: 'Express', image: 'express' },
      { name: 'MongoDB', image: 'mongodb' },
      { name: 'Vite', image: 'vite' },
      { name: 'React', image: 'react' },
      { name: 'TypeScript', image: 'typescript' },
      { name: 'Tailwindcss', image: 'tailwindcss' }
    ],
    github: 'https://github.com/iAngelManuel/fresquilla-app',
    demo: 'https://fresquilla.vercel.app',
    image: '/img/fresquilla-project.png'
  }
]
