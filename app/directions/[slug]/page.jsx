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
  const {slug} = await params
  const course = courses.find((c) => c.slug === slug)
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

export default async function CoursePage({ params }) {
  const {slug} = await params
  const course = courses.find((c) => c.slug === slug)
  const details = courseDetails[slug]

  if (!course || !details) return notFound()

  return (
    <CourseDetails course={course} details={details} />
  )
}
