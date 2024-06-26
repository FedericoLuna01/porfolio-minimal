import { Github, Linkedin, Twitter } from "lucide-react";

export const ProjectsItems = [
  {
    id: 4,
    title: "Carta",
    description:
      "Carta es proyecto donde a través de un código QR se puede acceder a la web y ver el menú de un restaurant o comercio. Además el usuario tiene la posibilidad de realizar un pedido y el dueño del comercio puede ver los pedidos recibidos.",
    repo: "https://github.com/FedericoLuna01/carta",
    demo: "https://demo-carta.vercel.app/",
    images: ["/carta-4.png", "/carta-3.png", "/carta-2.png", "/carta-1.png"],
    technologies: [
      "Nextjs",
      "Typescript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: 1,
    title: "Allnighter Movies",
    description:
      "Esta página web se trata de una aplicación que permite buscar películas y ver sus detalles. Contiene una paginación, un buscador y un filtro por puntuación de estrellas.",
    repo: "https://github.com/FedericoLuna01/AllNighterMovies",
    demo: "https://moviesallnight.netlify.app/",
    images: ["/allnighter-1.png", "/allnighter-2.png"],
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
      "/airbnb-clon-3.jpeg",
      "/airbnb-clon-1.jpeg",
      "/airbnb-clon-2.jpeg",
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
    images: ["/ecommerce-cms-1.png", "/ecommerce-cms-2.png"],
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
    icon: (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current"
      >
        <g clipPath="url(#a)">
          <path d="M11.214.006c-.052.005-.216.022-.364.033C7.442.347 4.25 2.186 2.226 5.013a11.88 11.88 0 00-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.533.526.364.04 1.936.04 2.3 0 1.611-.179 2.977-.578 4.323-1.265.207-.105.247-.134.219-.157-.02-.014-.899-1.194-1.955-2.62l-1.919-2.593-2.404-3.559a342.499 342.499 0 00-2.422-3.556c-.009-.003-.018 1.578-.023 3.51-.007 3.38-.01 3.516-.052 3.596a.426.426 0 01-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 01-.157-.172l-.05-.105.005-4.704.007-4.706.073-.092a.644.644 0 01.174-.143c.096-.047.133-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 2 2.895 4.362l4.734 7.172 1.9 2.878.097-.063a12.318 12.318 0 002.465-2.163 11.947 11.947 0 002.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 00-2.498-.523c-.226-.024-1.776-.05-1.97-.03zm4.913 7.26a.473.473 0 01.237.276c.018.06.023 1.365.018 4.305l-.007 4.218-.743-1.14-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.478.478 0 01.232-.296c.097-.05.132-.054.5-.054.347 0 .408.005.486.047z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Typescript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-current"
      >
        <rect x={2} y={2} rx={1.312} />
        <path
          d="M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575 11.56 11.56 0 0 0 2.146.192 9.968 9.968 0 0 0 2.088-.211 5.11 5.11 0 0 0 1.735-.7 3.542 3.542 0 0 0 1.181-1.266 4.469 4.469 0 0 0 .186-3.394 3.409 3.409 0 0 0-.717-1.117 5.236 5.236 0 0 0-1.123-.877 12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479 2.089 2.089 0 0 1-.516-.518 1.091 1.091 0 0 1-.181-.618 1.039 1.039 0 0 1 .162-.571 1.4 1.4 0 0 1 .459-.436 2.439 2.439 0 0 1 .726-.283 4.211 4.211 0 0 1 .956-.1 5.942 5.942 0 0 1 .808.058 6.292 6.292 0 0 1 .856.177 5.994 5.994 0 0 1 .836.3 4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4 12.426 12.426 0 0 0-1.9-.129 8.767 8.767 0 0 0-2.064.235 5.239 5.239 0 0 0-1.716.733 3.655 3.655 0 0 0-1.171 1.271 3.731 3.731 0 0 0-.431 1.845 3.588 3.588 0 0 0 .789 2.34 6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517 2.463 2.463 0 0 1 .626.585 1.2 1.2 0 0 1 .23.719 1.1 1.1 0 0 1-.144.552 1.269 1.269 0 0 1-.435.441 2.381 2.381 0 0 1-.726.292 4.377 4.377 0 0 1-1.018.105 5.773 5.773 0 0 1-1.969-.35 5.874 5.874 0 0 1-1.805-1.045Zm-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Node JS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-current"
      >
        <g fill="#a1a1aa">
          <path d="M17.172 2.299a2.452 2.452 0 0 0-2.345 0L4.152 8.189C3.46 8.553 2.992 9.297 3 10.07v11.864c-.005.787.486 1.538 1.197 1.897 1.022.544 2.015 1.143 3.055 1.65 1.203.59 2.706.721 3.923.105.988-.51 1.427-1.646 1.425-2.689.008-3.915.002-7.83.003-11.746.024-.174-.107-.36-.297-.356-.454-.007-.91-.004-1.364-.001-.172-.017-.34.126-.327.299-.006 3.89.001 7.781-.004 11.672a1.318 1.318 0 0 1-.872 1.237c-1.198.42-4.617-1.8-4.617-1.8a.337.337 0 0 1-.193-.33V10.13a.362.362 0 0 1 .225-.365c3.546-1.952 7.09-3.908 10.637-5.862a.384.384 0 0 1 .418.001c3.546 1.953 7.091 3.908 10.638 5.86a.366.366 0 0 1 .224.366c0 3.913.001 7.828-.001 11.741a.337.337 0 0 1-.19.334c-3.514 1.941-7.067 3.82-10.549 5.818-.151.087-.323.186-.494.09-.915-.507-1.82-1.033-2.732-1.544-.1-.062-.226-.089-.33-.02-.408.216-.793.39-1.263.577-.66.261-.554.368.04.714 1.068.604 2.137 1.206 3.204 1.81.703.439 1.646.47 2.372.065 3.558-1.961 7.116-3.925 10.675-5.886.708-.361 1.202-1.109 1.197-1.896V10.069c.007-.756-.442-1.487-1.114-1.856-3.57-1.974-7.142-3.942-10.713-5.914Z" />
          <path d="M22.542 11.206c-1.397-.747-3.058-.787-4.61-.69-1.122.112-2.301.421-3.118 1.225-.838.808-1.02 2.113-.622 3.168.285.745 1.003 1.23 1.745 1.486.957.338 1.96.442 2.966.546.916.096 1.833.19 2.713.463.36.12.78.302.89.693.101.464-.01 1.003-.387 1.325-1.195.946-4.521.801-5.702.056-.478-.317-.684-.879-.768-1.414-.009-.167-.143-.32-.324-.307a68.556 68.556 0 0 0-1.36 0c-.159-.014-.323.099-.332.26-.093 2.452 2.158 3.52 4.27 3.756 1.208.115 2.441.108 3.63-.15.893-.204 1.789-.579 2.404-1.267.758-.836.907-2.081.567-3.123-.26-.777-1.003-1.276-1.762-1.532-1.033-.354-2.258-.545-3.193-.634-1.36-.13-2.976-.076-3.361-.97-.153-.468-.023-1.049.407-1.337 1.138-.771 3.453-.669 4.632-.092.54.27.854.827.983 1.389.024.165.135.337.326.33.45.008.901.002 1.351.002.155.011.325-.076.355-.234-.02-1.174-.619-2.376-1.7-2.949Z" />
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Prisma",
    icon: (
      <svg
        preserveAspectRatio="xMidYMid"
        viewBox="-27 0 310 310"
        className="w-5 h-5 fill-current"
      >
        <path
          fill="#a1a1aa"
          d="M254.313 235.519 148 9.749A17.063 17.063 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.465 17.465 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.929 17.929 0 0 0 11.26-9.722 17.542 17.542 0 0 0-.101-14.76l-.008.008Zm-23.802 9.683-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18h.007Z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Mongo DB",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-current"
      >
        <path d="M15.821 23.185s0-10.361.344-10.36c.266 0 .612 13.365.612 13.365-.476-.056-.956-2.199-.956-3.005zm6.668-10.24c-.919-4.016-2.932-7.469-5.708-10.134l-.007-.006a9.8 9.8 0 0 1-.895-1.732l-.024-.068.001.068c0 .565-.253 1.07-.652 1.409l-.003.002c-3.574 3.034-5.848 7.505-5.923 12.508v.013l-.001.208a15.1 15.1 0 0 0 6.07 12.115l.039.028.087.063q.241 1.784.412 3.576h.601c.166-1.491.39-2.796.683-4.076l-.046.239c.396-.275.742-.56 1.065-.869l-.003.003a14.143 14.143 0 0 0 4.549-10.404l-.001-.182v.009a16.341 16.341 0 0 0-.261-2.871l.015.099z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-current"
      >
        <path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Figma",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current"
      >
        <path
          stroke="#a1a1aa"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3H9a3 3 0 0 0 0 6m3-6v6m0-6h3a3 3 0 1 1 0 6m-3 0H9m3 0h3m-3 0v6M9 9a3 3 0 1 0 0 6m6-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-3 6H9m3 0v3a3 3 0 1 1-3-3"
        />
      </svg>
    ),
  },
];
