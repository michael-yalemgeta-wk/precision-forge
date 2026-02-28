import { Cog, Wrench, Shield, Zap, Settings, Hammer, Target, Eye, Award, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Company Info ────────────────────────────────────────────────
export const companyInfo = {
  phone: "+251 918 353 873",
  phoneRaw: "+251918353873",
  email: "zenebetorno@gmail.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62236.41338818462!2d37.3503!3d11.5936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164326430e405b39%3A0x5c4d0498e495cc6f!2sBahir%20Dar!5e0!3m2!1sen!2set!4v1700000000000",
};

// ─── Navigation ──────────────────────────────────────────────────
export const navLinks = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.products", path: "/products" },
  { key: "nav.gallery", path: "/gallery" },
  { key: "nav.contact", path: "/contact" },
];

// ─── Social Links (placeholder for future) ───────────────────────
export const socialLinks = {
  facebook: "",
  telegram: "",
  tiktok: "",
};

// ─── Home Page: Featured Products ────────────────────────────────
export const homeProducts: { titleKey: string; descKey: string; icon: LucideIcon }[] = [
  { titleKey: "home.product1.title", descKey: "home.product1.desc", icon: Cog },
  { titleKey: "home.product2.title", descKey: "home.product2.desc", icon: Wrench },
  { titleKey: "home.product3.title", descKey: "home.product3.desc", icon: Shield },
  { titleKey: "home.product4.title", descKey: "home.product4.desc", icon: Zap },
];

// ─── Home Page: Why Choose Us ────────────────────────────────────
export const whyUsItems = [
  { titleKey: "home.why1.title", descKey: "home.why1.desc" },
  { titleKey: "home.why2.title", descKey: "home.why2.desc" },
  { titleKey: "home.why3.title", descKey: "home.why3.desc" },
  { titleKey: "home.why4.title", descKey: "home.why4.desc" },
];

// ─── Products Page ───────────────────────────────────────────────
export const products: { titleKey: string; descKey: string; category: string; icon: LucideIcon; materials: string }[] = [
  { titleKey: "products.item1.title", descKey: "products.item1.desc", category: "parts", icon: Cog, materials: "Steel, Aluminum, Alloy" },
  { titleKey: "products.item2.title", descKey: "products.item2.desc", category: "parts", icon: Settings, materials: "Carbon Steel, Stainless Steel" },
  { titleKey: "products.item3.title", descKey: "products.item3.desc", category: "parts", icon: Shield, materials: "High-tensile Steel" },
  { titleKey: "products.item4.title", descKey: "products.item4.desc", category: "parts", icon: Cog, materials: "Bronze, Steel, Composite" },
  { titleKey: "products.item5.title", descKey: "products.item5.desc", category: "custom", icon: Zap, materials: "Various Metals" },
  { titleKey: "products.item6.title", descKey: "products.item6.desc", category: "custom", icon: Wrench, materials: "As Required" },
  { titleKey: "products.item7.title", descKey: "products.item7.desc", category: "repair", icon: Hammer, materials: "N/A" },
  { titleKey: "products.item8.title", descKey: "products.item8.desc", category: "repair", icon: Wrench, materials: "Original Material" },
];

export const productCategories = [
  { id: "all", key: "products.cat.all" },
  { id: "parts", key: "products.cat.parts" },
  { id: "custom", key: "products.cat.custom" },
  { id: "repair", key: "products.cat.repair" },
];

// ─── Gallery Images ──────────────────────────────────────────────
export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop", alt: "Lathe machine in workshop", captionKey: "gallery.img1" },
  { src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop", alt: "Metal shaft manufacturing", captionKey: "gallery.img2" },
  { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop", alt: "CNC metal parts", captionKey: "gallery.img3" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop", alt: "Metal workshop", captionKey: "gallery.img4" },
  { src: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=600&h=400&fit=crop", alt: "Metal gears and parts", captionKey: "gallery.img5" },
  { src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop", alt: "Welding work", captionKey: "gallery.img6" },
  { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop", alt: "Industrial machinery", captionKey: "gallery.img7" },
  { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop", alt: "Metal turning process", captionKey: "gallery.img8" },
];

// ─── About Page: Capabilities ────────────────────────────────────
export const aboutCapabilities: { icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { icon: Award, titleKey: "about.cap1.title", descKey: "about.cap1.desc" },
  { icon: Clock, titleKey: "about.cap2.title", descKey: "about.cap2.desc" },
  { icon: Target, titleKey: "about.cap3.title", descKey: "about.cap3.desc" },
  { icon: Eye, titleKey: "about.cap4.title", descKey: "about.cap4.desc" },
];
