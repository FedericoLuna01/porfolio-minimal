import { StackItems } from "@/data/data"

const TechStack = () => {
  return (
    <section
      className="pt-10"
    >
      <h2
        className="text-xl mb-2"
      >
        Este es mi tech stack favorito
      </h2>
      <div
        className="flex gap-5 flex-wrap"
      >
        {
          StackItems.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex gap-2"
            >
              <div
                className="w-auto h-auto"
              >
                {icon}
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">{name}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TechStack