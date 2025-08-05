import * as z from "zod";

export const formSchema = z.object({
  course: z.string().min(1, "Выберите курс"),
  firstName: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, "Только буквы и дефисы"),
  lastName: z
    .string()
    .min(2, "Фамилия должна содержать минимум 2 символа")
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, "Только буквы и дефисы"),
  age: z.number().min(16, "Минимум 16 лет").max(99, "Максимум 99 лет"),
  email: z.string().email("Некорректный email"),
});
