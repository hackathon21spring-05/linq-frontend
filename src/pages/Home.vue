<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-4">
      <div class="text-3xl font-bold mt-12">
        Hot
      </div>
      <div class="grid lg:grid-cols-2 gap-5 mt-8 mb-16">
        <entry-tile
          v-for="(entry, index) in hotEntries"
          :key="entry.url"
          :entry="entry"
          :index="index"
          :change-bookmarks="changeBookmarksHotEntries"
        />
      </div>
      <div class="text-3xl font-bold mt-12">
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
    const hotEntries = ref<EntryDetail[]>([])
    const changeBookmarksNewEntries = (index: number) => {
      newEntries.value[index].count += newEntries.value[index].isBookmark? -1: 1
      newEntries.value[index].isBookmark = !newEntries.value[index].isBookmark
    }
    const changeBookmarksHotEntries = (index: number) => {
      hotEntries.value[index].count += hotEntries.value[index].isBookmark? -1: 1
      hotEntries.value[index].isBookmark = !hotEntries.value[index].isBookmark
    }
    watchEffect(async () => {
      const res = await apis.getEntry()
      newEntries.value = res.data
      const res2 = await apis.getHotEntry()
      hotEntries.value = res2.data
    })
    return {
      newEntries, hotEntries, changeBookmarksNewEntries, changeBookmarksHotEntries
    }
  }
})
</script>
