import Image from "next/image"
import ToggleTheme from "./toggle-theme"

const Navbar = () => {
  return (
    <header
      className="border-b border-gray-400 container max-w-2xl mx-auto py-4 px-0 flex justify-between items-center"
    >
      <div
        className="flex items-center"
      >
        <Image
          alt='icon'
          src='/favicon.png'
          width={40}
          height={40}
        />
        <p className="text-3xl">Fede</p>
      </div>
      <nav>
        <ToggleTheme />
      </nav>
    </header>
  )
}

export default Navbar