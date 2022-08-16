<template>
  <div class="flex justify-center  overflow-hidden p-[calc(50px_+_5%)_0]">
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
        <div class="m-textHero overflow-hidden">
          <div class="flex items-center">
            développons&nbsp;
            <div class="text-transparent bg-clip-text bg-gradient-to-r from-[#22FCB0] to-[#2181FA]">
              <div v-for="(slide, index) of slides" :key="index" v-if="1"  class="main__slide-image">
                {{index}}
                {{slide.headline}}
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
export default {
  name: "HeroHeader",
  data() {
    return {
      currentActiveSlide: 0,
      slides: [
        {
          headline: 'Lorem ipsum dolor sit amet',
        },
        {
          headline: 'Consectetur adipiscing elit, sed do.',
        },
        {
          headline: 'Eiusmod tempor incididunt ut labore.',
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