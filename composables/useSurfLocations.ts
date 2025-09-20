import { SurfLocationType, type SurfLocation } from "~/types/types"
import { mockLocations } from "~/mocks/mock-locations"

export const useSurfLocations = () => {
  // State
  const locations = useState<SurfLocation[]>(
    "surf-locations",
    () => mockLocations
  )
  const selectedLocation = useState<SurfLocation | null>(
    "selected-surf-location",
    () => null
  )
  const filteredType = useState<SurfLocationType | null>(
    "filtered-surf-location-type",
    () => null
  )
  const searchQuery = useState<string>("surf-location-search", () => "")
  const isLoading = useState<boolean>("surf-locations-loading", () => false)

  // Getters (computed properties)
  const allLocations = computed(() => locations.value)

  const filteredLocations = computed(() => {
    let filtered = locations.value

    // Filter by type
    if (filteredType.value) {
      filtered = filtered.filter(
        (location) => location.type === filteredType.value
      )
    }

    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(
        (location) =>
          location.name.toLowerCase().includes(query) ||
          location.address.toLowerCase().includes(query)
      )
    }

    return filtered
  })

  const locationsByType = computed(() => {
    const grouped: Record<SurfLocationType, SurfLocation[]> = {
      [SurfLocationType.SURF_SPOT]: [],
      [SurfLocationType.SURF_SHOP]: [],
      [SurfLocationType.SURF_GUIDE]: [],
      [SurfLocationType.SURF_COACHING]: [],
      [SurfLocationType.PHOTOGRAPHY]: []
    }

    locations.value.forEach((location) => {
      grouped[location.type].push(location)
    })

    return grouped
  })

  // Actions
  const setLocations = (newLocations: SurfLocation[]) => {
    locations.value = newLocations
  }

  const addLocation = (location: SurfLocation) => {
    locations.value.push(location)
  }

  const updateLocation = (id: string, updates: Partial<SurfLocation>) => {
    const index = locations.value.findIndex((location) => location.id === id)
    if (index !== -1) {
      locations.value[index] = { ...locations.value[index], ...updates }
    }
  }

  const removeLocation = (id: string) => {
    const index = locations.value.findIndex((location) => location.id === id)
    if (index !== -1) {
      locations.value.splice(index, 1)
    }
  }

  const selectLocation = (location: SurfLocation | null) => {
    selectedLocation.value = location
  }

  const setFilterType = (type: SurfLocationType | null) => {
    filteredType.value = type
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const clearFilters = () => {
    filteredType.value = null
    searchQuery.value = ""
  }

  const loadLocations = async () => {
    isLoading.value = true
    try {
      // Here you would typically fetch from an API
      // For now, we'll use the mock data
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call
      setLocations(mockLocations)
    } catch (error) {
      console.error("Failed to load locations:", error)
    } finally {
      isLoading.value = false
    }
  }

  const getLocationById = (id: string) => {
    return locations.value.find((location) => location.id === id)
  }

  const getLocationsByType = (type: SurfLocationType) => {
    return locations.value.filter((location) => location.type === type)
  }

  return {
    // State
    selectedLocation: readonly(selectedLocation),
    filteredType: readonly(filteredType),
    searchQuery: readonly(searchQuery),
    isLoading: readonly(isLoading),

    // Getters
    allLocations,
    filteredLocations,
    locationsByType,

    // Actions
    setLocations,
    addLocation,
    updateLocation,
    removeLocation,
    selectLocation,
    setFilterType,
    setSearchQuery,
    clearFilters,
    loadLocations,
    getLocationById,
    getLocationsByType
  }
}
