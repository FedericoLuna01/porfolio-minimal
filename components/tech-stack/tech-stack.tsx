import { StackItems } from "@/data/data";

const TechStack = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl mb-2">Este es mi tech stack favorito</h2>
      <div className="flex gap-6 flex-wrap">
        {StackItems.map(({ id, name }) => (
          <p key={id} className="text-muted-foreground">
            {name}
          </p>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
