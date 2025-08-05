import { FiMenu, FiX } from "react-icons/fi"

const BurgerButton = ({ isOpen, toggle }) => (
  <button
    className="lg:hidden text-white z-50"
    onClick={toggle}
    aria-label="Toggle Menu"
  >
    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
  </button>
)

export default BurgerButton
