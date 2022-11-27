<template>
  <div>
    <div
      class="mx-auto min-h-screen w-full px-4 sm:px-6  max-w-7xl relative flex flex-col lg:flex-row min-h-page">
      <aside
        class="lg:top-[64px] hidden -mx-4 -mt-8 overflow-y-auto overflow-x-hidden pb-8 lg:sticky lg:col-span-2 lg:block lg:max-h-[calc(100vh-64px)] lg:self-start lg:pt-8">
        <nav>
          
          <ContentNavigation v-slot="{ navigation }">
            <ul>
              <li  v-for="link of navigation" :key="link._path">
                <NuxtLink
                  class="u-text-gray-900 group flex w-full cursor-pointer items-center  py-1.5 text-sm font-semibold"
                  :to="link._path"> <icon class="w-5 h-5  mr-2" :name="link.icon" /> {{ link.title }}</NuxtLink>
                  <ul>
                    <li class="u-border-gray-100 hover:u-border-gray-300" v-for="enfant of link.children" :key="enfant._path">
                      <NuxtLink  v-if="enfant._path != link._path"
                        class="u-text-gray-900 group flex w-full cursor-pointer items-center  py-1.5 text-sm font-semibold"
                        :to="enfant._path"><icon class="w-5 h-5  mr-2" :name="enfant.icon" /> {{ enfant.title }}</NuxtLink>
                        <ul >
                          <li class="ml-2 border-l border-primary-400 dark:border-primary-600" v-for="enfantDeux of enfant.children" :key="enfant._path">
                            <NuxtLink v-if="enfantDeux._path != enfant._path"
                              class="router-link-active router-link-exact-active flex items-center  py-1.5 text-sm pl-4 text-primary-500 font-medium"
                              :to="enfantDeux._path"> <icon class="w-5 h-5  mr-2" :name="enfantDeux.icon" />  {{ enfantDeux.title }}</NuxtLink>
                              <ul >
                                <li class="ml-6 border-l border-primary-400 dark:border-primary-600" v-for="enfantTrois of enfantDeux.children" :key="enfantTrois._path">
                                  <NuxtLink v-if="enfantTrois._path != enfantDeux._path"
                                    class="router-link-active router-link-exact-active flex items-center  py-1.5 text-sm pl-4 text-primary-500 font-medium"
                                    :to="enfantTrois._path">   {{ enfantTrois.title }}</NuxtLink>
                                </li>
                              </ul>
                          </li>
                        </ul>
                    </li>
                  </ul>
              </li>
            </ul>
          </ContentNavigation>
        </nav>
      </aside>
      
      <ContentDoc v-slot="{ doc }">
        <article class="relative flex flex-col flex-1 pb-8 lg:mt-0 page-body lg:col-span-8 ">
          <div class=" w-full px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div class="pb-8 lg:pb-16">
              <div
                class="flex flex-col items-center justify-center max-w-4xl pb-4 mx-auto text-center gap-y-8 sm:px-6 lg:pb-8">
                <h1 class="text-5xl font-bold text-gray-900 dark:text-white">{{ doc.title }}</h1>
                <p class="max-w-5xl font-medium text-gray-700 dark:text-gray-200">
                  {{ doc.description }}
                </p>
              </div>
            </div>
            <ContentRenderer :value="doc" />
          </div>
        </article>
        
      
      <div
        class="flex items-center lg:block sticky  px-4 -mx-4 -mt-8 toc top-[64px] lg:max-h-page sm:-mx-6 sm:px-6 lg:col-span-2 lg:mx-0 lg:self-start lg:bg-transparent lg:px-0 lg:pt-8 lg:backdrop-blur-none overflow-y-auto overflow-x-hidden"
        data-v-3342e103="">
        <div class="w-full cursor-pointer sm:cursor-auto" data-v-3342e103=""><button
            class="flex items-center gap-1 py-3 lg:hidden" data-v-3342e103=""><span class="text-xs font-semibold"
              data-v-3342e103="">Table of Contents</span><svg xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
              class="w-4 h-4 transition-transform duration-100 transform rotate-0" data-v-3342e103="" style=""
              width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m9 5l7 7l-7 7"></path>
            </svg></button>
          <!-- <div class="flex flex-col space-y-1 sm:space-y-2 mb-4 lg:mt-0 hidden lg:block" data-v-3342e103="">
            <div class="items-center hidden overflow-hidden text-sm font-semibold lg:flex"><span>Table of
                Contents</span></div>
                
             <ul v-for="enfant of doc.excerpt.children" :key="enfant._path" >
              <li class="min-w-0 group" v-if="enfant.tag == 'h2'">
                <a :href="'#'+enfant.children"
                  class="u-text-gray-500 hover:u-text-gray-900 block py-1 text-sm truncate lg:pr-3">Paths</a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>
    </ContentDoc>
    </div>
  </div>
</template>
<script setup lang="ts">

// use layout doc
definePageMeta({
  layout: 'doc',
});

</script>