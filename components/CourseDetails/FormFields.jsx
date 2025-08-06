import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function FormFields({ form, selectedCourse, setSelectedCourse }) {
  return (
    <form
      id="course-form"
      action="https://getform.io/f/azynkvjb"
      method="POST"
      className="space-y-4 md:space-y-6"
    >
      <input type="hidden" name="course" value={selectedCourse} />

      {/* Курс */}
      <div>
        <label className="block mb-2 font-semibold">Курс</label>
        <Select
          value={selectedCourse}
          onValueChange={(value) => {
            setSelectedCourse(value)
            form.setValue("course", value)
          }}
        >
          <SelectTrigger className="h-12 md:h-14 cursor-pointer">
            <SelectValue placeholder="Выберите курс" />
          </SelectTrigger>
          <SelectContent className="bg-white text-black max-h-60">
            <SelectGroup>
              <SelectLabel>Курсы</SelectLabel>
              {[
                "Базовый курс «ДЕТЕЙЛЕР»",
                "Заливка сколов",
                "Курс ЧИП Тюнинг/Диагностика",
                "Курс автоателье",
                "Оклейка полиуретановой пленкой",
                "Оклейка виниловой пленкой",
              ].map((item) => (
                <SelectItem key={item} value={item} className="hover:bg-[var(--orange)] hover:text-white transition-colors duration-300 cursor-pointer">
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {form.formState.errors.course && (
          <p className="mt-1 text-sm text-red-500">{form.formState.errors.course.message}</p>
        )}
      </div>

      <Separator className="bg-gray-200" />

      {/* Имя и фамилия */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-semibold">Имя</label>
          <Input
            type="text"
            className="bg-gray-100 text-black h-12 md:h-14"
            placeholder="Ваше имя"
            {...form.register("firstName")}
          />
          {form.formState.errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{form.formState.errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-semibold">Фамилия</label>
          <Input
            type="text"
            className="bg-gray-100 text-black h-12 md:h-14"
            placeholder="Ваша фамилия"
            {...form.register("lastName")}
          />
          {form.formState.errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{form.formState.errors.lastName.message}</p>
          )}
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Возраст */}
      <div>
        <label className="block mb-2 font-semibold">Возраст</label>
        <Input
          type="number"
          className="bg-gray-100 text-black h-12 md:h-14"
          {...form.register("age", { valueAsNumber: true })}
        />
        {form.formState.errors.age && (
          <p className="mt-1 text-sm text-red-500">{form.formState.errors.age.message}</p>
        )}
      </div>

      <Separator className="bg-gray-200" />

      {/* Email */}
      <div>
        <label className="block mb-2 font-semibold">Email</label>
        <Input
          type="email"
          className="bg-gray-100 text-black h-12 md:h-14"
          placeholder="Введите ваш email"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
        )}
      </div>
    </form>
  )
}
