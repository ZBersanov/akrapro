
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

import { courses } from "../app/_data/courses"
import { CourseLink } from "./CourseLink"

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
              <CourseLink slug={course.slug} />  
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
