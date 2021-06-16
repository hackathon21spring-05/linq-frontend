<template>
  <div>Search</div>
  <div v-if="tag">
    tag: {{ tag }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useQuery from '../use/query'

export default defineComponent({
  name: 'Search',
  setup() {
    const tag = useQuery('tag')
    // const title = useQuery('title')
    // const text = useQuery('text')
    return {
      tag
    }
  }
})
</script>
