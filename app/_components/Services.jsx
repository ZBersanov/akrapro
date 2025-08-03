import Service from "./Service";
import Title from "./Title";
import { serviceData } from "../_data/service-data";

const Services = () => {
  return (
    <section className="pt-[50px] bg-[var(--black)]" id="services">
      <Title title="Услуги" />

      <div className="container mt-5">
        {/* Список на XS экранах */}
        <div className="block sm:hidden">
          {serviceData.map((service, i) => (
            <Service key={i} service={service} isList />
          ))}
        </div>

        {/* Сетка на SM и выше */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {serviceData.map((service, i) => (
            <Service key={i} service={service} isList={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
