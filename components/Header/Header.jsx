"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import ContactBlock from "./ContactBlock"
import BurgerButton from "./BurgerButton"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleScroll = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)

    if (pathname !== "/") {
      router.push(`/#${id}`)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--black)] text-[var(--white)] py-4 shadow-md">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Logo onClick={() => setMenuOpen(false)} />
        <NavLinks onScroll={handleScroll} />
        <ContactBlock />
        <BurgerButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onScroll={handleScroll} />
    </header>
  )
}

export default Header
