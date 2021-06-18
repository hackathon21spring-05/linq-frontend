<template>
  <div class="h-16 container mx-auto px-2 flex">
    <router-link to="/">
      <div class="h-full flex">
        <img :src="logo">
        <div class="text-4xl font-bold ml-2 my-auto">
          linQ
        </div>
      </div>
    </router-link>
    <div class="h-full ml-auto flex">
      <form
        class="hidden sm:flex my-auto bg-primary border-2 border-accent2 rounded-2xl py-1 px-2"
        @submit="onSubmit"
      >
        <input
          v-model="searchValue"
          class="bg-primary border-none focus:outline-none"
          type="text"
        >
        <button 
          class="my-auto border-none focus:outline-none"
        >
          <img
            :src="glass"
          >
        </button>
      </form>
      <router-link
        tag="button"
        to="/add"
        class="flex h-8.5 border-none focus:outline-none font-bold my-auto ml-4 bg-accent rounded-lg text-white px-2 py-auto"
      >
        <img
          class="my-auto mr-1"
          :src="penIcon"
        >
        <span class="my-auto">add</span>
      </router-link>
      <div class="h-10 my-auto ml-4">
        <router-link to="/bookmark">
          <img
            class="h-10 rounded-1/2"
            :src="userIcon"
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import router from '/@/router'
import logo from '/@/assets/logo.svg'
import penIcon from '/@/assets/penicon.svg'
import glass from '/@/assets/glass.svg'
import userIcon from '/@/assets/trasta.png'

export default defineComponent({
  name: 'Header',
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    const searchValue = ref(props.value)
    watch(
      () => props.value,
      v => {
        searchValue.value = v
      }
    )

    const onSubmit = (e: Event) => {
      e.preventDefault()
      if (searchValue.value === '') return
      router.push({path: '/search', query: { tag: searchValue.value }})
      searchValue.value = ''
    }
    return {
      logo, userIcon, penIcon, glass, onSubmit, searchValue
    }
  }
})
</script>