import Link from "next/link"

const navLinks = [
  { label: "Услуги", id: "services", href: "/#services", isPage: false },
  { label: "Портфолио", id: "portfolio", href: "/#portfolio", isPage: false },
  { label: "Медиа", id: "media", href: "/media", isPage: true },
  { label: "Школа", id: "school", href: "/school", isPage: true },
  { label: "Контакты", id: "contacts", href: "/#contacts", isPage: false },
]

const NavLinks = ({ onScroll }) => (
  <ul className="hidden lg:flex gap-10 uppercase font-semibold tracking-wide">
    {navLinks.map(({ label, id, href, isPage }) => (
      <li key={id}>
        {isPage ? (
          <Link href={href} className="hover:text-red-500 transition duration-300">
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
)

export default NavLinks
