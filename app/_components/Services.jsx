import Service from "./Service"
import Title from "./Title"
import { serviceData } from "../_data/service-data"


const Services = () => {


  return (
    <section className="bg-[#111111]">
      <Title title="Услуги" />
      <div className="container grid grid-cols-4 gap-9">
        {serviceData.map((service, i) => (
          <Service service={service} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Services