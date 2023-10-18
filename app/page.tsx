import About from "@/components/about";
import Contact from "@/components/contact/contact";
import Projects from "@/components/projects/projects";
import TechStack from "@/components/tech-stack/tech-stack";

export default function Home() {
  return (
    <main
      className="container max-w-2xl mx-auto text-zinc-900 dark:text-white py-4 px-0"
    >
      <About />
      <Contact />
      <TechStack />
      <Projects />
    </main>
  )
}
