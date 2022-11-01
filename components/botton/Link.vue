<template>
    <div class="mt-10">
                <NuxtLink class=" px-5 py-16 text-nav hover:font-extrabold" active-class="font-extrabold" :to="lien">
                  <div class="flex flex-row items-center font-light uppercase tracking-widTitre text-titreHeroH1 btn" >

                    {{titre}}

                  </div>
                </NuxtLink>
              </div>
</template>

<style>
.btn {
  transition: 0s;
  padding: 0 0 calc(20px + 3 * (100vw - 320px)/1080);
  display: inline-block;
  border-bottom-width: 2px;
  border-bottom-color:#22FCB0;
}


.btn:hover {
  font-weight: bold;
  border-bottom-width: 2px;
  border-bottom-color:#22FCB0;
}






</style>
<script setup lang="ts">
const props = defineProps<{
    titre: string
    lien: { type: String, default: '/' }
}>()

</script>