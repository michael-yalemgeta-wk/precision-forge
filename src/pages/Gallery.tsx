import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

  const navigateLightbox = (dir: 1 | -1) => {
    if (lightbox === null) return;
    const next = (lightbox + dir + galleryImages.length) % galleryImages.length;
    setLightbox(next);
  };

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="glass rounded-xl overflow-hidden cursor-pointer group flex flex-col"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col gap-1">
                <h3 className="font-ui text-sm font-semibold text-foreground">
                  {t(img.captionKey)}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {t(img.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Nav arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-2 text-foreground hover:text-primary transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-2 text-foreground hover:text-primary transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[70vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 text-center max-w-lg" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-ui text-base font-semibold text-foreground">
              {t(galleryImages[lightbox].captionKey)}
            </h3>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {t(galleryImages[lightbox].descKey)}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
