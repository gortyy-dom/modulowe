export interface Product {
  id: string
  name: string
  bedrooms: number
  size: string
  features: string[]
  image: string
  images: string[]
  description: string
  detailedDescription: string
  available: boolean
}

export const products: Product[] = [
  {
    id: 'compact',
    name: 'Compact',
    bedrooms: 2,
    size: '45-60 m²',
    features: [
      'Modern minimal design',
      'Energy efficient',
      'Open floor plan',
      'High-quality finishes',
      'Smart home ready'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    ],
    description: 'Perfect for couples or small families seeking modern living in a compact space.',
    detailedDescription: 'The Compact model offers an intelligent use of space with a modern minimal design that maximizes every square meter. This energy-efficient home features an open floor plan that creates a sense of spaciousness despite its compact footprint. High-quality finishes throughout ensure durability and style, while smart home integration allows for seamless control of lighting, climate, and security. Ideal for those who value efficiency without compromising on comfort and contemporary aesthetics.',
    available: true,
  },
  {
    id: 'family',
    name: 'Family',
    bedrooms: 4,
    size: '90-120 m²',
    features: [
      'Spacious living areas',
      'Multiple bathrooms',
      'Large kitchen',
      'Storage solutions',
      'Outdoor deck option'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    ],
    description: 'Designed for growing families with ample space for everyone to live comfortably.',
    detailedDescription: 'The Family model is thoughtfully designed to accommodate the needs of growing families. With four bedrooms and multiple bathrooms, this spacious home provides privacy and comfort for all family members. The large, well-appointed kitchen serves as the heart of the home, perfect for meal preparation and family gatherings. Generous storage solutions throughout ensure that belongings are organized and accessible. An optional outdoor deck extends the living space, creating an ideal setting for outdoor activities and relaxation. This model combines functionality with style, making it perfect for family life.',
    available: true,
  },
  {
    id: 'luxury',
    name: 'Luxury',
    bedrooms: 3,
    size: '75-100 m²',
    features: [
      'Premium finishes',
      'Designer fixtures',
      'Master suite',
      'Wine storage',
      'Smart home integration'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    ],
    description: 'Premium living experience with high-end finishes and sophisticated design elements.',
    detailedDescription: 'The Luxury model represents the pinnacle of modular home design, featuring premium finishes and designer fixtures throughout. The master suite offers a private retreat with luxurious amenities and thoughtful design. A dedicated wine storage area caters to connoisseurs, while comprehensive smart home integration provides ultimate convenience and control. Every detail has been carefully considered to create an atmosphere of refined elegance and sophisticated living. This model is perfect for those who demand the highest standards in both design and functionality.',
    available: false,
  },
  {
    id: 'studio',
    name: 'Studio',
    bedrooms: 1,
    size: '30-40 m²',
    features: [
      'Compact efficiency',
      'Multifunctional spaces',
      'Modern appliances',
      'Eco-friendly materials',
      'Affordable pricing'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200'
    ],
    description: 'Efficient and affordable solution for individuals seeking modern, sustainable living.',
    detailedDescription: 'The Studio model demonstrates that great design doesn\'t require a large footprint. This compact, efficient home maximizes every inch of space through intelligent multifunctional design. Modern appliances and eco-friendly materials ensure both convenience and sustainability. Despite its small size, the Studio model offers all the essentials for comfortable living, making it an affordable entry point into modular home ownership. Perfect for individuals, students, or as a secondary residence, this model proves that thoughtful design can create a beautiful and functional living space in any size.',
    available: true,
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

