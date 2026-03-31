export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const SERVICES = [
  {
    id: 1,
    icon: "✦",
    title: "Classic Cut",
    duration: "45 min",
    description:
      "Precision scissor-work and clipper technique crafted by our master barbers for the discerning gentleman.",
  },
  {
    id: 2,
    icon: "◈",
    title: "Hot Towel Shave",
    duration: "60 min",
    description:
      "An indulgent traditional straight-razor shave with hot towels and premium shaving oils for silken skin.",
  },
  {
    id: 3,
    icon: "◆",
    title: "Beard Sculpting",
    duration: "30 min",
    description:
      "Expert beard shaping and grooming to define your style with precision lines and natural texture.",
  },
  {
    id: 4,
    icon: "◉",
    title: "Scalp Treatment",
    duration: "45 min",
    description:
      "Deep-cleansing scalp massage with botanical oils to stimulate growth and promote hair health.",
  },
  {
    id: 5,
    icon: "✧",
    title: "Royal Package",
    duration: "120 min",
    description:
      "The complete gentleman's experience: haircut, beard trim, hot towel shave, and scalp treatment.",
  },
  {
    id: 6,
    icon: "◎",
    title: "Hair Coloring",
    duration: "90 min",
    description:
      "Premium color services including highlights, full color, and grey blending with luxury hair dyes.",
  },
];

export const PRICING = [
  {
    id: 1,
    tier: "Essential",
    subtitle: "For the modern gentleman",
    price: 85,
    featured: false,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    services: [
      "Classic Haircut",
      "Hot Towel Finish",
      "Scalp Massage",
      "Style Consultation",
    ],
  },
  {
    id: 2,
    tier: "Signature",
    subtitle: "Our most popular experience",
    price: 150,
    featured: true,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
    services: [
      "Premium Haircut",
      "Beard Sculpting",
      "Hot Towel Shave",
      "Deep Scalp Treatment",
      "Complimentary Whisky",
    ],
  },
  {
    id: 3,
    tier: "Royal",
    subtitle: "The ultimate indulgence",
    price: 250,
    featured: false,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
    services: [
      "Master Barber Service",
      "Full Grooming Package",
      "Hair Coloring",
      "Facial Treatment",
      "Private Lounge Access",
      "Vintage Whisky Pairing",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alexander Reed",
    role: "CEO, Meridian Group",
    quote:
      "Baron's has completely redefined what I expect from a barbershop. The attention to detail and the atmosphere are truly second to none. I leave feeling like a new man every time.",
  },
  {
    id: 2,
    name: "Marcus Sullivan",
    role: "Film Director",
    quote:
      "As someone who appears in front of cameras, precision matters. The craftsmanship at Baron's is exceptional. They understand style on a completely different level.",
  },
  {
    id: 3,
    name: "James Whitmore",
    role: "Architect",
    quote:
      "The Royal Package is worth every penny. It's not just a haircut — it's an experience. The hot towel shave alone is worth the trip across the city.",
  },
  {
    id: 4,
    name: "Sebastian Hart",
    role: "Investment Banker",
    quote:
      "I've visited barbershops in London, New York, and Milan. Baron's rivals the very best of them, with the added warmth of genuine personal service.",
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
    alt: "Classic barbershop cut",
    cls: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=80",
    alt: "Straight razor shave",
    cls: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=700&q=80",
    alt: "Beard grooming",
    cls: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0ec7?auto=format&fit=crop&w=700&q=80",
    alt: "Barbershop interior",
    cls: "",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=80",
    alt: "Hair styling",
    cls: "row-span-2",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=700&q=80",
    alt: "Premium barber tools",
    cls: "",
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 12000, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "", label: "Master Barbers" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
];

export const MARQUEE_ITEMS = [
  "Classic Cut",
  "Hot Towel Shave",
  "Beard Sculpting",
  "Scalp Treatment",
  "Precision Grooming",
  "Royal Package",
  "Hair Coloring",
  "Gentleman's Style",
];
