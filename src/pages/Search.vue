<template>
  <div class="bg-primary flex-1">
    <div class="container mx-auto px-4">
      <div class="text-3xl font-bold mt-16">
        Tag search for "{{ tag }}"
      </div>
      <div class="grid lg:grid-cols-2 gap-5 mt-8">
        <entry-tile
          v-for="entry in searchEntries"
          :key="entry.url"
          :entry="entry"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useQuery from '../use/query'
import EntryTile from '../components/EntryTile.vue'

export default defineComponent({
  name: 'Search',
  components: {
    EntryTile
  },
  setup() {
    const tag = useQuery('tag')
    // const title = useQuery('title')
    // const text = useQuery('text')
    const searchEntries = [
      {
        'url': 'https://zenn.dev/',
        'title': '加藤恵 「どうかな？わたしは、あなたが望む、メインヒロインに、なれたかな？」「どうかな？わたしは、あなたが望む、メインヒロインに、なれたかな？」',
        'captiopn': '豊ヶ崎学園に通う高校2年生で、同人サークル『Blessing software』のメインヒロイン(役割不明)。のちにサークル副代表を兼任。目鼻立ちが整っていて、可愛いと綺麗が中途半端に同居した容姿。白いベレー帽とスマホがトレードマーク。',
        'thumbnail': 'https://images-na.ssl-images-amazon.com/images/I/61kNxS8EZtL._AC_SY355_.jpg',
        'tags': [
          'kato', 'megumi', 'kashiwagi', 'eriri',
          'kasumigaoka', 'utaha', 'hyodo', 'michiru', 'hashima', 'izumi'
        ],
        'isBookmark': false
      },
      {
        'url': 'https://zenn.dev/',
        'title': '加藤恵',
        'captiopn': '豊ヶ崎学園に通う高校2年生で、同人サークル『Blessing software』のメインヒロイン(役割不明)。のちにサークル副代表を兼任。目鼻立ちが整っていて、可愛いと綺麗が中途半端に同居した容姿。白いベレー帽とスマホがトレードマーク。',
        'thumbnail': 'https://saenai-movie.com/megumi_birthday_fine/present/assets/img/top/img_main.jpg',
        'tags': [
          'kato', 'megumi'
        ],
        'isBookmark': true
      },
      {
        'url': 'https://zenn.dev/',
        'title': 'test3',
        'captiopn': 'oha',
        'thumbnail': 'https://ogre.natalie.mu/media/pp/static/comic/saenai-heroine02/photo01s.jpg',
        'tags': [
          'kato', 'megumi'
        ],
        'isBookmark': false
      }
    ]
    return {
      tag, searchEntries
    }
  }
})
</script>
