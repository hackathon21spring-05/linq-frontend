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
      <img
        class="mt-10 w-38 mx-auto"
        :src="AddBookmark"
      >
      <form
        class="mt-10 mx-12 rounded-xl flex flex-col"
        @submit="onSubmit"
      >
        <input
          ref="addInput"
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
import { defineComponent, ref, watch, onMounted } from 'vue'
import apis from '/@/lib/apis'
import router from '/@/router'
import AddBookmark from '/@/assets/add_bookmark.svg'

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
    const addInput = ref<HTMLInputElement>()

    watch(
      () => props.value,
      v => {
        addValue.value = v
      }
    )

    onMounted(() => {
      addInput.value?.focus()
    })

    const onSubmit = async(e: Event) => {
      e.preventDefault()
      if (addValue.value === '') return
      try {
        const entry = {
          url: addValue.value
        }
        const res = await apis.putEntry(entry)
        addValue.value = res.data.url ?? ''
        router.replace({path: '/entry', query: { url: addValue.value }})
        // window.location.href = '/entry?url=' + addValue.value
        addValue.value = ''
      } catch (e) {
        console.error(e)
        addValue.value = ''
      }
    } 
    return {
      onSubmit, addValue, AddBookmark, addInput
    }
  }
})
</script>
