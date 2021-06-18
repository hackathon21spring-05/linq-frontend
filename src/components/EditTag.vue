<template>
  <div class="bg-gray-100 my-1 mr-2 py-0.5 px-2 rounded-lg text-secondary flex">
    <router-link
      v-if="name.length > 0"
      class="hover:(text-accent underline)"
      :to="`/search?tag=${name}`"
    >
      {{ name }}
    </router-link>
    <div 
      v-if="name.length === 0"
      class="min-w-8" 
    />
    <button class="ml-3 focus:outline-none">
      <img
        :src="XIcon"
      >
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XIcon from '/@/assets/x.svg'

export default defineComponent({
  name: 'EditTag',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      XIcon
    }
  }
})
</script>
