<template>
  <div class="h-16 container mx-auto px-2 flex flex-wrap">
    <div class="h-full flex">
      <img :src="logo">
      <div class="text-4xl font-bold ml-2 my-auto">
        linQ
      </div>
    </div>
    <div class="h-full ml-auto flex">
      <form class="invisible sm:visible flex my-auto bg-primary rounded-lg py-1 px-2">
        <input
          class="bg-primary border-none outline-none"
          type="text"
        >
        <button
          class="my-auto"
          type="submit"
        >
          <img
            :src="glass"
          >
        </button>
      </form>
      <button class="flex h-8.5 font-bold my-auto ml-4 bg-accent rounded-lg text-white px-2 py-auto">
        <img
          class="my-auto mr-1"
          :src="penIcon"
        >
        <span class="my-auto">add</span>
      </button>
      <div class="h-10 my-auto ml-4">
        <img
          class="h-10 rounded-1/2"
          :src="userIcon"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '/@/assets/logo.svg'
import penIcon from '/@/assets/penicon.svg'
import glass from '/@/assets/glass.svg'
import userIcon from '/@/assets/trasta.png'

export default defineComponent({
  name: 'Header',
  setup() {
    return {
      logo, userIcon, penIcon, glass
    }
  }
})
</script>