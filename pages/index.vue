<template>
  <div>
    <Section-Header />
    <div id="smooth-wrapper" >

      <div id="smooth-content" >
        <div >
          <section-HeroHeader class="bg-gradient-to-r from-[#16141C] to-[#09080b] h-screen"/>
          <main class="text-primaryBlack" >
            <div class="flex flex-col items-center  h-full mt-24">
              <h2 class="font-light uppercase tracking-widTitre text-titreHeroH1 ">LES PROJETS FAIT AVEC VOUS !</h2>
              <h3 class="text-6xl font-bold ">Nos études de cas</h3>
              <block-Projet />
            </div>


          </main>
          <section-footer />
        </div>
      </div>
    </div>
  </div>


</template>

<script >

import { gsap } from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';

export default {

  mounted() {
    this.startAnimations();
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,           // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,  // look for data-speed and data-lag attributes on elements and animate accordingly
    })


  },
  methods: {
    startAnimations: function () {
      console.log("%c Design with ♡ by pw-agence brest ","background:#16141c;color:#fff;")

    }
  }
}

</script>

<style scoped>

</style>
