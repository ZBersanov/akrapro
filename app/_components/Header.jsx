import Image from "next/image"
import Link from "next/link";
import { FaWhatsapp} from "react-icons/fa";


const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--background)] text-white py-3">
      <nav className="container flex items-center justify-between font-bold">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
        </Link>
        <ul className="flex gap-5">
          <li className="nav-link">Услуги</li>
          <li className="nav-link">Портфолио</li>
          <li className="nav-link">Блог</li>
          <li className="nav-link">Контакты</li>
        </ul>
        <div className="flex justify-between items-center gap-10">
          <a href="">
            <FaWhatsapp size={30} className="text-white hover:text-[#25D366] transition-colors duration-300" />
          </a>
          <a href="tel:+79899306655" className="border border-current rounded-[12px] px-6 py-2 inline-block hover:text-red-500 transition-colors duration-300">
            +7 (989) 930-66-55
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header