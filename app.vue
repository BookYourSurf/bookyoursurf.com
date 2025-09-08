<template>
  <div class="layout">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: "Bookyoursurf",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charset: "utf-8" },
    {
      name: "description",
      content:
        "Discover trusted coaches, breathtaking surf photography, unforgettable lessons, local guides, and the gear that keeps you moving—all in one seamless app for every surfer."
    },
    { name: "format-detection", content: "telephone=no" },
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/activation-social-share.png" },
    { property: "og:url", content: "https://wastedspaces.org" },
    { property: "og:title", content: "Bookyoursurf" },
    {
      property: "og:description",
      content:
        "Discover trusted coaches, breathtaking surf photography, unforgettable lessons, local guides, and the gear that keeps you moving—all in one seamless app for every surfer."
    },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "/images/activation-social-share.png" },
    { name: "twitter:url", content: "https://wastedspaces.org" },
    { name: "twitter:title", content: "Bookyoursurf" },
    {
      name: "twitter:description",
      content:
        "Discover trusted coaches, breathtaking surf photography, unforgettable lessons, local guides, and the gear that keeps you moving—all in one seamless app for every surfer."
    }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "canonical", href: "https://wastedspaces.org" }
  ]
})
</script>

<style lang="scss">
html {
  font-size: 16px;
  line-height: 24px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  @include for-tablet-landscape-down {
    font-size: 16px;
  }
}

body {
  padding-top: $navigation-height;
}
</style>
