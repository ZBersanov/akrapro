// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader, DialogClose } from "@/components/ui/dialog"
// import { SchoolCoursesAccordion } from "@/components/SchoolCoursesAccordion"
// import { FaMoneyBillWave, FaClock, FaCheckCircle, FaTimes } from "react-icons/fa"
// import { Separator } from "@/components/ui/separator"
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// const formSchema = z.object({
//   course: z.string().min(1, "Выберите курс"),
//   firstName: z.string()
//     .min(2, "Имя должно содержать минимум 2 символа")
//     .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, "Только буквы и дефисы"),
//   lastName: z.string()
//     .min(2, "Фамилия должна содержать минимум 2 символа")
//     .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, "Только буквы и дефисы"),
//   age: z.number().min(16, "Минимум 16 лет").max(99, "Максимум 99 лет"),
//   email: z.string().email("Некорректный email"),
// })

// export function CourseDetails({ course, details }) {
//   const [open, setOpen] = useState(false)
//   const [selectedCourse, setSelectedCourse] = useState(course.title)

//   const form = useForm({
//     mode: "onChange",
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       course: selectedCourse,
//       firstName: "",
//       lastName: "",
//       age: 18,
//       email: "",
//     },
//   })

//   return (
//     <div className="mt-25 mb-10">
//       <div className="rounded-4xl max-w-3xl mx-auto p-6 md:p-10 text-white bg-[var(--black)] shadow-xl">
//         {/* Заголовок и информация о курсе */}
//         <h1 className="text-2xl md:text-3xl font-bold mb-6">{course.title}</h1>
        
//         <div className="mb-6 space-y-2 text-base md:text-[17px]">
//           <div className="flex items-center gap-2">
//             <FaMoneyBillWave className="text-green-400" />
//             <span className="font-semibold">Стоимость:</span> {course.price}
//           </div>
//           <div className="flex items-center gap-2">
//             <FaClock className="text-yellow-400" />
//             <span className="font-semibold">Длительность:</span> {course.duration}
//           </div>
//         </div>

//         <Separator className="my-6 bg-gray-700" />

//         {/* Описание курса */}
//         {details.sections.map((section, idx) => (
//           <div key={idx} className="mb-6">
//             <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
//               <FaCheckCircle className="text-blue-400" />
//               {section.title}
//             </h3>
//             <ul className="list-disc [&>li::marker]:text-red-500 pl-6 space-y-1 text-muted-foreground text-base md:text-[17px]">
//               {section.items.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//             {idx < details.sections.length - 1 && <Separator className="my-4 bg-gray-700" />}
//           </div>
//         ))}

//         {/* Кнопка открытия формы */}
//         <div className="text-center mt-8 md:mt-10">
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold border border-white rounded-xl cursor-pointer hover:text-red-500 hover:border-current">
//                 Записаться
//               </Button>
//             </DialogTrigger>

//             {/* Модальное окно с формой */}
//             <DialogContent className="bg-white rounded-4xl w-[95%] max-w-lg max-h-[90vh] flex flex-col p-0 overflow-hidden">
//               {/* Шапка модалки с кнопкой закрытия */}
//               <DialogHeader className="relative py-4 px-6 border-b border-gray-200">
//                 <DialogTitle className="font-grandis text-xl md:text-2xl font-bold text-center">
//                   Записаться на курс
//                 </DialogTitle>
//               </DialogHeader>

