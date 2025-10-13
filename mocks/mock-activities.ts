import type {
  Activity,
  SurfLessonActivity,
  SurfCoachingActivity,
  SurfPhotographyActivity,
  SurfRentalActivity
} from "~/types/activity"
import { SkillLevel, PaymentMethod, Language } from "~/types/activity"
import type { SurfBoard } from "~/types/surfboard"
import { BoardType, BoardCondition } from "~/types/surfboard"

// Helper function to generate random IDs
const generateId = () => Math.random().toString(36).substr(2, 9)

// Helper function to generate random ratings
const generateRating = () => ({
  rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
  reviewCount: Math.floor(Math.random() * 200) + 10 // 10 to 210
})

// Helper function to generate random prices
const generatePrice = () => Math.floor(Math.random() * 200) + 25 // 25 to 225

// Helper function to generate random coordinates around Bali
const generateBaliCoords = () => ({
  lat: -8.5 + (Math.random() - 0.5) * 0.8, // Roughly -8.9 to -8.1
  lng: 115.0 + (Math.random() - 0.5) * 0.6 // Roughly 114.7 to 115.3
})

// Mock surfboards for rental activities
const mockSurfBoards: SurfBoard[] = [
  {
    id: generateId(),
    name: "Beginner Longboard",
    type: BoardType.LONGBOARD,
    brand: "Catch Surf",
    model: "Beater",
    length: 9.0,
    width: 23,
    thickness: 3.5,
    volume: 75,
    condition: BoardCondition.EXCELLENT,
    description:
      "Perfect for beginners with soft construction and easy paddling",
    images: ["/images/surfboards/longboard-1.jpg"],
    pricePerHour: 8,
    pricePerDay: 25,
    pricePerWeek: 150,
    isAvailable: true,
    features: ["Soft construction", "Leash included", "Wax applied"]
  },
  {
    id: generateId(),
    name: "Performance Shortboard",
    type: BoardType.SHORTBOARD,
    brand: "Firewire",
    model: "Dominator",
    length: 6.2,
    width: 19.5,
    thickness: 2.25,
    volume: 32,
    condition: BoardCondition.GOOD,
    description: "High-performance shortboard for advanced surfers",
    images: ["/images/surfboards/shortboard-1.jpg"],
    pricePerHour: 12,
    pricePerDay: 40,
    pricePerWeek: 200,
    isAvailable: true,
    features: ["FCS fins", "Leash included", "Professional wax"]
  },
  {
    id: generateId(),
    name: "Funboard All-Rounder",
    type: BoardType.FUNBOARD,
    brand: "Channel Islands",
    model: "Average Joe",
    length: 7.6,
    width: 22,
    thickness: 2.75,
    volume: 48,
    condition: BoardCondition.EXCELLENT,
    description: "Versatile board perfect for intermediate surfers",
    images: ["/images/surfboards/funboard-1.jpg"],
    pricePerHour: 10,
    pricePerDay: 35,
    pricePerWeek: 180,
    isAvailable: true,
    features: ["FCS fins", "Leash included", "Wax applied"]
  },
  {
    id: generateId(),
    name: "Fish Board",
    type: BoardType.FISH,
    brand: "Lost",
    model: "RNF Retro",
    length: 5.8,
    width: 20.5,
    thickness: 2.5,
    volume: 35,
    condition: BoardCondition.GOOD,
    description: "Retro fish design for small wave performance",
    images: ["/images/surfboards/fish-1.jpg"],
    pricePerHour: 11,
    pricePerDay: 38,
    pricePerWeek: 190,
    isAvailable: true,
    features: ["FCS fins", "Leash included", "Wax applied"]
  },
  {
    id: generateId(),
    name: "Mini Mal",
    type: BoardType.MINI_MAL,
    brand: "JS Industries",
    model: "Monsta Box",
    length: 8.0,
    width: 22.5,
    thickness: 3.0,
    volume: 55,
    condition: BoardCondition.FAIR,
    description: "Stable mini malibu for learning and small waves",
    images: ["/images/surfboards/minimal-1.jpg"],
    pricePerHour: 9,
    pricePerDay: 30,
    pricePerWeek: 160,
    isAvailable: true,
    features: ["FCS fins", "Leash included", "Wax applied"]
  }
]

