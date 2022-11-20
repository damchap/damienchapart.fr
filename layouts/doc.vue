<template>
    <div >
      <div id="smooth-wrapper" class="font-gilroy bg-primaryWhite dark:bg-gradient-to-r dark:from-[#16141C] dark:to-[#09080b] text-primaryBlack dark:text-primaryWhite">
        <Section-Header class="sticky top-0" />
        <div id="smooth-content" class="">
          <slot />
          <section-footer />
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