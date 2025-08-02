import Link from "next/link"


const Service = ({service}) => {
  
  return (
    <Link href={`/services/${service.slug}`}
       className="font-grandis w-[276px] h-[200px] bg-[url('/bg-for-service.jpg')]
        bg-cover bg-no-repeat bg-center p-5 text-white bg-gray-500 transition-transform
        duration-300 hover:scale-[1.1] rounded-lg"
    >
      {service.title}
    </Link>
  )
}

export default Service