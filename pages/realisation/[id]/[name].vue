<template>

</template>
<script setup lang="ts">

import { useRouter } from 'vue-router'
const router = useRouter()
const { id, name } = router.currentRoute.value.params
definePageMeta({
  layout: "crea",
});

// gsap onmonted smooth scroll horizontal
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,  // look for data-speed and data-lag attributes on elements and animate accordingly
  })

</script>
