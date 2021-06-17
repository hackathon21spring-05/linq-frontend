<template>
  <div>Entry {{ url }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useQuery from '/@/use/query'

export default defineComponent({
  name: 'Entry',
  setup() {
    const url = useQuery('url')
    return {
      url
    }
  }
})
</script>
