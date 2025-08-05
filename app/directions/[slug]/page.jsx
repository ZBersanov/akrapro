import { notFound } from "next/navigation"
import { courses } from "@/app/_data/courses"
import { courseDetails } from "@/app/_data/courseDetails"
import { CourseDetails } from "@/components/CourseDetails/index"

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export async function generateMetadata({ params }) {
  const course = courses.find((c) => c.slug === params.slug)
  if (!course) return {}

  return {
    title: `${course.title} | Автошкола`,
    description: `Узнай подробности и запишись на курс "${course.title}".`,
    openGraph: {
      title: `${course.title} | Автошкола`,
      description: `Узнай подробности и запишись на курс "${course.title}".`,
    },
  }
}

export default function CoursePage({ params }) {
  const course = courses.find((c) => c.slug === params.slug)
  const details = courseDetails[params.slug]

  if (!course || !details) return notFound()

  return (
    <CourseDetails course={course} details={details} />
  )
}
