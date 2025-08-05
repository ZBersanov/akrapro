
import { SchoolVideoCarousel } from "../../components/SchoolVideocarousel"
import { SchoolCoursesAccordion } from "../../components/SchoolCoursesAccordion"

export default function SchoolPage() {
  return (
    <section className="pt-30 space-y-12 font-grandis">
      <h2 className="text-3xl font-bold text-center">Направления</h2>
      <SchoolCoursesAccordion />
      <SchoolVideoCarousel />
    </section>
  )
}
