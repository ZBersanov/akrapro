"use client"
import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { SchoolCoursesAccordion } from "@/components/SchoolCoursesAccordion"
import { EnrollDialog } from "./EnrollDialog"
import { CourseInfo } from "./CourseInfo"
import { CourseSections } from "./CourseSections"

export function CourseDetails({ course, details }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-25 mb-10">
      <div className="rounded-4xl max-w-3xl mx-auto p-6 md:p-10 text-white bg-[var(--black)] shadow-xl">
        <CourseInfo course={course} />
        <Separator className="my-6 bg-gray-700" />
        <CourseSections sections={details.sections} />
        <div className="text-center mt-8 md:mt-10">
          <Dialog open={open} onOpenChange={setOpen}>
            <EnrollDialog open={open} setOpen={setOpen} defaultCourse={course.title} />
          </Dialog>
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <SchoolCoursesAccordion />
      </div>
    </div>
  )
}
