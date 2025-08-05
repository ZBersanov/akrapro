import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"

const ServiceCard = ({ service }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="w-full group flex items-center justify-between gap-3 py-4 px-4 border-b border-white/10 hover:bg-white/5 text-white transition-all duration-200"
    >
      <span className="text-base sm:text-lg">{service.title}</span>
      <FaChevronRight
        className="text-white transition-transform duration-200 group-hover:translate-x-1"
        size={18}
      />
    </Link>
  )
}

export default ServiceCard
