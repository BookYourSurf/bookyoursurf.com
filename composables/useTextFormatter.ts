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

  return {
    formatTextWithUnderscores
  }
}
