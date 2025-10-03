import { SurfBusinessType, type SurfBusiness } from "~/types/types"
import { mockBusinesss } from "~/mocks/mock-businesses"

export const useSurfBusinesses = () => {
  // State
  const businesses = useState<SurfBusiness[]>(
    "surf-business",
    () => mockBusinesss
  )
  const selectedBusiness = useState<SurfBusiness | null>(
    "selected-surf-business",
    () => null
  )
  const filteredType = useState<SurfBusinessType | null>(
    "filtered-surf-business-type",
    () => null
  )
  const searchQuery = useState<string>("surf-business-search", () => "")
  const isLoading = useState<boolean>("surf-businesss-loading", () => false)

  // Getters (computed properties)
  const allBusinesss = computed(() => businesses.value)

  const filteredBusinesss = computed(() => {
    let filtered = businesses.value

    // Filter by type
    if (filteredType.value) {
      filtered = filtered.filter(
        (business) => business.type === filteredType.value
      )
    }

    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(
        (business) =>
          business.name.toLowerCase().includes(query) ||
          business.address.toLowerCase().includes(query)
      )
    }

    return filtered
  })

  const businessesByType = computed(() => {
    const grouped: Record<SurfBusinessType, SurfBusiness[]> = {
      [SurfBusinessType.SURF_SPOT]: [],
      [SurfBusinessType.SURF_SHOP]: [],
      [SurfBusinessType.SURF_GUIDE]: [],
      [SurfBusinessType.SURF_COACHING]: [],
      [SurfBusinessType.PHOTOGRAPHY]: []
    }

    businesses.value.forEach((business) => {
      grouped[business.type].push(business)
    })

    return grouped
  })

  const filteredBusinessIds = computed(
    () => new Set(filteredBusinesss.value.map((business) => business.id))
  )

  // Actions
  const setBusinesss = (newBusinesss: SurfBusiness[]) => {
    businesses.value = newBusinesss
  }

  const addBusiness = (business: SurfBusiness) => {
    businesses.value.push(business)
  }

  const updateBusiness = (id: string, updates: Partial<SurfBusiness>) => {
    const index = businesses.value.findIndex((business) => business.id === id)
    if (index !== -1) {
      businesses.value[index] = { ...businesses.value[index], ...updates }
    }
  }

  const removeBusiness = (id: string) => {
    const index = businesses.value.findIndex((business) => business.id === id)
    if (index !== -1) {
      businesses.value.splice(index, 1)
    }
  }

  const selectBusiness = (business: SurfBusiness | null) => {
    selectedBusiness.value = business
  }

  const setFilterType = (type: SurfBusinessType | null) => {
    filteredType.value = type
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const clearFilters = () => {
    filteredType.value = null
    searchQuery.value = ""
  }

  const loadBusinesss = async () => {
    isLoading.value = true
    try {
      // Here you would typically fetch from an API
      // For now, we'll use the mock data
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call
      setBusinesss(mockBusinesss)
    } catch (error) {
      console.error("Failed to load businesses:", error)
    } finally {
      isLoading.value = false
    }
  }

  const getBusinessById = (id: string) => {
    return businesses.value.find((business) => business.id === id)
  }

  const getBusinesssByType = (type: SurfBusinessType) => {
    return businesses.value.filter((business) => business.type === type)
  }

  return {
    // State
    selectedBusiness: readonly(selectedBusiness),
    filteredType: readonly(filteredType),
    searchQuery: readonly(searchQuery),
    isLoading: readonly(isLoading),

    // Getters
    allBusinesss,
    filteredBusinesss,
    filteredBusinessIds,
    businessesByType,

    // Actions
    setBusinesss,
    addBusiness,
    updateBusiness,
    removeBusiness,
    selectBusiness,
    setFilterType,
    setSearchQuery,
    clearFilters,
    loadBusinesss,
    getBusinessById,
    getBusinesssByType
  }
}
