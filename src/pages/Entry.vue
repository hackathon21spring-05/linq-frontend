<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-12">
      <div class="mt-12 h-36 flex">
        <div class="h-18 w-18 my-auto rounded-lg bg-white flex">
          <img
            class="h-10 w-10 m-auto"
            :src="BookmarkLogo"
          >
        </div>
        <div class="flex-1 flex flex-col justify-center mx-4">
          <div class="h-14 text-xl font-bold mb-1 line-clamp-2 hover:text-accent duration-200">
            <a
              :href="entry.url"
              target="_blank"
            >
              {{ entry.title }}
            </a>
          </div>
          <a
            :href="entry.url"
            target="_blank"
          >
            <div class="ml-1 text-secondary max-w-40 flex">
              <img
                class="mr-1 h-4 my-auto"
                :src="LinkIcon"
              >
              {{ entry.url }}
            </div>
          </a>
        </div>
        <div class="ml-auto hidden sm:block">
          <img
            class="h-36 min-w-36"
            :src="entry.thumbnail"
          >
        </div>
      </div>
      <div />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useQuery from '/@/use/query'
import BookmarkEmpty from '/@/assets/bookmark_empty.svg'
import BookmarkFill from '/@/assets/bookmark_fill.svg'
import LinkIcon from '/@/assets/link.svg'

export default defineComponent({
  name: 'Entry',
  setup() {
    const url = useQuery('url')
    const entry = {
      'url': url.value,
      'title': '加藤恵 「どうかな？わたしは、あなたが望む、メインヒロインに、なれたかな？」「どうかな？わたしは、あなたが望む、メインヒロインに、なれたかな？」',
      'captiopn': '豊ヶ崎学園に通う高校2年生で、同人サークル『Blessing software』のメインヒロイン(役割不明)。のちにサークル副代表を兼任。目鼻立ちが整っていて、可愛いと綺麗が中途半端に同居した容姿。白いベレー帽とスマホがトレードマーク。',
      'thumbnail': 'https://saenai-movie.com/megumi_birthday_fine/present/assets/img/top/img_main.jpg',
      'tags': [
        'kato', 'megumi', 'kashiwagi', 'eriri',
        'kasumigaoka', 'utaha', 'hyodo', 'michiru', 'hashima', 'izumi'
      ],
      'isBookmark': false
    }
    const BookmarkLogo = computed(() => 
      entry.isBookmark ? BookmarkFill : BookmarkEmpty
    )
    
    return {
      url, entry, BookmarkLogo, LinkIcon
    }
  }
})
</script>
