<template>
    <div ref="searchRef" class="search">
      <Input
        :model-value="query"
        class="search__input"
        name="search"
        :errors="error ? [error] : []"
        placeholder="Search for businesses, places, or breaks..."
        @update:model-value="query = String($event)"
        @focus="showDropdown = true"
      />
  
      <div v-if="showDropdown && results.length > 0" class="search__dropdown flex gap column item">
        <NuxtLink
          v-for="suggestion in results"
          :key="suggestion.id"
          :to="`/${suggestion.entityType}s/${suggestion.id}`"
          class="search__option flex gap"
          @click="handleSelect(suggestion)"
        >
        <Image
            class="search__option-image ratio--15to16"
            :image="suggestion.image"
        />
          <div class="search__option-content flex column">
            <span class="search__option-title h4 weight-400 ">{{ suggestion.title }}</span>
            <span class="search__option-description">{{ suggestion.description }}</span>
          </div>
        </NuxtLink>
        <NuxtLink
          v-if="totalResults > 6"
          :to="`/search?q=${encodeURIComponent(query)}`"
          class="search__footer"
          @click="showDropdown = false"
        >
          See all results for "{{ query }}"
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { SearchSuggestion } from "~/types/search"
  import { mockSearchSuggestions } from "~/mocks/mock-search-suggestions"
  
  const router = useRouter()
  const query = ref("")
  const results = ref<SearchSuggestion[]>([])
  const totalResults = ref(0)
  const error = ref<string | null>(null)
  const showDropdown = ref(false)
  const searchRef = ref<HTMLElement>()
  
  const performSearch = async (searchQuery: string) => {
  if (!searchQuery.trim()) {
    results.value = []
    totalResults.value = 0
    return
  }

  try {
    const filtered = mockSearchSuggestions.filter((suggestion : SearchSuggestion) =>
      suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suggestion.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    totalResults.value = filtered.length
    results.value = filtered.slice(0, 6)
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Search failed"
    results.value = []
    totalResults.value = 0
  }
}
  
  watch(query, (newQuery) => {
    performSearch(newQuery)
  })
  
  const handleSelect = (suggestion: SearchSuggestion) => {
    query.value = suggestion.title
    showDropdown.value = false
    router.push(`/${suggestion.entityType}s/${suggestion.id}`)
  }
  
  const handleClickOutside = (event: Event) => {
    if (searchRef.value && !searchRef.value.contains(event.target as Node)) {
      showDropdown.value = false
    }
  }
  
  onMounted(() => {
    document.addEventListener("click", handleClickOutside)
  })
  
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside)
  })
  </script>

<style lang="scss" scoped>
.search__option {
    width: 100%;
}
.search {
    max-width: 400px;
    width: 400px;
}
.search__input {
    :deep(input) {
     border-radius: $border-radius-full;
    }
}
.search__dropdown {
    background-color: $white;
    position: absolute;
}

.search__option-image {
    width: 50px;
}
</style>