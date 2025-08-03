'use client'
import { useState, useEffect } from 'react'
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

    useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

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
    <section className="pt-16 pb-8 px-4 bg-[var(--black)]" id='portfolio'>
        <Title title={"Наши работы"} />
        
        {/* Грид-сетка */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <div 
              key={work.id}
              className="relative aspect-[4/3] cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openModal(index)}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>


        {/* Модальное окно с каруселью */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors cursor-pointer z-10"
            >
              <LuX size={32} />
            </button>

            <div className="relative w-full max-w-[95vw] max-h-[90vh] flex items-center justify-center">
              <button 
                onClick={prevImage}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:text-red-500 transition z-10 cursor-pointer"
              >
                <LuChevronLeft size={32} />
              </button>

              <div className="relative w-full h-screen max-h-[90vh]">
                <Image
                  src={works[currentIndex].src}
                  alt={works[currentIndex].alt}
                  fill
                  className="object-scale-down"
                  priority
                />
              </div>

              <button 
                onClick={nextImage}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:text-red-500 transition z-10  cursor-pointer"
              >
                <LuChevronRight size={32} />
              </button>
            </div>

            {/* Индикатор текущего фото */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm tracking-wide">
              {currentIndex + 1} / {works.length}
            </div>
          </div>
        )}

    </section>
  )
}