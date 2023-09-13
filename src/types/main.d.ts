export interface INavigation {
  name: string
  path: string
}

export interface IProject {
  title: string
  date: string
  description: string
  technologies: Technology[]
  github: `https://github.com/iAngelManuel/${string}`
  demo: `https://${string}.vercel.app`
  image: string
}

export interface Technology {
  name: string
}
