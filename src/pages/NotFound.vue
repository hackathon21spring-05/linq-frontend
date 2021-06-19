<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-12 flex flex-col">
      <div class="text-8xl font-bold text-center mt-18">
        404
      </div>
      <div class="text-6xl font-bold text-center mt-4 tracking-wide">
        Not Found
      </div>
      <div class="text-xl text-center mt-12 tracking-wide">
        お探しのページは見つかりませんでした
      </div>
      <div class="mt-24">
        <img
          class="absolute left-0 w-screen"
          :src="ChainIcon"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChainIcon from '/@/assets/chain.svg'

export default defineComponent({
  name: 'NotFound',
  setup() {
    return {
      ChainIcon
    }
  }
})
</script>
