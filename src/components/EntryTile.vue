<template>
  <div class="bg-white rounded-md min-w-xs h-12rem">
    {{ entry.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EntryTile',
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
})
</script>
