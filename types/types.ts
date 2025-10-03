export interface SurfBusiness {
  id: string
  name: string
  address: string
  type: SurfBusinessType
  latLng: GeoPoint
  aggregatedRating: Rating
  image: string
  description: string
}

export interface SurfActivity {
  id: string
  name: string
  address: string
  type: SurfBusinessType
  latLng: GeoPoint
  aggregatedRating: Rating
  image: string
  description: string
}

export interface Rating {
  rating: number
  reviewCount: number
}

export interface GeoPoint {
  lat: number
  lng: number
}

export enum SurfBusinessType {
  SURF_SPOT = "Surf Spot",
  SURF_SHOP = "Surf Shop",
  SURF_GUIDE = "Surf Guide",
  SURF_COACHING = "Surf Coaching",
  PHOTOGRAPHY = "Photography"
}
