"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const videos = [
  {
    src: "/school-videos/video1.mp4",
    title: "Добро пожаловать в школу",
    poster: "/posters/poster1.png",
  },
  {
    src: "/school-videos/video2.mp4",
    title: "Основы детейлинга",
    poster: "/posters/poster2.png",
  },
  {
    src: "/school-videos/video3.mp4",
    title: "Интервью с мастером",
    poster: "/posters/poster3.png",
  },
  {
    src: "/school-videos/video4.mp4",
    title: "Экскурсия по студии",
    poster: "/posters/poster4.png",
  },
  {
    src: "/school-videos/video5.mp4",
    title: "Отзывы учеников",
    poster: "/posters/poster5.png",
  },
]

export function SchoolVideoCarousel() {
  return (
    <div className="bg-[var(--black)] text-white px-4 xs:px-2">
      <Carousel className="max-w-4xl mx-auto py-5">
        <h2 className="text-3xl mb-6 text-center xs:text-2xl xs:mb-4">
          Контент с нашей школы детейлинга
        </h2>
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center px-2 basis-auto"
            >
              <Card className="p-0 w-[270px] h-[490px] xs:w-[200px] xs:h-[360px] relative overflow-hidden bg-black">
                <video
                  src={video.src}
                  controls
                  poster={video.poster}
                  className="w-full h-full object-cover"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-60px] xs:hidden" />
        <CarouselNext className="right-[-60px] xs:hidden" />
      </Carousel>
    </div>
  )
}
