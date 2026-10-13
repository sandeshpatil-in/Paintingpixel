export interface PaintingItem {
  id: string;
  img: string;
  alt: string;
  spanClass: string;
  dataY?: string;
  href?: string;
}

export interface GallerySectionData {
  id: string;
  number: string;
  title: string;
  categoryKey: string;
  description: string;
  gridClass: string;
  viewAllLink: string;
  items: PaintingItem[];
}

export const HERO_SLIDES = [
  {
    id: 'slide-0',
    img: '/121.png',
    alt: 'Masterpiece Portrait by Paintstar Atelier',
  },
  {
    id: 'slide-1',
    img: '/03.png',
    alt: 'Heritage Oil Painting by Paintstar Atelier',
  },
  {
    id: 'slide-2',
    img: '/08.png',
    alt: 'Fine Art Canvas by Paintstar Atelier',
  },
];

export const PAINTSTAR_GALLERIES: GallerySectionData[] = [
  {
    id: 'gallery-01',
    number: 'Gallery 01',
    title: 'Self Portrait Paintings',
    categoryKey: 'self-portrait',
    description: 'Celebrate your individuality through a thoughtfully painted self portrait painting. A timeless artwork that reflects your personality, confidence, and story.',
    gridClass: 'grid lg:gap-x-4 md:gap-x-3 max-lg:gap-y-15 max-md:gap-y-10 gap-x-2 lg:grid-cols-10 lg:grid-rows-3 max-lg:grid-cols-2',
    viewAllLink: '#',
    items: [
      {
        id: 'self-1',
        img: '/paintings/self-portrait/oil-2332-self-digital-portrait-painting-large.jpg',
        alt: 'Self Digital Portrait Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 h-full group grid-item',
      },
      {
        id: 'self-2',
        img: '/paintings/self-portrait/oil-467-self-digital-portrait-painting-large1.jpg',
        alt: 'Classical Self Portrait Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
      },
      {
        id: 'self-3',
        img: '/paintings/self-portrait/personalized-canvas-painting-by-paintstar-7058-36x48.jpg',
        alt: 'Personalized Canvas Painting by Paintstar Atelier',
        spanClass: 'relative block col-span-2 lg:row-span-2 lg:row-start-2 lg:col-start-6 h-full group grid-item',
        dataY: '-50%',
      },
      {
        id: 'self-4',
        img: '/paintings/self-portrait/oil-9516-16x20-arpi.jpg',
        alt: 'Fine Art Digital Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 h-full group grid-item',
      },
    ],
  },
  {
    id: 'gallery-02',
    number: 'Gallery 02',
    title: "Children's Portrait Paintings",
    categoryKey: 'children-portrait',
    description: 'Preserve the innocence, wonder, and joy of childhood. Digital painting for kids that turn precious moments into lasting keepsakes.',
    gridClass: 'grid lg:gap-x-4 md:gap-x-3 max-lg:gap-y-15 max-md:gap-y-10 gap-x-2 lg:grid-cols-12 lg:grid-rows-3 max-lg:grid-cols-2',
    viewAllLink: '#',
    items: [
      {
        id: 'child-1',
        img: '/paintings/children-portrait/oil-570-kid-child-digital-portrait-painting-large.jpg',
        alt: "Child Digital Portrait Painting by Paintstar Atelier",
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 max-lg:col-span-2 h-full group grid-item',
      },
      {
        id: 'child-2',
        img: '/paintings/children-portrait/kids-smiled-digital-painting-by-paintstar-3606-16x20.jpg',
        alt: "Kid Digital Painting with Radiant Smile by Paintstar Atelier",
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 lg:row-start-2 lg:col-start-4 h-full group grid-item',
        dataY: '-50%',
      },
      {
        id: 'child-3',
        img: '/paintings/children-portrait/oil-1226-kid-child-digital-portrait-painting-large.jpg',
        alt: "Cherished Child Portrait by Paintstar Atelier",
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
      },
      {
        id: 'child-4',
        img: '/paintings/children-portrait/oil-9224-12x14-michelle.jpg',
        alt: "Children Fine Art Portrait by Paintstar Atelier",
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 lg:row-start-2 lg:col-start-9 h-full group grid-item',
        dataY: '-50%',
      },
      {
        id: 'child-5',
        img: '/paintings/children-portrait/oil-9724-16x20-prakruti-litmus.jpg',
        alt: "Kid Keepsake Canvas Painting by Paintstar Atelier",
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
      },
    ],
  },
  {
    id: 'gallery-03',
    number: 'Gallery 03',
    title: 'Family Portrait Paintings',
    categoryKey: 'family-painting',
    description: 'Celebrate the people who matter most. Heartfelt family portrait paintings that bring relationships, memories, and generations together.',
    gridClass: 'grid lg:gap-x-4 md:gap-x-3 max-lg:gap-y-15 max-md:gap-y-10 gap-x-2 lg:grid-cols-10 lg:grid-rows-3 max-lg:grid-cols-2',
    viewAllLink: '#',
    items: [
      {
        id: 'family-1',
        img: '/paintings/family/oil-582-family-digital-portrait-painting-large1.jpg',
        alt: 'Royal Family Digital Portrait Painting by Paintstar Atelier',
        spanClass: 'relative block col-span-2 lg:row-span-2 h-full group grid-item',
      },
      {
        id: 'family-2',
        img: '/paintings/family/oil-821-family-digital-portrait-painting-large1.jpg',
        alt: 'Generations Family Canvas by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-2 lg:col-start-3 lg:row-start-2 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
        dataY: '-50%',
      },
      {
        id: 'family-3',
        img: '/paintings/family/oil-1651-fathers-day-gift-digital-painting-large.jpg',
        alt: 'Heritage Family Gift Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 h-full group grid-item',
      },
      {
        id: 'family-4',
        img: '/paintings/family/oil-312-family-digital-portrait-painting-large1.jpg',
        alt: 'Heirloom Family Digital Portrait by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-2 max-lg:col-span-2 h-full group grid-item',
      },
    ],
  },
  {
    id: 'gallery-04',
    number: 'Gallery 04',
    title: 'Couple Portrait Paintings',
    categoryKey: 'wedding-couple-painting',
    description: 'Honor the journey you share with the one you love. Elegant couple portrait paintings that capture companionship, commitment, and connection.',
    gridClass: 'grid lg:gap-x-4 md:gap-x-3 max-lg:gap-y-15 max-md:gap-y-10 gap-x-2 lg:grid-cols-12 lg:grid-rows-3 max-lg:grid-cols-2',
    viewAllLink: '#',
    items: [
      {
        id: 'couple-1',
        img: '/paintings/couple-portrait/oil-2246-engagement-couple-digital-painting-large1.jpg',
        alt: 'Engagement Couple Digital Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 h-full group grid-item',
      },
      {
        id: 'couple-2',
        img: '/paintings/couple-portrait/oil-2229-wedding-couple-digital-portrait-painting-large1.jpg',
        alt: 'Wedding Couple Fine Art Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
      },
      {
        id: 'couple-3',
        img: '/paintings/couple-portrait/oil-3266-couple-digital-portrait-painting-large.jpg',
        alt: 'Romantic Couple Digital Portrait by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 lg:row-start-2 lg:col-start-6 h-full group grid-item',
        dataY: '-50%',
      },
      {
        id: 'couple-4',
        img: '/paintings/couple-portrait/oil-259-wedding-couple-digital-portrait-painting-large1.jpg',
        alt: 'Wedding Anniversary Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
      },
      {
        id: 'couple-5',
        img: '/paintings/couple-portrait/oil-9229-16x20-dharmishta-panchal.jpg',
        alt: 'Bespoke Couple Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 max-lg:col-span-2 h-full group grid-item',
      },
    ],
  },
  {
    id: 'gallery-05',
    number: 'Gallery 05',
    title: 'Photo Restoration & Paintings',
    categoryKey: 'photo-restoration',
    description: 'Bring old and damaged photographs back to life. Damaged/old photo restoration that preserves memories, stories, and family history.',
    gridClass: 'grid lg:gap-x-4 md:gap-x-3 max-lg:gap-y-15 max-md:gap-y-10 gap-x-2 lg:grid-cols-12 lg:grid-rows-3 max-lg:grid-cols-2',
    viewAllLink: '#',
    items: [
      {
        id: 'rest-1',
        img: '/paintings/photo-restoration/photo-restoration-painting-348.jpg',
        alt: 'Antique Photo Restoration Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
      },
      {
        id: 'rest-2',
        img: '/paintings/photo-restoration/photo-restoration-digital-painting-881.jpg',
        alt: 'Vintage Photo Restoration Digital Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 lg:row-start-2 lg:col-start-4 h-full group grid-item',
        dataY: '-50%',
      },
      {
        id: 'rest-3',
        img: '/paintings/photo-restoration/photo-restoration-digital-painting-8161.jpg',
        alt: 'Restored Memorial Portrait by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-3 lg:row-span-3 max-lg:col-span-2 h-full group grid-item',
      },
      {
        id: 'rest-4',
        img: '/paintings/photo-restoration/painting-from-old-black-and-white-photograph-653.jpg',
        alt: 'Black & White Photo to Oil Painting by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 lg:row-start-2 lg:col-start-9 max-lg:pt-30 max-md:pt-25 max-sm:pt-20 h-full group grid-item',
        dataY: '-50%',
      },
      {
        id: 'rest-5',
        img: '/paintings/photo-restoration/painting-from-old-photo-646.jpg',
        alt: 'Archival Photo Restoration by Paintstar Atelier',
        spanClass: 'relative block lg:col-span-2 lg:row-span-2 h-full group grid-item',
      },
    ],
  },
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Nisha P.',
    location: 'Mumbai, India',
    img: '/nisha-panchal.jpg',
    quote: 'Paintstar Atelier turned a simple photo of my son into a lifelike masterpiece! It perfectly captures his innocent expressions.',
  },
  {
    name: 'Divya K.',
    location: 'Bangalore, India',
    img: '/divya-kothari.jpg',
    quote: 'I was speechless unboxing our anniversary portrait! The artists at Paintstar captured our personality with stunning brushwork.',
  },
  {
    name: 'Lakshay A.',
    location: 'Delhi, India',
    img: '/testimonials/lakshay-aggarwal.jpg',
    quote: 'Our experience with Paintstar was wonderful. The quality of work was really impressive and the canvas framing is unmatched.',
  },
  {
    name: 'Kamlesh R.',
    location: 'Pune, India',
    img: '/testimonials/kamles-m-rathod.jpg',
    quote: 'Painting work done by Paintstar Atelier is excellent. Specially expressions on my son’s face are too cute. Truly timeless.',
  },
];

export const SUBSIDIARY_BRANDS = [
  { name: 'CanvasCraft', img: '/subsidiary/wacom.jpg', href: '#' },
  { name: 'PetStar', img: '/subsidiary/pawstro.jpg', href: '#' },
  { name: 'AuraArt', img: '/subsidiary/soulful.jpg', href: '#' },
  { name: 'VividPrint', img: '/subsidiary/litmus.jpg', href: '#' },
  { name: 'LuxeDecor', img: '/subsidiary/leppo.jpg', href: '#' },
  { name: 'AntiqueRevive', img: '/subsidiary/benothi.jpg', href: '#' },
];
