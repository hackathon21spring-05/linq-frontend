<template>
  <page-header />
  <Suspense>
    <template #default>
      <router-view v-if="fetchedMe" />
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
import apis from '/@/lib/apis'
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

    onBeforeMount(() => {
      if (fetchedMe.value) return
      store.dispatch.fetchMe().catch(async (error) => {
        if (error.response.status === 401) {
          const { data } = await apis.getGeneratedCode()
          const authorizationEndpointUrl = new URL('https://q.trap.jp/api/v3/oauth2/authorize')
          authorizationEndpointUrl.search = new URLSearchParams({
            response_type: 'code',
            client_id: data.clientID,
            code_challenge: data.codeChallenge,
            code_challenge_method: data.codeChallengeMethod
          }).toString()
          window.location.assign(authorizationEndpointUrl.toString())
        }
      })
    })
    return {
      fetchedMe
    }
  }
})
</script>

