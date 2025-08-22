"use client"

import { FaArrowRight } from "react-icons/fa"
import { useRouter } from "next/navigation"
import { useTransition, useState } from "react"

export function CourseLink({ slug }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [loadingSlug, setLoadingSlug] = useState(null)

  const handleClick = (e) => {
    e.preventDefault()
    setLoadingSlug(slug)
    startTransition(() => {
      router.push(`/directions/${slug}`)
    })
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending && loadingSlug === slug}
      className="bg-black/10 hover:bg-black/20 transition-colors duration-300 inline-flex items-center gap-2 text-primary font-medium px-3 py-2 rounded-md mt-2 disabled:opacity-50"
    >
      {isPending && loadingSlug === slug ? (
        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
      ) : (
        <>
          Подробнее <FaArrowRight className="text-xs mt-0.5" />
        </>
      )}
    </button>
  )
}
