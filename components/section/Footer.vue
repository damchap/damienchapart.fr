<template>
  <div class="bg-gradient-to-r from-[#16141C] to-[#09080b]">
    <div class="container m-auto font-gilroy font-bold text-[#ffffff] mt-8">
      <div class=" mx-2 flex flex-col sm:flex-row md:items-center ">
        <div class="basis-1/4 order-last md:order-first flex  flex-col justify-center items-center align-middle text-[#5C5C5C] mb-10">
          <div>
            <icons-logo-dam class="pb-7" width="75" color="#FFF" />
          </div>

          <div class="flex flex-col justify-center items-center text-center ">
            <div>
              © Damien chapart - 2022. Tous droits réservés.
            </div>
            <div class="flex flex-row ">
              Fait a brest avec
              <svg class="pl-1 pt-1" width="19" height="19" viewBox="0 0 19 19" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.1719 15.8301C9.91562 15.9205 9.49353 15.9205 9.23726 15.8301C6.48864 14.0135 2.26773 9.79256 2.16724 6.69482C2.16724 4.36578 4.04403 2.48145 6.358 2.48145C7.72979 2.48145 8.9433 3.14473 9.70457 4.16981C10.4658 3.14473 11.6869 2.48145 13.0512 2.48145C15.3651 2.48145 17.2419 4.36578 17.2419 6.69482C17.2419 11.1995 12.3175 14.4155 10.1719 15.8301Z"
                    stroke="#5C5C5C" stroke-width="1.1306" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="basis-1/4 flex flex-col justify-center text-center py-2">
          <div class="pb-1 pt-7 text-[#5C5C5C]">Nous contacter</div>
          <div><a href="tel:+33 6 52 28 05 05" class="text-xs hover:underline">+33 6 52 28 05 05</a></div>
          <div><a href="mailto:contact@damienchapart.fr"
                  class="text-xs hover:underline">contact@damienchapart.fr</a></div>
        </div>
        <div class="basis-1/4 flex flex-col justify-center text-center py-2 ">
          <div class="pb-1 text-[#5C5C5C] ">Ou suis-je ?</div>
          <span class="text-xs">
                        France : Brest,
                    Rennes, Lorient, Quimper,
                    Nantes, Angers
                    </span>

        </div>
        <div class="basis-1/4 flex flex-row items-center justify-around border-t-2 border-b-2 border-[rgba(255,255,255,.05)] my-5">
          <div class="flex flex-row overflow-hidden justify-center">

            <div class="px-1">
              <NuxtLink to="https://www.facebook.com/agenceperformancewebmarketing/" class="hover:underline hover:text-white">
                <icons iconSelect="meta" width="41px" height="40px" />
              </NuxtLink>
            </div>
            <div class="px-1">
              <NuxtLink to="https://www.linkedin.com/company/performance-webmarketing" class="hover:underline hover:text-white">
                <icons iconSelect="in" width="41px" height="40px" />
              </NuxtLink>
            </div>
            <div class="px-1">
              <NuxtLink to="https://www.instagram.com/performancewebmarketing" class="hover:underline hover:text-white">
                <icons iconSelect="insta" width="41px" height="40px" />
              </NuxtLink>
            </div>
          </div>
          <div class="flex-col justify-end justify-items-end text-right text-[#5C5C5C]">
            <div class="justify-end ">
              <nuxt-link to="/Mention-legales" class="text-xs hover:underline hover:text-white">
                Mentions légales
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/Mention-legales" class="text-xs hover:underline hover:text-white">
                Politique de confidentialité
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/Mention-legales" class="text-xs hover:underline hover:text-white">
                Utilisation des cookie
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/Mention-legales" class="text-xs hover:underline hover:text-white">
                Plan du site
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

</style>