<template>
  <div class="flex justify-center p-[calc(50px_+_5%)_0]">
    <div class="justify-around text-primaryWhite w-[70%]">
      <div class="text-[inherit] ">
        <h1 class="font-light uppercase tracking-widTitre text-titreHeroH1">Createur de site à brest, Apprenti Web Developper</h1>
      </div>
      <div class="text-titreHero font-bold whitespace-nowrap leading-[1.2] mt-[calc(15px_+_2%)]">
        <div class="m-textHero overflow-hidden">
          <div class="flex items-center">
            Chapart Damien
          </div>
        </div>
        <div class="m-textHero overflow-hidden ">
          <div class="flex items-center overflow-hidden">
            développons&nbsp;
            <div class="mainslide w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-[#22FCB0] to-[#2181FA]  inline-block overflow-hidden">
                <div  ref="mainslidimage " class=" active overflow-hidden" > <!--v-for="(slide, index) of slides" :key="index" v-if="1" -->
                  vos projet
                </div>

            </div>
          </div>
        </div>
        <div class="m-textHero overflow-hidden">
          <div class="flex items-center">
            ensemble.
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {gsap} from "gsap";

export default {
  name: "HeroHeader",
  mounted() {
    const nwe = 3;//this.$refs.mainslidimage.length;


    const we = gsap.timeline({
      paused: true,
      repeat: 2
    });

    //we.from(this.$refs.maislideActive, {duration:1,  y: '100%', ease: Expo.easeInOut}, 1);


    /**we.to('.mainslide > div',{
      duration: 1,
      y: '-100%',
      ease: Expo.easeInOut,
      yoyo: true
    }, 1);

    we.to('.mainslide > div:first-child', {
      duration: 1,
      y: '100%',
      delay: nwe - 1,
      yoyo: true
    });
    we.to('.mainslide > div:first-child', {
      duration: 1,
      y: '0%',
      delay: nwe - 1,
      ease: Expo.easeInOut,
      yoyo: true
    });**/


  },
  data() {
    return {
      currentActiveSlide: 0,
      slides: [
        {
          headline: 'Lorem ',
        },
        {
          headline: 'Consectetur',
        },
        {
          headline: 'Eiusmod',
        },
      ]
    }
  },
  computed: {
    nextActiveSlide() {
      return this.currentActiveSlide + 1 >= this.slides.length ? 0 : this.currentActiveSlide + 1;
    }
  }
}



</script>

<style scoped>

</style>