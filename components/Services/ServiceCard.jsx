import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"

const ServiceCard = ({ service, isList = false }) => {
  const baseClasses = "w-full group transition-transform duration-300"
  const listStyles =
    "flex items-center justify-between py-4 border-b border-white/10 hover:bg-white/5 px-2"
  const cardStyles =
    "font-grandis max-w-[276px] h-[200px] bg-[url('/bg-for-service.jpg')] bg-cover bg-no-repeat bg-center p-5 text-white bg-gray-500 hover:scale-[1.05] rounded-lg"

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`${baseClasses} ${isList ? listStyles : cardStyles}`}
    >
      <span className="text-white">{service.title}</span>
      {isList && (
        <FaChevronRight
          className="text-white transition-transform group-hover:translate-x-1"
          size={20}
        />
      )}
    </Link>
  )
}

export default ServiceCard
