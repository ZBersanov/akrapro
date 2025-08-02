import Service from "./Service"
import Title from "./Title"
import { serviceData } from "../_data/service-data"


const Services = () => {


  return (
    <section className="pt-[50px] bg-[var(--black)]" id="services">
      <Title title="Услуги" />
      <div className="container mt-5 grid grid-cols-4 gap-9">
        {serviceData.map((service, i) => (
          <Service service={service} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Services