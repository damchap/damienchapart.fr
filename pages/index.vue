<template>
  <div>
    <div id="smooth-wrapper" class="font-gilroy">
      <div id="smooth-content" >
        <Section-Header />
          <section-HeroHeader />
          <main class="text-primaryBlack" >
            <div class="flex flex-col items-center  h-full mt-24">
              <h2 class="font-light uppercase tracking-widTitre text-titreHeroH1 ">LES PROJETS FAIT AVEC VOUS !</h2>
              <h3 class="text-6xl font-bold ">Nos études de cas</h3>
              <block-Projet />
              <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">

                  </div>
                  <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <section-footer />
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
