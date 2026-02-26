import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cog, Wrench, Shield, Zap, Settings, Hammer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";

const allProducts = [
  { titleKey: "products.item1.title", descKey: "products.item1.desc", category: "parts", icon: Cog, materials: "Steel, Aluminum, Alloy" },
  { titleKey: "products.item2.title", descKey: "products.item2.desc", category: "parts", icon: Settings, materials: "Carbon Steel, Stainless Steel" },
  { titleKey: "products.item3.title", descKey: "products.item3.desc", category: "parts", icon: Shield, materials: "High-tensile Steel" },
  { titleKey: "products.item4.title", descKey: "products.item4.desc", category: "parts", icon: Cog, materials: "Bronze, Steel, Composite" },
  { titleKey: "products.item5.title", descKey: "products.item5.desc", category: "custom", icon: Zap, materials: "Various Metals" },
  { titleKey: "products.item6.title", descKey: "products.item6.desc", category: "custom", icon: Wrench, materials: "As Required" },
  { titleKey: "products.item7.title", descKey: "products.item7.desc", category: "repair", icon: Hammer, materials: "N/A" },
  { titleKey: "products.item8.title", descKey: "products.item8.desc", category: "repair", icon: Wrench, materials: "Original Material" },
];

const Products = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const catKeys = [
    { id: "all", key: "products.cat.all" },
    { id: "parts", key: "products.cat.parts" },
    { id: "custom", key: "products.cat.custom" },
    { id: "repair", key: "products.cat.repair" },
  ];

  const filtered = activeTab === "all" ? allProducts : allProducts.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, { y: 30, opacity: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" });
    }
  }, [activeTab]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("products.heading1")} <span className="text-gradient">{t("products.heading2")}</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">{t("products.sub")}</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="glass mx-auto flex w-fit">
            {catKeys.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id} className="font-ui text-sm data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                {t(cat.key)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.titleKey} className="glass rounded-xl p-6 hover:glass-glow transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-ui text-base font-semibold text-foreground mb-2">{t(product.titleKey)}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">{t(product.descKey)}</p>
              <span className="font-ui text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                {product.materials}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