// Mock surf lesson activities
export const mockSurfLessonActivities: SurfLessonActivity[] = [
  {
    id: generateId(),
    businessId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // Echo Beach
    name: "Beginner Surf Lesson - Echo Beach",
    description:
      "Perfect introduction to surfing with our experienced instructors. Learn the basics in safe, gentle waves at one of Bali's most popular surf spots.",
    price: generatePrice(),
    currency: "USD",
    images: ["/images/activities/surf-lessons/beginner-echo-beach.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Echo Beach parking lot, next to the surf shop",
    cancellationPolicy: "Free cancellation up to 24 hours before lesson",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.PAYPAL
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN],
    includedMaterials: ["Surfboard", "Wetsuit", "Rash guard", "Wax"],
    whatToBring: ["Swimsuit", "Towel", "Sunscreen", "Water bottle"],
    knowBeforeYouGo: [
      "Basic swimming skills required",
      "Lesson duration: 2 hours",
      "Group size: maximum 4 students"
    ],
    skillLevel: SkillLevel.BEGINNER,
    instructor: {
      name: "Made",
      experience: "8 years teaching experience",
      certifications: ["ISA Level 2", "First Aid Certified", "Ocean Rescue"]
    },
    groupSize: {
      min: 1,
      max: 4,
      isPrivate: false
    },
    duration: 120, // 2 hours in minutes
    timeSlots: ["08:00", "10:00", "14:00", "16:00"],
    extras: {
      videoAnalysis: true,
      feedback: true,
      equipment: true
    }
  },
  {
    id: generateId(),
    businessId: "k1l2m3n4-o5p6-7890-4567-123456789012", // Kuta Beach
    name: "Private Surf Lesson - Kuta Beach",
    description:
      "One-on-one instruction tailored to your skill level. Perfect for rapid progress and personalized attention.",
    price: generatePrice() + 50, // More expensive for private
    currency: "USD",
    images: ["/images/activities/surf-lessons/private-kuta-beach.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Kuta Beach, in front of Hard Rock Hotel",
    cancellationPolicy: "Free cancellation up to 12 hours before lesson",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.BANK_TRANSFER
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.DUTCH],
    includedMaterials: [
      "Premium surfboard",
      "Wetsuit",
      "Rash guard",
      "Wax",
      "GoPro for video analysis"
    ],
    whatToBring: ["Swimsuit", "Towel", "Sunscreen", "Water bottle"],
    knowBeforeYouGo: [
      "Private lesson - 1 instructor, 1 student",
      "Lesson duration: 2.5 hours",
      "Video analysis included"
    ],
    skillLevel: SkillLevel.BEGINNER,
    instructor: {
      name: "Ketut",
      experience: "12 years teaching experience",
      certifications: [
        "ISA Level 3",
        "First Aid Certified",
        "Ocean Rescue",
        "Surf Therapy Certified"
      ]
    },
    groupSize: {
      min: 1,
      max: 1,
      isPrivate: true
    },
    duration: 150, // 2.5 hours in minutes
    timeSlots: ["07:00", "09:30", "12:00", "14:30", "17:00"],
    extras: {
      videoAnalysis: true,
      feedback: true,
      equipment: true
    }
  },
  {
    id: generateId(),
    businessId: "e5f6g7h8-i9j0-1234-ef01-567890123456", // Advanced Coaching
    name: "Intermediate Surf Coaching - Uluwatu",
    description:
      "Take your surfing to the next level with our intermediate coaching program. Focus on technique refinement and wave reading.",
    price: generatePrice() + 25,
    currency: "USD",
    images: ["/images/activities/surf-lessons/intermediate-uluwatu.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Uluwatu surf break, parking area",
    cancellationPolicy: "Free cancellation up to 48 hours before lesson",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.PAYPAL
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.GERMAN],
    includedMaterials: [
      "Performance surfboard",
      "Wetsuit",
      "Rash guard",
      "Wax",
      "Video equipment"
    ],
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Water bottle",
      "Your own board (optional)"
    ],
    knowBeforeYouGo: [
      "Must be able to catch waves independently",
      "Lesson duration: 3 hours",
      "Group size: maximum 3 students"
    ],
    skillLevel: SkillLevel.INTERMEDIATE,
    instructor: {
      name: "Wayan",
      experience: "15 years competitive surfing and coaching",
      certifications: [
        "ISA Level 3",
        "Former Pro Surfer",
        "First Aid Certified",
        "Ocean Rescue"
      ]
    },
    groupSize: {
      min: 1,
      max: 3,
      isPrivate: false
    },
    duration: 180, // 3 hours in minutes
    timeSlots: ["06:00", "09:00", "15:00"],
    extras: {
      videoAnalysis: true,
      feedback: true,
      equipment: true
    }
  }
]

