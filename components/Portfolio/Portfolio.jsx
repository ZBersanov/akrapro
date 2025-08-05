'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Title from '../Title';
import ModalViewer from './ModalViewer';
import { works } from '@/app/_data/portfolio_works';

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = useCallback((index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, nextImage, prevImage, closeModal]);

  return (
    <section className="pt-16 pb-8 px-4 bg-[var(--black)]" id="portfolio">
      <Title title="Наши работы" />
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
              blurDataURL='#'
              placeholder='blur'
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <ModalViewer
          work={works[currentIndex]}
          currentIndex={currentIndex}
          total={works.length}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
