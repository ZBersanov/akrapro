"use client"
import { useState } from "react"
import Title from "../Title"
import ServiceCard from "./ServiceCard"
import { serviceData } from "@/app/_data/service-data"

// Категории (ручной список)
const categories = [
  { key: "antigravity", label: "Антигравийные пленки" },
  { key: "polishing", label: "Полировка" },
  { key: "install", label: "Доп. установка" },
  { key: "sound", label: "Шумоизоляция" },
  { key: "painting", label: "Малярка" },
  { key: "carbon", label: "Карбон" },
  { key: "interior", label: "Перетяжка салона" },
]

// Маппинг услуг к разделам
const serviceCategories = {
  antigravity: ["antigravity-vinyl-films", "headlight-protection", "risk-zone-protection", "full-body-gloss-protection", "vinyl-black-wrapping", "windshield-protection", "why-windshield-protection"],
  polishing: ["polishing", "pre-sale-polishing", "detailing-polishing", "headlight-polishing", "protective-coating", "polishing-liquid-glass", "polishing-ceramic-coating", "premium-ceramic-coating"],
  install: ["door-closers", "car-alarm"],
  sound: [], // пока пусто
  painting: [], // пока пусто
  carbon: [], // пока пусто
  interior: [], // пока пусто
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key)

  const filteredServices = serviceData.filter(service =>
    serviceCategories[activeCategory]?.includes(service.slug)
  )

  return (
    <section className="pt-[50px] bg-[var(--black)] text-white" id="services">
      <Title title="Услуги" />

      {/* Навигация */}
      <div className="container flex flex-wrap gap-4 mt-8 border-b border-white/10">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`relative pb-3 px-2 text-lg transition-all duration-300 
              ${activeCategory === cat.key ? "text-red-500" : "text-white/70 hover:text-white"}
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
