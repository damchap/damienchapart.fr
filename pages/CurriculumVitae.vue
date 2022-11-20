<template>
  <div >

        <div class="flex flex-col container m-auto">
          <div class="basis-2/3   mt-80">
            <div class="text-[inherit] ">
              <h1 class="font-light uppercase tracking-widTitre text-titreHeroH1">Apprenti Web Developper, Createur de site à brest</h1>
            </div>
            <div class="text-titreHero font-bold whitespace-nowrap leading-[1.2] mt-[calc(15px_+_2%)]">
              <div class="m-textHero overflow-hidden">
                <div class="flex items-center">
                  Chapart Damien
                </div>
              </div>
              <div class="m-textHero overflow-hidden ">
                <div class="flex items-center overflow-hidden">
                  étudiant et&nbsp;
                  <div class="mainslide w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-[#22FCB0] to-[#2181FA]  inline-block overflow-hidden">
                    <div  ref="mainslidimage " class=" active overflow-hidden" > <!--v-for="(slide, index) of slides" :key="index" v-if="1" -->
                      développeur
                    </div>

                  </div>
                </div>
              </div>
              <div class="m-textHero overflow-hidden">
                <div class="flex items-center">
                  web
                </div>
              </div>
            </div>

          </div>
          <div class="flex flex-col space-y-6">
            <h2 class="font-light  mt-10 text-2xl txtCV">
              Bonjour et bienvenue, je me présente <b>Damien Chapart</b>, apprenti <b>développeur web</b>,
              passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises.
            </h2>
            <p class="font-light text-xl txtCV">
              Je réalise depuis <b>plusieurs années</b>, différents projets <b>personnels</b> ou <b>professionnels</b> dans le domaine de <b>l’informatique</b>,
              plus particulièrement dans le <b>dévelopement web</b> ainsi que <b>l’hébergement</b>.
            </p>
            <p class="font-light text-xl txtCV">
              J’ai commencé par un baccalauréat <b>STI2D</b> (Sciences et Technologies de l’Industrie et du Développement durable)
              au lycée
              <nuxt-link to="https://www.likes.org" class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22FCB0] to-[#2181FA]">
                Le Likès La Salle.
              </nuxt-link> Par la suite, je me suis orienté vers un <b>BTS</b> (Brevet de Technicien Supérieur )
              SIO (Service Informatique aux Organisations ), <b>option SLAM</b> (Solution logiciel et Application Métier) à
              <nuxt-link to="https://www.saint-louis29.net/" class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22FCB0] to-[#2181FA]">
                Saint Louis Châteaulin
              </nuxt-link>
              où j’ai pu acquérir de nombreuses <b>compétences et connaissances.</b>
              Après ses deux années d’études supérieures, j’ai eu une <b>révélation</b> pour le domaine du <b>web et du design</b>. Depuis,
              je m’implique activement dans ses domaines, ce qui m’a conduit à poursuivre ma formation en <b>licence professionnelle</b> à la
              <nuxt-link to="https://ladigitalschool.fr/" class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22FCB0] to-[#2181FA]">
              digital school Brest
              </nuxt-link>
            </p>
          </div>
          <h2 class="font-extrabold  mt-10 text-4xl txtCV">Mes compétance !</h2>
          <h3 class="text-2xl">Développement</h3>
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

.txtCV b {
  font-weight: bold;
}
</style>