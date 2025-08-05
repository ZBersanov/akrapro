import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import Image from 'next/image';

export default function ModalViewer({ work, currentIndex, total, onClose, onNext, onPrev }) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors cursor-pointer z-10"
        aria-label="Закрыть"
      >
        <LuX size={32} />
      </button>

      <div className="relative w-full max-w-[95vw] max-h-[90vh] flex items-center justify-center">
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:text-red-500 transition z-10 cursor-pointer"
        >
          <LuChevronLeft size={32} />
        </button>

        <div className="relative w-full h-screen max-h-[90vh]">
          <Image
            src={work.src}
            alt={work.alt}
            fill
            className="object-scale-down"
            priority
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:text-red-500 transition z-10 cursor-pointer"
        >
          <LuChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm tracking-wide">
        {currentIndex + 1} / {total}
      </div>
    </div>
  );
}
