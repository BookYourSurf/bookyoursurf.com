export interface SurfLocationDetails {
  id: string
  address: string
  city: string
  type: SurfLocationType
  latLng: GeoPoint
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
