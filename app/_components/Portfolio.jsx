'use client'
import { useState } from 'react'
import Image from 'next/image'
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import Title from './Title'; 

const works = [
  { id: 1, src: '/portfolio_images/1.jpg', alt: 'Работа 1' },
  { id: 2, src: '/portfolio_images/2.jpg', alt: 'Работа 2' },
  { id: 3, src: '/portfolio_images/3.jpg', alt: 'Работа 2' },
  { id: 4, src: '/portfolio_images/4.jpg', alt: 'Работа 2' },
  { id: 5, src: '/portfolio_images/5.jpg', alt: 'Работа 2' },
  { id: 6, src: '/portfolio_images/6.jpg', alt: 'Работа 2' },
  { id: 7, src: '/portfolio_images/7.jpg', alt: 'Работа 2' },
  { id: 8, src: '/portfolio_images/8.jpg', alt: 'Работа 2' },
  { id: 9, src: '/portfolio_images/9.jpg', alt: 'Работа 2' },
  { id: 10, src: '/portfolio_images/10.jpg', alt: 'Работа 2' },
  { id: 11, src: '/portfolio_images/11.jpg', alt: 'Работа 2' },
  { id: 12, src: '/portfolio_images/12.jpg', alt: 'Работа 2' },
  { id: 13, src: '/portfolio_images/13.jpg', alt: 'Работа 2' },
  { id: 14, src: '/portfolio_images/14.jpg', alt: 'Работа 2' },
  { id: 15, src: '/portfolio_images/15.jpg', alt: 'Работа 2' },
  // Добавьте остальные изображения
]

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = 'hidden' // Блокируем скролл страницы
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 px-4 bg-[var(--black)]" id='portfolio'>
        <Title title={"Наши работы"} />
        
        {/* Грид-сетка */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <div 
              key={work.id} 
              className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(index)}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
              />
            </div>
          ))}
        </div>

        {/* Модальное окно с каруселью */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors cursor-pointer"
            >
              <LuX size={32} />
            </button>

            <div className="relative max-w-4xl w-full">
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:text-red-500 transition-colors z-10 cursor-pointer"
              >
                <LuChevronLeft size={32} />
              </button>

              <div className="aspect-video relative">
                <Image
                  src={works[currentIndex].src}
                  alt={works[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:text-red-500 transition-colors z-10 cursor-pointer"
              >
                <LuChevronRight size={32} />
              </button>
            </div>

            {/* Индикатор текущего фото */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
              {currentIndex + 1} / {works.length}
            </div>
          </div>
        )}
    </section>
  )
}