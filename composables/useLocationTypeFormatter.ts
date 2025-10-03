import { SurfBusinessType } from "~/types/types"

export const useBusinessTypeFormatter = () => {
  const getBusinessTypeLabel = (type: SurfBusinessType): string => {
    const typeLabels: Record<SurfBusinessType, string> = {
      [SurfBusinessType.SURF_SPOT]: "Surf Spot",
      [SurfBusinessType.SURF_SHOP]: "Surf Lessons",
      [SurfBusinessType.SURF_GUIDE]: "Surf Guide",
      [SurfBusinessType.SURF_COACHING]: "Surf Coaching",
      [SurfBusinessType.PHOTOGRAPHY]: "Photography"
    }
    return typeLabels[type] || type
  }

  const getBusinessLink = (business: {
    name: string
    type: SurfBusinessType
    id: string
  }): string => {
    const pathMap: Record<SurfBusinessType, string> = {
      [SurfBusinessType.SURF_SPOT]: "/spots",
      [SurfBusinessType.SURF_SHOP]: "/shops",
      [SurfBusinessType.SURF_GUIDE]: "/guides",
      [SurfBusinessType.SURF_COACHING]: "/coaching",
      [SurfBusinessType.PHOTOGRAPHY]: "/photography"
    }

    const basePath = pathMap[business.type] || "/spots"
    return `${basePath}/${business.id}`
  }

  return {
    getBusinessTypeLabel,
    getBusinessLink
  }
}
