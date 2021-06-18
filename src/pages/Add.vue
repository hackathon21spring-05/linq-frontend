<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-4">
      <div class="mt-24 text-4xl font-bold text-center">
        Add Bookmarks
      </div>
      <div class="text-secondary text-center mt-8 leading-relaxed">
        <p>記事をブックマークし、知見を蓄えましょう。</p>
        <p>ブックマークされた記事は他のユーザーと共有することができます。</p>
      </div>
      <form
        class="mt-8 mx-12 rounded-xl flex flex-col"
        @submit="onSubmit"
      >
        <input
          v-model="addValue"
          class="bg-white h-12 px-6 text-xl rounded-lg border-none w-full focus:outline-none"
          type="text"
          placeholder="https://wiki.trap.jp/example"
        >
        <button 
          class="mx-auto py-2 px-6 rounded-lg text-2xl bg-accent hover:bg-accent2 duration-200 text-white mt-8 border-none focus:outline-none"
        >
          add
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import router from '/@/router'

export default defineComponent({
  name: 'Add',
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    const addValue = ref(props.value)
    watch(
      () => props.value,
      v => {
        addValue.value = v
      }
    )

    const onSubmit = (e: Event) => {
      e.preventDefault()
      if (addValue.value === '') return
      router.push({path: '/search', query: { tag: addValue.value }})
      addValue.value = ''
    }
    return {
      onSubmit, addValue
    }
  }
})
</script>
