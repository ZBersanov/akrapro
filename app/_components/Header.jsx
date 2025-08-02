"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { FiMenu, FiX } from "react-icons/fi"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--black)] text-[var(--white)] py-4 shadow-md">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <Image src="/logo.svg" width={80} height={80} alt="logo" priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 uppercase font-semibold tracking-wide">
          {[
            { label: "Услуги", id: "services" },
            { label: "Портфолио", id: "portfolio" },
            { label: "Медиа", id: "media" },
            { label: "Контакты", id: "contacts" }
          ].map(({ label, id }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                onClick={(e) => handleScroll(e, id)}
                className="hover:text-neon transition duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contacts */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="https://wa.me/79899306655" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={28} className="text-white hover:text-[#25D366] transition" />
          </a>
          <a
            href="tel:+79899306655"
            className="border border-white rounded-lg px-5 py-2 hover:text-red-500 transition"
          >
            +7 (989) 930-66-55
          </a>
        </div>

        {/* Burger Button */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
     <div
  className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-between items-center px-6 py-8 transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Top - Logo */}
  <div className="w-full flex justify-center">
    <Link href="/" onClick={() => setMenuOpen(false)}>
      <Image src="/logo.svg" width={80} height={80} alt="logo" />
    </Link>
  </div>

  {/* Center - Navigation */}
  <ul className="flex flex-col gap-8 text-2xl font-semibold uppercase items-center">
    {[
      { label: "Услуги", id: "services" },
      { label: "Портфолио", id: "portfolio" },
      { label: "Медиа", id: "media" },
      { label: "Контакты", id: "contacts" }
    ].map(({ label, id }) => (
      <li key={id}>
        <a
          href={`/#${id}`}
          onClick={(e) => handleScroll(e, id)}
          className="hover:text-neon transition duration-300"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>

  {/* Bottom - Контакты */}
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
    </header>
  )
}

export default Header
