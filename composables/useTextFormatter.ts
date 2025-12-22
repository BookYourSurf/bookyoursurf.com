/**
 * Utility function to format text with underscores around words
 * Converts _word_ to <span class="highlighted-text">word</span>
 */
export const useTextFormatter = () => {
  const formatTextWithUnderscores = (text: string): string => {
    if (!text) return ""

    const underscorePattern = /_([^_]+)_/g

    return text.replace(
      underscorePattern,
      '<span class="highlighted-text">$1</span>'
    )
  }

  const formatPrice = (price: number): string => {
    return `$ ${price}`
  }

  const useTypingAnimation = (
    text: Ref<string> | string,
    options: {
      speed?: number // milliseconds per character
      delay?: number // delay before starting (ms)
      showCursor?: boolean
      cursorChar?: string
    } = {}
  ) => {
    const {
      speed = 50,
      delay = 0,
      showCursor = true,
      cursorChar = "|"
    } = options

    const displayedText = ref("")
    const isTyping = ref(false)
    const isComplete = ref(false)

    const startTyping = () => {
      const textValue = typeof text === "string" ? text : text.value
      displayedText.value = ""
      isTyping.value = true
      isComplete.value = false

      let currentIndex = 0

      const typeNextChar = () => {
        if (currentIndex < textValue.length) {
          displayedText.value = textValue.slice(0, currentIndex + 1)
          currentIndex++
          setTimeout(typeNextChar, speed)
        } else {
          isTyping.value = false
          isComplete.value = true
        }
      }

      setTimeout(typeNextChar, delay)
    }

    onMounted(() => {
      startTyping()
    })

    const cursor = computed(() => {
      return showCursor && !isComplete.value ? cursorChar : ""
    })

    return {
      displayedText,
      isTyping,
      isComplete,
      cursor,
      startTyping
    }
  }

  const useWordRotation = (
    baseText: string,
    words: string[],
    options: {
      typingSpeed?: number // milliseconds per character when typing
      pauseDuration?: number // milliseconds to pause before deleting
      deleteSpeed?: number // milliseconds per character when deleting
      initialDelay?: number // delay before starting (ms)
      deleteDelay?: number // delay after deletion before next word (ms)
      formatWord?: boolean // whether to wrap the rotating word with underscores
    } = {}
  ) => {
    const {
      typingSpeed = 50,
      pauseDuration = 2000,
      deleteSpeed = 30,
      initialDelay = 500,
      deleteDelay = 100, // Reduced default delay after deletion
      formatWord = true
    } = options

    const currentWord = ref("")
    const currentWordIndex = ref(0)
    const isDeleting = ref(false)

    const typeWord = (word: string, index: number = 0) => {
      // Skip empty words
      if (!word) {
        currentWordIndex.value = (currentWordIndex.value + 1) % words.length
        setTimeout(() => {
          typeWord(words[currentWordIndex.value])
        }, deleteDelay)
        return
      }

      if (index < word.length) {
        currentWord.value = word.slice(0, index + 1)
        setTimeout(() => typeWord(word, index + 1), typingSpeed)
      } else {
        // Word is complete, pause then delete
        setTimeout(() => {
          isDeleting.value = true
          deleteWord(word.length)
        }, pauseDuration)
      }
    }

    const deleteWord = (index: number) => {
      if (index > 0) {
        currentWord.value = currentWord.value.slice(0, index - 1)
        setTimeout(() => deleteWord(index - 1), deleteSpeed)
      } else {
        // Word is deleted, move to next word
        isDeleting.value = false
        currentWordIndex.value = (currentWordIndex.value + 1) % words.length
        setTimeout(() => {
          typeWord(words[currentWordIndex.value])
        }, deleteDelay) // Use configurable delay
      }
    }

    onMounted(() => {
      setTimeout(() => {
        typeWord(words[0])
      }, initialDelay)
    })

    const fullText = computed(() => {
      const word = currentWord.value
      // Only wrap with underscores if word is not empty
      const formattedWord = formatWord && word ? `_${word}_` : word
      return baseText + formattedWord
    })

    return {
      fullText,
      currentWord,
      currentWordIndex
    }
  }

  return {
    formatTextWithUnderscores,
    formatPrice,
    useTypingAnimation,
    useWordRotation
  }
}
