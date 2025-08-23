"use client"
import { useState } from "react"
import Title from "../Title"
import ServiceCard from "./ServiceCard"
import { serviceData } from "@/app/_data/service-data"
import { categories } from "@/app/_data/categories"
import { serviceCategories } from "@/app/_data/serviceCategories"


const Services = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key)

  const filteredServices = serviceData.filter(service =>
    serviceCategories[activeCategory]?.includes(service.slug)
  )

  return (
    <section className="pt-[50px] bg-[var(--black)] text-white" id="services">
      <Title title="Услуги" />

      {/* Навигация */}
      <div
        className="container flex justify-between gap-4 mt-8 border-b border-white/10 
                  overflow-x-hidden my-scroll pb-3"
      >
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`relative pb-3 px-2 text-lg transition-all duration-300 
              ${activeCategory === cat.key ? "text-red-500" : "text-white/70 hover:text-white"}
              flex-shrink-0
            `}
          >
            {cat.label}
            {activeCategory === cat.key && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500 rounded-full"></span>
            )}
          </button>
        ))}
      </div>


      {/* Список услуг */}
      <div className="container mt-6 space-y-2">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))
        ) : (
          <div className="text-center py-10 text-white/50">
            Услуги пока нет в этом разделе
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
