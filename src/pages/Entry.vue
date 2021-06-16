<template>
  <div>Entry {{ url }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Entry',
  setup() {
    const route = useRoute()
    const url = route.fullPath.slice(7)
    return {
      url
    }
  }
})
</script>
