<template>
  <page-header />
  <Suspense>
    <template #default>
      <!-- <router-view v-if="fetchedMe" /> -->
      <router-view />
    </template>
    <template #fallback>
      <loading />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue'
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
    // const store = useStore()
    // const fetchedMe = computed(() => store.state.me !== null)

    // onBeforeMount(() => {
    //   if (fetchedMe.value) return
    //   store.dispatch.fetchMe()
    // })
    return {
      // fetchedMe
    }
  }
})
</script>

