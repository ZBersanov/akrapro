
import StatCard from "./StatCard"
import { statData } from "./data"

const About = () => {
  return (
    <section className="pt-20 bg-[var(--black)] text-[var(--white)]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {statData.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
