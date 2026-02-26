import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";
import gsap from "gsap";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop", alt: "Lathe machine in workshop", caption: "Precision Lathe Machine" },
  { src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop", alt: "Metal shaft manufacturing", caption: "Custom Shaft Production" },
  { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop", alt: "CNC metal parts", caption: "Precision Components" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", alt: "Metal workshop", caption: "Our Workshop" },
  { src: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=600&h=400&fit=crop", alt: "Metal gears and parts", caption: "Finished Gear Components" },
  { src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop", alt: "Welding work", caption: "Expert Metalwork" },
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop", alt: "Industrial machinery", caption: "Industrial Equipment" },
  { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop", alt: "Metal turning process", caption: "Turning Process" },
];

const Gallery = () => {
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
            Our <span className="text-gradient">Gallery</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            See our workshop, machinery, and finished products in action.
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
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-ui text-sm text-foreground font-medium">{img.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
            src={galleryImages[lightbox].src.replace("w=600&h=400", "w=1200&h=800")}
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
