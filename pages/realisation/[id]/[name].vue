<template>
  <div class="flex flex-col lg:flex-row w-[550vw] flex-nowrap et_builder_inner_content bg-primaryWhite">
    <div  class="et_tail w-screen bg-clip-content text-white flex flex-row justify-center items-center  h-screen bg-[url('/img/teisseire-Cuisine-brest.png')] bg-no-repeat bg-cover">
      <div class="flex flex-col justify-center items-center ">
        <span class="font-light uppercase tracking-widTitre text-titreHeroH1 text-white">projet efectué en stage</span>
        <h1 class="text-titreHero font-bold text-center">Comité de pétanque du finistère</h1>
        <div class="flex flex-grow justify-center items-center ">
          <span class="w-1 h-1 bg-white mx-2 rounded"></span><h2>Refonte de site</h2><span class="w-1 h-1 bg-white mx-2 rounded"></span>
        </div>
      </div>
    </div>
    <div class="mx-4 h-screen w-screen flex justify-center text-primaryBlack">
      <div class="flex flex-col justify-center items-center">
        <div>
        </div>
        <h3 class="text-titreHero">
          élabiration d’un
          <b>nouveau site.</b>
        </h3>
        <div class="flex flex-row">
          <div class="basis-1/2">
            <h4 class="uppercase tracking-widTitre font-bold">LE PROJET</h4>
            <p>Refonte du site, identité graphique du site, navigabiliter, accessibilité
              performance webmarketing</p>
          </div>
          <div class="basis-1/2">
            <h4 class="uppercase tracking-widTitre font-bold">DATE DU PROJET</h4>
            <p>fin  2021, debut 2022
              réaliser en stage</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <img src="/img/creation/petanque_finistere/Mockup_full_petanque_finistere.webp">
      </div>

    </div>
    <div class=" w-[70vw] bg-clip-content bg-[url('/img/creation/petanque_finistere/bg_petanque_finistere.webp')] bg-no-repeat bg-cover">

    </div>
  </div>
</template>
<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';

import { useRouter } from 'vue-router'

useHead({
  title: 'Creation du site pour le comité de pétanque du finistère',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})


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
    normalizeScroll: true,   // if true, it will normalize the scroll position to the nearest pixel (helps with jittery scrolling)
    effects: true,           // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1,  // look for data-speed and data-lag attributes on elements and animate accordingly
    ignoreMobileResize: true,
  });
  const container = document.querySelector<HTMLElement>(".et_builder_inner_content");
  const containerWidth = document.querySelector<HTMLElement>(".et_tail");
  console.log("valeur de container width")
  console.log(containerWidth.offsetHeight)
  if (containerWidth.offsetWidth > 1024) {
    gsap.to(container, {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        pinSpacing: true,
        end: () => "+=" + container.offsetWidth
      }
    });
  }

})
</script>
