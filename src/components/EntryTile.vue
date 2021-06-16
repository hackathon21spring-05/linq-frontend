<template>
  <div class="bg-white rounded-md min-w-xs">
    <div class="flex flex-col w-full h-full p-4 divide-y">
      <div class="h-8rem pb-2 flex">
        <img
          class="w-40 h-30 object-cover mr-4"
          :src="entry.thumbnail"
        >
        <div>
          <div class="h-14 text-xl font-bold mb-3 line-clamp-2">
            {{ entry.title }}
          </div>
          <div class="line-clamp-2">
            {{ entry.captiopn }}
          </div>
        </div>
      </div>
      <div class="pt-2 flex h-auto">
        <div class="flex flex-wrap flex-1 mr-2">
          <tag
            v-for="tag in entry.tags"
            :key="tag"
            :name="tag"
          />
        </div>
        <div class="mt-1">
          <img
            class="w-full"
            :src="BookmarkEmpty"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from './Tag.vue'
import BookmarkEmpty from '../assets/bookmark_empty.svg'

export default defineComponent({
  name: 'EntryTile',
  components: {
    Tag
  },
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      BookmarkEmpty
    }
  }
})
</script>
