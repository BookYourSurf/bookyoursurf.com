import type { Activity } from "~/types/activity"
import { ActivityType } from "~/types/activity"
import { mockActivities } from "~/mocks/mock-activities"

export const useActivities = () => {
  // State
  const activities = useState<Activity[]>("activities", () => mockActivities)
  const selectedActivity = useState<Activity | null>(
    "selected-activity",
    () => null
  )
  const filteredBusinessId = useState<string | null>(
    "filtered-activity-business",
    () => null
  )
  const filteredType = useState<ActivityType | null>(
    "filtered-activity-type",
    () => null
  )
  const searchQuery = useState<string>("activity-search", () => "")
  const isLoading = useState<boolean>("activities-loading", () => false)

  // Getters (computed properties)
  const allActivities = computed(() => activities.value)

  const filteredActivities = computed(() => {
    let filtered = activities.value

    // Filter by business
    if (filteredBusinessId.value) {
      filtered = filtered.filter(
        (activity) => activity.businessId === filteredBusinessId.value
      )
    }

    // Filter by activity type
    if (filteredType.value) {
      filtered = filtered.filter((activity) => {
        switch (filteredType.value) {
          case ActivityType.LESSONS:
            return "instructor" in activity && "groupSize" in activity
          case ActivityType.COACHING:
            return "expertise" in activity && "surfSpots" in activity
          case ActivityType.PHOTOGRAPHY:
            return "equipment" in activity && "portfolio" in activity
          case ActivityType.RENTAL:
            return "boards" in activity && "rentalPeriods" in activity
          default:
            return true
        }
      })
    }

    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(
        (activity) =>
          activity.name.toLowerCase().includes(query) ||
          activity.description.toLowerCase().includes(query)
      )
    }

    return filtered
  })

  const activitiesByBusiness = computed(() => {
    const grouped: Record<string, Activity[]> = {}

    activities.value.forEach((activity) => {
      if (!grouped[activity.businessId]) {
        grouped[activity.businessId] = []
      }
      grouped[activity.businessId].push(activity)
    })

    return grouped
  })

  const filteredActivityIds = computed(
    () => new Set(filteredActivities.value.map((activity) => activity.id))
  )

  // Actions
  const setActivities = (newActivities: Activity[]) => {
    activities.value = newActivities
  }

  const addActivity = (activity: Activity) => {
    activities.value.push(activity)
  }

  const updateActivity = (id: string, updates: Partial<Activity>) => {
    const index = activities.value.findIndex((activity) => activity.id === id)
    if (index !== -1) {
      activities.value[index] = { ...activities.value[index], ...updates }
    }
  }

  const removeActivity = (id: string) => {
    const index = activities.value.findIndex((activity) => activity.id === id)
    if (index !== -1) {
      activities.value.splice(index, 1)
    }
  }

  const selectActivity = (activity: Activity | null) => {
    selectedActivity.value = activity
  }

  const setFilterBusiness = (businessId: string | null) => {
    filteredBusinessId.value = businessId
  }

  const setFilterType = (type: ActivityType | null) => {
    filteredType.value = type
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  const clearFilters = () => {
    filteredBusinessId.value = null
    filteredType.value = null
    searchQuery.value = ""
  }

  const loadActivities = async () => {
    isLoading.value = true
    try {
      // Here you would typically fetch from an API
      // For now, we'll use the mock data
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call
      setActivities(mockActivities)
    } catch (error) {
      console.error("Failed to load activities:", error)
    } finally {
      isLoading.value = false
    }
  }

  const getActivityById = (id: string) => {
    return activities.value.find((activity) => activity.id === id)
  }

  const getActivitiesByBusiness = (businessId: string) => {
    return activities.value.filter(
      (activity) => activity.businessId === businessId
    )
  }

  return {
    // State
    selectedActivity: readonly(selectedActivity),
    filteredBusinessId: readonly(filteredBusinessId),
    filteredType: readonly(filteredType),
    searchQuery: readonly(searchQuery),
    isLoading: readonly(isLoading),

    // Getters
    allActivities,
    filteredActivities,
    activitiesByBusiness,
    filteredActivityIds,

    // Actions
    setActivities,
    addActivity,
    updateActivity,
    removeActivity,
    selectActivity,
    setFilterBusiness,
    setFilterType,
    setSearchQuery,
    clearFilters,
    loadActivities,
    getActivityById,
    getActivitiesByBusiness
  }
}
