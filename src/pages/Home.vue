<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-4">
      <div class="text-3xl font-bold mt-16">
        New
      </div>
      <div class="grid lg:grid-cols-2 gap-5 mt-8 mb-16">
        <entry-tile
          v-for="(entry, index) in newEntries"
          :key="entry.url"
          :entry="entry"
          :index="index"
          :change-bookmarks="changeBookmarks"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import EntryTile from '/@/components/EntryTile.vue'
import apis, {EntryDetail} from '/@/lib/apis'
export default defineComponent({
  name: 'Home',
  components: {
    EntryTile
  },
  setup() {
    const newEntries = ref<EntryDetail[]>([])
    const changeBookmarks = (index: number) => {
      newEntries.value[index].count += newEntries.value[index].isBookmark? -1: 1
      newEntries.value[index].isBookmark = !newEntries.value[index].isBookmark
    }
    watchEffect(async () => {
      const res = await apis.getEntry()
      newEntries.value = res.data
      console.log(res.data)
      console.log(newEntries.value)
    })
    return {
      newEntries, changeBookmarks
    }
  }
})
</script>