//               {/* Основное содержимое с прокруткой */}
//               <div className="flex-1 overflow-y-auto px-6 py-4">
//                 <form 
//                   id="course-form"
//                   action="https://getform.io/f/azynkvjb" 
//                   method="POST" 
//                   className="space-y-4 md:space-y-6"
//                 >
//                   {/* Поле выбора курса */}
//                   <div>
//                     <label className="block mb-2 font-semibold">Курс</label>
//                     <Select 
//                       value={selectedCourse} 
//                       onValueChange={(value) => {
//                         setSelectedCourse(value)
//                         form.setValue("course", value)
//                       }}
//                     >
//                       <SelectTrigger className="h-12 md:h-14 cursor-pointer">
//                         <SelectValue placeholder="Выберите курс" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-white text-black max-h-60">
//                         <SelectGroup>
//                           <SelectLabel>Курсы</SelectLabel>
//                           <SelectItem value="Базовый курс «ДЕТЕЙЛЕР»" className="hover:bg-[var(--orange)] hover:text-white transition-colors duration-300 cursor-pointer">Базовый курс «ДЕТЕЙЛЕР»</SelectItem>
//                           <SelectItem value="Заливка сколов" className="hover:bg-[var(--orange)] hover:text-white transition-colors duration-300 cursor-pointer">Заливка сколов</SelectItem>
//                           <SelectItem value="Курс ЧИП Тюнинг/Диагностика" className="hover:bg-[var(--orange)] hover:text-white transition-colors duration-300 cursor-pointer">Курс ЧИП Тюнинг/Диагностика</SelectItem>
//                           <SelectItem value="Курс автоателье" className="hover:bg-[var(--orange)] hover:text-white transition-colors duration-300 cursor-pointer">Курс автоателье</SelectItem>
//                           <SelectItem value="Оклейка полиуретановой пленкой" className="hover:bg-[var(--orange)] hover:text-white transition-colors duration-300 cursor-pointer">Оклейка полиуретановой пленкой</SelectItem>
//                           <SelectItem value="Оклейка виниловой пленкой" className="hover:bg-[var(--orange)] hover:text-white transition-colors duration-300 cursor-pointer">Оклейка виниловой пленкой</SelectItem>
//                         </SelectGroup>
//                       </SelectContent>
//                     </Select>
//                     {form.formState.errors.course && (
//                       <p className="mt-1 text-sm text-red-500">{form.formState.errors.course.message}</p>
//                     )}
//                   </div>

//                   <Separator className="bg-gray-200" />

//                   {/* Имя и фамилия */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {/* 👇 Этот input реально отправляет значение в getform.io */} 
//                       <input type="hidden" name="course" value={selectedCourse} />
//                     <div>
//                       <label className="block mb-2 font-semibold">Имя</label>
//                       <Input
//                         type="text"
//                         className="bg-gray-100 text-black h-12 md:h-14"
//                         placeholder="Ваше имя"
//                         {...form.register("firstName")}
//                       />
//                       {form.formState.errors.firstName && (
//                         <p className="mt-1 text-sm text-red-500">{form.formState.errors.firstName.message}</p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block mb-2 font-semibold">Фамилия</label>
//                       <Input
//                         type="text"
//                         className="bg-gray-100 text-black h-12 md:h-14"
//                         placeholder="Ваша фамилия"
//                         {...form.register("lastName")}
//                       />
//                       {form.formState.errors.lastName && (
//                         <p className="mt-1 text-sm text-red-500">{form.formState.errors.lastName.message}</p>
//                       )}
//                     </div>
//                   </div>

//                   <Separator className="bg-gray-200" />

//                   {/* Возраст */}
//                   <div>
//                     <label className="block mb-2 font-semibold">Возраст</label>
//                     <Input
//                       type="number"
//                       className="bg-gray-100 text-black h-12 md:h-14"
//                       {...form.register("age", { valueAsNumber: true })}
//                     />
//                     {form.formState.errors.age && (
//                       <p className="mt-1 text-sm text-red-500">{form.formState.errors.age.message}</p>
//                     )}
//                   </div>

//                   <Separator className="bg-gray-200" />

//                   {/* Email */}
//                   <div>
//                     <label className="block mb-2 font-semibold">Email</label>
//                     <Input
//                       type="email"
//                       className="bg-gray-100 text-black h-12 md:h-14"
//                       placeholder="Введите ваш email"
//                       {...form.register("email")}
//                     />
//                     {form.formState.errors.email && (
//                       <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
//                     )}
//                   </div>
//                 </form>
//               </div>

//               {/* Футер с кнопкой отправки */}
//               <div className="border-t border-gray-200 px-6 py-4">
//                 <Button 
//                   type="submit" 
//                   form="course-form"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 md:py-6 text-base md:text-lg"
//                 >
//                   Отправить заявку
//                 </Button>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <div className="mt-8 md:mt-12">
//         <SchoolCoursesAccordion />
//       </div>
//     </div>
//   )
// }