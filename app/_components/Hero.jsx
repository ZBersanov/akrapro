import Image from "next/image";
import Stars from "./Stars";

const Hero = () => {
  return (
    <section className="relative pt-40 bg-[var(--black)] text-[var(--white)] min-h-screen flex flex-col">
      {/* Контентная часть */}
      <div className="container flex-1 flex flex-col justify-center px-2 pb-20 gap-5">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:text-left">
          <Stars count={2} size={30} />
          <div className="text-2xl font-grandis uppercase ml-3 mb-2">Детейлинг Студия</div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-grandis font-bold mb-4 text-center uppercase">
          Akra<span className="text-[var(--orange)]">pro</span> Detailing
        </h1>
        <div className="text-[15px] sm:text-[17px] text-[#EEEEEC] max-w-xl text-center sm:text-right mx-auto sm:ml-auto">
          Услуги по комплексному восстановлению и сохранению внешнего вида автомобиля в Грозном
        </div>
      </div>

      {/* Изображение (ровно 50% экрана) */}
      <div className="relative w-full h-[70vh] min-h-[300px] sm:min-h-[400px] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
        <Image
          src="/bg-for-heroo.jpg"
          alt="Детейлинг студия Akrapro"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default Hero;