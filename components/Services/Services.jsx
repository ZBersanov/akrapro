import Title from "../Title"
import ServiceCard from "./ServiceCard"
import { serviceData } from "@/app/_data/service-data"

const Services = () => {
  return (
    <section className="pt-[50px] bg-[var(--black)]" id="services">
      <Title title="Услуги" />

      <div className="container mt-6 space-y-2">
        {serviceData.map((service, i) => (
          <ServiceCard key={i} service={service} isList />
        ))}
      </div>
    </section>
  )
}

export default Services
