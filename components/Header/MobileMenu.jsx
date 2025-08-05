import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const navLinks = [
  { label: "Услуги", id: "services", href: "/#services", isPage: false },
  { label: "Портфолио", id: "portfolio", href: "/#portfolio", isPage: false },
  { label: "Медиа", id: "media", href: "/media", isPage: true },
  { label: "Школа", id: "school", href: "/school", isPage: true },
  { label: "Контакты", id: "contacts", href: "/#contacts", isPage: false },
]

const MobileMenu = ({ isOpen, onClose, onScroll }) => (
  <div
    className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-between items-center px-6 py-8 transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="w-full flex justify-center">
      <Link href="/" onClick={onClose}>
        <Image src="/logo.svg" width={80} height={80} alt="logo" />
      </Link>
    </div>

    <ul className="flex flex-col gap-8 text-2xl font-semibold uppercase items-center">
      {navLinks.map(({ label, id, href, isPage }) => (
        <li key={id}>
          {isPage ? (
            <Link
              href={href}
              onClick={onClose}
              className="hover:text-red-500 transition duration-300"
            >
              {label}
            </Link>
          ) : (
            <a
              href={href}
              onClick={(e) => onScroll(e, id)}
              className="hover:text-red-500 transition duration-300"
            >
              {label}
            </a>
          )}
        </li>
      ))}
    </ul>

    <div className="flex flex-col items-center gap-4">
      <a href="https://wa.me/79899306655" className="flex items-center gap-2 hover:text-[#25D366]">
        <FaWhatsapp size={24} /> WhatsApp
      </a>
      <a
        href="tel:+79899306655"
        className="border border-white rounded-lg px-4 py-2 hover:text-red-500 transition"
      >
        +7 (989) 930-66-55
      </a>
    </div>
  </div>
)

export default MobileMenu
