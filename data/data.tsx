import { FigmaIcon, NextIcon, PostgresIcon, PrismaIcon, ShadCnIcon, TailwindIcon, TypescriptIcon } from "@/components/icons";
import { Github, Linkedin, Twitter } from "lucide-react";


export const ProjectsItems = [
  {
    id: 5,
    title: "Cuppy",
    description: "Cuppy es mi agencia web, donde ofrezco mis servicios de desarrollo web y diseño. Hasta el momento llevo realizados 4 proyectos, donde uno de ellos es la web de mi pueblo.",
    demo: "https://cuppyagenciaweb.com",
    images: [],
    technologies: ["Nextjs", "TailwindCSS", "Framer motion"],
  },
  {
    id: 4,
    title: "Carta",
    description:
      "Carta es un proyecto con un compañero, se trata de un menú digital donde los restaurants o bares van a poder mostrar su productos y los clientes van a poder verlos y hacer pedidos. La aplicación cuenta con un panel de administración donde los dueños de los locales van a poder gestionar sus productos, categorías, y pedidos en tiempo real gracias a Socket IO.",
    repo: "https://github.com/FedericoLuna01/carta",
    demo: "https://demo-carta.vercel.app/",
    images: ["/carta-1.webp", "/carta-2.webp", "/carta-3.webp", "/carta-4.webp", "/carta-5.webp"],
    technologies: [
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Socket IO"
    ],
  },
  {
    id: 1,
    title: "Allnighter Movies",
    description:
      "Esta página web se trata de una aplicación que permite buscar películas y ver sus detalles. Contiene una paginación, un buscador y un filtro por puntuación de estrellas.",
    repo: "https://github.com/FedericoLuna01/AllNighterMovies",
    demo: "https://moviesallnight.netlify.app/",
    images: ["/allnighter-1.webp", "/allnighter-2.webp"],
    technologies: ["React", "ChakraUI", "React Routed DOM"],
  },
  {
    id: 2,
    title: "Airbnb - clon",
    description:
      "Esta página web es un clon de Airbnb. La aplicación permite buscar alojamientos y ver sus detalles. Contiene la funcionalidad de login, guardar favoritos, aplicar filtros, reservas, subir tu propio alojamiento.",
    repo: "https://github.com/FedericoLuna01/Airbnb-copy",
    demo: "https://proyecto-clon-viajes.vercel.app/",
    images: [
      "/airbnb-clon-3.webp",
      "/airbnb-clon-1.webp",
      "/airbnb-clon-2.webp",
    ],
    technologies: ["NextJS", "Tailwind", "Prisma", "MongoDB"],
  },
  {
    id: 3,
    title: "CMS Ecommerce",
    description:
      "Esta web te da la posibilidad de crear productos, colores, categorías y billboards para que puedas consumir en el frontend de tu Ecommerce",
    repo: "https://github.com/FedericoLuna01/ecommerce-admin",
    demo: "https://ecommerce-admin-theta-pink.vercel.app/",
    images: ["/ecommerce-cms-1.webp", "/ecommerce-cms-2.webp"],
    technologies: ["NextJS", "Tailwind", "Prisma", "Supabase"],
  },
];

export const ContactItems = [
  {
    id: 1,
    label: "Federico Luna",
    href: "https://www.linkedin.com/in/federico-luna-dev/",
    icon: <Linkedin className="mr-2" size={24} />,
  },
  {
    id: 2,
    label: "FedericoLuna01",
    href: "https://github.com/FedericoLuna01",
    icon: <Github className="mr-2" size={24} />,
  },
  {
    id: 3,
    label: "@FedericoLunaDev",
    href: "https://twitter.com/FedericoLunaDev",
    icon: <Twitter className="mr-2" size={24} />,
  },
];

export const StackItems = [
  {
    id: 1,
    name: "Next JS",
    icon: NextIcon
  },
  {
    id: 2,
    name: "Typescript",
    icon: TypescriptIcon,
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    id: 8,
    name: "ShadCN",
    icon: ShadCnIcon
  },
  {
    id: 7,
    name: "Figma",
    icon: FigmaIcon,
  },
  {
    id: 4,
    name: "Prisma",
    icon: PrismaIcon,
  },
  {
    id: 5,
    name: "PostgreSQL",
    icon: PostgresIcon,
  }
];

