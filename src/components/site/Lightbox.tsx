import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  openIndex: number | null;
  onClose: () => void;
}

export const Lightbox = ({ images, openIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(openIndex ?? 0);

  useEffect(() => {
    if (openIndex !== null) setIndex(openIndex);
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, images.length, onClose]);

  if (openIndex === null) return null;
  const current = images[index];

  return (
    <div className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-sm animate-fade-in flex items-center justify-center">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 text-sand p-2 hover:opacity-70 transition"
      >
        <X className="w-7 h-7" />
      </button>
      <button
        aria-label="Previous"
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-4 md:left-8 text-sand p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label="Next"
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        className="absolute right-4 md:right-8 text-sand p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <img
        src={current.src}
        alt={current.alt}
        className="max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-lift"
      />
      <p className="absolute bottom-6 left-0 right-0 text-center text-sand/70 text-sm">
        {index + 1} / {images.length}
      </p>
    </div>
  );
};
