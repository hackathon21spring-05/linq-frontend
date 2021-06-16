<template>
  <div class="bg-white rounded-md min-w-xs h-12rem">
    <div class="flex flex-col w-full h-full p-4">
      <div class="flex-1">
        {{ entry.title }}
      </div>
      <div class="pt-2 flex">
        <div class="flex flex-wrap flex-1">
          <tag
            v-for="tag in entry.tags"
            :key="tag"
            :name="tag"
          />
        </div>
        <div>
          はーと
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tag from './Tag.vue'

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
  }
})
</script>
