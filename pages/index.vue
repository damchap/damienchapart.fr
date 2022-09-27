<template>
  <div id="smooth-wrapper">
    <Section-Header />
    <div id="smooth-content">
      <div class="bg-gradient-to-r from-[#16141C] to-[#09080b]">
        <main class="h-screen">
          <section-HeroHeader />
        </main>
      </div>
    </div>
  </div>

</template>

<script >

import { gsap ,ScrollSmoother, ScrollTrigger } from 'gsap';
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,           // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,  // look for data-speed and data-lag attributes on elements and animate accordingly
    });

  }
}

</script>

<style scoped>

</style>
