import type { SurfLocation } from "~/types/types"
import { SurfLocationType } from "~/types/types"

export const mockLocations: SurfLocation[] = [
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    name: "Echo Beach",
    address: "Echo Beach, Canggu, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.65,
      lng: 115.1333
    },
    aggregatedRating: {
      rating: 4.2,
      reviewCount: 127
    },
    image: "/images/surf-spots/echo-beach.jpg"
  },
  {
    id: "b2c3d4e5-f6g7-8901-bcde-f23456789012",
    name: "Canggu Surf Shop",
    address: "Jl. Pantai Batu Bolong No. 8, Canggu, Bali",
    type: SurfLocationType.SURF_SHOP,
    latLng: {
      lat: -8.649,
      lng: 115.131
    },
    aggregatedRating: {
      rating: 4.4,
      reviewCount: 89
    },
    image: "/images/surf-shops/canggu-surf-shop.jpg"
  },
  {
    id: "c3d4e5f6-g7h8-9012-cdef-345678901234",
    name: "Bali Surf Guide - Made",
    address: "Canggu, Bali",
    type: SurfLocationType.SURF_GUIDE,
    latLng: {
      lat: -8.65,
      lng: 115.13
    },
    aggregatedRating: {
      rating: 4.9,
      reviewCount: 156
    },
    image: "/images/surf-guides/made.jpg"
  },
  {
    id: "d4e5f6g7-h8i9-0123-def0-456789012345",
    name: "Batu Bolong Beach",
    address: "Batu Bolong Beach, Canggu, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.6489,
      lng: 115.1311
    },
    aggregatedRating: {
      rating: 4.5,
      reviewCount: 203
    },
    image: "/images/surf-spots/batu-bolong.jpg"
  },
  {
    id: "e5f6g7h8-i9j0-1234-ef01-567890123456",
    name: "Bali Surf Coaching - Advanced",
    address: "Canggu, Bali",
    type: SurfLocationType.SURF_COACHING,
    latLng: {
      lat: -8.648,
      lng: 115.132
    },
    aggregatedRating: {
      rating: 4.8,
      reviewCount: 67
    },
    image: "/images/surf-coaching/advanced-coaching.jpg"
  },
  {
    id: "f6g7h8i9-j0k1-2345-f012-678901234567",
    name: "Bali Surf Photography - Agung",
    address: "Uluwatu, Bali",
    type: SurfLocationType.PHOTOGRAPHY,
    latLng: {
      lat: -8.828,
      lng: 115.086
    },
    aggregatedRating: {
      rating: 4.7,
      reviewCount: 134
    },
    image: "/images/photography/agung.jpg"
  },
  {
    id: "g7h8i9j0-k1l2-3456-0123-789012345678",
    name: "Uluwatu Beach",
    address: "Uluwatu Beach, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.8294,
      lng: 115.085
    },
    aggregatedRating: {
      rating: 4.8,
      reviewCount: 312
    },
    image: "/images/surf-spots/uluwatu.jpg"
  },
  {
    id: "h8i9j0k1-l2m3-4567-1234-890123456789",
    name: "Uluwatu Surf Shop",
    address: "Jl. Labuan Sait, Uluwatu, Bali",
    type: SurfLocationType.SURF_SHOP,
    latLng: {
      lat: -8.83,
      lng: 115.09
    },
    aggregatedRating: {
      rating: 4.7,
      reviewCount: 78
    },
    image: "/images/surf-shops/uluwatu-surf-shop.jpg"
  },
  {
    id: "i9j0k1l2-m3n4-5678-2345-901234567890",
    name: "Uluwatu Surf Guide - Ketut",
    address: "Uluwatu, Bali",
    type: SurfLocationType.SURF_GUIDE,
    latLng: {
      lat: -8.83,
      lng: 115.08
    },
    aggregatedRating: {
      rating: 4.6,
      reviewCount: 92
    },
    image: "/images/surf-guides/ketut.jpg"
  },
  {
    id: "j0k1l2m3-n4o5-6789-3456-012345678901",
    name: "Padang Padang Beach",
    address: "Padang Padang Beach, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.825,
      lng: 115.08
    },
    aggregatedRating: {
      rating: 4.6,
      reviewCount: 189
    },
    image: "/images/surf-spots/padang-padang.jpg"
  },
  {
    id: "k1l2m3n4-o5p6-7890-4567-123456789012",
    name: "Beginner Surf Lessons",
    address: "Echo Beach, Canggu, Bali",
    type: SurfLocationType.SURF_COACHING,
    latLng: {
      lat: -8.651,
      lng: 115.134
    },
    aggregatedRating: {
      rating: 4.5,
      reviewCount: 145
    },
    image: "/images/surf-coaching/beginner-lessons.jpg"
  },
  {
    id: "l2m3n4o5-p6q7-8901-5678-234567890123",
    name: "Canggu Surf Photography - Sari",
    address: "Canggu, Bali",
    type: SurfLocationType.PHOTOGRAPHY,
    latLng: {
      lat: -8.649,
      lng: 115.13
    },
    aggregatedRating: {
      rating: 4.3,
      reviewCount: 56
    },
    image: "/images/photography/sari.jpg"
  },
  {
    id: "m3n4o5p6-q7r8-9012-6789-345678901234",
    name: "Bingin Beach",
    address: "Bingin Beach, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.82,
      lng: 115.075
    },
    aggregatedRating: {
      rating: 4.3,
      reviewCount: 167
    },
    image: "/images/surf-spots/bingin.jpg"
  },
  {
    id: "n4o5p6q7-r8s9-0123-7890-456789012345",
    name: "Seminyak Surf Shop",
    address: "Jl. Kayu Aya, Seminyak, Bali",
    type: SurfLocationType.SURF_SHOP,
    latLng: {
      lat: -8.68,
      lng: 115.17
    },
    aggregatedRating: {
      rating: 4.2,
      reviewCount: 103
    },
    image: "/images/surf-shops/seminyak-surf-shop.jpg"
  },
  {
    id: "o5p6q7r8-s9t0-1234-8901-567890123456",
    name: "Dreamland Beach",
    address: "Dreamland Beach, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.815,
      lng: 115.07
    },
    aggregatedRating: {
      rating: 4.1,
      reviewCount: 98
    },
    image: "/images/surf-spots/dreamland.jpg"
  },
  {
    id: "p6q7r8s9-t0u1-2345-9012-678901234567",
    name: "Sanur Surf Guide - Wayan",
    address: "Sanur, Bali",
    type: SurfLocationType.SURF_GUIDE,
    latLng: {
      lat: -8.69,
      lng: 115.26
    },
    aggregatedRating: {
      rating: 4.4,
      reviewCount: 74
    },
    image: "/images/surf-guides/wayan.jpg"
  },
  {
    id: "q7r8s9t0-u1v2-3456-0123-789012345678",
    name: "Kuta Beach Surf Spot",
    address: "Kuta Beach, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.72,
      lng: 115.17
    },
    aggregatedRating: {
      rating: 3.8,
      reviewCount: 234
    },
    image: "/images/surf-spots/kuta.jpg"
  },
  {
    id: "r8s9t0u1-v2w3-4567-1234-890123456789",
    name: "Intermediate Surf Coaching",
    address: "Uluwatu, Bali",
    type: SurfLocationType.SURF_COACHING,
    latLng: {
      lat: -8.831,
      lng: 115.084
    },
    aggregatedRating: {
      rating: 4.6,
      reviewCount: 81
    },
    image: "/images/surf-coaching/intermediate-coaching.jpg"
  },
  {
    id: "s9t0u1v2-w3x4-5678-2345-901234567890",
    name: "Legian Beach",
    address: "Legian Beach, Bali",
    type: SurfLocationType.SURF_SPOT,
    latLng: {
      lat: -8.71,
      lng: 115.16
    },
    aggregatedRating: {
      rating: 4.0,
      reviewCount: 112
    },
    image: "/images/surf-spots/legian.jpg"
  },
  {
    id: "t0u1v2w3-x4y5-6789-3456-012345678901",
    name: "Bali Surf Photography - Komang",
    address: "Canggu, Bali",
    type: SurfLocationType.PHOTOGRAPHY,
    latLng: {
      lat: -8.647,
      lng: 115.129
    },
    aggregatedRating: {
      rating: 4.5,
      reviewCount: 63
    },
    image: "/images/photography/komang.jpg"
  }
]
