<template>
  <router-link :to="`/search?tag=${name}`">
    <div class="bg-gray-100 mt-1 mr-1 py-0.5 px-2 rounded-lg text-sm text-secondary">
      {{ name }}
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tag',
  props: {
    name: {
      type: String,
      required: true
    }
  }
})
</script>
