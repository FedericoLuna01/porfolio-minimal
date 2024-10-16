import { StackItems } from "@/data/data";

const TechStack = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl mb-2">Este es mi tech stack favorito</h2>
      <div className="flex gap-6 flex-wrap">
        {StackItems.map((tech, id) => (
          <div
            key={id}
            className="grid grid-cols-[auto,1fr] items-center gap-2"
          >
            {<tech.icon />}
            <p className="text-muted-foreground">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
