import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Target, Eye, Award, Clock } from "lucide-react";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={sectionRef} className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Our Company</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Zenebe Tesfaye Torino & Ye Gabior Inbox Enterprise — precision metalwork since day one.
          </p>
        </div>

        {/* Story */}
        <div className="about-card glass rounded-2xl p-8 md:p-12 mb-10 max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Founded by Zenebe Tesfaye in Bahir Dar, Amhara, Ethiopia, our enterprise specializes in
            precision metal manufacturing using advanced Torino (lathe) machinery. We serve the
            industrial, construction, automotive, and agricultural sectors with reliable, custom-made
            metal components.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            What started as a small workshop has grown into a trusted manufacturing partner for
            businesses across the region. Our commitment to quality, precision, and timely delivery
            has earned us the confidence of our clients.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          <div className="about-card glass rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              To deliver reliable, precise, and durable metal parts that meet the highest standards
              of quality, enabling our clients to build and maintain their operations with confidence.
            </p>
          </div>
          <div className="about-card glass rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              To become the leading precision metal manufacturing enterprise in the Amhara region
              and beyond, known for innovation, quality, and customer service.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="about-card glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Precision Lathe Work", desc: "Expert operation of Torino machines for tight-tolerance components" },
              { icon: Clock, title: "Fast Turnaround", desc: "Efficient processes to meet urgent deadlines" },
              { icon: Target, title: "Custom Fabrication", desc: "Manufacturing from drawings, samples, or specifications" },
              { icon: Eye, title: "Quality Assurance", desc: "Rigorous inspection at every production stage" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-lg bg-secondary/20 border border-border/30">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-ui text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