// Mock surf coaching activities
export const mockSurfCoachingActivities: SurfCoachingActivity[] = [
  {
    id: generateId(),
    businessId: "e5f6g7h8-i9j0-1234-ef01-567890123456", // Advanced Coaching
    name: "Advanced Wave Reading & Positioning",
    description:
      "Master the art of wave reading and positioning for maximum performance. Learn to identify the best take-off spots and optimize your positioning.",
    price: generatePrice() + 40,
    currency: "USD",
    images: [
      "/images/activities/surf-coaching/advanced-wave-reading-uluwatu.jpg"
    ],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Uluwatu surf break, cliff top",
    cancellationPolicy: "Free cancellation up to 24 hours before session",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.BANK_TRANSFER
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.FRENCH],
    includedMaterials: [
      "Performance surfboard",
      "Wetsuit",
      "Rash guard",
      "Wax",
      "Video analysis equipment"
    ],
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Water bottle",
      "Your own board (recommended)"
    ],
    knowBeforeYouGo: [
      "Advanced surfing skills required",
      "Session duration: 4 hours",
      "Maximum 2 students per session"
    ],
    skillLevel: SkillLevel.ADVANCED,
    expertise: [
      "Wave Reading",
      "Positioning",
      "Competition Preparation",
      "Mental Training"
    ],
    surfSpots: ["Uluwatu", "Padang Padang", "Bingin", "Dreamland"],
    extras: {
      videoAnalysis: true,
      feedback: true,
      equipment: true
    }
  },
  {
    id: generateId(),
    businessId: "r8s9t0u1-v2w3-4567-1234-890123456789", // Intermediate Coaching
    name: "Barrel Riding Masterclass",
    description:
      "Learn the techniques and timing for riding barrels. Perfect your tube riding skills with expert guidance and video analysis.",
    price: generatePrice() + 60,
    currency: "USD",
    images: [
      "/images/activities/surf-coaching/barrel-riding-padang-padang.jpg"
    ],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Padang Padang Beach, parking area",
    cancellationPolicy: "Free cancellation up to 48 hours before session",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.PAYPAL
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.DUTCH],
    includedMaterials: [
      "Performance surfboard",
      "Wetsuit",
      "Rash guard",
      "Wax",
      "Underwater camera"
    ],
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Water bottle",
      "Your own board (recommended)"
    ],
    knowBeforeYouGo: [
      "Intermediate to advanced skills required",
      "Session duration: 3.5 hours",
      "Maximum 2 students per session"
    ],
    skillLevel: SkillLevel.ADVANCED,
    expertise: ["Barrel Riding", "Tube Techniques", "Timing", "Wave Selection"],
    surfSpots: ["Padang Padang", "Bingin", "Uluwatu"],
    extras: {
      videoAnalysis: true,
      feedback: true,
      equipment: true
    }
  }
]

