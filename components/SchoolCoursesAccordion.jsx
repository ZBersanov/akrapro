
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

import { courses } from "../app/_data/courses"

export function SchoolCoursesAccordion() {
  return (
    <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mt-12">
      <Accordion
        type="single" collapsible className="space-y-2 text-black"
      >
        {courses.map((course, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold bg-muted rounded-xl px-4 py-3">
              {course.title}
            </AccordionTrigger>
            <AccordionContent className="text-[18px] bg-white border rounded-xl px-6 py-5 text-muted-foreground space-y-3 shadow-sm transition-all duration-300">
              <p className="text-base">{course.description}</p>
              <div className="text-sm flex flex-col gap-1">
                <div><strong>Длительность:</strong> <span className="text-xl">{course.duration} ⌛</span></div>
                <div><strong>Стоимость:</strong> <span className="text-xl">{course.price} ✅</span></div>
              </div>
              <Link
                href={`/directions/${course.slug}`}
                className="bg-black/10 hover:bg-black/20 transition-colors duration-300 inline-flex items-center gap-1 text-primary font-medium px-3 py-2 rounded-md mt-2"
              >
                Подробнее <FaArrowRight className="text-xs mt-0.5" />
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
