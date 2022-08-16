<template>
  <div class="bg-gradient-to-r from-[#16141C] to-[#09080b]">
    <Header/>
    <main>
      <HeroHeader/>
    </main>

  </div>
</template>

<script>
import Header from "../components/section/Header";
import HeroHeader from "../components/section/HeroHeader";
export default {
  components: {
    HeroHeader,
    Header,
  }

}
</script>

<style scoped>

</style>