// Mock surf photography activities
export const mockSurfPhotographyActivities: SurfPhotographyActivity[] = [
  {
    id: generateId(),
    businessId: "f6g7h8i9-j0k1-2345-f012-678901234567", // Agung Photography
    name: "Uluwatu Action Photography Session",
    description:
      "Capture your surfing moments at Uluwatu's legendary waves. Professional surf photography with drone and water camera coverage.",
    price: generatePrice() + 30,
    currency: "USD",
    images: ["/images/activities/surf-photography/action-uluwatu-agung.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Uluwatu surf break, cliff top",
    cancellationPolicy: "Free cancellation up to 24 hours before session",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.PAYPAL
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.GERMAN],
    includedMaterials: [
      "Professional photography",
      "Digital delivery",
      "Basic editing"
    ],
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Water bottle",
      "Your surfboard"
    ],
    knowBeforeYouGo: [
      "Session duration: 2 hours",
      "Minimum 20 photos guaranteed",
      "Digital delivery within 48 hours"
    ],
    surfSpots: ["Uluwatu", "Padang Padang"],
    equipment: {
      drones: true,
      waterCamera: true,
      landCamera: true,
      lenses: ["70-200mm", "24-70mm", "16-35mm", "Underwater housing"]
    },
    services: {
      onLocation: true,
      editing: true
    },
    portfolio: [
      "/images/activities/surf-photography/uluwatu-action-1.jpg",
      "/images/activities/surf-photography/uluwatu-action-2.jpg",
      "/images/activities/surf-photography/uluwatu-action-3.jpg"
    ],
    delivery: {
      digital: true,
      sdCard: true,
      other: ["USB drive", "Online gallery"]
    }
  },
  {
    id: generateId(),
    businessId: "l2m3n4o5-p6q7-8901-5678-234567890123", // Sari Photography
    name: "Canggu Lifestyle & Action Photography",
    description:
      "Document your Canggu surf experience with a mix of action shots and lifestyle photography. Perfect for social media and memories.",
    price: generatePrice(),
    currency: "USD",
    images: ["/images/activities/surf-photography/lifestyle-canggu-sari.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Echo Beach, in front of the beach club",
    cancellationPolicy: "Free cancellation up to 12 hours before session",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.BANK_TRANSFER
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.DUTCH],
    includedMaterials: [
      "Professional photography",
      "Digital delivery",
      "Social media ready edits"
    ],
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Water bottle",
      "Your surfboard",
      "Casual clothes for lifestyle shots"
    ],
    knowBeforeYouGo: [
      "Session duration: 1.5 hours",
      "Minimum 15 photos guaranteed",
      "Digital delivery within 24 hours"
    ],
    surfSpots: ["Echo Beach", "Batu Bolong", "Canggu Beach"],
    equipment: {
      drones: false,
      waterCamera: true,
      landCamera: true,
      lenses: ["50mm", "85mm", "24-70mm", "Underwater housing"]
    },
    services: {
      onLocation: true,
      editing: true
    },
    portfolio: [
      "/images/activities/surf-photography/canggu-lifestyle-1.jpg",
      "/images/activities/surf-photography/canggu-lifestyle-2.jpg",
      "/images/activities/surf-photography/canggu-lifestyle-3.jpg"
    ],
    delivery: {
      digital: true,
      sdCard: false,
      other: ["Online gallery", "Social media package"]
    }
  },
  {
    id: generateId(),
    businessId: "t0u1v2w3-x4y5-6789-3456-012345678901", // Komang Photography
    name: "Multi-Location Surf Photography Tour",
    description:
      "Explore multiple surf spots with professional photography coverage. Perfect for capturing your entire Bali surf journey.",
    price: generatePrice() + 80,
    currency: "USD",
    images: [
      "/images/activities/surf-photography/multi-location-tour-komang.jpg"
    ],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Canggu, flexible meeting point",
    cancellationPolicy: "Free cancellation up to 48 hours before session",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.PAYPAL
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.FRENCH],
    includedMaterials: [
      "Professional photography",
      "Transportation",
      "Digital delivery",
      "Premium editing"
    ],
    whatToBring: [
      "Swimsuit",
      "Towel",
      "Sunscreen",
      "Water bottle",
      "Your surfboard",
      "Change of clothes"
    ],
    knowBeforeYouGo: [
      "Tour duration: 6 hours",
      "Minimum 50 photos guaranteed",
      "Digital delivery within 72 hours"
    ],
    surfSpots: ["Canggu", "Uluwatu", "Padang Padang", "Bingin", "Dreamland"],
    equipment: {
      drones: true,
      waterCamera: true,
      landCamera: true,
      lenses: ["70-200mm", "24-70mm", "16-35mm", "50mm", "Underwater housing"]
    },
    services: {
      onLocation: true,
      editing: true
    },
    portfolio: [
      "/images/activities/surf-photography/multi-location-1.jpg",
      "/images/activities/surf-photography/multi-location-2.jpg",
      "/images/activities/surf-photography/multi-location-3.jpg"
    ],
    delivery: {
      digital: true,
      sdCard: true,
      other: ["USB drive", "Online gallery", "Printed photos (additional cost)"]
    }
  }
]

