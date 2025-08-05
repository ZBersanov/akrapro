
import { SchoolVideoCarousel } from "../../components/SchoolVideocarousel"
import { SchoolCoursesAccordion } from "../../components/SchoolCoursesAccordion"

export const metadata = {
  title: "Школа Детейлинга | Обучение детейлингу и автоуходу",
  description:
    "Погрузись в мир детейлинга! Мы обучаем полировке, химчистке, бронированию, мойке и комплексному уходу за авто. Курсы от экспертов с практикой и поддержкой.",
}


export default function SchoolPage() {
  return (
    <section className="pt-30 space-y-12 font-grandis">
      <h2 className="text-3xl font-bold text-center">Направления</h2>
      <SchoolCoursesAccordion />
      <SchoolVideoCarousel />
    </section>
  )
}
