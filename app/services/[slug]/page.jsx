import { serviceData } from "@/app/_data/service-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Services from "@/app/_components/Services";

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
    <div className="mt-[100px]">
      <div className="container min-h-screen">
        <div className="max-w-[50%] mb-[40px]">
          <h2 className="text-[40px] font-semibold uppercase">{service.title}</h2>
          <ul className="text-[18px] list-disc [&>li::marker]:text-[var(--yellow)]">
            {service.description.map((item, i) => (
              <li key={i}>{item}</li>
            ) )}
          </ul>
          <div>Цена (руб): <br /><span className="text-[35px] font-semibold">{service.price}</span></div>
        </div>
      </div>
      <Link href="tel:+79899306655" className="flex items-center justify-center w-full bg-[var(--yellow)] h-[100px] text-[30px] font-semibold transition-colors duration-300 hover:bg-black hover:text-white">
        Позвонить
      </Link>
      <Services />
    </div>
  );
}