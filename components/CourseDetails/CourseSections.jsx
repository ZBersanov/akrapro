import { Separator } from "@/components/ui/separator"
import { FaCheckCircle } from "react-icons/fa"

export function CourseSections({ sections }) {
  return sections.map((section, idx) => (
    <div key={idx} className="mb-6">
      <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
        <FaCheckCircle className="text-blue-400" />
        {section.title}
      </h3>
      <ul className="list-disc [&>li::marker]:text-red-500 pl-6 space-y-1 text-muted-foreground text-base md:text-[17px]">
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {idx < sections.length - 1 && <Separator className="my-4 bg-gray-700" />}
    </div>
  ))
}
