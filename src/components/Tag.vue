<template>
  <div class="bg-gray-100 mt-1 mr-1 px-2 rounded-lg text-sm">
    {{ name }}
  </div>
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
