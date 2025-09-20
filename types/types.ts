export interface SurfLocation {
  id: string
  name: string
  address: string
  type: SurfLocationType
  latLng: GeoPoint
  aggregatedRating: SurfLocationRating
  image: string
}

export interface SurfLocationRating {
  rating: number
  reviewCount: number
}

export interface GeoPoint {
  lat: number
  lng: number
}

export enum SurfLocationType {
  SURF_SPOT = "Surf Spot",
  SURF_SHOP = "Surf Shop",
  SURF_GUIDE = "Surf Guide",
  SURF_COACHING = "Surf Coaching",
  PHOTOGRAPHY = "Photography"
}
