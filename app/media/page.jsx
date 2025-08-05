import MediaCard from "../../components/MediaCard"

const videos = [
  { title: "Купил убитый Мустанг под восстановление...", videoId: "bunRtebU7j4?si=PT2WobXejl-n8GTl" },
  { title: "Легендарный Aston Martin DB9 | Новый Toyota Tundra 2023", videoId: "xJj9cHSF4tg?si=HeYcAw-4S3g6fYsm" },
  { title: "Собираем самый дорогой Toyota Camry в России", videoId: "_IFyhKa-4aE?si=6d96HYVmYnydBmYF" },
  
  { title: "Переоборудование продуктового магазина в Детейлинг центр", videoId: "GaKlATNgAwM?si=-3jc-j6qSuS-dRth" },
  { title: "Как убрать шагрень с кузова", videoId: "YOMdyd_2fzU?si=ygsbSvSlEuIvmMZi" },
  { title: "Под одной крышей 5 машин общей стоимостью 7.000.000$", videoId: "KV-sa56kmpA?si=2BdUDrZmakX6S_EZ" },
]


export const metadata = {
  title: 'Медиа | Детейлинг студия',
  description: 'Смотрите видео о наших проектах, ремонтах и детейлинге автомобилей. Вдохновляйтесь примерами работ.',
  openGraph: {
    title: 'Медиа | Детейлинг студия',
    description: 'Видеоролики о восстановлении авто, детейлинге и эксклюзивных проектах.',
    type: 'website',
    url: 'https://akrapro.ru/media',
  },
}


export default function MediaPage (){
  return (
    <section className="min-h-screen bg-[var(--black)] pt-25 pb-10 px-5" id="media">
      <h2 className="text-4xl md:text-5xl text-white font-grandis mb-8 text-center">
        Медиа
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <MediaCard key={index} {...video} />
        ))}
      </div>
    </section>
  )
}

