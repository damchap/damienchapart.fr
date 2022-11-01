<template>
  <div >
    <div id="smooth-wrapper" class="font-gilroy bg-gradient-to-r from-[#16141C] to-[#09080b] text-white">
      <div id="smooth-content" >
        <slot />
      </div>
    </div>
  </div>
</template>

<script >
console.log("%c Design with ♡ by Damien ", "background:#16141c;color:#fff;")
export default {
  watch: {
    $route() {
      location.reload();
    },
  }
}
</script>

<style scoped>

</style>