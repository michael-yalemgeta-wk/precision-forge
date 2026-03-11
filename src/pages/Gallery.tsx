import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { galleryImages } from "@/lib/siteData";
import gsap from "gsap";

const Gallery = () => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("gallery.heading1")}{" "}
            <span className="text-gradient">{t("gallery.heading2")}</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            {t("gallery.sub")}
          </p>
        </div>

        <div
          ref={gridRef}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="glass rounded-xl overflow-hidden cursor-pointer group break-inside-avoid"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative z-10 flex flex-col justify-end p-4">
                    <span className="font-ui text-sm font-medium text-white">
                      {img.caption ?? t(img.captionKey)}
                    </span>
                    <span className="font-body text-xs text-white/80 mt-1">
                      {img.description ?? t(img.descKey)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightbox].src.replace(
              "w=600&h=400",
              "w=1200&h=800",
            )}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
