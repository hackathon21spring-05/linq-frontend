<template>
  <div class="bg-white rounded-md min-w-xs">
    <div class="flex flex-col w-full h-full p-4 divide-y-2 divide-gray-200">
      <div class="flex">
        <div class="mr-4">
          <router-link
            class="max-w-40"
            :to="`/entry?url=${entry.url}`"
          >
            <img
              class="min-w-30 sm:min-w-40 h-30 object-cover"
              :src="entry.thumbnail"
            >
          </router-link>
          <a
            :href="`${entry.url.split('://')[0]}://${entry.url.split('://')[1].split('/')[0]}`"
            target="_blank"
          >
            <div class="my-1.5 ml-1 text-secondary max-w-40 text-xs flex">
              <img
                class="mr-1 h-3 my-auto"
                :src="LinkIcon"
              >
              {{ entry.url.split('://')[1].split('/')[0] }}
            </div>
          </a>
        </div>
        <div>
          <div class="h-14 text-xl font-bold mb-3 line-clamp-2 hover:text-accent duration-200">
            <a
              :href="entry.url"
              target="_blank"
            >
              {{ entry.title }}
            </a>
          </div>
          <div class="line-clamp-3 text-secondary">
            <router-link :to="`/entry?url=${entry.url}`">
              {{ entry.captiopn }}
            </router-link>
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
            :src="BookmarkLogo"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Tag from '/@/components/Tag.vue'
import BookmarkEmpty from '/@/assets/bookmark_empty.svg'
import BookmarkFill from '/@/assets/bookmark_fill.svg'
import LinkIcon from '/@/assets/link.svg'

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
  setup(props) {
    const BookmarkLogo = computed(() => 
      props.entry.isBookmark ? BookmarkFill : BookmarkEmpty
    )
    return {
      BookmarkLogo, LinkIcon
    }
  }
})
</script>
