import { SurfLocationType } from "~/types/types"

export const useLocationTypeFormatter = () => {
  const getLocationTypeLabel = (type: SurfLocationType): string => {
    const typeLabels: Record<SurfLocationType, string> = {
      [SurfLocationType.SURF_SPOT]: "Surf Spot",
      [SurfLocationType.SURF_SHOP]: "Surf Lessons",
      [SurfLocationType.SURF_GUIDE]: "Surf Guide",
      [SurfLocationType.SURF_COACHING]: "Surf Coaching",
      [SurfLocationType.PHOTOGRAPHY]: "Photography"
    }
    return typeLabels[type] || type
  }

  const getLocationLink = (location: {
    name: string
    type: SurfLocationType
    id: string
  }): string => {
    const pathMap: Record<SurfLocationType, string> = {
      [SurfLocationType.SURF_SPOT]: "/spots",
      [SurfLocationType.SURF_SHOP]: "/shops",
      [SurfLocationType.SURF_GUIDE]: "/guides",
      [SurfLocationType.SURF_COACHING]: "/coaching",
      [SurfLocationType.PHOTOGRAPHY]: "/photography"
    }

    const basePath = pathMap[location.type] || "/spots"
    return `${basePath}/${location.id}`
  }

  return {
    getLocationTypeLabel,
    getLocationLink
  }
}
