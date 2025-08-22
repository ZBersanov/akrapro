
import { Separator } from "@/components/ui/separator"
import { SchoolCoursesAccordion } from "@/components/SchoolCoursesAccordion"
import { CourseInfo } from "./CourseInfo"
import { CourseSections } from "./CourseSections"

export function CourseDetails({ course, details }) {

  return (
    <div className="mt-25 mb-10">
      <div className="rounded-4xl max-w-3xl mx-auto p-6 md:p-10 text-white bg-[var(--black)] shadow-xl">
        <CourseInfo course={course} />
        <Separator className="my-6 bg-gray-700" />
        <CourseSections sections={details.sections} />
        <div className="text-center mt-10 md:mt-12">
          <a
            href={"https://wa.me/79899306665"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold border border-white rounded-xl cursor-pointer hover:text-red-500 hover:border-current transition-colors duration-300"
          >
            Записаться
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <SchoolCoursesAccordion />
      </div>
    </div>
  )
}
