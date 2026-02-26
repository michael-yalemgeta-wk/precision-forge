import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Cog, Wrench, Shield, Zap, Settings, Hammer } from "lucide-react";
import gsap from "gsap";

const categories = [
  { id: "all", label: "All" },
  { id: "parts", label: "Spare Parts" },
  { id: "custom", label: "Custom Work" },
  { id: "repair", label: "Repair" },
];

const allProducts = [
  { title: "Machine Spare Parts", desc: "High-precision replacement parts for industrial machinery. Steel, aluminum, and alloy materials.", category: "parts", icon: Cog, materials: "Steel, Aluminum, Alloy" },
  { title: "Precision Shafts", desc: "Custom-engineered shafts for motors, pumps, and industrial equipment.", category: "parts", icon: Settings, materials: "Carbon Steel, Stainless Steel" },
  { title: "Bolts & Fasteners", desc: "Heavy-duty bolts, nuts, and fasteners manufactured to specification.", category: "parts", icon: Shield, materials: "High-tensile Steel" },
  { title: "Bushings & Bearings", desc: "Precision-machined bushings for rotating equipment and machinery.", category: "parts", icon: Cog, materials: "Bronze, Steel, Composite" },
  { title: "Custom Metal Parts", desc: "Bespoke fabrication from your drawings, samples, or specifications.", category: "custom", icon: Zap, materials: "Various Metals" },
  { title: "Prototype Manufacturing", desc: "Rapid prototyping for new product development and testing.", category: "custom", icon: Wrench, materials: "As Required" },
  { title: "Machine Repair Works", desc: "Expert repair and reconditioning of industrial machinery and components.", category: "repair", icon: Hammer, materials: "N/A" },
  { title: "Part Reconditioning", desc: "Restore worn components to original specifications.", category: "repair", icon: Wrench, materials: "Original Material" },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeTab === "all" ? allProducts : allProducts.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [activeTab]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Products & <span className="text-gradient">Services</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Browse our range of precision-manufactured metal products and services.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="glass mx-auto flex w-fit">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="font-ui text-sm data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.title}
              className="glass rounded-xl p-6 hover:glass-glow transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-ui text-base font-semibold text-foreground mb-2">{product.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">{product.desc}</p>
              <div className="flex items-center gap-2">
                <span className="font-ui text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                  {product.materials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
