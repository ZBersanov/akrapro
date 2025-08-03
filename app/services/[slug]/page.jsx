import { serviceData } from "@/app/_data/service-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Services from "@/app/_components/Services";
import { MdCurrencyRuble } from "react-icons/md";

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function Page({params}) {
  const {slug} = await params
  const service = serviceData.find((s) => s.slug === slug)

  if (!service) return notFound()

  return (
      <div className="mt-[100px] font-grandis overflow-x-hidden">
        <div className="container px-4 sm:px-6">
          <div className="mb-[40px]">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] uppercase">
              {service.title}
            </h2>

            <ul className="pt-[30px] text-[16px] sm:text-[18px] list-disc pl-6 sm:pl-8 [&>li::marker]:text-yellow-400">
              {service.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>


            <div className="inline-block">
              <div className="mt-[60px] text-center text-[16px] sm:text-[18px]">Цена (руб):</div>
              <div className="flex gap-4 mt-[10px] items-center">
                <MdCurrencyRuble
                  size={40}
                  className="border-[2px] border-yellow-400 rounded-full p-2"
                />
                <div className="text-[28px] sm:text-[35px] font-semibold">
                  {service.price}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          href="tel:+79899306655"
          className="flex items-center justify-center w-full bg-yellow-400 h-[80px] sm:h-[100px] my-4 text-[24px] sm:text-[30px] font-semibold transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Позвонить
        </Link>

        <Services />
      </div>


  );
}