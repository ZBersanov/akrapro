import { FaWhatsapp } from "react-icons/fa"

const ContactBlock = () => (
  <div className="hidden lg:flex items-center gap-6">
    <a href="https://wa.me/79899306665" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={28} className="text-white hover:text-[#25D366] transition" />
    </a>
    <a
      href="tel:+79899306655"
      className="border border-current rounded-lg px-5 py-2 hover:text-red-500 transition"
    >
      +7 (989) 930-66-55
    </a>
  </div>
)

export default ContactBlock
