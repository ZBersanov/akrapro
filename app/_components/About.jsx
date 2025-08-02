
import Stars from "./Stars"

const About = () => {
  return (
    <section className="pt-20 bg-[var(--black)] text-[var(--white)]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Блок 1 */}
          <div className="flex flex-col h-full">
            <div className="min-h-[90px]">
              <span className="font-grandis text-5xl text-[var(--orange)]">5000 </span>
              автомобилей обслужено
            </div>
            <div className="bg-[var(--gray)] flex-1 px-6 py-7 space-y-5">
              <Stars count={1} />
              <h2 className="font-grandis">Современное <br /> оборудование</h2>
              <p className="text-[#B7B7B7]">Постоянно следим за новыми технологиями в сфере Детейлинга и внедряем их в свою работу</p>
            </div>
          </div>
          
          {/* Блок 2 */}
          <div className="flex flex-col h-full">
            <div className="min-h-[90px]">
              <span className="font-grandis text-5xl text-[var(--orange)]">8+ </span>
              лет опыта в сфере детейлинга
            </div>
            <div className="bg-[var(--gray)] flex-1 px-6 py-7 space-y-5">
              <Stars count={2} />
              <h2 className="font-grandis text-xl">Мировые бренды <br /> химии</h2>
              <p className="text-[#B7B7B7]">Сотрудничаем только с проверенными производителями автохимии, поэтому гарантируем безопасность и предсказуемый результат</p>
            </div>
          </div>

          {/* Блок 3 */}
          <div className="flex flex-col h-full sm:col-span-2 xl:col-span-1">
            <div className="min-h-[90px]">
              <span className="font-grandis text-5xl text-[var(--orange)]">37 </span>
              мастеров в штате
            </div>
            <div className="bg-[var(--gray)] flex-1 px-6 py-7 space-y-5">
              <Stars count={3} />
              <h2 className="font-grandis text-xl">Сертифицированные <br /> специалисты</h2>
               <p className="text-[#B7B7B7]">
                  Организуем тренинги и семинары для наших сотрудников, чтобы совершенствовать навыки и знания
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About

        // <div className="grid grid-cols-3 gap-4">

        //   <div className="flex flex-col h-full">
        //     <div><span className="font-grandis text-5xl text-[var(--orange)]">5000 </span>автомобилей обслужено</div>
        //     <div className="mt-[50px] bg-[#252525] flex-1 px-6 py-7 space-y-5">
        //       <SiPolestar size={25} className="text-[var(--orange)]"/>
        //       <h2 className="font-grandis">Современное <br /> оборудование</h2>
        //       <p className="text-[#B7B7B7]">Постоянно следим за новыми <br /> технологиями в сфере Детейлинга <br /> и внедряем их в свою работу</p>
        //     </div>
        //   </div>

        //   <div className="flex flex-col h-full">
        //     <div><span className="font-grandis text-5xl text-[var(--orange)]">8+ </span>лет опыта в сфере детейлинга</div>
        //     <div className="mt-[50px] bg-[#252525] flex-1 px-6 py-7 space-y-5">
        //       <div className="flex gap-2">
        //         <SiPolestar size={25} className="text-[var(--orange)]"/>
        //         <SiPolestar size={25} className="text-[var(--orange)]"/>
        //       </div>
        //       <h2 className="font-grandis">Мировые бренды <br /> химии</h2>
        //       <p className="text-[#B7B7B7]">Сотрудничаем только с проверенными <br /> производителями автохимии, поэтому <br /> гарантируем безопасность <br /> и предсказуемый результат</p>
        //     </div>
        //   </div>

        //   <div className="flex flex-col h-full">
        //     <div><span className="font-grandis text-5xl text-[var(--orange)]">37 </span>мастеров в штате</div>
        //     <div className="mt-[50px] bg-[#252525] flex-1 px-6 py-7 space-y-5">
        //       <div className="flex gap-2">
        //         <SiPolestar size={25} className="text-[var(--orange)]"/>
        //         <SiPolestar size={25} className="text-[var(--orange)]"/>
        //         <SiPolestar size={25} className="text-[var(--orange)]"/>
        //       </div>
        //       <h2 className="font-grandis">Сертифицированные <br /> специалисты</h2>
        //       <p className="text-[#B7B7B7]">Организуем тренинги и семинары <br /> для наших сотрудников, <br /> чтобы совершенствовать навыки и знания</p>
        //     </div>
        //   </div>
        // </div>