import dynamic from "next/dynamic"
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./formSchema"
const FormFields = dynamic(() => import("./FormFields"))
import { useState } from "react"

export function EnrollDialog({ open, setOpen, defaultCourse }) {
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse)

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      course: selectedCourse,
      firstName: "",
      lastName: "",
      age: 18,
      email: "",
    },
  })

  return (
    <>
      {/* 👇 ЭТО КНОПКА */}
      <DialogTrigger asChild>
        <Button className="px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold border border-white rounded-xl cursor-pointer hover:text-red-500 hover:border-current">
          Записаться
        </Button>
      </DialogTrigger>

      {/* МОДАЛКА */}
      <DialogContent className="bg-white rounded-4xl w-[95%] max-w-lg max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="relative py-4 px-6 border-b border-gray-200">
          <DialogTitle className="font-grandis text-xl md:text-2xl font-bold text-center">
            Записаться на курс
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <FormFields
            form={form}
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
          />
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <Button
            type="submit"
            form="course-form"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 md:py-6 text-base md:text-lg"
          >
            Отправить заявку
          </Button>
        </div>
      </DialogContent>
    </>
  )
}
