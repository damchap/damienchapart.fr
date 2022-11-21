<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    }
  }
})
</script>

<template>
    <div class="highlight-html relative prose-code group w-full text-gray-50 my-4">
      <span class="filename absolute top-1 right-1 z-0 rounded-lg py-1 pr-2 font-mono text-xs leading-none tracking-tight text-gray-400 opacity-100">{{filename}}</span>
        <slot />
    </div>
  
</template>

<style>
pre {
  background-color: rgb(24 24 27/1);
  display: flex;
    flex: 1 1 0%;
    line-height: 1.625;
    margin-bottom: 0;
    margin-top: 0;
    overflow-x: auto;
    padding: 1rem;
}
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>