import {
  Cog,
  Wrench,
  Shield,
  Zap,
  Settings,
  Hammer,
  Target,
  Eye,
  Award,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import arekiImg from "../asset/arekiDistiller.jpg";
import candleImg from "../asset/candleMachine.jpg";
import cookStoveImg from "../asset/cookStove.jpg";
import cornShellerImg from "../asset/cornSheller.jpg";
import doughMixerImg from "../asset/doughMixer.jpg";
import feedChopperImg from "../asset/feedChopper.jpg";
import gearsImg from "../asset/Gears for Fabrication Machines.jpg";
import riceHullerImg from "../asset/riceHuller.jpg";

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
// ─── Hero Video ──────────────────────────────────────────────────
export const heroVideoUrl =
  "https://videos.pexels.com/video-files/5532765/5532765-sd_640_360_25fps.mp4";

// ─── Social Links (placeholder for future) ───────────────────────
export const socialLinks = {
  facebook: "",
  telegram: "",
  tiktok: "https://www.tiktok.com/@zenebetorno",
};
  facebook: "",
  telegram: "",
  tiktok: "https://www.tiktok.com/@zenebetorno",
};

// ─── Home Page: Featured Products ────────────────────────────────
export const homeProducts: {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}[] = [
  { titleKey: "home.product1.title", descKey: "home.product1.desc", icon: Cog },
  {
    titleKey: "home.product2.title",
    descKey: "home.product2.desc",
    icon: Wrench,
  },
  {
    titleKey: "home.product3.title",
    descKey: "home.product3.desc",
    icon: Shield,
  },
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
export const products: {
  titleKey: string;
  descKey: string;
  category: string;
  icon: LucideIcon;
  materials: string;
}[] = [
  // Workshop Machines
  {
    titleKey: "products.lathe.title",
    descKey: "products.lathe.desc",
    category: "machines",
    icon: Settings,
    materials: "Industrial Grade Steel",
  },
  {
    titleKey: "products.milling.title",
    descKey: "products.milling.desc",
    category: "machines",
    icon: Settings,
    materials: "Industrial Grade Steel",
  },
  {
    titleKey: "products.press.title",
    descKey: "products.press.desc",
    category: "machines",
    icon: Settings,
    materials: "Industrial Grade Steel",
  },
  {
    titleKey: "products.drill.title",
    descKey: "products.drill.desc",
    category: "machines",
    icon: Settings,
    materials: "Industrial Grade Steel",
  },

  // Fabricated Products
  {
    titleKey: "products.cornSheller.title",
    descKey: "products.cornSheller.desc",
    category: "products",
    icon: Cog,
    materials: "Steel, Iron",
  },
  {
    titleKey: "products.candleMachine.title",
    descKey: "products.candleMachine.desc",
    category: "products",
    icon: Cog,
    materials: "Steel, Aluminum",
  },
  {
    titleKey: "products.doughMixer.title",
    descKey: "products.doughMixer.desc",
    category: "products",
    icon: Cog,
    materials: "Stainless Steel",
  },
  {
    titleKey: "products.arekiDistiller.title",
    descKey: "products.arekiDistiller.desc",
    category: "products",
    icon: Cog,
    materials: "Copper, Steel",
  },
  {
    titleKey: "products.feedChopper.title",
    descKey: "products.feedChopper.desc",
    category: "products",
    icon: Cog,
    materials: "Steel, Iron",
  },
  {
    titleKey: "products.cookStove.title",
    descKey: "products.cookStove.desc",
    category: "products",
    icon: Zap,
    materials: "Steel, Clay",
  },
  {
    titleKey: "products.riceHuller.title",
    descKey: "products.riceHuller.desc",
    category: "products",
    icon: Cog,
    materials: "Steel, Iron",
  },

  // Machine Gears
  {
    titleKey: "products.gears.title",
    descKey: "products.gears.desc",
    category: "gears",
    icon: Wrench,
    materials: "Steel, Alloy",
  },

  // Spare Parts
  {
    titleKey: "products.spareparts.title",
    descKey: "products.spareparts.desc",
    category: "spareparts",
    icon: Hammer,
    materials: "Various Metals",
  },
];

export const productCategories = [
  { id: "all", key: "products.cat.all" },
  { id: "machines", key: "products.cat.machines" },
  { id: "products", key: "products.cat.products" },
  { id: "gears", key: "products.cat.gears" },
  { id: "spareparts", key: "products.cat.spareparts" },
];

// ─── Gallery Images ──────────────────────────────────────────────
export const galleryImages = [
  {
    src: arekiImg,
    alt: "Areki distiller",
    captionKey: "gallery.img1",
    descKey: "gallery.img1.desc",
    caption: "Areki distiller",
    description: "Traditional Areki (local spirit) distillation equipment.",
  },
  {
    src: candleImg,
    alt: "Candle machine",
    captionKey: "gallery.img2",
    descKey: "gallery.img2.desc",
    caption: "Candle-making machine",
    description: "Industrial candle production machine made from steel.",
  },
  {
    src: cookStoveImg,
    alt: "Cook stove",
    captionKey: "gallery.img3",
    descKey: "gallery.img3.desc",
    caption: "Cook stove",
    description: "Heavy-duty cook stove combining steel and clay components.",
  },
  {
    src: cornShellerImg,
    alt: "Corn sheller",
    captionKey: "gallery.img4",
    descKey: "gallery.img4.desc",
    caption: "Corn sheller",
    description: "Mechanized corn sheller for separating kernels from cobs.",
  },
  {
    src: doughMixerImg,
    alt: "Dough mixer",
    captionKey: "gallery.img5",
    descKey: "gallery.img5.desc",
    caption: "Dough mixer",
    description: "Commercial stainless-steel dough mixer for bakeries.",
  },
  {
    src: feedChopperImg,
    alt: "Feed chopper",
    captionKey: "gallery.img6",
    descKey: "gallery.img6.desc",
    caption: "Feed chopper",
    description:
      "Machine for chopping livestock feed and agricultural residues.",
  },
  {
    src: gearsImg,
    alt: "Gears for fabrication machines",
    captionKey: "gallery.img7",
    descKey: "gallery.img7.desc",
    caption: "Gears for fabrication machines",
    description: "High-precision gears used in metal fabrication machinery.",
  },
  {
    src: riceHullerImg,
    alt: "Rice huller",
    captionKey: "gallery.img8",
    descKey: "gallery.img8.desc",
    caption: "Rice huller",
    description:
      "Rice huller machine for milling and removing husks from rice.",
  },
];

// ─── About Page: Capabilities ────────────────────────────────────
export const aboutCapabilities: {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}[] = [
  { icon: Award, titleKey: "about.cap1.title", descKey: "about.cap1.desc" },
  { icon: Clock, titleKey: "about.cap2.title", descKey: "about.cap2.desc" },
  { icon: Target, titleKey: "about.cap3.title", descKey: "about.cap3.desc" },
  { icon: Eye, titleKey: "about.cap4.title", descKey: "about.cap4.desc" },
];
