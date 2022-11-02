<template>
  <div>
    <div  class=" bg-clip-content pointer-events-auto text-white flex flex-row justify-center items-center  h-screen bg-[url('/img/teisseire-Cuisine-brest.png')] bg-no-repeat bg-cover">
      <div class="flex flex-col justify-center items-center ">
        <span class="font-light uppercase tracking-widTitre text-titreHeroH1 text-white">projet efectué en stage</span>
        <h4 class="text-titreHero font-bold text-center">Comité de pétanque du finistère</h4>
        <div class="flex flex-grow justify-center items-center ">
          <span class="w-1 h-1 bg-white mx-2 rounded"></span><h5>Refonte de site</h5><span class="w-1 h-1 bg-white mx-2 rounded"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';

import { useRouter } from 'vue-router'
const router = useRouter()
const { id, name } = router.currentRoute.value.params
definePageMeta({
  layout: "crea",
});


// gsap onmonted smooth scroll horizontal
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,  // look for data-speed and data-lag attributes on elements and animate accordingly
  })
})
</script>
