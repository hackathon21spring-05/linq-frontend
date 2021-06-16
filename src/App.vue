<template>
  <page-header />
  <Suspense>
    <template #default>
      <router-view class="pb-4" />
    </template>
    <template #fallback>
      <loading />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '/@/components/PageHeader.vue'
import Loading from '/@/pages/Loading.vue'

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    Loading
  }
})
</script>

