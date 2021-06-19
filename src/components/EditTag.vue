<template>
  <div
    v-if="isShow"
    class="bg-gray-100 my-1 mr-2 py-0.5 px-2 rounded-lg text-secondary flex"
  >
    <router-link
      v-if="name.length > 0"
      class="hover:(text-accent underline)"
      :to="`/search?tag=${name}`"
    >
      {{ name }}
    </router-link>
    <div 
      v-if="name.length === 0"
      class="min-w-8" 
    />
    <button
      class="ml-3 focus:outline-none"
      @click="deleteTag"
    >
      <img
        :src="XIcon"
      >
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import apis from '/@/lib/apis'
import sha256 from 'js-sha256'
import XIcon from '/@/assets/x.svg'

export default defineComponent({
  name: 'EditTag',
  props: {
    entryUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // emit で親コンポーネントに伝えるのが本当は良さそう
    const isShow = ref(true)
    const deleteTag = async(e: Event) => {
      e.preventDefault()
      const entryId = sha256.sha256(decodeURI(props.entryUrl))
      try {
        const res = await apis.deleteTags(entryId, props.name)
        if (res.status == 204) {
          isShow.value = false;
        }
      } catch (e) {
        console.error(e)
      }
      
    }
    return {
      XIcon, isShow, deleteTag
    }
  }
})
</script>
