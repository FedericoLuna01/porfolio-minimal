import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <section>
      <h1
        className="text-4xl font-semibold"
      >
        Hola, soy Federico Luna.
      </h1>
      <p
        className="text-4xl font-semibold"
      >
        Desarrollo aplicaciones y sitios web.
      </p>
      <p
        className="mt-2 mr-0 md:mr-32 text-zinc-600 dark:text-zinc-400"
      >
        Este es mi portfolio, donde muestro algunos de mis proyectos y comparto un poco de mi experiencia.
        Soy una persona muy compremetida con el ambiente tech, me gusta estar siempre actualizado y aprender nuevas tecnologías.
      </p>
      <h2 className="text-xl mt-10 mb-2">Si querés saber mas sobre mí podes ver mi CV</h2>
      <Button
        variant='secondary'
        asChild
      >
        <a href="/federico-luna-cv.pdf" download>
          <Download className="mr-2" size={24} />
          Descargar CV
        </a>
      </Button>
    </section>
  )
}

export default About