// Mock surf rental activities
export const mockSurfRentalActivities: SurfRentalActivity[] = [
  {
    id: generateId(),
    businessId: "b2c3d4e5-f6g7-8901-bcde-f23456789012", // Canggu Surf Shop
    name: "Premium Surfboard Rental - Canggu",
    description:
      "Rent high-quality surfboards for your Canggu surf adventure. All boards are professionally maintained and ready to ride.",
    price: generatePrice(),
    currency: "USD",
    images: ["/images/activities/surf-rental/premium-canggu.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Canggu Surf Shop, Jl. Pantai Batu Bolong No. 8",
    cancellationPolicy: "Free cancellation up to 2 hours before rental",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.PAYPAL
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.DUTCH],
    includedMaterials: [
      "Surfboard",
      "Leash",
      "Wax",
      "Board bag (daily rentals)"
    ],
    whatToBring: ["Valid ID", "Credit card for security deposit", "Towel"],
    knowBeforeYouGo: [
      "Security deposit required",
      "Boards must be returned in same condition",
      "Rental includes basic maintenance"
    ],
    boards: mockSurfBoards.slice(0, 3), // First 3 boards
    rentalPeriods: {
      hourly: true,
      daily: true,
      weekly: true
    },
    included: ["Leash", "Wax", "Basic maintenance", "Storage"],
    requirements: ["Valid ID", "Security deposit", "Basic surfing experience"]
  },
  {
    id: generateId(),
    businessId: "h8i9j0k1-l2m3-4567-1234-890123456789", // Uluwatu Surf Shop
    name: "Performance Surfboard Rental - Uluwatu",
    description:
      "Rent professional-grade surfboards for tackling Uluwatu's challenging waves. All boards are competition-ready and maintained to the highest standards.",
    price: generatePrice() + 20,
    currency: "USD",
    images: ["/images/activities/surf-rental/performance-uluwatu.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Uluwatu Surf Shop, Jl. Labuan Sait",
    cancellationPolicy: "Free cancellation up to 4 hours before rental",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.BANK_TRANSFER
    ],
    languages: [Language.ENGLISH, Language.INDONESIAN, Language.GERMAN],
    includedMaterials: [
      "Performance surfboard",
      "Leash",
      "Wax",
      "Board bag",
      "Reef booties"
    ],
    whatToBring: [
      "Valid ID",
      "Credit card for security deposit",
      "Towel",
      "Reef booties (if not included)"
    ],
    knowBeforeYouGo: [
      "Advanced surfing experience required",
      "Security deposit required",
      "Boards must be returned in same condition"
    ],
    boards: mockSurfBoards.slice(1, 4), // Middle 3 boards
    rentalPeriods: {
      hourly: true,
      daily: true,
      weekly: true
    },
    included: [
      "Leash",
      "Wax",
      "Professional maintenance",
      "Storage",
      "Reef booties"
    ],
    requirements: [
      "Valid ID",
      "Security deposit",
      "Advanced surfing experience",
      "Reef booties recommended"
    ]
  },
  {
    id: generateId(),
    businessId: "n4o5p6q7-r8s9-0123-7890-456789012345", // Seminyak Surf Shop
    name: "Beginner-Friendly Surfboard Rental - Seminyak",
    description:
      "Perfect for beginners and intermediate surfers. Soft boards and stable shapes for learning and progression.",
    price: generatePrice() - 10,
    currency: "USD",
    images: ["/images/activities/surf-rental/beginner-seminyak.jpg"],
    isActive: true,
    isApproved: true,
    rating: generateRating(),
    location: generateBaliCoords(),
    meetingPoint: "Seminyak Surf Shop, Jl. Kayu Aya",
    cancellationPolicy: "Free cancellation up to 1 hour before rental",
    paymentMethods: [
      PaymentMethod.CASH,
      PaymentMethod.CARD,
      PaymentMethod.PAYPAL
    ],
    languages: [
      Language.ENGLISH,
      Language.INDONESIAN,
      Language.DUTCH,
      Language.FRENCH
    ],
    includedMaterials: [
      "Soft surfboard",
      "Leash",
      "Wax",
      "Board bag",
      "Rash guard"
    ],
    whatToBring: [
      "Valid ID",
      "Credit card for security deposit",
      "Towel",
      "Swimsuit"
    ],
    knowBeforeYouGo: [
      "Perfect for beginners",
      "Security deposit required",
      "Boards must be returned in same condition"
    ],
    boards: mockSurfBoards.slice(2, 5), // Last 3 boards
    rentalPeriods: {
      hourly: true,
      daily: true,
      weekly: true
    },
    included: ["Leash", "Wax", "Basic maintenance", "Storage", "Rash guard"],
    requirements: ["Valid ID", "Security deposit", "Basic swimming skills"]
  }
]

// Combined mock activities array
export const mockActivities: Activity[] = [
  ...mockSurfLessonActivities,
  ...mockSurfCoachingActivities,
  ...mockSurfPhotographyActivities,
  ...mockSurfRentalActivities
]
