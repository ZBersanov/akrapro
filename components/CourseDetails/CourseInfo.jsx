import { FaMoneyBillWave, FaClock } from "react-icons/fa"

export function CourseInfo({ course }) {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">{course.title}</h1>
      <div className="mb-6 space-y-2 text-base md:text-[17px]">
        <div className="flex items-center gap-2">
          <FaMoneyBillWave className="text-green-400" />
          <span className="font-semibold">Стоимость:</span> {course.price}
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-yellow-400" />
          <span className="font-semibold">Длительность:</span> {course.duration}
        </div>
      </div>
    </>
  )
}
