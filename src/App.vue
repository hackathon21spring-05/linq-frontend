<template>
  <page-header class="text-primary" />
  <Suspense>
    <template #default>
      <!-- <router-view v-if="fetchedMe" /> -->
      <router-view class="text-primary" />
    </template>
    <template #fallback>
      <loading />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageHeader from '/@/components/PageHeader.vue'
import Loading from '/@/pages/Loading.vue'
import { useStore } from './store'

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    Loading
  },
  setup() {
    const store = useStore()
    const fetchedMe = computed(() => store.state.me !== null)

    return {
      fetchedMe
    }
  }
})
</script>

