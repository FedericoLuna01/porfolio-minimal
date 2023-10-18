import Link from "next/link"
import { Button } from "../ui/button"
import { ContactItems } from "@/data/data"

const Contact = () => {
  return (
    <section
      className="pt-10"
    >
      <h2
        className="text-xl mb-2"
      >
        Si te interesa saber un poco más sobre mi me podes encontrar en
      </h2>
      <div className="flex gap-4 flex-wrap">
        {
          ContactItems.map(({ href, icon, id, label }) => (
            <Button
              key={id}
              asChild
              variant='secondary'
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
                {label}
              </Link>
            </Button>
          ))
        }
      </div>
    </section>
  )
}

export default Contact