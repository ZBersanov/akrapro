import Link from "next/link"

const Hero = () => {
  return (
    <section className="container py-20">
      <div className="flex justify-between">

        <div className="mt-[100px] flex-col space-y-6">
            <h1 className="text-[44px] leading-12 font-[600] uppercase font-grandis">Детейлинг в <br /> Грозном</h1> 
            <p className="text-[20px] font-semibold text-[#6D6D6D] h-[70px] inline-flex items-center justify-center border-l-[3px] border-l-[var(--yellow)] pl-6">
              Мы показываем результаты работ, <br />
              а не картинки с машинками из интернета
            </p>
            <Link href="tel:+79899306655" className="yellow-button">
              Позвонить
            </Link>
        </div>

        <div className="relative flex-col mt-[50px]">
          <div className="absolute z-0 top-0 right-[-200px] w-[400px] h-[200px] bg-[var(--gray)] overflow-hidden"></div>

          <div className="relative flex z-10">
            <div className="text-6xl text-[var(--yellow)] uppercase font-bold mr-[40px]">О нас</div>
            <div className="text-[26px] text-white uppercase bg-[var(--gray)] self-center font-semibold">За 60 секунд</div>
          </div>
          <div className="absolute top-[80px] right-0">
            <iframe
             width="560" 
             height="315" 
             src="https://www.youtube.com/embed/bunRtebU7j4?si=FtvxpfQ_Xu1KDs4n" 
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen></iframe>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero